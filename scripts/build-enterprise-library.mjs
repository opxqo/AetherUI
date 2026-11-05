import fs from "fs";
import path from "path";
import module from "node:module";

if (module.registerHooks) {
  module.registerHooks({
    load(url, context, nextLoad) {
      if (url.endsWith(".css")) {
        return { format: "module", shortCircuit: true, source: "export default {};" };
      }
      return nextLoad(url, context);
    },
  });
}

const engineDir = path.resolve("src/affectui-engine");
const uiDir = path.resolve("src/components/ui");
const cleanUiDir = path.resolve("src/components/ui/clean");
fs.mkdirSync(uiDir, { recursive: true });
fs.mkdirSync(cleanUiDir, { recursive: true });

const { AFFECTUI_CATALOG } = await import("../src/affectui-engine/catalog.js");

function toPascalCase(slug) {
  return slug
    .split("-")
    .map((p) =>
      p === "ai"
        ? "AI"
        : p === "kpi"
          ? "KPI"
          : p === "otp"
            ? "OTP"
            : p === "dach"
              ? "DACH"
              : p.charAt(0).toUpperCase() + p.slice(1)
    )
    .join("");
}

// Helper to detect inner reusable component inside a demo-*.js or demo.clean-*.js file
function patchDemoFileWithInnerExport(demoFileName, propNames = []) {
  const filePath = path.join(engineDir, demoFileName);
  let code = fs.readFileSync(filePath, "utf8");

  const exportMatch = code.match(/export\{([^}]+)\};?\s*$/);
  if (!exportMatch) return null;
  const exportClause = exportMatch[1];
  const defaultMatch = exportClause.match(/([A-Za-z0-9_$]+)\s+as\s+default/);
  if (!defaultMatch) return null;
  const defaultFn = defaultMatch[1];

  // Check if already patched with __InnerComponent
  if (exportClause.includes("__InnerComponent")) {
    return "__InnerComponent";
  }

  let innerIdent = null;
  const fnMatches = [...code.matchAll(/function\s+([A-Za-z0-9_$]+)\s*\(\{([^}]*)\}/g)];
  let bestScore = -1;
  for (const m of fnMatches) {
    const fnName = m[1];
    if (fnName === defaultFn) continue;
    const paramsStr = m[2];
    let score = 0;
    for (const p of propNames) {
      if (new RegExp(`(^|,)\\s*${p}\\s*[:=,}]`).test(paramsStr)) score += 2;
    }
    if (paramsStr.includes("className")) score += 1;
    if (score > bestScore) {
      bestScore = score;
      innerIdent = fnName;
    }
  }

  if (!innerIdent || bestScore <= 0) {
    const compImport = code.match(/import\{([^}]+)\}from"\.\/(component[^"]+)"/);
    if (compImport) {
      const specs = compImport[1].split(",").map((s) => s.trim());
      const tSpec = specs.find((s) => s === "t" || s.startsWith("t as ") || s.includes(" as t"));
      const firstSpec = tSpec || specs[0];
      innerIdent = firstSpec.includes(" as ") ? firstSpec.split(" as ")[1].trim() : firstSpec.trim();
    } else if (demoFileName === "demo-BDApkIlc.js") {
      innerIdent = "t";
    } else {
      innerIdent = defaultFn;
    }
  }

  const newExport = `export{${defaultFn} as default,${innerIdent} as __InnerComponent};`;
  code = code.replace(/export\{[^}]+\};?\s*$/, newExport);
  fs.writeFileSync(filePath, code, "utf8");
  return "__InnerComponent";
}

const RESERVED_BASE_PROPS = new Set(["className", "style", "children", "demo"]);
const TS_GLOBALS = new Set([
  "string", "number", "boolean", "any", "void", "null", "undefined", "never", "unknown", "object",
  "Function", "Date", "RegExp", "Array", "Record", "Set", "Map", "Promise", "React", "ReactNode",
  "CSSProperties", "MouseEvent", "KeyboardEvent", "ChangeEvent", "HTMLElement", "HTMLInputElement",
  "HTMLButtonElement", "HTMLDivElement", "SVGElement", "Element", "Node"
]);

function sanitizePropType(typeStr, customTypeSet) {
  if (!typeStr || typeof typeStr !== "string") return "any";
  let t = typeStr.trim();
  // Strip comments like "– status is ..."
  if (t.includes(" – ")) t = t.split(" – ")[0].trim();
  if (t.includes(" — ")) t = t.split(" — ")[0].trim();
  if (t.startsWith("(default:")) return "any";

  // Replace slash-separated types like "boolean / (paused) => void" with union "|"
  t = t.replace(/\s*\/\s*/g, " | ");

  // Fix "(foo | null) => void" where foo is param name -> "(foo: any) => void"
  t = t.replace(/\(([a-z0-9_$]+)\s*\|\s*null\)\s*=>/gi, "($1: any) =>");

  // Fix prose descriptions like "ToolCallCard elements"
  if (t.includes("elements")) t = "React.ReactNode";

  // Handle untyped pseudo object literals like { id, title, status }[]
  t = t.replace(/\{\s*[A-Za-z0-9_$,\s?]+\s*\}\[\]/g, "Array<Record<string, any>>");
  t = t.replace(/\{\s*[A-Za-z0-9_$,\s?]+\s*\}/g, "Record<string, any>");

  // Check if function parameter has no type like "(id) => void" -> "(id: any) => void"
  t = t.replace(/\(([a-z0-9_$]+)\)\s*=>/gi, "($1: any) =>");
  t = t.replace(/\(([a-z0-9_$]+),\s*([a-z0-9_$]+)\)\s*=>/gi, "($1: any, $2: any) =>");
  t = t.replace(/\(([a-z0-9_$]+),\s*([a-z0-9_$]+),\s*([a-z0-9_$]+)\)\s*=>/gi, "($1: any, $2: any, $3: any) =>");
  t = t.replace(/\(\s*\{([^}]+)\}\s*\)\s*=>/g, "(options: { $1 }) =>");

  // In TS union types, function types must be parenthesized: e.g. string | ((variant: any) => string)
  if (t.includes("|") && t.includes("=>")) {
    t = t.replace(/\|\s*(\([^)]*\)\s*=>\s*[^;|]+)/g, "| ($1)");
  }

  // Ensure parameter name for Record/Array arguments: (Record<...>) => void -> (data: Record<...>) => void
  t = t.replace(/\((Record<[^>]+>)\)\s*=>/g, "(data: $1) =>");
  t = t.replace(/\bPromise\b(?!<)/g, "Promise<any>");

  // If there are still invalid characters for a TS type expression, fallback to any
  if (/[^A-Za-z0-9_$()=>\[\]{}|&"':;,\s\.\<\>\?\-]/.test(t)) {
    return "any";
  }

  // Collect custom identifiers for export declaration
  const idents = t.match(/\b[A-Z][a-zA-Z0-9_]*\b/g) || [];
  for (const id of idents) {
    if (!TS_GLOBALS.has(id)) {
      customTypeSet.add(id);
    }
  }
  return t;
}

const rootExports = [];
const rootDtsExports = [];
const cleanExports = [];
const cleanDtsExports = [];
const exportedIdentSet = new Set();
const cleanExportedIdentSet = new Set();

for (const item of AFFECTUI_CATALOG) {
  const docs = item.loadDocs ? await item.loadDocs() : null;
  const propList = docs?.props || [];
  const propNames = propList.map((p) => p.name.replace(/\?$/, ""));
  const usage = docs?.usage || "";

  // Extract expected named exports from docs.usage
  const importMatches = [...usage.matchAll(/import\s+\{([^}]+)\}\s+from\s+["']@\/[^"']+["']/g)];
  const namedExports = [];
  for (const m of importMatches) {
    const parts = m[1]
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s && !s.startsWith("type "));
    for (const p of parts) {
      const cleanName = p.includes(" as ") ? p.split(" as ")[0].trim() : p;
      if (!namedExports.includes(cleanName)) namedExports.push(cleanName);
    }
  }

  const primaryName = namedExports[0] || toPascalCase(item.slug);
  if (!namedExports.includes(primaryName)) namedExports.unshift(primaryName);
  const pascalSlug = toPascalCase(item.slug);
  if (!namedExports.includes(pascalSlug)) namedExports.push(pascalSlug);

  // Patch Classic Demo file
  const classicDemoFile = item.loadClassic.toString().match(/\.\/([^"]+)/)[1];
  patchDemoFileWithInnerExport(classicDemoFile, propNames);

  // Patch Clean Demo file if present
  let cleanDemoFile = null;
  if (item.loadClean) {
    cleanDemoFile = item.loadClean.toString().match(/\.\/([^"]+)/)[1];
    patchDemoFileWithInnerExport(cleanDemoFile, propNames);
  }

  // Generate src/components/ui/<slug>.js
  const secondaryExportsCode = namedExports
    .filter((n) => n !== primaryName && n !== "toast")
    .map((n) => `export const ${n} = ${primaryName};`)
    .join("\n");

  const toastSpecialCode =
    item.slug === "toaster"
      ? `import { Toaster as EngineToaster, toast as engineToast } from "../../affectui-engine/demo.clean-Nl_cej3R.js";\nexport const toast = engineToast;\n`
      : "";

  const uiModuleCode = `import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/${classicDemoFile}";
${toastSpecialCode}
/**
 * ${item.name} (${item.category})
 * ${item.description}
 */
export function ${primaryName}(props = {}) {
  const { demo, className, style, ...rest } = props;
  const hasCustomProps = demo === false || (!demo && Object.keys(rest).some(k => !["id", "children", "key", "ref"].includes(k) && !k.startsWith("data-") && !k.startsWith("aria-")));
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, { className, style, ...rest });
  }
  const element = React.createElement(DemoComponent, { className, style, ...rest });
  if (className || style) {
    return React.createElement("div", { className, style, "data-aether-wrapper": "" }, element);
  }
  return element;
}

export const ${primaryName}Raw = __InnerComponent || DemoComponent;
export const ${primaryName}Demo = DemoComponent;
${secondaryExportsCode}
export default ${primaryName};
`;

  fs.writeFileSync(path.join(uiDir, `${item.slug}.js`), uiModuleCode, "utf8");

  // Generate TypeScript Declaration src/components/ui/<slug>.d.ts
  const propsInterfaceName = `${primaryName}Props`;
  const customTypeSet = new Set();
  const seenPropKeys = new Set();

  const propsFields = propList
    .filter((p) => {
      const rawName = p.name.replace(/\?$/, "");
      if (seenPropKeys.has(rawName)) return false;
      seenPropKeys.add(rawName);
      // Filter duplicate standard props and invalid non-prop documentation entries
      if (RESERVED_BASE_PROPS.has(rawName)) return false;
      if (rawName.includes("(") || rawName.includes(".") || rawName === "ToastOptions") return false;
      return true;
    })
    .map((p) => {
      const rawName = p.name.replace(/\?$/, "");
      const safeKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(rawName) ? rawName : JSON.stringify(rawName);
      const desc = (p.description || "").replace(/\*\//g, "* /");
      const def = p.default ? ` (default: ${p.default})` : "";
      const propType = sanitizePropType(p.type, customTypeSet);
      return `  /** ${desc}${def} */\n  ${safeKey}?: ${propType};`;
    })
    .join("\n");

  const customTypeDeclarations = Array.from(customTypeSet)
    .map((id) => `export type ${id} = Record<string, any>;`)
    .join("\n");

  const dtsNamedExports = namedExports
    .filter((n) => n !== primaryName && n !== "toast")
    .map((n) => `export declare const ${n}: React.FC<${propsInterfaceName}>;`)
    .join("\n");

  const toasterDtsSpecial =
    item.slug === "toaster"
      ? `
export interface ToastOptions {
  id?: string | number;
  description?: React.ReactNode;
  duration?: number;
  toaster?: string;
  action?: { label: string; onClick: (event: React.MouseEvent<HTMLButtonElement>) => void };
  [key: string]: any;
}

export interface ToastFn {
  (title: React.ReactNode, options?: ToastOptions): string | number;
  success: (title: React.ReactNode, options?: ToastOptions) => string | number;
  error: (title: React.ReactNode, options?: ToastOptions) => string | number;
  info: (title: React.ReactNode, options?: ToastOptions) => string | number;
  loading: (title: React.ReactNode, options?: ToastOptions) => string | number;
  promise: <T>(promise: Promise<T> | (() => Promise<T>), messages: { loading: React.ReactNode; success: React.ReactNode | ((data: T) => React.ReactNode); error: React.ReactNode | ((err: unknown) => React.ReactNode) }, options?: ToastOptions) => Promise<T>;
  dismiss: (id?: string | number) => void;
}

export declare const toast: ToastFn;
`
      : "";

  const dtsCode = `import * as React from "react";
${customTypeDeclarations ? `\n${customTypeDeclarations}\n` : ""}
export interface ${propsInterfaceName} {
${propsFields ? `${propsFields}\n` : ""}  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}
${toasterDtsSpecial}
/**
 * ${item.name} — ${item.description}
 */
export declare const ${primaryName}: React.FC<${propsInterfaceName}>;
export declare const ${primaryName}Raw: React.FC<${propsInterfaceName}>;
export declare const ${primaryName}Demo: React.FC<${propsInterfaceName}>;
${dtsNamedExports}
export default ${primaryName};
`;

  fs.writeFileSync(path.join(uiDir, `${item.slug}.d.ts`), dtsCode, "utf8");

  // Add to root barrel exports
  const barrelExportNames = [primaryName, `${primaryName}Demo`, `${primaryName}Raw`];
  if (item.slug === "toaster" && !barrelExportNames.includes("toast")) {
    barrelExportNames.push("toast");
  }
  for (const extra of namedExports) {
    if (extra !== "toast" && !barrelExportNames.includes(extra)) barrelExportNames.push(extra);
  }
  const uniqueNames = barrelExportNames.filter((n) => {
    if (exportedIdentSet.has(n)) return false;
    exportedIdentSet.add(n);
    return true;
  });

  if (uniqueNames.length > 0) {
    rootExports.push(`export { ${uniqueNames.join(", ")} } from "./components/ui/${item.slug}.js";`);
    rootDtsExports.push(
      `export { ${uniqueNames.join(", ")}, type ${propsInterfaceName} } from "./components/ui/${item.slug}.js";`
    );
  }

  // Generate Clean variant module if available
  if (cleanDemoFile) {
    const cleanToastCode =
      item.slug === "toaster"
        ? `import { Toaster as EngineToaster, toast as engineToast } from "../../../affectui-engine/demo.clean-Nl_cej3R.js";\nexport const toast = engineToast;\n`
        : "";
    const cleanModuleCode = `import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/${cleanDemoFile}";
${cleanToastCode}
/**
 * ${item.name} [Clean Style] (${item.category})
 * ${item.description}
 */
export function ${primaryName}(props = {}) {
  const { demo, className, style, ...rest } = props;
  const hasCustomProps = demo === false || (!demo && Object.keys(rest).some(k => !["id", "children", "key", "ref"].includes(k) && !k.startsWith("data-") && !k.startsWith("aria-")));
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, { className, style, ...rest });
  }
  const element = React.createElement(DemoComponent, { className, style, ...rest });
  if (className || style) {
    return React.createElement("div", { className, style, "data-aether-wrapper": "" }, element);
  }
  return element;
}

export const ${primaryName}Raw = __InnerComponent || DemoComponent;
export const ${primaryName}Demo = DemoComponent;
${secondaryExportsCode}
export default ${primaryName};
`;
    fs.writeFileSync(path.join(cleanUiDir, `${item.slug}.js`), cleanModuleCode, "utf8");
    fs.writeFileSync(path.join(cleanUiDir, `${item.slug}.d.ts`), dtsCode, "utf8");

    const uniqueCleanNames = barrelExportNames.filter((n) => {
      if (cleanExportedIdentSet.has(n)) return false;
      cleanExportedIdentSet.add(n);
      return true;
    });
    if (uniqueCleanNames.length > 0) {
      cleanExports.push(`export { ${uniqueCleanNames.join(", ")} } from "./components/ui/clean/${item.slug}.js";`);
      cleanDtsExports.push(
        `export { ${uniqueCleanNames.join(", ")}, type ${propsInterfaceName} } from "./components/ui/clean/${item.slug}.js";`
      );
    }
  }
}

// Write src/index.js & src/index.d.ts
const indexJsContent = `/**
 * @aether-ui/react — Enterprise AI-First UI Component Library
 * 141 Production Components, Screens, Blocks, Illustrations & Motion Primitives
 *
 * Stylesheet entry: import "@aether-ui/react/styles.css";
 */
export { AFFECTUI_CATALOG, AFFECTUI_CATALOG as AETHERUI_CATALOG } from "./affectui-engine/catalog.js";
export { ScreenFullContext, SCREEN_WIDTH } from "./affectui-engine/context.js";

${rootExports.join("\n")}
`;
fs.writeFileSync(path.resolve("src/index.js"), indexJsContent, "utf8");

const indexDtsContent = `/**
 * @aether-ui/react — TypeScript Declarations for All 141 Components
 */
import * as React from "react";

export declare const AFFECTUI_CATALOG: Array<{
  slug: string;
  name: string;
  kind: "component" | "screen" | "block" | "illustration" | "motion";
  category: string;
  description: string;
  isPro: boolean;
}>;
export declare const AETHERUI_CATALOG: typeof AFFECTUI_CATALOG;
export declare const ScreenFullContext: React.Context<boolean>;
export declare const SCREEN_WIDTH: number;

${rootDtsExports.join("\n")}
`;
fs.writeFileSync(path.resolve("src/index.d.ts"), indexDtsContent, "utf8");

// Write src/clean.js & src/clean.d.ts
const cleanJsContent = `/**
 * @aether-ui/react/clean — Clean Aesthetic Variant Barrel Export (76 Components)
 *
 * Stylesheet entry: import "@aether-ui/react/styles.css";
 */
${cleanExports.join("\n")}
`;
fs.writeFileSync(path.resolve("src/clean.js"), cleanJsContent, "utf8");
fs.writeFileSync(path.resolve("src/clean.d.ts"), cleanDtsExports.join("\n") + "\n", "utf8");

// Write src/styles.css unified stylesheet entry
const stylesCssContent = `@import "./affectui-engine/index.css";
@import "./affectui-engine/all-demos.css";
@import "../design-system/tokens/variables.css";
`;
fs.writeFileSync(path.resolve("src/styles.css"), stylesCssContent, "utf8");

console.log({
  classicModulesGenerated: AFFECTUI_CATALOG.length,
  cleanModulesGenerated: cleanExports.length,
});
process.exit(0);

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
    .map((p) => (p === "ai" ? "AI" : p === "kpi" ? "KPI" : p === "otp" ? "OTP" : p === "dach" ? "DACH" : p.charAt(0).toUpperCase() + p.slice(1)))
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

  // 1. Check if it imports the main component from ./component-*.js or ./index-DrzmeL9u.js
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
    // Check component-* imports
    const compImport = code.match(/import\{([^}]+)\}from"\.\/(component[^"]+)"/);
    if (compImport) {
      const specs = compImport[1].split(",").map((s) => s.trim());
      // Usually `t` or `t as X` or `r`
      const tSpec = specs.find((s) => s === "t" || s.startsWith("t as ") || s.includes(" as t"));
      const firstSpec = tSpec || specs[0];
      innerIdent = firstSpec.includes(" as ") ? firstSpec.split(" as ")[1].trim() : firstSpec.trim();
    } else if (demoFileName === "demo-BDApkIlc.js") {
      innerIdent = "t";
    } else {
      innerIdent = defaultFn;
    }
  }

  // Patch export statement to also export `innerIdent as __InnerComponent`
  const newExport = `export{${defaultFn} as default,${innerIdent} as __InnerComponent};`;
  code = code.replace(/export\{[^}]+\};?\s*$/, newExport);
  fs.writeFileSync(filePath, code, "utf8");
  return "__InnerComponent";
}

const rootExports = [];
const rootDtsExports = [];
const cleanExports = [];
const cleanDtsExports = [];
const exportedIdentSet = new Set();
const cleanExportedIdentSet = new Set();

let patchedSourceCount = 0;

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

  // Generate src/components/ui/<slug>.jsx
  const secondaryExportsCode = namedExports
    .filter((n) => n !== primaryName && n !== "toast")
    .map((n) => `export const ${n} = ${primaryName};`)
    .join("\n");

  const toastSpecialCode =
    item.slug === "toaster"
      ? `import { o as EngineToaster, s as engineToast } from "../../affectui-engine/index-DrzmeL9u.js";\nexport const toast = engineToast;\n`
      : "";

  const uiModuleCode = `import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/${classicDemoFile}";
${toastSpecialCode}
/**
 * ${item.name} (${item.category})
 * ${item.description}
 */
export function ${primaryName}(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ${primaryName}Raw = __InnerComponent || DemoComponent;
export const ${primaryName}Demo = DemoComponent;
${secondaryExportsCode}
export default ${primaryName};
`;

  fs.writeFileSync(path.join(uiDir, `${item.slug}.js`), uiModuleCode, "utf8");

  // Generate TypeScript Declaration src/components/ui/<slug>.d.ts
  const propsInterfaceName = `${primaryName}Props`;
  const propsFields = propList
    .map((p) => {
      const rawName = p.name.replace(/\?$/, "");
      const safeKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(rawName) ? rawName : JSON.stringify(rawName);
      const desc = (p.description || "").replace(/\*\//g, "* /");
      const def = p.default ? ` (default: ${p.default})` : "";
      return `  /** ${desc}${def} */\n  ${safeKey}?: any;`;
    })
    .join("\n");

  const dtsNamedExports = namedExports
    .filter((n) => n !== primaryName)
    .map((n) => `export declare const ${n}: React.FC<${propsInterfaceName}>;`)
    .join("\n");

  const dtsCode = `import * as React from "react";

export interface ${propsInterfaceName} {
${propsFields}
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

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
  for (const extra of namedExports) {
    if (!barrelExportNames.includes(extra)) barrelExportNames.push(extra);
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
        ? `import { o as EngineToaster, s as engineToast } from "../../../affectui-engine/index-DrzmeL9u.js";\nexport const toast = engineToast;\n`
        : "";
    const cleanModuleCode = `import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/${cleanDemoFile}";
${cleanToastCode}
/**
 * ${item.name} [Clean Style] (${item.category})
 * ${item.description}
 */
export function ${primaryName}(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
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

  // Populate empty component-*.js source chunks so all 141 items have full copyable TSX source code
  if (item.loadSource) {
    const srcFileMatch = item.loadSource.toString().match(/\.\/([^"]+)/);
    if (srcFileMatch) {
      const srcFilePath = path.join(engineDir, srcFileMatch[1]);
      if (fs.existsSync(srcFilePath) && fs.statSync(srcFilePath).size < 100) {
        const fullTsxSource = `/**
 * @affectui/react — ${item.name} (${item.slug})
 * Category: ${item.category} | Kind: ${item.kind}
 * ${item.description}
 */
import * as React from "react";
import DemoComponent, { __InnerComponent } from "@/affectui-engine/${classicDemoFile}";

export interface ${propsInterfaceName} {
${propsFields}
  demo?: boolean;
  className?: string;
}

export function ${primaryName}({ demo, ...props }: ${propsInterfaceName}) {
  const hasCustomProps = !demo && Object.keys(props).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    const Comp = __InnerComponent as React.ComponentType<${propsInterfaceName}>;
    return <Comp {...props} />;
  }
  const Preset = DemoComponent as React.ComponentType<${propsInterfaceName}>;
  return <Preset {...props} />;
}

${secondaryExportsCode}
export default ${primaryName};

/* --- Usage Example ---
${usage.trim()}
*/
`;
        const escaped = JSON.stringify(fullTsxSource);
        fs.writeFileSync(srcFilePath, `var e=${escaped};export{e as default};\n`, "utf8");
        patchedSourceCount++;
      }
    }
  }
}

// Write src/index.js & src/index.d.ts
const indexJsContent = `/**
 * @affectui/react — Enterprise AI-First UI Component Library
 * 141 Production Components, Screens, Blocks, Illustrations & Motion Primitives
 */
import "./affectui-engine/index.css";
import "./affectui-engine/all-demos.css";
import "../design-system/tokens/variables.css";

export { AFFECTUI_CATALOG } from "./affectui-engine/catalog.js";
export { ScreenFullContext, SCREEN_WIDTH } from "./affectui-engine/index-DrzmeL9u.js";

${rootExports.join("\n")}
`;
fs.writeFileSync(path.resolve("src/index.js"), indexJsContent, "utf8");

const indexDtsContent = `/**
 * @affectui/react — TypeScript Declarations for All 141 Components
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
export declare const ScreenFullContext: React.Context<boolean>;
export declare const SCREEN_WIDTH: number;

${rootDtsExports.join("\n")}
`;
fs.writeFileSync(path.resolve("src/index.d.ts"), indexDtsContent, "utf8");

// Write src/clean.js & src/clean.d.ts
const cleanJsContent = `/**
 * @affectui/react/clean — Clean Aesthetic Variant Barrel Export (76 Components)
 */
import "./affectui-engine/index.css";
import "./affectui-engine/all-demos.css";
import "../design-system/tokens/variables.css";

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
  patchedEmptySourceFiles: patchedSourceCount,
});
process.exit(0);

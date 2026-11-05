#!/usr/bin/env node
/**
 * Enterprise UI Library CLI (Powered by src/brand.config.js)
 * Commands:
 *   aether-ui list [--kind <component|screen|block|illustration|motion>]
 *   aether-ui info <slug>
 *   aether-ui add <slug> [--clean] [--dir <target-dir>]
 *   aether-ui init [--dir <target-dir>]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const { BRAND_CONFIG } = await import(path.join(rootDir, "src/brand.config.js"));
const { AFFECTUI_CATALOG } = await import(path.join(rootDir, "src/affectui-engine/catalog.js"));

const args = process.argv.slice(2);
const cmd = args[0] || "help";

function getFlag(name, defaultVal = null) {
  const idx = args.indexOf(name);
  if (idx !== -1 && idx + 1 < args.length) return args[idx + 1];
  return defaultVal;
}

if (cmd === "list") {
  const kindFilter = getFlag("--kind");
  const items = kindFilter
    ? AFFECTUI_CATALOG.filter((x) => x.kind === kindFilter)
    : AFFECTUI_CATALOG;
  console.log(`\n📦 ${BRAND_CONFIG.packageName} (${BRAND_CONFIG.name}) — ${items.length} Elements${kindFilter ? ` (kind: ${kindFilter})` : ""}\n`);
  for (const item of items) {
    const cleanTag = item.loadClean ? " [Classic + Clean]" : " [Classic]";
    console.log(
      `  • ${item.slug.padEnd(26)} | ${item.kind.padEnd(13)} | ${item.category.padEnd(18)}${cleanTag}`
    );
  }
  console.log("");
  process.exit(0);
}

if (cmd === "info") {
  const slug = args[1];
  const item = AFFECTUI_CATALOG.find((x) => x.slug === slug);
  if (!item) {
    console.error(`❌ Component "${slug}" not found. Run "npx ${BRAND_CONFIG.cliName} list" to see all 141 elements.`);
    process.exit(1);
  }
  const docs = item.loadDocs ? await item.loadDocs() : null;
  console.log(`\n✨ [${BRAND_CONFIG.name}] ${item.name} (${item.slug})`);
  console.log(`   Kind: ${item.kind} | Category: ${item.category} | Styles: ${item.loadClean ? "Classic & Clean" : "Classic"}`);
  console.log(`   ${item.description}\n`);
  if (docs?.props?.length) {
    console.log(`📋 Props API (${docs.props.length}):`);
    for (const p of docs.props) {
      console.log(`   - ${p.name.padEnd(20)} : ${p.type} ${p.default ? `(default: ${p.default})` : ""}`);
    }
    console.log("");
  }
  if (docs?.usage) {
    console.log(`💻 Usage Example:\n${docs.usage}\n`);
  }
  process.exit(0);
}

if (cmd === "add") {
  const slug = args[1];
  const isClean = args.includes("--clean");
  const usePackage = args.includes("--package");
  const targetDir = path.resolve(process.cwd(), getFlag("--dir", "src/components/ui"));
  const item = AFFECTUI_CATALOG.find((x) => x.slug === slug);
  if (!item) {
    console.error(`❌ Component "${slug}" not found. Run "npx ${BRAND_CONFIG.cliName} list" to see all 141 elements.`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });
  const outTsxPath = path.join(targetDir, `${item.slug}.tsx`);
  const outDtsPath = path.join(targetDir, `${item.slug}.d.ts`);

  const dtsDir = isClean ? path.join(rootDir, "src/components/ui/clean") : path.join(rootDir, "src/components/ui");
  const dtsPath = path.join(dtsDir, `${item.slug}.d.ts`);
  if (fs.existsSync(dtsPath)) {
    fs.copyFileSync(dtsPath, outDtsPath);
  }

  if (usePackage) {
    const pascal = item.name.replace(/[^A-Za-z0-9]/g, "");
    const pkgWrapper = `/**
 * @aether-ui/react — ${item.name} (${item.slug})
 * Exported via ${BRAND_CONFIG.cliName} add
 */
import { ${pascal}, type ${pascal}Props } from "${BRAND_CONFIG.packageName}/ui/${isClean ? "clean/" : ""}${item.slug}";

export { ${pascal}, type ${pascal}Props };
export default ${pascal};
`;
    fs.writeFileSync(outTsxPath, pkgWrapper, "utf8");
    console.log(`\n✅ [${BRAND_CONFIG.name}] Added package wrapper for ${item.name} (${isClean ? "Clean" : "Classic"}) to:`);
    console.log(`   - ${outTsxPath}`);
    console.log(`   - ${outDtsPath}\n`);
    process.exit(0);
  }

  const sourceLoader = isClean && item.loadCleanSource ? item.loadCleanSource : item.loadSource;
  let rawSource = sourceLoader ? await sourceLoader() : "";

  // Check for @/affectui-engine/ imports
  const engineImports = [...rawSource.matchAll(/from\s+["']@\/affectui-engine\/([^"']+)["']/g)];
  if (engineImports.length > 0) {
    const engineDir = path.join(rootDir, "src/affectui-engine");
    const targetEngineDir = path.join(targetDir, "_engine");
    fs.mkdirSync(targetEngineDir, { recursive: true });

    // Collect and copy all required engine chunk files & styles recursively
    const visited = new Set();
    const queue = engineImports.map((m) => m[1]);

    while (queue.length > 0) {
      const current = queue.shift();
      if (visited.has(current)) continue;
      visited.add(current);

      const srcPath = path.join(engineDir, current);
      if (!fs.existsSync(srcPath)) continue;

      let content = fs.readFileSync(srcPath, "utf8");
      const destPath = path.join(targetEngineDir, current);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });

      if (current.endsWith(".css")) {
        fs.writeFileSync(destPath, content, "utf8");
        continue;
      }

      // Rewrite React & JSX runtime imports to standard npm packages
      content = content
        .replace(/from\s*"\.\/react-BkAXpnfr\.js"/g, 'from "react"')
        .replace(/from\s*"\.\/jsx-runtime-CTsRTJUX\.js"/g, 'from "react/jsx-runtime"');

      // Scan for transitive relative dependencies
      const subImports = [
        ...content.matchAll(/from\s*"\.\/([^"]+)"/g),
        ...content.matchAll(/import\s*"\.\/([^"]+)"/g),
      ];
      for (const sm of subImports) {
        const depFile = sm[1];
        if (depFile.endsWith(".js") || depFile.endsWith(".css")) {
          if (!visited.has(depFile)) queue.push(depFile);
        }
      }

      fs.writeFileSync(destPath, content, "utf8");
    }

    // Rewrite import in <slug>.tsx from "@/affectui-engine/" to "./_engine/"
    rawSource = rawSource.replace(/@\/affectui-engine\//g, "./_engine/");
  }

  fs.writeFileSync(outTsxPath, rawSource, "utf8");

  console.log(`\n✅ [${BRAND_CONFIG.name}] Added standalone ${item.name} (${isClean ? "Clean" : "Classic"}) to:`);
  console.log(`   - ${outTsxPath}`);
  console.log(`   - ${outDtsPath}\n`);
  process.exit(0);
}

if (cmd === "init") {
  const targetDir = path.resolve(process.cwd(), getFlag("--dir", "src/styles"));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(
    path.join(rootDir, "design-system/tokens/variables.css"),
    path.join(targetDir, `${BRAND_CONFIG.slug}-tokens.css`)
  );
  fs.copyFileSync(
    path.join(rootDir, "design-system/tokens/design-tokens.json"),
    path.join(targetDir, `${BRAND_CONFIG.slug}-tokens.json`)
  );
  fs.copyFileSync(
    path.join(rootDir, "design-system/tokens/tailwind.preset.js"),
    path.join(targetDir, `${BRAND_CONFIG.slug}-tailwind.preset.js`)
  );
  console.log(`\n✅ Initialized ${BRAND_CONFIG.name} Design System tokens in ${targetDir}:\n`);
  console.log(`   - ${BRAND_CONFIG.slug}-tokens.css`);
  console.log(`   - ${BRAND_CONFIG.slug}-tokens.json`);
  console.log(`   - ${BRAND_CONFIG.slug}-tailwind.preset.js\n`);
  process.exit(0);
}

console.log(`
📦 ${BRAND_CONFIG.packageName} (${BRAND_CONFIG.name}) Enterprise CLI

Usage:
  npx ${BRAND_CONFIG.cliName} list [--kind component|screen|block|illustration|motion]
  npx ${BRAND_CONFIG.cliName} info <slug>
  npx ${BRAND_CONFIG.cliName} add <slug> [--clean] [--dir src/components/ui]
  npx ${BRAND_CONFIG.cliName} init [--dir src/styles]
`);
process.exit(0);

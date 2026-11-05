#!/usr/bin/env node
/**
 * @affectui/react Enterprise CLI
 * Commands:
 *   affectui list [--kind <component|screen|block|illustration|motion>]
 *   affectui info <slug>
 *   affectui add <slug> [--clean] [--dir <target-dir>]
 *   affectui init [--dir <target-dir>]
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
  console.log(`\n📦 @affectui/react — ${items.length} Elements${kindFilter ? ` (kind: ${kindFilter})` : ""}\n`);
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
    console.error(`❌ Component "${slug}" not found. Run "npx affectui list" to see all 141 elements.`);
    process.exit(1);
  }
  const docs = item.loadDocs ? await item.loadDocs() : null;
  console.log(`\n✨ ${item.name} (${item.slug})`);
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
  const targetDir = path.resolve(process.cwd(), getFlag("--dir", "src/components/ui"));
  const item = AFFECTUI_CATALOG.find((x) => x.slug === slug);
  if (!item) {
    console.error(`❌ Component "${slug}" not found. Run "npx affectui list" to see all 141 elements.`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });
  const sourceLoader = isClean && item.loadCleanSource ? item.loadCleanSource : item.loadSource;
  const rawSource = sourceLoader ? await sourceLoader() : "";
  const dtsPath = path.join(rootDir, "src/components/ui", `${item.slug}.d.ts`);

  const outTsxPath = path.join(targetDir, `${item.slug}.tsx`);
  const outDtsPath = path.join(targetDir, `${item.slug}.d.ts`);

  fs.writeFileSync(outTsxPath, rawSource, "utf8");
  if (fs.existsSync(dtsPath)) {
    fs.copyFileSync(dtsPath, outDtsPath);
  }

  console.log(`\n✅ Added ${item.name} (${isClean ? "Clean" : "Classic"}) to:`);
  console.log(`   - ${outTsxPath}`);
  console.log(`   - ${outDtsPath}\n`);
  process.exit(0);
}

if (cmd === "init") {
  const targetDir = path.resolve(process.cwd(), getFlag("--dir", "src/styles"));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(
    path.join(rootDir, "design-system/tokens/variables.css"),
    path.join(targetDir, "affectui-tokens.css")
  );
  fs.copyFileSync(
    path.join(rootDir, "design-system/tokens/design-tokens.json"),
    path.join(targetDir, "affectui-tokens.json")
  );
  fs.copyFileSync(
    path.join(rootDir, "design-system/tokens/tailwind.preset.js"),
    path.join(targetDir, "affectui-tailwind.preset.js")
  );
  console.log(`\n✅ Initialized AffectUI Design System tokens in ${targetDir}:\n`);
  console.log(`   - affectui-tokens.css`);
  console.log(`   - affectui-tokens.json`);
  console.log(`   - affectui-tailwind.preset.js\n`);
  process.exit(0);
}

console.log(`
📦 @affectui/react Enterprise CLI (141 Elements)

Usage:
  npx affectui list [--kind component|screen|block|illustration|motion]
  npx affectui info <slug>
  npx affectui add <slug> [--clean] [--dir src/components/ui]
  npx affectui init [--dir src/styles]
`);
process.exit(0);

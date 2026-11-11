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
import { exportComponent } from "./lib/export-component.mjs";

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
    console.error(`❌ Component "${slug}" not found. Run "npx ${BRAND_CONFIG.cliName} list" to see all 183 elements.`);
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
  const manifest = JSON.parse(fs.readFileSync(path.join(rootDir, "src/component-manifest.json"), "utf8"));
  const item = manifest.find(item => item.slug === args[1]);
  if (!item) { console.error(`Unknown component: ${args[1]}`); process.exit(1); }
  try {
    const result = await exportComponent(rootDir, item, args.includes("--clean") ? "clean" : "classic",
      path.resolve(process.cwd(), getFlag("--dir", "src/components/ui")), args.includes("--package"));
    console.log(`Added ${item.name}: ${result.entry} (${result.files} companion files).`);
  } catch (error) { console.error(error.message); process.exit(1); }
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
  npx ${BRAND_CONFIG.cliName} add <slug> [--clean] [--package] [--dir src/components/ui]
  npx ${BRAND_CONFIG.cliName} init [--dir src/styles]
`);
process.exit(0);

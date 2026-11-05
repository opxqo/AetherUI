#!/usr/bin/env node
/**
 * One-Command Enterprise Rebranding Tool
 * Usage:
 *   npm run rebrand -- --name "AetherUI" --pkg "@aether-ui/react" --cli "aether-ui"
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
function getArg(flag, fallback) {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : fallback;
}

const name = getArg("--name", "AetherUI");
const slug = getArg("--slug", name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
const packageName = getArg("--pkg", `@${slug}/react`);
const cliName = getArg("--cli", slug);
const badgeText = getArg("--badge", "141 Elements");
const tagline = getArg("--tagline", "Enterprise AI-First React UI Component Library & Design System");

// 1. Update src/brand.config.js
const brandConfigContent = `/**
 * Centralized Brand & Customization Config
 * 修改此文件（或运行 \`npm run rebrand -- --name "YourUI" --pkg "@your-ui/react" --cli "your-ui"\`）
 * 即可一键自定义整个组件库的品牌名称、包名、CLI 名称与徽章文案。
 */
export const BRAND_CONFIG = {
  /** 组件库显示名称 (Showcase 导航栏、标题、文档标题) */
  name: ${JSON.stringify(name)},
  /** 组件库全小写标识 */
  slug: ${JSON.stringify(slug)},
  /** NPM 包名 (用于 import 语句生成与 package.json) */
  packageName: ${JSON.stringify(packageName)},
  /** CLI 命令名称 (用于 npx <cliName> add ...) */
  cliName: ${JSON.stringify(cliName)},
  /** 导航栏右上角徽章文案 */
  badgeText: ${JSON.stringify(badgeText)},
  /** 核心品牌标语 */
  tagline: ${JSON.stringify(tagline)},
  /** 版本号 */
  version: "1.0.0",
};

export default BRAND_CONFIG;
`;
fs.writeFileSync(path.join(rootDir, "src/brand.config.js"), brandConfigContent, "utf8");

// 2. Update package.json
const pkgPath = path.join(rootDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
pkg.name = packageName;
pkg.description = `${name} — ${tagline}`;
pkg.bin = {
  [cliName]: "./bin/cli.mjs",
};
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");

// 3. Update index.html title
const htmlPath = path.join(rootDir, "index.html");
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, "utf8");
  html = html.replace(/<title>.*?<\/title>/, `<title>${name} — ${tagline}</title>`);
  fs.writeFileSync(htmlPath, html, "utf8");
}

console.log(`\n✨ Successfully rebranded library to:`);
console.log(`   • Brand Name   : ${name}`);
console.log(`   • Package Name : ${packageName}`);
console.log(`   • CLI Command  : npx ${cliName}`);
console.log(`   • Config File  : src/brand.config.js\n`);

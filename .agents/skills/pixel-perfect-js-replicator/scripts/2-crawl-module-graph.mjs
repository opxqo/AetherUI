#!/usr/bin/env node
/**
 * 2-crawl-module-graph.mjs
 *
 * Starting from one or more entry JS chunk filenames (e.g. demo-XXXX.js,
 * component-YYYY.js), recursively downloads all relative ES module imports
 * (`from "./..."`) from the remote assets base URL into the local scratch
 * directory and prints the complete dependency tree.
 *
 * Usage:
 *   node 2-crawl-module-graph.mjs <assets-base-url> <scratch-dir> <entry-chunk-1> [entry-chunk-2 ...]
 *
 * Example:
 *   node 2-crawl-module-graph.mjs https://www.affectui.com/assets ./scratch demo-CT4L5yLv.js
 */

import fs from "node:fs";
import path from "node:path";

const [assetsBaseUrl, scratchDir, ...entryChunks] = process.argv.slice(2);

if (!assetsBaseUrl || !scratchDir || entryChunks.length === 0) {
  console.error(
    "Usage: node 2-crawl-module-graph.mjs <assets-base-url> <scratch-dir> <entry-chunk-1> [entry-chunk-2 ...]",
  );
  process.exit(1);
}

fs.mkdirSync(scratchDir, { recursive: true });

// Runtime shims that we don't need to crawl into if already recognized
const RUNTIME_PREFIXES = [
  "react-",
  "jsx-runtime-",
  "rolldown-runtime-",
  "preload-helper-",
  "supabase-",
];

function isRuntimeShim(filename) {
  return RUNTIME_PREFIXES.some((prefix) => filename.startsWith(prefix));
}

async function main() {
  const baseUrl = assetsBaseUrl.replace(/\/$/, "");
  const visited = new Set();
  const queue = [...entryChunks];
  const graph = {};

  while (queue.length > 0) {
    const file = queue.shift();
    if (visited.has(file)) continue;
    visited.add(file);

    const localPath = path.join(scratchDir, file);
    if (!fs.existsSync(localPath)) {
      const url = `${baseUrl}/${file}`;
      console.log(`Downloading ${url}...`);
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`Warning: HTTP ${res.status} for ${url}`);
        continue;
      }
      const text = await res.text();
      fs.writeFileSync(localPath, text, "utf8");
    }

    const content = fs.readFileSync(localPath, "utf8");
    const imports = [
      ...content.matchAll(/from\s*["']\.\/([^"']+)["']/g),
    ].map((m) => m[1]);

    graph[file] = imports;

    for (const imp of imports) {
      if (!visited.has(imp) && !isRuntimeShim(imp)) {
        queue.push(imp);
      }
    }
  }

  console.log("\n=== Dependency Graph Summary ===");
  for (const [mod, deps] of Object.entries(graph)) {
    console.log(`- ${mod}`);
    for (const d of deps) {
      const tag = isRuntimeShim(d) ? " [runtime-shim]" : "";
      console.log(`    └── ${d}${tag}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

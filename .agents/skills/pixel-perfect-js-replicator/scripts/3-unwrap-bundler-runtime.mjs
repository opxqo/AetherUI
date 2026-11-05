#!/usr/bin/env node
/**
 * 3-unwrap-bundler-runtime.mjs
 *
 * Transforms downloaded Vite / Rolldown production ES modules into clean,
 * standalone React ES modules by:
 *   1. Replacing bundler-wrapped React, jsx-runtime, and ReactDOM factory imports
 *      with standard `"react"`, `"react/jsx-runtime"`, and `"react-dom"` imports.
 *   2. Remapping hashed chunk filenames (e.g. `./component-CnXtAJBv.js`) to
 *      semantic local module paths (e.g. `./app-shell.js`) defined in a JSON map.
 *   3. Formatting the output files with Prettier.
 *
 * Usage:
 *   node 3-unwrap-bundler-runtime.mjs <scratch-dir> <out-dir> <file-map.json>
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const [scratchDir, outDir, mapJsonPath] = process.argv.slice(2);

if (!scratchDir || !outDir || !mapJsonPath) {
  console.error(
    "Usage: node 3-unwrap-bundler-runtime.mjs <scratch-dir> <out-dir> <file-map.json>",
  );
  process.exit(1);
}

const fileMap = JSON.parse(fs.readFileSync(mapJsonPath, "utf8"));

for (const [srcFile, destRel] of Object.entries(fileMap)) {
  const srcPath = path.join(scratchDir, srcFile);
  if (!fs.existsSync(srcPath)) {
    console.warn(`Skipping missing file: ${srcPath}`);
    continue;
  }

  let code = fs.readFileSync(srcPath, "utf8");
  const destDirRel = path.posix.dirname(destRel);

  // 1. Replace Rolldown/Vite React factory import: import{t as X}from"./react-XXXX.js";
  code = code.replace(
    /import\s*\{\s*t\s+as\s+([A-Za-z0-9_$]+)\s*\}\s*from\s*["']\.\/react-[^"']+["'];?/g,
    'import * as __React from "react";\nconst $1 = () => __React;\n',
  );

  // 2. Replace Rolldown/Vite jsx-runtime factory import:
  //    import{t}from"./jsx-runtime-XXXX.js" or import{t as X}from"./jsx-runtime-XXXX.js"
  code = code.replace(
    /import\s*\{\s*t(?:\s+as\s+([A-Za-z0-9_$]+))?\s*\}\s*from\s*["']\.\/jsx-runtime-[^"']+["'];?/g,
    (_, alias) => {
      const fnName = alias || "t";
      return `import * as __jsxRuntime from "react/jsx-runtime";\nconst ${fnName} = () => __jsxRuntime;\n`;
    },
  );

  // 3. Replace ReactDOM portal factory import from main index bundle:
  //    import{kt as r}from"./index-XXXX.js"
  code = code.replace(
    /import\s*\{\s*[A-Za-z0-9_$]+\s+as\s+([A-Za-z0-9_$]+)\s*\}\s*from\s*["']\.\/index-[^"']+["'];?/g,
    'import * as __ReactDOM from "react-dom";\nconst $1 = () => __ReactDOM;\n',
  );

  // 4. Strip Vite empty CSS comments
  code = code.replace(/\/\*\s*empty css\s*\*\//g, "");

  // 5. Remap relative imports between sibling/child modules
  for (const [otherSrc, otherDest] of Object.entries(fileMap)) {
    let relImport = path.posix.relative(
      destDirRel === "." ? "" : destDirRel,
      otherDest,
    );
    if (!relImport.startsWith(".")) {
      relImport = `./${relImport}`;
    }
    code = code.replaceAll(`./${otherSrc}`, relImport);
  }

  const destPath = path.join(outDir, destRel);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, code, "utf8");
  console.log(`Unwrapped: ${srcFile} -> ${destRel}`);
}

try {
  console.log("Formatting output modules with Prettier...");
  execSync(`npx prettier --write "${outDir}"`, { stdio: "inherit" });
} catch {
  console.log("Prettier not found or skipped; raw unwrapped modules written.");
}

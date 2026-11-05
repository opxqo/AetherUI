import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { runStep } from "./verification-runner.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const consumerOnly = process.argv.includes("--consumer-only");
const npm = (args, cwd = root) => execFileSync("npm", args, { cwd, encoding: "utf8", stdio: "pipe", maxBuffer: 20 * 1024 * 1024 });
const consumer = fs.mkdtempSync(path.join(os.tmpdir(), "aether-consumer-"));
const manifest = JSON.parse(fs.readFileSync(path.join(root, "src/component-manifest.json")));
try {
  if (!consumerOnly) {
    await runStep("Strict declarations", () => npm(["run", "typecheck"]));
    await runStep("Library build", () => npm(["run", "build:lib"]));
    await runStep("Regression suite", () => npm(["test"]));
  }
  await runStep("Install packed library in a separate npm project", () => {
    const [pack] = JSON.parse(npm(["pack", "--ignore-scripts", "--json", "--pack-destination", consumer]));
    fs.writeFileSync(path.join(consumer, "package.json"), '{"name":"aether-external-consumer","private":true,"type":"module"}');
    // Real npm installation, without aliases, symlinks, or imports back into this repository.
    const version = name => JSON.parse(fs.readFileSync(path.join(root, `node_modules/${name}/package.json`))).version;
    npm(["install", "--ignore-scripts", "--no-audit", "--no-fund", path.join(consumer, pack.filename),
      `react@${version("react")}`, `react-dom@${version("react-dom")}`, `@types/react@${version("@types/react")}`, `@types/react-dom@${version("@types/react-dom")}`], consumer);
  });
  await runStep("Installed package: 217 APIs, demos, state identity and SSR", () => {
    fs.copyFileSync(path.join(root, "tests/fixtures/business.mjs"), path.join(consumer, "business.mjs"));
    fs.writeFileSync(path.join(consumer, "check.mjs"), `
import assert from "node:assert/strict";
import React from "react";
import { renderToString } from "react-dom/server";
import * as classic from "@aether-ui/react";
import * as clean from "@aether-ui/react/clean";
import { toast as subpathToast } from "@aether-ui/react/ui/toaster";
import { businessProps } from "./business.mjs";
assert.equal(typeof document, "undefined");
assert.equal(classic.toast, clean.toast);
assert.equal(classic.toast, subpathToast);
assert.equal(classic.ScreenFullContext, clean.ScreenFullContext);
for (const item of ${JSON.stringify(manifest)}) for (const lib of [classic, ...(item.clean ? [clean] : [])]) {
  const sub = await import("@aether-ui/react/ui/" + (lib === clean ? "clean/" : "") + item.slug);
  assert.equal(lib[item.primary], sub[item.primary]);
  renderToString(React.createElement(sub[item.primary], businessProps[item.slug] ?? {}));
  renderToString(React.createElement(sub[item.primary + "Demo"]));
}
console.log("217 installed APIs and demos rendered successfully.");
`);
    execFileSync(process.execPath, [path.join(consumer, "check.mjs")], { cwd: consumer, stdio: "pipe" });
  });
  await runStep("Installed TypeScript consumer with declarations checked", () => {
    const original = fs.readFileSync(path.join(root, "tests/types/consumer.tsx"), "utf8");
    const source = original.replaceAll('../../src/components/ui/', '@aether-ui/react/ui/').replaceAll('../../src/index.js', '@aether-ui/react').replaceAll('../../src/clean.js', '@aether-ui/react/clean').replace(/(@aether-ui\/react\/ui\/[^"']+)\.js/g, '$1');
    fs.writeFileSync(path.join(consumer, "consumer.tsx"), source);
    fs.writeFileSync(path.join(consumer, "tsconfig.json"), JSON.stringify({ compilerOptions: { target: "ES2022", module: "ESNext", moduleResolution: "Bundler", jsx: "react-jsx", strict: true, skipLibCheck: false, noEmit: true }, include: ["consumer.tsx"] }));
    execFileSync(process.execPath, [path.join(root, "node_modules/typescript/bin/tsc"), "-p", path.join(consumer, "tsconfig.json"), "--pretty", "false"], { cwd: consumer, stdio: "pipe" });
  });
  await runStep("Installed CLI: standalone and package-backed browser/SSR consumers", async () => {
    const cli = path.join(consumer, "node_modules/@aether-ui/react/bin/cli.mjs");
    for (const slug of ["button", "agent-inbox", "chat-composer", "toaster", "settings-preferences"]) {
      const item = manifest.find(item => item.slug === slug);
      for (const clean of [false, ...(item.clean ? [true] : [])]) for (const packageMode of [false, true]) {
        const target = path.join(consumer, `export-${slug}-${clean}-${packageMode}`);
        execFileSync(process.execPath, [cli, "add", slug, ...(clean ? ["--clean"] : []), ...(packageMode ? ["--package"] : []), "--dir", target], { cwd: consumer, stdio: "pipe" });
        const entry = path.join(target, `${slug}.tsx`);
        const server = path.join(target, "server.mjs");
        await build({ entryPoints: [entry], bundle: true, format: "esm", platform: "node", external: ["react", "react-dom", "react/jsx-runtime"], loader: { ".css": "empty" }, outfile: server, logLevel: "silent" });
        await build({ entryPoints: [entry], bundle: true, format: "esm", platform: "browser", external: ["react", "react-dom", "react/jsx-runtime"], loader: { ".woff": "file", ".woff2": "file" }, outdir: path.join(target, "browser"), logLevel: "silent" });
        fs.writeFileSync(path.join(target, "render.mjs"), `import React from "react"; import {renderToString} from "react-dom/server"; import Component from "./server.mjs"; import {businessProps} from "../business.mjs"; const html=renderToString(React.createElement(Component,businessProps[${JSON.stringify(slug)}]??{})); if(!html)throw Error("Empty render");`);
        execFileSync(process.execPath, [path.join(target, "render.mjs")], { cwd: consumer, stdio: "pipe" });
      }
    }
  });
  await runStep("Generated CLI TypeScript entries", () => {
    const config = JSON.parse(fs.readFileSync(path.join(consumer, "tsconfig.json")));
    config.include = ["consumer.tsx", "export-*/**/*.tsx"];
    fs.writeFileSync(path.join(consumer, "tsconfig.json"), JSON.stringify(config));
    execFileSync(process.execPath, [path.join(root, "node_modules/typescript/bin/tsc"), "-p", path.join(consumer, "tsconfig.json"), "--pretty", "false"], { cwd: consumer, stdio: "pipe" });
  });
  if (!consumerOnly) await runStep("Showcase build", () => npm(["run", "build:site"]));
  console.log("All requested checks completed successfully. Browser interaction checks are reported separately.");
} finally {
  fs.rmSync(consumer, { recursive: true, force: true });
}

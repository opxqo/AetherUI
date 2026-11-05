import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { build } from "esbuild";
import React from "react";
import { renderToString } from "react-dom/server";
import { collectComponentFiles, exportComponent } from "../bin/lib/export-component.mjs";
import { businessProps } from "./fixtures/business.mjs";
const root = path.resolve(import.meta.dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "src/component-manifest.json")));

test("dependency closure resolves for every Classic and Clean variant", async () => {
  let count = 0;
  for (const item of manifest) for (const variant of ["classic", ...(item.clean ? ["clean"] : [])]) {
    const entry = `src/components/ui/${variant === "clean" ? "clean/" : ""}${item.slug}.js`;
    const files = await collectComponentFiles(root, entry);
    assert.ok(files.has(entry));
    assert.ok(files.has("src/styles.css"));
    assert.ok([...files.keys()].some(name => name.endsWith(".woff2")), `${item.slug}: local font assets`);
    count++;
  }
  assert.equal(count, 217);
});

test("representative standalone exports build with assets and render outside the repository", async () => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "aether-cli-test-"));
  // Runtime packages are external. Full npm installation is separately covered by verify-consumer.
  fs.symlinkSync(path.join(root, "node_modules"), path.join(temporary, "node_modules"), "dir");
  try {
    for (const slug of ["button", "agent-inbox", "chat-composer", "toaster", "settings-preferences"]) {
      const item = manifest.find(item => item.slug === slug);
      for (const variant of ["classic", ...(item.clean ? ["clean"] : [])]) {
        const target = path.join(temporary, variant, slug);
        const { entry } = await exportComponent(root, item, variant, target);
        const outfile = path.join(target, "server.mjs");
        await build({ entryPoints: [entry], bundle: true, platform: "node", format: "esm", external: ["react", "react-dom", "react/jsx-runtime"], loader: { ".css": "empty" }, outfile, logLevel: "silent" });
        const exported = await import(outfile);
        const html = renderToString(React.createElement(exported.default, businessProps[slug] ?? {}));
        assert.ok(html.length > 0, `${slug} ${variant}`);
        if (slug === "button") assert.equal((html.match(/<button\b/g) ?? []).length, 1);
        await build({ entryPoints: [entry], bundle: true, platform: "browser", format: "esm", external: ["react", "react-dom", "react/jsx-runtime"], loader: { ".woff": "file", ".woff2": "file" }, outdir: path.join(target, "browser"), logLevel: "silent" });
        assert.ok(fs.statSync(path.join(target, "browser", `${slug}.css`)).size > 1000);
      }
    }
  } finally { fs.rmSync(temporary, { recursive: true, force: true }); }
});

test("invalid variants and incomplete graphs fail before creating output", async () => {
  const target = path.join(os.tmpdir(), `aether-invalid-${process.pid}`);
  const result = (() => { try { execFileSync(process.execPath, ["bin/cli.mjs", "add", "world-map", "--clean", "--dir", target], { cwd: root, stdio: "pipe" }); return 0; } catch (error) { return error.status; } })();
  assert.notEqual(result, 0);
  assert.ok(!fs.existsSync(target));
  await assert.rejects(collectComponentFiles(root, "src/components/ui/does-not-exist.js"));
});

test("package wrappers preserve actual export names instead of display-name guesses", async () => {
  const target = fs.mkdtempSync(path.join(os.tmpdir(), "aether-package-wrapper-"));
  try {
    const item = manifest.find(item => item.slug === "assistant-home");
    await exportComponent(root, item, "classic", target, true);
    assert.match(fs.readFileSync(path.join(target, `${item.slug}.tsx`), "utf8"), /@aether-ui\/react\/ui\/assistant-home/);
    assert.ok(!fs.existsSync(path.join(target, "_engine")));
  } finally { fs.rmSync(target, { recursive: true, force: true }); }
});

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import React from "react";
import { renderToString } from "react-dom/server";
import { businessProps } from "./fixtures/business.mjs";
const manifest = JSON.parse(fs.readFileSync(new URL("../src/component-manifest.json", import.meta.url)));

test("all 287 public components and demos render in Node without browser globals", async () => {
  assert.equal(typeof globalThis.document, "undefined");
  assert.equal(typeof globalThis.window, "undefined");
  const classic = await import("../dist/lib/index.js");
  const clean = await import("../dist/lib/clean.js");
  let count = 0;
  for (const item of manifest) for (const [variant, lib] of [["classic", classic], ...(item.clean ? [["clean", clean]] : [])]) {
    assert.doesNotThrow(() => renderToString(React.createElement(lib[item.primary], businessProps[item.slug] ?? {})), `${item.slug} ${variant} business`);
    assert.doesNotThrow(() => renderToString(React.createElement(lib[item.primary], { demo: true })), `${item.slug} ${variant} explicit demo`);
    assert.doesNotThrow(() => renderToString(React.createElement(lib[`${item.primary}Demo`])), `${item.slug} ${variant} named demo`);
    count++;
  }
  assert.equal(count, 287);
});

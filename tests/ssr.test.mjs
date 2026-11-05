import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import ReactDOMServer from "react-dom/server";

test("Issue 4: Root index and clean entries load in pure Node without document/window errors", async () => {
  assert.equal(typeof globalThis.document, "undefined", "document must not be mocked in this test");
  assert.equal(typeof globalThis.window, "undefined", "window must not be mocked in this test");

  const classicLib = await import("../dist/lib/index.js");
  const cleanLib = await import("../dist/lib/clean.js");

  assert.ok(classicLib.AgentInbox, "AgentInbox should be exported from index.js");
  assert.ok(cleanLib.AgentInbox, "AgentInbox should be exported from clean.js");
  assert.ok(cleanLib.toast, "toast should be exported from clean.js");
  assert.equal(typeof cleanLib.toast.success, "function", "toast.success should be callable");
});

test("Issue 4: Components renderToString in Node SSR without DOM exceptions", async () => {
  const classicLib = await import("../dist/lib/index.js");
  const cleanLib = await import("../dist/lib/clean.js");

  const componentsToTest = [
    { name: "AgentInbox (Classic)", element: React.createElement(classicLib.AgentInbox) },
    { name: "AgentInbox (Clean)", element: React.createElement(cleanLib.AgentInbox) },
    { name: "AIAnswer (Clean)", element: React.createElement(cleanLib.AIAnswer) },
    { name: "ThinkingState (Clean)", element: React.createElement(cleanLib.ThinkingState) },
    { name: "Toaster (Clean)", element: React.createElement(cleanLib.Toaster) },
    { name: "AutonomyDial (Classic)", element: React.createElement(classicLib.AutonomyDial) },
  ];

  for (const { name, element } of componentsToTest) {
    let html = "";
    assert.doesNotThrow(() => {
      html = ReactDOMServer.renderToString(element);
    }, `${name} failed to render in SSR`);
    assert.ok(html.length > 0, `${name} returned empty HTML`);
  }
});

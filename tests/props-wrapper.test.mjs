import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToString } from "react-dom/server";
const classic = await import("../dist/lib/index.js");
const clean = await import("../dist/lib/clean.js");

test("normal Button preserves children, host attributes and one-button semantics", () => {
  for (const lib of [classic, clean]) {
    const html = renderToString(React.createElement(lib.Button, {
      id: "save", className: "custom", style: { marginTop: 7 }, "aria-label": "Save", "data-owner": "app", children: "保存",
    }));
    assert.equal((html.match(/<button\b/g) ?? []).length, 1);
    for (const text of ['id="save"', 'class="ui-button', 'custom', 'margin-top:7px', 'aria-label="Save"', 'data-owner="app"', '保存']) assert.ok(html.includes(text), text);
    assert.ok(!html.includes("data-aether-wrapper"));
  }
});

test("business input is independent of styling; demos require explicit opt-in", () => {
  for (const lib of [classic, clean]) {
    const props = { tasks: [{ id: "task", title: "验收业务任务", agent: "Reviewer", status: "waiting" }] };
    assert.ok(renderToString(React.createElement(lib.AgentInbox, props)).includes("验收业务任务"));
    assert.ok(renderToString(React.createElement(lib.AgentInbox, { ...props, className: "custom" })).includes("验收业务任务"));
    const explicit = renderToString(React.createElement(lib.Button, { demo: true }));
    assert.ok((explicit.match(/<button\b/g) ?? []).length > 1);
    assert.ok(renderToString(React.createElement(lib.ButtonDemo)).length > 0);
    assert.ok(!renderToString(React.createElement(lib.AgentInbox, { tasks: [] })).includes("Migrate"));
  }
});

test("root, clean and subpath imports share the exact same stateful exports", async () => {
  const rootToast = await import("../dist/lib/ui/toaster.js");
  const cleanToast = await import("../dist/lib/ui/clean/toaster.js");
  assert.equal(classic.toast, clean.toast);
  assert.equal(classic.toast, rootToast.toast);
  assert.equal(classic.toast, cleanToast.toast);
  assert.equal(classic.ScreenFullContext, clean.ScreenFullContext);
});

test("helpers are helpers, not aliases of their parent components", () => {
  assert.notEqual(classic.StepperField, classic.StepperForm);
  assert.notEqual(classic.ToolCallGroup, classic.ToolCallCard);
  assert.notEqual(classic.ShimmerText, classic.Shimmer);
  assert.notEqual(classic.TextColumnIcon, classic.DataTable);
  const blocks = [{ id: "a", text: "hello" }];
  const suggestions = [{ id: "s", block: "a", at: 0, remove: 5, insert: "saved", agent: "a" }];
  assert.equal(classic.acceptSuggestion(blocks, suggestions, "s").blocks[0].text, "saved");
});


test("ordinary Toaster contains no interactive demo preset", () => {
  for (const lib of [classic, clean]) {
    const html = renderToString(React.createElement(lib.Toaster));
    assert.ok(!html.includes("Save draft"));
    assert.ok(!html.includes("toaster-demo__panel"));
  }
});

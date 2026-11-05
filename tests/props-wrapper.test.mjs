import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import ReactDOMServer from "react-dom/server";

test("Issue 3: Passing className or style alone keeps demo preset wrapped rather than switching to empty bare component", async () => {
  const { AgentInbox } = await import("../dist/lib/clean.js");

  // 1. Default render (no props) -> renders demo
  const defaultHtml = ReactDOMServer.renderToString(React.createElement(AgentInbox));
  assert.ok(defaultHtml.length > 100, "Default render should contain demo content");

  // 2. Render with className only -> renders demo wrapped with the className
  const styledHtml = ReactDOMServer.renderToString(
    React.createElement(AgentInbox, { className: "my-custom-container" })
  );
  assert.ok(
    styledHtml.includes("my-custom-container"),
    "Render with className should contain the custom class in outer markup"
  );
  // Verify it still contains actual demo content rather than an empty bare shell
  assert.ok(
    styledHtml.length >= defaultHtml.length - 50,
    "Styled render should still contain the demo content and not collapse to empty shell"
  );

  // 3. Render with custom business props -> switches to inner raw component receiving custom props
  const customTaskTitle = "Audit remediation task verification";
  const customHtml = ReactDOMServer.renderToString(
    React.createElement(AgentInbox, {
      tasks: [
        {
          id: "task-test-99",
          title: customTaskTitle,
          status: "waiting",
        },
      ],
    })
  );
  assert.ok(
    customHtml.includes(customTaskTitle),
    "Custom task prop should be rendered by the underlying component"
  );
});

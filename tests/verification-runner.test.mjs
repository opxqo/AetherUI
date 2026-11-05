import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { runStep } from "../scripts/verification-runner.mjs";

test("async verification waits before printing PASSED and rejects failures", async () => {
  const events = [];
  await runStep("async", async () => { await Promise.resolve(); events.push("complete"); }, message => events.push(message));
  assert.ok(events.indexOf("complete") < events.indexOf("async: PASSED"));
  await assert.rejects(runStep("reject", async () => { throw new Error("expected failure"); }, () => {}), /expected failure/);
});

test("both sync and async verification failures produce a failing process", () => {
  for (const callback of ['() => { throw new Error("sync"); }', 'async () => { await Promise.resolve(); throw new Error("async"); }']) {
    const processResult = spawnSync(process.execPath, ["--input-type=module", "-e", `import { runStep } from "./scripts/verification-runner.mjs"; await runStep("failure", ${callback}); console.log("ALL PASSED");`], { encoding: "utf8" });
    assert.notEqual(processResult.status, 0);
    assert.ok(!processResult.stdout.includes("PASSED"));
  }
});

test("merged refs notify internal and external refs and run cleanup", async () => {
  const { mergeRefs } = await import("../src/affectui-engine/dom-props.js");
  const internal = { current: null }, events = [], node = {};
  const cleanup = mergeRefs(internal, value => { events.push(value); return () => events.push("cleanup"); })(node);
  assert.equal(internal.current, node);
  assert.deepEqual(events, [node]);
  cleanup();
  assert.equal(internal.current, null);
  assert.deepEqual(events, [node, "cleanup"]);
});

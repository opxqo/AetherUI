import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

test("Issue 1: CLI add exports standalone runnable components without broken @/affectui-engine imports", () => {
  const targetDir = path.resolve(".test-tmp/cli-verify");
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }

  // Execute CLI add
  execSync(`node bin/cli.mjs add agent-inbox --clean --dir "${targetDir}"`, {
    stdio: "pipe",
  });

  const componentPath = path.join(targetDir, "agent-inbox.tsx");
  assert.ok(fs.existsSync(componentPath), "agent-inbox.tsx must be generated");

  const content = fs.readFileSync(componentPath, "utf8");

  // Check no broken @/affectui-engine/ imports
  assert.doesNotMatch(
    content,
    /@\/affectui-engine\//,
    "Standalone exported component must NOT import from @/affectui-engine/"
  );

  // Check _engine directory exists and contains necessary runtime files
  const engineDir = path.join(targetDir, "_engine");
  assert.ok(fs.existsSync(engineDir), "_engine closure directory must exist");
  const engineFiles = fs.readdirSync(engineDir);
  assert.ok(engineFiles.length > 0, "_engine directory must contain resolved runtime dependencies");

  // Cleanup test artifacts
  fs.rmSync(targetDir, { recursive: true, force: true });
});

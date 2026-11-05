import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";

test("public declarations pass strict TypeScript with declaration checking enabled", () => {
  execFileSync(process.execPath, ["node_modules/typescript/bin/tsc", "--project", "tests/types/tsconfig.json", "--pretty", "false"], { stdio: "pipe" });
});

test("contracts contain no any escape hatch or catch-all component props", () => {
  for (const file of fs.readdirSync("src/contracts")) {
    const code = fs.readFileSync(`src/contracts/${file}`, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    assert.doesNotMatch(code, /\bany\b|\[key:\s*string\]/, file);
  }
});

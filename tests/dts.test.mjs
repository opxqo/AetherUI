import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("Issue 2: Type generation - zero duplicate properties and proper typing", () => {
  const classicFiles = fs
    .readdirSync("src/components/ui")
    .filter((f) => f.endsWith(".d.ts"))
    .map((f) => path.join("src/components/ui", f));

  const cleanFiles = fs
    .readdirSync("src/components/ui/clean")
    .filter((f) => f.endsWith(".d.ts"))
    .map((f) => path.join("src/components/ui/clean", f));

  const allFiles = [...classicFiles, ...cleanFiles];
  assert.ok(allFiles.length >= 217, `Expected at least 217 d.ts files, got ${allFiles.length}`);

  let duplicateCount = 0;
  let anyClassNameCount = 0;

  for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, "utf8");

    // Check for className?: any
    if (/className\?:\s*any\b/.test(content)) {
      anyClassNameCount++;
      console.error(`Found className?: any in ${filePath}`);
    }

    // Check interface duplicate keys
    const ifaceMatch = content.match(/export interface \w+Props\s*\{([\s\S]*?)\}/);
    if (ifaceMatch) {
      const body = ifaceMatch[1];
      const propLines = body
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith("/**") && !l.startsWith("*") && !l.startsWith("["));

      const seen = new Set();
      for (const line of propLines) {
        const keyMatch = line.match(/^(\w+)\??\s*:/);
        if (keyMatch) {
          const key = keyMatch[1];
          if (seen.has(key)) {
            duplicateCount++;
            console.error(`Duplicate prop "${key}" in ${filePath}`);
          }
          seen.add(key);
        }
      }
    }
  }

  assert.equal(duplicateCount, 0, `Expected 0 duplicate properties across all .d.ts, found ${duplicateCount}`);
  assert.equal(anyClassNameCount, 0, `Expected 0 "className?: any" definitions, found ${anyClassNameCount}`);
});

test("Issue 2: Toaster d.ts exports callable ToastFn rather than React.FC<ToasterProps>", () => {
  const classicToaster = fs.readFileSync("src/components/ui/toaster.d.ts", "utf8");
  const cleanToaster = fs.readFileSync("src/components/ui/clean/toaster.d.ts", "utf8");

  for (const [name, content] of [["classic", classicToaster], ["clean", cleanToaster]]) {
    assert.match(content, /export interface ToastFn\s*\{/, `${name} toaster should define ToastFn interface`);
    assert.match(content, /export declare const toast:\s*ToastFn;/, `${name} toaster should export toast as ToastFn`);
    assert.doesNotMatch(content, /export declare const toast:\s*React\.FC<ToasterProps>;/, `${name} toast must not be typed as React.FC<ToasterProps>`);
  }
});

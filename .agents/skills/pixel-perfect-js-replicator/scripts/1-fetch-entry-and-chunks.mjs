#!/usr/bin/env node
/**
 * 1-fetch-entry-and-chunks.mjs
 *
 * Fetches the HTML of a target page, extracts all module scripts, modulepreload
 * links, stylesheets, and inline <head> scripts, downloads the main entry JS
 * and CSS bundles into a scratch directory, and lists discovered lazy chunks.
 *
 * Usage:
 *   node 1-fetch-entry-and-chunks.mjs <target-url> <scratch-dir> [search-keyword]
 */

import fs from "node:fs";
import path from "node:path";

const [targetUrl, scratchDir, keyword] = process.argv.slice(2);

if (!targetUrl || !scratchDir) {
  console.error(
    "Usage: node 1-fetch-entry-and-chunks.mjs <target-url> <scratch-dir> [search-keyword]",
  );
  process.exit(1);
}

fs.mkdirSync(scratchDir, { recursive: true });

const origin = new URL(targetUrl).origin;

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return res.text();
}

async function main() {
  console.log(`[1/4] Fetching HTML from ${targetUrl}...`);
  const html = await fetchText(targetUrl);
  fs.writeFileSync(path.join(scratchDir, "page.html"), html, "utf8");

  const scriptMatches = [
    ...html.matchAll(/<script[^>]+src=["']([^"']+)["'][^>]*>/g),
  ].map((m) => m[1]);
  const preloadMatches = [
    ...html.matchAll(
      /<link[^>]+rel=["']modulepreload["'][^>]+href=["']([^"']+)["']/g,
    ),
  ].map((m) => m[1]);
  const cssMatches = [
    ...html.matchAll(
      /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/g,
    ),
  ].map((m) => m[1]);

  console.log("[2/4] Discovered assets in HTML:");
  console.log("  Entry scripts:", scriptMatches);
  console.log("  Modulepreloads:", preloadMatches);
  console.log("  Stylesheets:", cssMatches);

  // Download CSS files
  for (const cssHref of cssMatches) {
    const fullUrl = new URL(cssHref, origin).href;
    const filename = path.basename(new URL(fullUrl).pathname);
    const cssText = await fetchText(fullUrl);
    fs.writeFileSync(path.join(scratchDir, filename), cssText, "utf8");
    console.log(`  Downloaded CSS: ${filename} (${cssText.length} bytes)`);

    // Extract @font-face woff2 URLs
    const fontUrls = [
      ...cssText.matchAll(/url\(([^)]+\.woff2)\)/g),
    ].map((m) => m[1].replace(/["']/g, ""));
    if (fontUrls.length > 0) {
      console.log(`  Discovered @font-face woff2 assets:`, fontUrls);
    }
  }

  // Download main entry script(s)
  for (const scriptSrc of scriptMatches) {
    const fullUrl = new URL(scriptSrc, origin).href;
    const filename = path.basename(new URL(fullUrl).pathname);
    const jsText = await fetchText(fullUrl);
    fs.writeFileSync(path.join(scratchDir, filename), jsText, "utf8");
    console.log(
      `[3/4] Downloaded Entry JS: ${filename} (${jsText.length} bytes)`,
    );

    if (keyword) {
      console.log(`[4/4] Searching ${filename} for keyword "${keyword}"...`);
      let idx = 0;
      while ((idx = jsText.indexOf(keyword, idx)) !== -1) {
        const snippet = jsText.slice(
          Math.max(0, idx - 180),
          Math.min(jsText.length, idx + 420),
        );
        console.log(`\n--- Match at offset ${idx} ---\n${snippet}`);
        idx += keyword.length;
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

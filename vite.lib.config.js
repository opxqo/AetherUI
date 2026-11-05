import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";

const manifest = JSON.parse(fs.readFileSync(new URL("./src/component-manifest.json", import.meta.url), "utf8"));
const entry = { index: "src/index.js", clean: "src/clean.js", styles: "src/library-styles.js" };
for (const item of manifest) {
  entry[`ui/${item.slug}`] = `src/components/ui/${item.slug}.js`;
  if (item.clean) entry[`ui/clean/${item.slug}`] = `src/components/ui/clean/${item.slug}.js`;
}
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: "dist/lib", emptyOutDir: true,
    lib: { entry: Object.fromEntries(Object.entries(entry).map(([name, file]) => [name, path.resolve(file)])), formats: ["es"], cssFileName: "styles" },
    rollupOptions: {
      external: id => /^(react|react-dom)(\/|$)/.test(id),
      output: { entryFileNames: "[name].js", chunkFileNames: "chunks/[name]-[hash].js", assetFileNames: "[name][extname]" },
    },
  },
});

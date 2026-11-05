import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist/site",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@aether-ui/react/clean": path.resolve(__dirname, "./src/clean.js"),
      "@aether-ui/react/ui": path.resolve(__dirname, "./src/components/ui"),
      "@aether-ui/react/styles.css": path.resolve(__dirname, "./src/styles.css"),
      "@aether-ui/react": path.resolve(__dirname, "./src/index.js"),
      "@affectui/react/clean": path.resolve(__dirname, "./src/clean.js"),
      "@affectui/react/ui": path.resolve(__dirname, "./src/components/ui"),
      "@affectui/react/styles.css": path.resolve(__dirname, "./src/styles.css"),
      "@affectui/react": path.resolve(__dirname, "./src/index.js"),
    },
  },
});

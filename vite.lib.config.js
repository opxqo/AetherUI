import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist/lib",
    emptyOutDir: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.js"),
        clean: path.resolve(__dirname, "src/clean.js"),
      },
      formats: ["es"],
      cssFileName: "styles",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-dom/client",
        "react-dom/server",
      ],
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});

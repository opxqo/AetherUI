---
name: pixel-perfect-js-replicator
description: >-
  Use this skill when the user asks to 1:1 pixel-perfectly replicate, clone, or
  extract a web component, screen, or interactive UI from a live URL or web app
  by analyzing its source JavaScript/CSS bundles rather than guessing from
  screenshots. Covers entry bundle discovery, recursive ES module graph
  crawling, bundler runtime unwrapping (Vite/Rolldown/Webpack/Next.js), scoped
  CSS/font extraction, and motion/interaction preservation.
---

# Pixel-Perfect Source-JS Component Replicator

This skill provides a deterministic, zero-guesswork workflow for replicating web UI components and full application screens with **100% 1:1 fidelity** (DOM hierarchy, CSS variables, SVG paths, keyframe animations, Web Animations API / FLIP transitions, and keyboard interactions) directly from a target site's production JavaScript and CSS bundles.

> **Core Principle**: Never approximate UI layout, colors, SVG paths, or motion curves from screenshots when the production JS/CSS bundle is accessible. Extract the exact component module graph, unwrap the bundler runtime into clean standard React/ESM modules, and preserve self-contained styles and animations verbatim.

---

## End-to-End Replication Workflow

### Phase 1: Entry HTML & Bundle Discovery

1. Fetch the target page HTML and extract all `<script type="module" src="...">`, `<link rel="modulepreload" href="...">`, `<link rel="stylesheet" href="...">`, and inline `<head>` theme initialization scripts.
2. Run the entry discovery helper script or inspect the HTML manually:
   - Script: [1-fetch-entry-and-chunks.mjs](./scripts/1-fetch-entry-and-chunks.mjs)
   - Usage:
     ```bash
     node .agents/skills/pixel-perfect-js-replicator/scripts/1-fetch-entry-and-chunks.mjs <target-url> <scratch-dir>
     ```
3. Search the main entry bundle (`index-*.js`) for:
   - The target route slug (e.g., `slug:"assistant-home"`, `slug:"thinking-state"`), OR
   - Unique UI strings / DOM attributes from the user's element selector (e.g., `data-panel`, greeting text, button labels), OR
   - Lazy-loaded chunk mappings such as `__vite__mapDeps([...])` or `import("./component-XXXX.js")`.

---

### Phase 2: Recursive Module Graph Crawling

Once you identify the target component's entry chunk (e.g., `demo-*.js` or `component-*.js`):

1. Recursively download every relative ES module (`from "./..."`) imported by that chunk until the leaf nodes are reached.
   - Script: [2-crawl-module-graph.mjs](./scripts/2-crawl-module-graph.mjs)
   - Usage:
     ```bash
     node .agents/skills/pixel-perfect-js-replicator/scripts/2-crawl-module-graph.mjs <base-assets-url> <scratch-dir> <entry-chunk.js>
     ```
2. Classify the downloaded modules into 4 categories:
   - **Bundler Runtime Shims** (to be replaced with standard npm packages): e.g., `react-*.js`, `jsx-runtime-*.js`, `rolldown-runtime-*.js`, `preload-helper-*.js`.
   - **Host App Shared Exports** (inspect where imported symbols point in `index-*.js`): e.g., `import { kt as r } from "./index-*.js"` where `kt` is `ReactDOM` (`createPortal`), or stage wrapper components.
   - **Self-Contained UI Subcomponents**: e.g., `chat-composer`, `thinking-state`, `command-menu`, `filter-menu`, `setup-guide`.
   - **Leaf Icon / Data Modules**: e.g., `HugeiconsIcon-*.js` and individual SVG path array modules.

---

### Phase 3: Unwrapping Bundler Runtimes into Standard React Modules

Convert the downloaded production modules into clean, portable React modules without altering any component logic, JSX props, SVG paths, or embedded CSS strings.

1. Read [bundler-unwrapping-patterns.md](./references/bundler-unwrapping-patterns.md) for detailed patterns across Vite/Rolldown, Webpack, and Next.js chunks.
2. Use the automated unwrapper script to replace bundler shims with standard `"react"`, `"react/jsx-runtime"`, and `"react-dom"` imports, remap hashed filenames to semantic filenames, and format with Prettier:
   - Script: [3-unwrap-bundler-runtime.mjs](./scripts/3-unwrap-bundler-runtime.mjs)
   - Usage:
     ```bash
     node .agents/skills/pixel-perfect-js-replicator/scripts/3-unwrap-bundler-runtime.mjs <scratch-dir> <target-src-dir> <mapping-json>
     ```
3. Expose semantic named exports (e.g., `export { w as AssistantHomeScreen, o as ThinkingStateClassic }`) alongside the original short exports so the components can be both dropped into any project standalone and imported by sibling modules without breaking internal references.

---

### Phase 4: Exact Container Layout, Fonts, Theme & Global Listeners

A component's internal code is only half of 1:1 visual fidelity—its **host container dimensions**, **fonts**, **theme variables**, and **document-level event listeners** determine the final computed layout:

1. **Match the Host Container Layout**:
   - Check the user's selector metadata (e.g., `layout: display:grid; grid-template-columns:272px 1168px 0px; width:1440px; height:900px` or `width:894px; height:520px`).
   - Find the host container class in the main bundle/CSS (e.g., `.screen-full { position: fixed; inset: 0; }` for full-viewport app screens, or `.doc { max-width: 894px } .stage { height: 520px; padding: 45px; display: grid }` for component preview stages).
2. **Download Original `@font-face` Assets**:
   - Extract `@font-face` rules from the main CSS bundle and download the exact `.woff2` font files into `public/assets/` so text metrics, line breaks, and kerning match to the sub-pixel.
3. **Preserve Theme Initialization & Document Listeners**:
   - Copy the `<head>` theme script (`localStorage.getItem("theme")`, `.dark` class, `data-theme` attribute) into `index.html`.
   - Check the end of the main entry bundle (`index-*.js`) for global `document.addEventListener` handlers (such as roving `tabindex` keyboard navigation for `[role="radiogroup"]` and `[role="tablist"]`) and include them in `src/main.jsx`.
   - See [style-and-motion-preservation.md](./references/style-and-motion-preservation.md) for details.

---

### Phase 5: Verification Checklist

Before finishing, always verify the following:

1. **Production Build Verification**: Run `npm run build` (`vite build`) to confirm every module import, export binding, and asset path resolves with zero errors.
2. **Computed Layout Match**: Verify that the root element's tag, `className`, `data-*` attributes (e.g., `data-panel="closed"`), `display`, `grid-template-columns`, `width`, and `height` match the user's target specification.
3. **Interactive & Motion Fidelity**:
   - Test phase transitions and Web Animations API (`Element.animate`) FLIP transitions.
   - Test popovers, portals (`ReactDOM.createPortal`), keyboard shortcuts (`⌘K`, `Escape`, arrow keys), and theme switching (`Light` / `Dark` / `System`).
4. **Portability**: Verify `package.json` only depends on `react` and `react-dom` so any component file can be copied directly into another React project with zero external UI library dependencies.

---

## Reference Documentation & Examples

- [Bundler Unwrapping Patterns](./references/bundler-unwrapping-patterns.md): Detailed AST and regex transformation patterns for Vite/Rolldown, Webpack, and Esbuild bundles.
- [Style & Motion Preservation Guide](./references/style-and-motion-preservation.md): How to extract scoped `<style>` tags, CSS custom properties, container queries, and FLIP animations without regression.
- [affectUI 1:1 Replication Walkthrough](./examples/affectui-replication-walkthrough.md): Step-by-step case study of replicating `AssistantHomeScreen` (`/screens/assistant-home`) and `ThinkingState` (`/components/thinking-state`).

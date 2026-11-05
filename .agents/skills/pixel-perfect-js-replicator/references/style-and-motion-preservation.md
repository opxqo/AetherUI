# Style, Layout, Font & Motion Preservation Guide

Achieving true **1:1 pixel-perfect fidelity** requires more than just rendering the component's JSX. Computed layout, typography, theme variables, animations, and keyboard accessibility depend on 5 surrounding layers.

---

## 1. Self-Contained `<style>` Tags & CSS Custom Properties

Modern component libraries (like affectUI) often embed scoped stylesheets directly inside the component's render tree using React 19's `<style href="..." precedence="default">`:

```jsx
<style href="ui-app-shell" precedence="default">
  {cssString}
</style>
```

### Rules for Preserving Embedded Styles
1. **Never Strip or Rewrite Embedded CSS Strings**: The embedded CSS string defines all scoped custom properties (`--tray`, `--card`, `--page`, `--panel`, `--ink`, `--muted`, `--card-shadow`, `--ease`), container queries (`@container ui-as (max-width: 900px)`), and dark-mode overrides (`:where(.dark, [data-theme="dark"]) .ui-as`).
2. **React 18 / 19 Compatibility**: In React 19, `<style href="..." precedence="default">` automatically hoists and deduplicates the `<style>` tag in `<head>`. In React 18, it renders inline as a normal `<style>` tag without error.

---

## 2. Matching the Host Container Dimensions

When a user provides inspector metadata for a target element, pay close attention to `layout`:

### Case A: Full-Screen App Shells (`1440×900` Grid)
```text
locator: div "A Acme Search… ⌘K New chat Folders Integrations …"
props: data-panel:closed
layout: display:grid; grid-template-columns:272px 1168px 0px; width:1440px; height:900px; position:relative
```
- The component's root `.ui-as.ui-as-app` uses `height: 100%; display: grid; grid-template-columns: var(--side-col) minmax(0, 1fr) var(--panel-col);` where `--side-col` defaults to `272px` and `--panel-col` is `0px` when `data-panel="closed"`.
- Wrapping it in `.screen-full { position: fixed; inset: 0; } .screen-full > * { height: 100%; }` makes it fill the `1440×900` viewport with exact `272px 1168px 0px` columns while remaining responsive across all screen sizes.

### Case B: Component Preview Stage (`894×520` Grid)
```text
locator: div "Thinking 0s Searching Slack – #team-offsite slac…"
inside: section
layout: display:grid; grid-template-columns:804px; width:894px; height:520px; position:relative
```
- Why is `grid-template-columns` `804px` inside an `894px` container?
- Because `.doc` has `max-width: 894px`, and `.stage` has `height: 520px; padding: 45px; display: grid;` (`894px - 2 × 45px = 804px`), plus `demo-Bwwy34Kj.css` sets `.stage .thinking-demo { align-self: start; margin-top: 56px; }`!
- Always check both `index.css` (for `.doc` and `.stage`) and the component's companion `demo-*.css` (for stage alignment overrides like `margin-top: 56px`).

---

## 3. Exact Font Asset Replication (`@font-face`)

Browser fallback fonts (`system-ui`, `-apple-system`) have different glyph widths and line heights than `Inter`, causing text wrapping, pill widths, and ellipsis truncation to differ by several pixels.

1. Search the main CSS bundle for `@font-face`:
   ```bash
   node -e '
   const css = require("fs").readFileSync("scratch/index.css", "utf8");
   console.log([...css.matchAll(/@font-face\{[^}]+\}/g)].map(m => m[0]).join("\n"));
   '
   ```
2. Download all referenced `.woff2` files into `public/assets/` and copy the `@font-face` declarations verbatim into `src/index.css`.

---

## 4. Preserving Web Animations API (FLIP) & CSS Keyframes

High-craft UI components often combine **CSS transitions** with **imperative Web Animations API (`Element.animate`) FLIP transitions**.

### Example: Composer Start-to-Chat FLIP Transition
In `assistant-home.js`:
1. When the user submits a prompt in `data-phase="start"`, the component records the composer's bounding box before state change:
   ```js
   prevRectRef.current = composerRef.current?.getBoundingClientRect() ?? null;
   setPhase("leaving"); // Triggers 180ms CSS opacity/translateY fade-out on title & chips
   window.setTimeout(() => {
     setPhase("chat");
     chat.send(text);
   }, 180);
   ```
2. Inside `useLayoutEffect([phase])`, when `phase === "chat"`, it measures the new bounding box at the bottom of the screen and runs a FLIP animation:
   ```js
   const nextRect = el.getBoundingClientRect();
   const scale = nextRect.width / el.offsetWidth || 1;
   const deltaY = (prevRectRef.current.top - nextRect.top) / scale;
   prevRectRef.current = null;
   el.animate(
     [{ transform: `translateY(${deltaY}px)` }, { transform: "none" }],
     { duration: 720, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
   );
   ```
Because we unwrap the source JS module directly rather than rewriting the animation by hand, both the `180ms` `"leaving"` phase and the `720ms cubic-bezier(0.22, 1, 0.36, 1)` FLIP animation are preserved intact.

---

## 5. Global Theme Sync & Document-Level Event Listeners

Always check two places outside the component files:
1. **`index.html` `<head>` Theme Script**:
   Syncs `localStorage.getItem("theme")` and `prefers-color-scheme: dark` to both `document.documentElement.dataset.theme` and `document.documentElement.classList.toggle("dark", dark)` before first paint.
2. **End of `index-*.js` Global Listeners**:
   Look for `document.addEventListener("keydown", ...)` and `document.addEventListener("focusin", ...)` at the bottom of the entry bundle. For example, affectUI registers a global roving-tabindex handler for all `[role="radiogroup"]` and `[role="tablist"]` controls. Copying this handler into `src/main.jsx` ensures full keyboard accessibility (`ArrowLeft`, `ArrowRight`, `Home`, `End`).

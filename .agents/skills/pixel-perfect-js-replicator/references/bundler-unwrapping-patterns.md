# Bundler Runtime Unwrapping Patterns

When extracting production JavaScript chunks from modern web apps (built with Vite, Rolldown, Rollup, Esbuild, or Webpack), the component logic is already valid JavaScript, but its imports and exports are wired to bundler-generated runtime shims. This guide documents how to cleanly unwrap those shims into standard, zero-dependency React ES modules.

---

## 1. Identifying Vite / Rolldown CommonJS-to-ESM Factory Shims

When Vite or Rolldown bundles CommonJS packages like `react`, `react/jsx-runtime`, and `react-dom`, it wraps them in a lazy CommonJS factory helper (`__commonJSMin` / `t(...)`) and exports that factory as `t`.

### Pattern in Raw Chunk
```js
import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { kt as r } from "./index-DrzmeL9u.js";

var Te = r(), // ReactDOM namespace (e.g. Te.createPortal)
    I  = e(), // React namespace (e.g. I.useState, I.useEffect, I.useRef)
    L  = t(); // jsx-runtime namespace (e.g. L.jsx, L.jsxs, L.Fragment)
```

### Why Direct Replacement Works
Notice that `e()`, `t()`, and `r()` are simply zero-argument functions that return the module namespace object!
Instead of rewriting every `(0, I.useState)(...)` or `(0, L.jsx)(...)` call across thousands of lines (which risks breaking variable shadowing in minified scopes), you can replace the import header with a 2-line namespace bridge:

```js
import * as __React from "react";
const e = () => __React;
import * as __jsxRuntime from "react/jsx-runtime";
const t = () => __jsxRuntime;
import * as __ReactDOM from "react-dom";
const r = () => __ReactDOM;
```

### Advantages of the Namespace Bridge Approach
1. **Zero Scope Collisions**: Minified functions often reuse single-letter parameter names (`e`, `t`, `n`, `r`) inside local scopes. Keeping the top-level factory variable name (`e`, `t`, `r`) untouched guarantees local parameter shadowing continues to work identically.
2. **100% Byte-for-Byte Logic Preservation**: Every hook dependency array, memoized callback, SVG coordinate, and DOM attribute remains untouched.
3. **Tree-Shakeable by Any Modern Bundler**: When you build the resulting project with Vite/Rollup/Webpack, `const e = () => __React` is inlined and tree-shaken automatically.

---

## 2. Resolving Cross-Chunk Imports from the Main Entry Bundle

Sometimes a lazy component chunk imports one or two symbols from the main entry bundle (`index-XXXX.js`), for example:
- `import { kt as r } from "./index-DrzmeL9u.js"` ( inside `component-CnXtAJBv.js`)
- `import { m as t, p as n } from "./index-DrzmeL9u.js"` (inside `demo-CT4L5yLv.js`)

### How to Trace Exported Aliases in `index-XXXX.js`
1. Inspect the `export { ... }` block at the very end of `index-XXXX.js`:
   ```bash
   node -e '
   const fs = require("fs");
   const c = fs.readFileSync("scratch/index.js", "utf8");
   console.log(c.slice(-2000));
   '
   ```
2. Find the internal identifier mapped to the exported alias:
   - Example: `export { ..., x as kt, ..., ku as m, ..., Eu as p }`
3. Search `index.js` for the top-level definition of that internal identifier (`var x = ...`, `function ku(...)`, `function Eu(...)`):
   - `x` -> `react-dom` (`createPortal`)
   - `ku` -> `onNavigate` router helper
   - `Eu` -> `1440×900` stage scaler / `.screen-full` wrapper

---

## 3. Decoding Lazy Chunk Dependency Maps (`__vite__mapDeps`)

In Vite production builds, lazy routes and component previews are registered alongside `__vite__mapDeps([...indices])`:

```js
Preview: (0, S.lazy)(() =>
  r(
    () => import("./demo-CT4L5yLv.js"),
    __vite__mapDeps([343, 3, 2, 326, 1, 76, 222, 318, 319, 86, 142, 208])
  )
)
```

At the very top of `index-XXXX.js`, `m.f = ["assets/...", ...]` defines the array of all chunk paths. You can decode any component's exact dependency list with a one-liner:

```js
const m = code.match(/m\.f=\[(.*?)\]\)\)/);
const deps = JSON.parse("[" + m[1] + "]");
for (const idx of [343, 3, 2, 326, 1, 76, 222, 318, 319, 86, 142, 208]) {
  console.log(idx, deps[idx]);
}
```

This immediately reveals:
- Which `.js` chunks are core components (`component-*.js`)
- Which `.js` chunks are standalone reusable subcomponents (`component.clean-*.js`)
- Which `.css` files (`demo-*.css`) are preloaded alongside the component!

---

## 4. Dual Export Strategy for Maximum Portability

Minified chunks export short aliases like:
```js
export { T as a, C as i, E as n, k as r, w as t };
```
To make the module **both** compatible with sibling modules that import `{ t as r }` **and** ergonomic for human developers importing it into their own projects, append semantic aliases to the export list:

```js
export {
  T as a,
  C as i,
  E as n,
  k as r,
  w as t,
  w as AssistantHomeScreen,
  w as default,
};
```

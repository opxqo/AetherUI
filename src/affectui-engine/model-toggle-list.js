// Model Toggle List — hand-written AetherUI component (not extracted from the AffectUI bundle).
// One service's models to switch on and off: a title with an "on of total" count, category tabs with their own
// counts, search, "enable all / disable all" for what is visible, and rows grouped by vendor. A row has an icon,
// a name, a trailing meta slot (e.g. a price), an optional note, a "Default" badge or a "Set default" action, and a
// switch; locked rows cannot be switched on. Every word comes from `labels`.
// Imports only React (see the note in dialog.js), styling uses only the global tokens.
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";

const HOST_ATTRS = new Set(["id", "role", "style", "className", "title", "tabIndex", "hidden", "lang", "dir", "draggable", "ref", "accessKey", "contentEditable", "spellCheck", "translate", "slot"]);
const pickDOMProps = (props) => Object.fromEntries(Object.entries(props ?? {}).filter(([key]) => HOST_ATTRS.has(key) || key.startsWith("aria-") || key.startsWith("data-") || /^on[A-Z]/.test(key)));

export const modelToggleListStyles = `
.ui-mtl{padding:20px;border-radius:var(--radius-surface,12px);background:var(--card);box-shadow:var(--shadow-clean-surface);font-family:var(--font-sans);font-size:13px;line-height:20px;color:var(--text-body)}
.ui-mtl__head{display:flex;align-items:baseline;gap:10px;margin-bottom:12px}
.ui-mtl__title{margin:0;font-size:15px;line-height:22px;font-weight:600;color:var(--text)}
.ui-mtl__summary{font-size:12px;color:var(--text-muted);font-variant-numeric:tabular-nums}
.ui-mtl__bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:12px}
.ui-mtl__tabs{display:inline-flex;flex:none;gap:2px;padding:2px;border-radius:var(--radius-control,9px);background:var(--ui-tray)}
.ui-mtl__tab{height:28px;padding:0 10px;border:0;border-radius:7px;background:transparent;font:500 12px/1 var(--font-sans);color:var(--text-muted);cursor:pointer;font-variant-numeric:tabular-nums;transition:background-color 140ms ease,color 140ms ease,box-shadow 140ms ease}
.ui-mtl__tab:hover{color:var(--text)}
.ui-mtl__tab[aria-selected="true"]{background:var(--card);color:var(--text);box-shadow:var(--shadow-clean-surface)}
.ui-mtl__tab:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring-accent)}
.ui-mtl__search{display:flex;align-items:center;gap:6px;width:200px;height:32px;padding:0 10px;border-radius:var(--radius-control,9px);background:var(--card);box-shadow:inset 0 0 0 0.5px var(--border-soft),0 1px 2px rgba(0,0,0,0.04);color:var(--text-muted)}
.ui-mtl__search:focus-within{box-shadow:inset 0 0 0 0.5px var(--border-soft),0 0 0 3px var(--accent-soft)}
.ui-mtl__search svg{flex:none;width:14px;height:14px}
.ui-mtl__search input{flex:1;min-width:0;height:100%;border:0;background:transparent;font:inherit;color:var(--text);outline:none}
.ui-mtl__search input::placeholder{color:var(--text-subtle)}
.ui-mtl__bulk{display:flex;gap:4px;margin-left:auto}
.ui-mtl__btn{height:28px;padding:0 10px;border:0;border-radius:7px;background:var(--card);box-shadow:inset 0 0 0 0.5px var(--border-soft),0 1px 2px rgba(0,0,0,0.04);font:500 12px/1 var(--font-sans);color:var(--text-body);cursor:pointer;white-space:nowrap;transition:background-color 140ms ease,color 140ms ease}
.ui-mtl__btn:hover:not(:disabled){background:var(--hover-bg);color:var(--text)}
.ui-mtl__btn:disabled{opacity:0.45;cursor:default}
.ui-mtl__btn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring-accent)}
.ui-mtl__btn--ghost{background:transparent;box-shadow:none;color:var(--text-muted)}
.ui-mtl__list{overflow:hidden;border-radius:10px;box-shadow:inset 0 0 0 0.5px var(--border-soft)}
.ui-mtl__group{padding:4px 12px;background:var(--preview);font-size:12px;line-height:18px;color:var(--text-muted)}
.ui-mtl__group:not(:first-child){box-shadow:inset 0 0.5px 0 var(--border-soft)}
.ui-mtl__row{display:flex;align-items:center;gap:10px;min-height:44px;padding:4px 10px 4px 12px;box-shadow:inset 0 0.5px 0 var(--border-soft);transition:background-color 140ms ease}
.ui-mtl__row:hover{background:var(--hover-bg)}
.ui-mtl__icon{display:grid;flex:none;place-items:center;width:18px;height:18px}
.ui-mtl__icon > *{max-width:18px;max-height:18px}
.ui-mtl__name{flex:1;min-width:0;overflow:hidden;padding:0;border:0;background:transparent;font:inherit;text-align:left;color:var(--text);white-space:nowrap;text-overflow:ellipsis;transition:opacity 200ms ease}
button.ui-mtl__name{cursor:pointer}
button.ui-mtl__name:hover{text-decoration:underline;text-underline-offset:3px}
.ui-mtl__row:not([data-on]) .ui-mtl__name{opacity:0.5}
.ui-mtl__meta{flex:none;font-size:12px;color:var(--text-muted);font-variant-numeric:tabular-nums}
.ui-mtl__note{flex:none;padding:0 6px;border-radius:6px;background:var(--muted-bg);font-size:11px;line-height:18px;color:var(--text-muted)}
.ui-mtl__badge{flex:none;padding:0 7px;border-radius:6px;background:var(--accent-soft);font-size:11px;font-weight:500;line-height:20px;color:var(--accent)}
.ui-mtl__switch{position:relative;flex:none;width:32px;height:20px;padding:0;border:0;border-radius:999px;background:#e2e2e2;cursor:pointer;transition:background-color 200ms ease}
:where(.dark,[data-theme="dark"]) .ui-mtl__switch{background:rgba(255,255,255,0.16)}
.ui-mtl__switch[aria-checked="true"]{background:var(--primary)}
.ui-mtl__switch::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.2);transition:translate 240ms var(--ease-out)}
:where(.dark,[data-theme="dark"]) .ui-mtl__switch[aria-checked="true"]::after{background:var(--primary-fg)}
.ui-mtl__switch[aria-checked="true"]::after{translate:12px 0}
.ui-mtl__switch:disabled{opacity:0.4;cursor:default}
.ui-mtl__switch:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring-accent)}
.ui-mtl__empty{padding:28px 12px;border-radius:10px;box-shadow:inset 0 0 0 0.5px var(--border-soft);text-align:center;font-size:12px;color:var(--text-muted)}
@media (prefers-reduced-motion: reduce){.ui-mtl__switch,.ui-mtl__switch::after,.ui-mtl__tab,.ui-mtl__row{transition:none}}
`;

const DEFAULT_LABELS = {
  title: "Models",
  summary: (on, total) => `${on} of ${total} on`,
  search: "Search models",
  enableAll: "Enable all",
  disableAll: "Disable all",
  default: "Default",
  setDefault: "Set default",
  enable: "Enable",
  noMatch: "No models match.",
  empty: "No models yet.",
};
const SearchIcon = () => jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", "aria-hidden": "true", children: [jsx("circle", { cx: 11, cy: 11, r: 7 }), jsx("path", { d: "m20 20-3.5-3.5" })] });

/** Category tabs, search, bulk switches and vendor-grouped model rows with a switch each. */
function ModelToggleList({ rows = [], categories = [], category: categoryProp, defaultCategory, onCategoryChange, onToggle, onSetDefault, labels: labelProp, className, style, ref, ...rest }) {
  const labels = { ...DEFAULT_LABELS, ...labelProp };
  const controlled = categoryProp !== undefined;
  const [inner, setInner] = React.useState(defaultCategory ?? categories[0]?.value ?? "");
  const current = categories.find((c) => c.value === (controlled ? categoryProp : inner)) ?? categories[0];
  const pick = (value) => { if (!controlled) setInner(value); onCategoryChange?.(value); };
  const [query, setQuery] = React.useState("");
  const q = query.trim().toLowerCase();
  const visible = rows.filter((r) => (!current || r.category === current.value) && (!q || `${r.id} ${r.name}`.toLowerCase().includes(q)));
  const groups = [];
  for (const row of visible) {
    const key = row.group ?? "";
    let group = groups.find((g) => g.key === key);
    if (!group) groups.push(group = { key, rows: [] });
    group.rows.push(row);
  }
  const switchable = visible.filter((r) => !r.locked);
  const total = rows.filter((r) => !r.locked || r.enabled).length;
  const on = rows.filter((r) => r.enabled).length;

  return jsxs("section", {
    ...pickDOMProps(rest),
    ref,
    className: ["ui-mtl", className].filter(Boolean).join(" "),
    style,
    children: [
      jsx("style", { href: "ui-model-toggle-list", precedence: "default", children: modelToggleListStyles }),
      jsxs("div", { className: "ui-mtl__head", children: [jsx("h3", { className: "ui-mtl__title", children: labels.title }), jsx("span", { className: "ui-mtl__summary", children: labels.summary(on, total) })] }),
      jsxs("div", { className: "ui-mtl__bar", children: [
        categories.length > 1 && jsx("div", { className: "ui-mtl__tabs", role: "tablist", "aria-label": labels.title, children: categories.map((c) => {
          const all = rows.filter((r) => r.category === c.value);
          return jsx("button", { type: "button", role: "tab", className: "ui-mtl__tab", "aria-selected": c.value === current?.value, onClick: () => pick(c.value), children: `${c.label} ${all.filter((r) => r.enabled).length}/${all.length}` }, c.value);
        }) }),
        jsxs("label", { className: "ui-mtl__search", children: [jsx(SearchIcon, {}), jsx("input", { type: "search", value: query, placeholder: labels.search, "aria-label": labels.search, onChange: (e) => setQuery(e.target.value), onKeyDown: (e) => { if (e.key === "Escape" && query) { e.stopPropagation(); setQuery(""); } } })] }),
        jsxs("div", { className: "ui-mtl__bulk", children: [
          jsx("button", { type: "button", className: "ui-mtl__btn", disabled: !switchable.length, onClick: () => onToggle?.(switchable.map((r) => r.id), true), children: labels.enableAll }),
          jsx("button", { type: "button", className: "ui-mtl__btn", disabled: !switchable.length, onClick: () => onToggle?.(switchable.map((r) => r.id), false), children: labels.disableAll }),
        ] }),
      ] }),
      groups.length ? jsx("div", { className: "ui-mtl__list", children: groups.map((group) => jsxs(React.Fragment, { children: [
        group.key && jsx("div", { className: "ui-mtl__group", children: group.key }),
        group.rows.map((row) => jsxs("div", { className: "ui-mtl__row", "data-on": row.enabled || undefined, children: [
          jsx("span", { className: "ui-mtl__icon", "aria-hidden": "true", children: row.icon }),
          row.onOpen
            ? jsx("button", { type: "button", className: "ui-mtl__name", title: row.title ?? row.id, onClick: row.onOpen, children: row.name })
            : jsx("span", { className: "ui-mtl__name", title: row.title ?? row.id, children: row.name }),
          row.meta && jsx("span", { className: "ui-mtl__meta", children: row.meta }),
          row.note && jsx("span", { className: "ui-mtl__note", title: row.note.hint, children: row.note.text }),
          row.action
            ? jsx("button", { type: "button", className: "ui-mtl__btn ui-mtl__btn--ghost", onClick: row.action.onClick, children: row.action.label })
            : row.isDefault
              ? jsx("span", { className: "ui-mtl__badge", children: labels.default })
              : row.enabled && onSetDefault
                ? jsx("button", { type: "button", className: "ui-mtl__btn ui-mtl__btn--ghost", onClick: () => onSetDefault(row.id), children: labels.setDefault })
                : null,
          jsx("button", { type: "button", role: "switch", className: "ui-mtl__switch", "aria-checked": !!row.enabled, "aria-label": `${labels.enable} ${row.name}`, disabled: row.locked, onClick: () => onToggle?.([row.id], !row.enabled) }),
        ] }, row.id)),
      ] }, group.key || "_"))}) : jsx("div", { className: "ui-mtl__empty", children: q ? labels.noMatch : labels.empty }),
    ],
  });
}

const DEMO_CATEGORIES = [{ value: "chat", label: "Chat" }, { value: "image", label: "Image" }];
const DEMO_ROWS = [
  { id: "gpt-6", name: "GPT-6", category: "chat", group: "OpenAI", meta: "$5 / $15 per M", enabled: true, isDefault: true },
  { id: "gpt-6-mini", name: "GPT-6 mini", category: "chat", group: "OpenAI", meta: "$0.4 / $1.6 per M", enabled: true },
  { id: "claude-opus", name: "Claude Opus 5.5", category: "chat", group: "Anthropic", meta: "$15 / $75 per M", enabled: false },
  { id: "o-legacy", name: "o4-legacy", category: "chat", group: "OpenAI", note: { text: "Unavailable" }, enabled: false, locked: true },
  { id: "gpt-image", name: "GPT Image 2", category: "image", group: "OpenAI", meta: "$0.04 per image", enabled: true, isDefault: true },
];

/** Demo: a few chat and image models, one default per category. */
function ModelToggleListDemo() {
  const [rows, setRows] = React.useState(DEMO_ROWS);
  return jsx("div", { style: { maxWidth: 720, margin: "0 auto", padding: 24 }, children: jsx(ModelToggleList, {
    rows, categories: DEMO_CATEGORIES,
    onToggle: (ids, on) => setRows((all) => all.map((r) => (ids.includes(r.id) ? { ...r, enabled: on, isDefault: on && r.isDefault } : r))),
    onSetDefault: (id) => setRows((all) => { const cat = all.find((r) => r.id === id)?.category; return all.map((r) => (r.category === cat ? { ...r, isDefault: r.id === id } : r)); }),
  }) });
}

export { ModelToggleListDemo as default, ModelToggleList as __InnerComponent };

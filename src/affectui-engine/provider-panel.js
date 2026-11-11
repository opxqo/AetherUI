// Provider Panel — hand-written AetherUI component (not extracted from the AffectUI bundle).
// Master–detail for connected services: a list on the left (logo tile, name, a quiet status line and a status dot,
// in labelled groups, with an optional "add" row at the end) and whatever belongs to the selected item on the right.
// The selected row is a white card on the tray, like the settings sidebar; below 720px the list sits above the detail.
// Imports only React (see the note in dialog.js), styling uses only the global tokens.
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";

const HOST_ATTRS = new Set(["id", "role", "style", "className", "title", "tabIndex", "hidden", "lang", "dir", "draggable", "ref", "accessKey", "contentEditable", "spellCheck", "translate", "slot"]);
const pickDOMProps = (props) => Object.fromEntries(Object.entries(props ?? {}).filter(([key]) => HOST_ATTRS.has(key) || key.startsWith("aria-") || key.startsWith("data-") || /^on[A-Z]/.test(key)));

export const providerPanelStyles = `
.ui-ppanel{display:grid;grid-template-columns:232px minmax(0,1fr);align-items:start;gap:16px;font-family:var(--font-sans);font-size:13px;line-height:20px;color:var(--text-body)}
.ui-ppanel__list{position:sticky;top:0;display:flex;flex-direction:column;gap:2px;min-width:0}
.ui-ppanel__group{padding:6px 10px 6px;font-size:12px;line-height:18px;color:var(--text-muted)}
.ui-ppanel__group:not(:first-child){margin-top:8px;padding-top:12px;box-shadow:inset 0 0.5px 0 var(--border-soft)}
.ui-ppanel__item{display:flex;align-items:center;gap:10px;width:100%;min-height:52px;padding:8px 10px;border:0;border-radius:var(--radius-surface,12px);background:transparent;font:inherit;text-align:left;color:inherit;cursor:pointer;transition:background-color 140ms ease,box-shadow 140ms ease}
.ui-ppanel__item:hover{background:var(--hover-bg)}
.ui-ppanel__item[aria-current="true"]{background:var(--card);box-shadow:var(--shadow-clean-surface)}
.ui-ppanel__item:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring-accent)}
.ui-ppanel__tile{display:grid;flex:none;place-items:center;width:32px;height:32px;overflow:hidden;border-radius:10px;background:#fff;box-shadow:inset 0 0 0 0.5px rgba(0,0,0,0.08),0 1px 2px rgba(0,0,0,0.05);font-size:12px;font-weight:600;color:var(--text-muted)}
.ui-ppanel__tile > img,.ui-ppanel__tile > svg{max-width:100%;max-height:100%}
.ui-ppanel__text{flex:1;min-width:0}
.ui-ppanel__text b{display:block;overflow:hidden;font-weight:500;color:var(--text);white-space:nowrap;text-overflow:ellipsis}
.ui-ppanel__text small{display:block;overflow:hidden;font-size:12px;line-height:18px;color:var(--text-muted);white-space:nowrap;text-overflow:ellipsis;font-variant-numeric:tabular-nums}
.ui-ppanel__dot{flex:none;width:6px;height:6px;border-radius:50%;background:var(--text-subtle)}
.ui-ppanel__dot[data-tone="ok"]{background:var(--status-ok)}
.ui-ppanel__dot[data-tone="warn"]{background:var(--status-warn)}
.ui-ppanel__add{color:var(--text-muted)}
.ui-ppanel__add .ui-ppanel__tile{background:var(--muted-bg);box-shadow:none;font-size:16px;font-weight:400}
.ui-ppanel__add:hover{color:var(--text)}
.ui-ppanel__detail{display:flex;flex-direction:column;gap:12px;min-width:0}
@media (max-width: 720px){.ui-ppanel{grid-template-columns:minmax(0,1fr)}.ui-ppanel__list{position:static}}
`;

/** Provider list on the left, the selected provider's detail (children) on the right. */
function ProviderPanel({ groups = [], selected: selectedProp, defaultSelected, onSelect, action, listLabel = "Providers", children, className, style, ref, ...rest }) {
  const first = groups.flatMap((g) => g.items)[0]?.id;
  const controlled = selectedProp !== undefined;
  const [inner, setInner] = React.useState(defaultSelected ?? first);
  const selected = controlled ? selectedProp : inner;
  const pick = (id) => { if (!controlled) setInner(id); onSelect?.(id); };
  return jsxs("div", {
    ...pickDOMProps(rest),
    ref,
    className: ["ui-ppanel", className].filter(Boolean).join(" "),
    style,
    children: [
      jsx("style", { href: "ui-provider-panel", precedence: "default", children: providerPanelStyles }),
      jsxs("nav", { className: "ui-ppanel__list", "aria-label": listLabel, children: [
        groups.map((group, index) => jsxs(React.Fragment, { children: [
          group.label && jsx("div", { className: "ui-ppanel__group", children: group.label }),
          group.items.map((item) => jsxs("button", {
            type: "button",
            className: "ui-ppanel__item",
            "aria-current": item.id === selected ? "true" : undefined,
            onClick: () => pick(item.id),
            children: [
              jsx("span", { className: "ui-ppanel__tile", "aria-hidden": "true", children: item.logo ?? Array.from(item.name.trim())[0] ?? "?" }),
              jsxs("span", { className: "ui-ppanel__text", children: [jsx("b", { children: item.name }), item.meta && jsx("small", { children: item.meta })] }),
              item.tone && jsx("span", { className: "ui-ppanel__dot", "data-tone": item.tone, "aria-hidden": "true" }),
            ],
          }, item.id)),
        ] }, group.id ?? group.label ?? index)),
        action && jsxs("button", { type: "button", className: "ui-ppanel__item ui-ppanel__add", onClick: action.onClick, children: [
          jsx("span", { className: "ui-ppanel__tile", "aria-hidden": "true", children: action.icon ?? "+" }),
          jsx("span", { className: "ui-ppanel__text", children: action.label }),
        ] }),
      ] }),
      jsx("div", { className: "ui-ppanel__detail", children }),
    ],
  });
}

const DEMO_GROUPS = [
  { label: "Providers", items: [
    { id: "openai", name: "OpenAI", meta: "Synced · 42 models", tone: "ok" },
    { id: "anthropic", name: "Anthropic", meta: "Not synced yet", tone: "warn" },
    { id: "google", name: "Google", meta: "No API key", tone: "idle" },
  ] },
  { label: "Your own", items: [{ id: "local", name: "Local Llama", meta: "3 models", tone: "ok" }] },
];

/** Demo: three providers and one custom endpoint; the right side names the selection. */
function ProviderPanelDemo() {
  const [selected, setSelected] = React.useState("openai");
  const item = DEMO_GROUPS.flatMap((g) => g.items).find((i) => i.id === selected);
  return jsx("div", { style: { maxWidth: 820, margin: "0 auto", padding: 24 }, children: jsx(ProviderPanel, {
    groups: DEMO_GROUPS, selected, onSelect: setSelected, action: { label: "Add endpoint", onClick: () => {} },
    children: jsxs("div", { style: { padding: 20, borderRadius: 12, background: "var(--card)", boxShadow: "var(--shadow-clean-surface)" }, children: [
      jsx("b", { style: { fontSize: 15, color: "var(--text)" }, children: item?.name }),
      jsx("p", { style: { margin: "4px 0 0", color: "var(--text-muted)" }, children: item?.meta }),
    ] }),
  }) });
}

export { ProviderPanelDemo as default, ProviderPanel as __InnerComponent };

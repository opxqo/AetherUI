// Model Catalog — hand-written AetherUI component (not extracted from the AffectUI bundle).
// Every model a workspace could turn on, grouped by region and then by provider, with search and one switch per
// model. Built to sit in a Dialog ("Add model") next to Settings / Models, so it borrows that page's look:
// region heading with a mark and a quiet note, provider cards that fold open (logo tile, name, "x/y on", chevron),
// model rows with a name, a type badge, a hint line and a 32×20 switch.
// All data and all words come from props; nothing about regions, providers or models is built in.
// Enabled models are controlled with `enabled` + `onEnabledChange`, or uncontrolled with `defaultEnabled`.
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// Local copies of pickDOMProps / mergeRefs (./dom-props.js). Hand-written components import nothing from the
// extracted engine: a new importer of a shared engine module would change how the bundler groups those modules
// and rename chunks that copies elsewhere import by file name.
const HOST_ATTRS = new Set(["id", "role", "style", "className", "title", "tabIndex", "hidden", "lang", "dir", "draggable", "ref", "accessKey", "contentEditable", "spellCheck", "translate", "slot"]);
const pickDOMProps = (props) => Object.fromEntries(Object.entries(props ?? {}).filter(([key]) => HOST_ATTRS.has(key) || key.startsWith("aria-") || key.startsWith("data-") || /^on[A-Z]/.test(key)));
const mergeRefs = (...refs) => (node) => {
  const cleanups = refs.map((ref) => {
    if (typeof ref === "function") { const cleanup = ref(node); return typeof cleanup === "function" ? cleanup : () => ref(null); }
    if (ref) ref.current = node;
    return () => { if (ref) ref.current = null; };
  });
  return () => cleanups.forEach((cleanup) => cleanup());
};

export const modelCatalogStyles = `
.ui-mcat{display:flex;flex-direction:column;gap:20px;font-family:var(--font-sans);font-size:13px;line-height:20px;color:var(--text-body)}
.ui-mcat__search{display:flex;align-items:center;gap:8px;height:34px;padding:0 10px;border-radius:var(--radius-control,9px);background:var(--card);box-shadow:inset 0 0 0 0.5px var(--border-soft),0 1px 2px rgba(0,0,0,0.04);color:var(--text-muted);transition:box-shadow 140ms ease}
.ui-mcat__search:focus-within{box-shadow:inset 0 0 0 0.5px var(--border-soft),0 0 0 3px var(--accent-soft)}
.ui-mcat__search svg{flex:none;width:15px;height:15px}
.ui-mcat__search input{flex:1;min-width:0;height:100%;border:0;background:transparent;font:inherit;color:var(--text);outline:none}
.ui-mcat__search input::placeholder{color:var(--text-subtle)}
.ui-mcat__clear{display:grid;place-items:center;width:20px;height:20px;border:0;border-radius:6px;background:transparent;color:var(--text-muted);cursor:pointer}
.ui-mcat__clear:hover{background:var(--hover-bg);color:var(--text)}
.ui-mcat__region{display:flex;flex-direction:column;gap:8px}
.ui-mcat__region-head{display:flex;align-items:center;gap:8px;margin:0 0 2px;font-size:13px;line-height:20px;font-weight:500;color:var(--text)}
.ui-mcat__region-head small{margin-left:2px;font-size:12px;font-weight:400;color:var(--text-subtle)}
.ui-mcat__mark{display:inline-flex;flex:none;align-items:center}
.ui-mcat__mark > *{display:block;width:18px;height:12.6px;border-radius:2px;box-shadow:0 0 0 0.5px rgba(0,0,0,0.12)}
.ui-mcat__provider{border-radius:var(--radius-surface,12px);background:var(--card);box-shadow:var(--shadow-clean-surface)}
.ui-mcat__provider-head{display:flex;align-items:center;gap:10px;width:100%;min-height:52px;padding:0 12px 0 12px;border:0;border-radius:var(--radius-surface,12px);background:transparent;font:inherit;text-align:left;color:inherit;cursor:pointer}
.ui-mcat__provider-head:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring-accent)}
.ui-mcat__provider-head b{flex:1;min-width:0;overflow:hidden;font-weight:500;color:var(--text);white-space:nowrap;text-overflow:ellipsis}
.ui-mcat__provider-head small{font-size:12px;font-weight:400;color:var(--text-muted)}
.ui-mcat__provider-head > svg{flex:none;width:15px;height:15px;color:var(--text-subtle);transition:rotate 260ms var(--ease-out)}
.ui-mcat__provider[data-open] .ui-mcat__provider-head > svg{rotate:180deg}
.ui-mcat__tile{display:grid;flex:none;place-items:center;width:28px;height:28px;border-radius:8px;background:#fff;box-shadow:inset 0 0 0 0.5px rgba(0,0,0,0.08),0 1px 2px rgba(0,0,0,0.05);color:var(--text-muted)}
.ui-mcat__tile > *{max-width:15px;max-height:15px}
.ui-mcat__count{flex:none;padding:0 6px;border-radius:6px;background:var(--muted-bg);font-size:11px;line-height:18px;color:var(--text-muted);font-variant-numeric:tabular-nums}
.ui-mcat__provider[data-on] .ui-mcat__count{background:var(--accent-soft);color:var(--accent)}
.ui-mcat__models{display:grid;grid-template-rows:0fr;transition:grid-template-rows 320ms var(--ease-out)}
.ui-mcat__provider[data-open] .ui-mcat__models{grid-template-rows:1fr}
.ui-mcat__models > div{min-height:0;overflow:hidden}
.ui-mcat__model{display:flex;align-items:center;gap:16px;min-height:52px;padding:8px 12px 8px 14px;box-shadow:inset 0 0.5px 0 var(--border-soft)}
.ui-mcat__label{flex:1;min-width:0}
.ui-mcat__label b{display:flex;align-items:center;gap:6px;min-width:0;font-weight:500;color:var(--text);transition:opacity 200ms ease}
.ui-mcat__label b > span:first-child{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.ui-mcat__label small{display:block;overflow:hidden;font-size:12px;line-height:18px;color:var(--text-muted);white-space:nowrap;text-overflow:ellipsis}
.ui-mcat__model:not([data-on]) .ui-mcat__label{opacity:0.62}
.ui-mcat__tag{flex:none;padding:0 6px;border-radius:6px;background:var(--muted-bg);font-size:11px;font-weight:400;line-height:16px;color:var(--text-muted)}
.ui-mcat__switch{position:relative;flex:none;width:32px;height:20px;padding:0;border:0;border-radius:999px;background:#e2e2e2;cursor:pointer;transition:background-color 200ms ease}
:where(.dark,[data-theme="dark"]) .ui-mcat__switch{background:rgba(255,255,255,0.16)}
.ui-mcat__switch[aria-checked="true"]{background:var(--primary)}
.ui-mcat__switch::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.2);transition:translate 240ms var(--ease-out)}
:where(.dark,[data-theme="dark"]) .ui-mcat__switch[aria-checked="true"]::after{background:var(--primary-fg)}
.ui-mcat__switch[aria-checked="true"]::after{translate:12px 0}
.ui-mcat__switch:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring-accent)}
.ui-mcat__empty{margin:8px 0;padding:28px 16px;border-radius:var(--radius-surface,12px);background:var(--muted-bg);text-align:center;color:var(--text-muted)}
@media (prefers-reduced-motion: reduce){.ui-mcat__models,.ui-mcat__switch,.ui-mcat__switch::after,.ui-mcat__provider-head > svg{transition:none}}
`;

const DEFAULT_LABELS = {
  search: "Search models",
  clear: "Clear search",
  count: (on, total) => `${on}/${total} on`,
  noMatch: (query) => `No models match “${query}”.`,
  empty: "No models to show.",
};

const SearchIcon = () => jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", "aria-hidden": "true", children: [jsx("circle", { cx: 11, cy: 11, r: 7 }), jsx("path", { d: "m20 20-3.5-3.5" })] });
const ChevronIcon = () => jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: jsx("path", { d: "m6 9 6 6 6-6" }) });
const ClearIcon = () => jsx("svg", { viewBox: "0 0 24 24", width: 12, height: 12, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true", children: jsx("path", { d: "M6 6l12 12M18 6 6 18" }) });

/** Region → provider → model list with search and a switch per model. */
function ModelCatalog({
  regions = [],
  providers = [],
  enabled: enabledProp,
  defaultEnabled = [],
  onEnabledChange,
  onToggle,
  defaultExpanded,
  searchable = true,
  labels: labelProp,
  className,
  style,
  ref,
  ...rest
}) {
  const labels = { ...DEFAULT_LABELS, ...labelProp };
  const controlled = enabledProp !== undefined;
  const [inner, setInner] = React.useState(() => new Set(defaultEnabled));
  const enabled = React.useMemo(() => (controlled ? new Set(enabledProp) : inner), [controlled, enabledProp, inner]);
  const [query, setQuery] = React.useState("");
  const [expanded, setExpanded] = React.useState(() => new Set(defaultExpanded ?? (providers[0] ? [providers[0].id] : [])));
  const searchId = React.useId();

  const q = query.trim().toLowerCase();
  const matches = (provider, model) => !q || `${model.name} ${model.description ?? ""} ${model.tag ?? ""} ${provider.name}`.toLowerCase().includes(q);

  const toggle = (provider, model) => {
    const next = new Set(enabled);
    const on = !next.has(model.id);
    if (on) next.add(model.id); else next.delete(model.id);
    if (!controlled) setInner(next);
    onToggle?.(model.id, on, { model, provider });
    onEnabledChange?.([...next]);
  };
  const flip = (id) => setExpanded((current) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });

  const shown = regions.map((region) => ({
    region,
    providers: providers.filter((p) => p.region === region.id).map((p) => ({ provider: p, models: p.models.filter((m) => matches(p, m)) })).filter((p) => p.models.length),
  })).filter((r) => r.providers.length);

  return jsxs("div", {
    ...pickDOMProps(rest),
    ref: mergeRefs(ref),
    className: ["ui-mcat", className].filter(Boolean).join(" "),
    style,
    children: [
      jsx("style", { href: "ui-model-catalog", precedence: "default", children: modelCatalogStyles }),
      searchable && jsxs("label", { className: "ui-mcat__search", htmlFor: searchId, children: [
        jsx(SearchIcon, {}),
        jsx("input", { id: searchId, type: "search", value: query, placeholder: labels.search, "aria-label": labels.search, "data-autofocus": "", onChange: (e) => setQuery(e.target.value), onKeyDown: (e) => { if (e.key === "Escape" && query) { e.stopPropagation(); setQuery(""); } } }),
        query && jsx("button", { type: "button", className: "ui-mcat__clear", "aria-label": labels.clear, onClick: () => setQuery(""), children: jsx(ClearIcon, {}) }),
      ] }),
      shown.map(({ region, providers: list }) => jsxs("section", { className: "ui-mcat__region", "aria-label": region.name, children: [
        jsxs("h3", { className: "ui-mcat__region-head", children: [
          region.icon && jsx("span", { className: "ui-mcat__mark", children: region.icon }),
          region.name,
          region.note && jsx("small", { children: region.note }),
        ] }),
        list.map(({ provider, models }) => {
          const open = !!q || expanded.has(provider.id);
          const on = provider.models.filter((m) => enabled.has(m.id)).length;
          const panelId = `${searchId}-${provider.id}`;
          return jsxs("div", { className: "ui-mcat__provider", "data-open": open || undefined, "data-on": on || undefined, children: [
            jsxs("button", { type: "button", className: "ui-mcat__provider-head", "aria-expanded": open, "aria-controls": panelId, onClick: () => flip(provider.id), children: [
              jsx("span", { className: "ui-mcat__tile", children: provider.logo ?? provider.name.slice(0, 1) }),
              jsxs("b", { children: [provider.name, provider.note && jsxs("small", { children: [" · ", provider.note] })] }),
              jsx("span", { className: "ui-mcat__count", children: labels.count(on, provider.models.length) }),
              jsx(ChevronIcon, {}),
            ] }),
            jsx("div", { className: "ui-mcat__models", id: panelId, children: jsx("div", { inert: open ? undefined : true, children: models.map((model) => {
              const isOn = enabled.has(model.id);
              return jsxs("div", { className: "ui-mcat__model", "data-on": isOn || undefined, children: [
                jsxs("span", { className: "ui-mcat__label", children: [
                  jsxs("b", { children: [jsx("span", { children: model.name }), model.tag && jsx("span", { className: "ui-mcat__tag", children: model.tag })] }),
                  model.description && jsx("small", { children: model.description }),
                ] }),
                jsx("button", { type: "button", role: "switch", "aria-checked": isOn, "aria-label": model.name, className: "ui-mcat__switch", onClick: () => toggle(provider, model) }),
              ] }, model.id);
            }) }) }),
          ] }, provider.id);
        }),
      ] }, region.id)),
      !shown.length && jsx("p", { className: "ui-mcat__empty", children: q ? labels.noMatch(query.trim()) : labels.empty }),
    ],
  });
}

const euFlag = jsxs("svg", { viewBox: "0 0 20 14", "aria-hidden": "true", children: [jsx("rect", { width: 20, height: 14, fill: "#1c3f94" }), ...Array.from({ length: 12 }, (_, i) => { const a = (i / 12) * Math.PI * 2; return jsx("circle", { cx: 10 + Math.sin(a) * 4.2, cy: 7 - Math.cos(a) * 4.2, r: 0.75, fill: "#ffcc00" }, i); })] });
const usFlag = jsxs("svg", { viewBox: "0 0 19 13", "aria-hidden": "true", children: [jsx("rect", { width: 19, height: 13, fill: "#b22234" }), ...[1, 3, 5, 7, 9, 11].map((y) => jsx("rect", { y, width: 19, height: 1, fill: "#fff" }, y)), jsx("rect", { width: 7.6, height: 7, fill: "#3c3b6e" })] });
const DEMO_REGIONS = [
  { id: "eu", name: "Europe", note: "Data stays in Frankfurt", icon: euFlag },
  { id: "us", name: "United States", note: "Runs in the providers' US data centers", icon: usFlag },
];
const DEMO_PROVIDERS = [
  { id: "mistral", name: "Mistral", region: "eu", models: [
    { id: "mistral-large", name: "Mistral Large 3", tag: "Chat", description: "Hosted by Mistral in the EU" },
    { id: "mistral-medium", name: "Mistral Medium 3", tag: "Chat", description: "Hosted by Mistral in the EU" },
  ] },
  { id: "anthropic", name: "Anthropic", region: "us", models: [
    { id: "claude-opus", name: "Claude Opus 5.5", tag: "Chat", description: "Strongest for hard questions" },
    { id: "claude-haiku", name: "Claude Haiku 5.5", tag: "Chat", description: "Fast and cheap" },
  ] },
  { id: "openai", name: "OpenAI", region: "us", models: [
    { id: "gpt-6", name: "GPT-6", tag: "Chat", description: "Hosted by OpenAI" },
    { id: "gpt-image", name: "GPT Image 2", tag: "Image", description: "Hosted by OpenAI" },
  ] },
];

/** Demo: two regions, three providers, two models on. */
function ModelCatalogDemo() {
  return jsx("div", { style: { maxWidth: 520, margin: "0 auto", padding: 24 }, children: jsx(ModelCatalog, { regions: DEMO_REGIONS, providers: DEMO_PROVIDERS, defaultEnabled: ["claude-opus", "gpt-6"], defaultExpanded: ["anthropic"] }) });
}

export { ModelCatalogDemo as default, ModelCatalog as __InnerComponent };

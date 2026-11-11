// Provider Connection — hand-written AetherUI component (not extracted from the AffectUI bundle).
// The connection card of one service: name with a status dot and line, an external link, a short description,
// the API key and a connect / sync button, and the result of the last attempt underneath.
// The saved key never goes into an <input>: locked, it is shown masked (eye to reveal); editing opens an empty
// password field that only commits on Save (Clear empties it, Esc or × cancels). While editing, sync waits.
// Imports only React (see the note in dialog.js), styling uses only the global tokens.
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";

const HOST_ATTRS = new Set(["id", "role", "style", "className", "title", "tabIndex", "hidden", "lang", "dir", "draggable", "ref", "accessKey", "contentEditable", "spellCheck", "translate", "slot"]);
const pickDOMProps = (props) => Object.fromEntries(Object.entries(props ?? {}).filter(([key]) => HOST_ATTRS.has(key) || key.startsWith("aria-") || key.startsWith("data-") || /^on[A-Z]/.test(key)));

export const providerConnectionStyles = `
.ui-pconn{padding:20px;border-radius:var(--radius-surface,12px);background:var(--card);box-shadow:var(--shadow-clean-surface);font-family:var(--font-sans);font-size:13px;line-height:20px;color:var(--text-body)}
.ui-pconn__head{display:flex;align-items:flex-start;gap:16px}
.ui-pconn__titles{flex:1;min-width:0}
.ui-pconn__name{margin:0;overflow:hidden;font-size:17px;line-height:24px;font-weight:600;letter-spacing:-0.01em;color:var(--text);white-space:nowrap;text-overflow:ellipsis}
.ui-pconn__status{display:flex;align-items:center;gap:6px;margin-top:2px;font-size:12px;line-height:18px;color:var(--text-muted);font-variant-numeric:tabular-nums}
.ui-pconn__status i{flex:none;width:6px;height:6px;border-radius:50%;background:var(--text-subtle)}
.ui-pconn__status[data-tone="ok"] i{background:var(--status-ok)}
.ui-pconn__status[data-tone="warn"] i{background:var(--status-warn)}
.ui-pconn__link{display:inline-flex;flex:none;align-items:center;gap:4px;padding-top:2px;font-size:13px;color:var(--text-muted);text-decoration:none;transition:color 140ms ease}
.ui-pconn__link:hover{color:var(--text)}
.ui-pconn__link svg{width:13px;height:13px}
.ui-pconn__desc{max-width:720px;margin:10px 0 0;font-size:12px;line-height:19px;color:var(--text-muted)}
.ui-pconn__row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:16px}
.ui-pconn__key{display:flex;flex:1;align-items:center;gap:4px;min-width:220px;height:38px;padding:0 4px 0 12px;border-radius:var(--radius-control,9px);background:var(--card);box-shadow:inset 0 0 0 0.5px var(--border-soft),0 1px 2px rgba(0,0,0,0.04);transition:box-shadow 140ms ease}
.ui-pconn__key:focus-within{box-shadow:inset 0 0 0 0.5px var(--border-soft),0 0 0 3px var(--accent-soft)}
.ui-pconn__key > span{flex:1;min-width:0;overflow:hidden;color:var(--text);white-space:nowrap;text-overflow:ellipsis;font-family:var(--font-mono);font-size:12px;letter-spacing:0.02em}
.ui-pconn__key > span[data-empty]{font-family:var(--font-sans);font-size:13px;letter-spacing:0;color:var(--text-subtle)}
.ui-pconn__key input{flex:1;min-width:0;height:100%;border:0;background:transparent;font:inherit;color:var(--text);outline:none}
.ui-pconn__key input::placeholder{color:var(--text-subtle)}
.ui-pconn__icon{display:grid;flex:none;place-items:center;width:30px;height:30px;padding:0;border:0;border-radius:7px;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color 140ms ease,color 140ms ease}
.ui-pconn__icon:hover:not(:disabled){background:var(--hover-bg);color:var(--text)}
.ui-pconn__icon:disabled{opacity:0.4;cursor:default}
.ui-pconn__icon:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring-accent)}
.ui-pconn__icon svg{width:15px;height:15px}
.ui-pconn__sync{display:inline-flex;flex:none;align-items:center;gap:6px;height:38px;padding:0 14px;border:0;border-radius:var(--radius-control,9px);background:linear-gradient(var(--dark-btn-top),var(--dark-btn-bottom));box-shadow:0 0 0 1px var(--dark-btn-ring),inset 0 1px 0 rgba(255,255,255,0.12);font:500 13px/1 var(--font-sans);color:var(--dark-btn-text);cursor:pointer;transition:opacity 140ms ease}
.ui-pconn__sync:hover:not(:disabled){background:linear-gradient(var(--dark-btn-top-hover),var(--dark-btn-bottom-hover))}
.ui-pconn__sync:disabled{opacity:0.5;cursor:default}
.ui-pconn__sync:focus-visible{outline:none;box-shadow:0 0 0 1px var(--dark-btn-ring),0 0 0 4px var(--focus-ring-accent)}
.ui-pconn__sync svg{width:15px;height:15px}
.ui-pconn__sync[aria-busy="true"] svg{animation:ui-pconn-spin 900ms linear infinite}
.ui-pconn__result{margin:10px 0 0;font-size:12px;line-height:18px;color:var(--text-muted)}
.ui-pconn__result[role="alert"]{color:var(--status-danger)}
@keyframes ui-pconn-spin{to{rotate:360deg}}
@media (prefers-reduced-motion: reduce){.ui-pconn__sync[aria-busy="true"] svg{animation:none}}
`;

const DEFAULT_LABELS = { show: "Show", hide: "Hide", edit: "Edit", save: "Save", clear: "Clear", cancel: "Cancel" };
const icon = (paths) => jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: paths.map((d, i) => jsx("path", { d }, i)) });
const Eye = () => icon(["M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"]);
const EyeOff = () => icon(["M3 3l18 18", "M10.6 5.1A10.9 10.9 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.9 9.9 0 0 0 5.4-1.6", "M9.9 9.9a3 3 0 0 0 4.2 4.2"]);
const Pencil = () => icon(["M4 20h4L19 9l-4-4L4 16v4Z", "m13.5 6.5 4 4"]);
const Check = () => icon(["m5 12.5 4.5 4.5L19 7.5"]);
const Trash = () => icon(["M4 7h16", "M10 11v6M14 11v6", "M6 7l1 13h10l1-13", "M9 7V4h6v3"]);
const Cross = () => icon(["M6 6l12 12M18 6 6 18"]);
const Sync = () => icon(["M20 12a8 8 0 0 1-14.3 4.9", "M4 12a8 8 0 0 1 14.3-4.9", "M18.5 3v4.2h-4.2", "M5.5 21v-4.2h4.2"]);
const External = () => icon(["M14 4h6v6", "M20 4l-9 9", "M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"]);

/** Connection card of one service: status, link, masked API key with edit / save, and connect / sync. */
function ProviderConnection({
  name, status, description, link,
  apiKey = "", keyLabel = "API key", keyPlaceholder, onKeyChange, keyDisabled,
  onSync, syncLabel = "Connect and sync", syncing = false, syncDisabled,
  result, onEditingChange, labels: labelProp, className, style, ref, ...rest
}) {
  const labels = { ...DEFAULT_LABELS, ...labelProp };
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState("");
  const [dirty, setDirty] = React.useState(false);
  const [revealed, setRevealed] = React.useState(false);
  const editingChange = React.useRef(onEditingChange);
  editingChange.current = onEditingChange;
  const input = React.useRef(null);
  React.useEffect(() => { setDraft(""); setDirty(false); setRevealed(false); setEditing(false); editingChange.current?.(false); }, [apiKey, keyLabel]);
  React.useEffect(() => { if (editing) input.current?.focus(); }, [editing]);
  const mode = (next) => { setEditing(next); editingChange.current?.(next); };
  const cancel = () => { setDraft(""); setDirty(false); mode(false); };
  const save = () => { if (!dirty) return; const next = draft.trim(); cancel(); if (next !== apiKey) onKeyChange?.(next); };

  return jsxs("section", {
    ...pickDOMProps(rest),
    ref,
    className: ["ui-pconn", className].filter(Boolean).join(" "),
    style,
    children: [
      jsx("style", { href: "ui-provider-connection", precedence: "default", children: providerConnectionStyles }),
      jsxs("div", { className: "ui-pconn__head", children: [
        jsxs("div", { className: "ui-pconn__titles", children: [
          jsx("h2", { className: "ui-pconn__name", children: name }),
          status && jsxs("div", { className: "ui-pconn__status", "data-tone": status.tone, children: [jsx("i", { "aria-hidden": "true" }), jsx("span", { children: status.text })] }),
        ] }),
        link && jsxs("a", { className: "ui-pconn__link", href: link.href, target: "_blank", rel: "noreferrer", children: [link.label, jsx(External, {})] }),
      ] }),
      description && jsx("p", { className: "ui-pconn__desc", children: description }),
      jsxs("div", { className: "ui-pconn__row", children: [
        jsxs("div", { className: "ui-pconn__key", role: editing ? undefined : "group", "aria-label": editing ? undefined : keyLabel, "data-api-key-editor": editing ? "editing" : "locked", children: editing ? [
          jsx("input", { key: "input", ref: input, type: "password", "aria-label": keyLabel, value: draft, placeholder: keyPlaceholder ?? `${labels.edit} ${keyLabel}`, disabled: keyDisabled,
            autoComplete: "new-password", autoCorrect: "off", autoCapitalize: "none", spellCheck: false, "data-lpignore": "true", "data-1p-ignore": "true", "data-form-type": "other",
            onChange: (e) => { setDraft(e.target.value); setDirty(true); },
            onKeyDown: (e) => { if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); cancel(); } if (e.key === "Enter") { e.preventDefault(); save(); } } }),
          jsx("button", { key: "save", type: "button", className: "ui-pconn__icon", "aria-label": `${labels.save} ${keyLabel}`, title: labels.save, disabled: keyDisabled || !dirty, onClick: save, children: jsx(Check, {}) }),
          apiKey && jsx("button", { key: "clear", type: "button", className: "ui-pconn__icon", "aria-label": `${labels.clear} ${keyLabel}`, title: labels.clear, disabled: keyDisabled, onClick: () => { setDraft(""); setDirty(true); }, children: jsx(Trash, {}) }),
          jsx("button", { key: "cancel", type: "button", className: "ui-pconn__icon", "aria-label": `${labels.cancel} ${keyLabel}`, title: labels.cancel, disabled: keyDisabled, onClick: cancel, children: jsx(Cross, {}) }),
        ] : [
          jsx("span", { key: "value", "data-empty": apiKey ? undefined : "", "data-api-key-display": "", children: apiKey ? (revealed ? apiKey : "••••••••••••••••••••") : (keyPlaceholder ?? keyLabel) }),
          apiKey && jsx("button", { key: "eye", type: "button", className: "ui-pconn__icon", "aria-label": `${revealed ? labels.hide : labels.show} ${keyLabel}`, title: revealed ? labels.hide : labels.show, disabled: keyDisabled, onClick: () => setRevealed((v) => !v), children: revealed ? jsx(EyeOff, {}) : jsx(Eye, {}) }),
          jsx("button", { key: "edit", type: "button", className: "ui-pconn__icon", "aria-label": `${labels.edit} ${keyLabel}`, title: labels.edit, disabled: keyDisabled, onClick: () => { setDraft(""); setDirty(false); setRevealed(false); mode(true); }, children: jsx(Pencil, {}) }),
        ] }),
        onSync && jsxs("button", { type: "button", className: "ui-pconn__sync", "aria-busy": syncing || undefined, disabled: syncDisabled || editing || syncing, onClick: onSync, children: [jsx(Sync, {}), syncLabel] }),
      ] }),
      result && jsx("p", { className: "ui-pconn__result", role: result.ok ? "status" : "alert", children: result.text }),
    ],
  });
}

/** Demo: a synced provider with a saved key. */
function ProviderConnectionDemo() {
  const [key, setKey] = React.useState("sk-demo-7f3a9c2e41b8");
  const [syncing, setSyncing] = React.useState(false);
  const [result, setResult] = React.useState(null);
  return jsx("div", { style: { maxWidth: 640, margin: "0 auto", padding: 24 }, children: jsx(ProviderConnection, {
    name: "OpenAI", status: { tone: "ok", text: "Synced 42 models · Nov 3, 01:05" },
    description: "Paste an API key from the provider's console, then sync to load every model your account can use. Prices are refreshed on every sync.",
    link: { href: "https://platform.openai.com/api-keys", label: "Open console" },
    apiKey: key, keyLabel: "OpenAI API key", onKeyChange: setKey, syncing, result,
    onSync: () => { setSyncing(true); setResult(null); setTimeout(() => { setSyncing(false); setResult({ ok: true, text: "Synced 42 models just now" }); }, 1200); },
  }) });
}

export { ProviderConnectionDemo as default, ProviderConnection as __InnerComponent };

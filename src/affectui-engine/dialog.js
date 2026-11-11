// Dialog — hand-written AetherUI component (not extracted from the AffectUI bundle).
// A modal on a dimmed backdrop: Classic double tray (16px tray → 12px card), title and description in the tray,
// body on the white card, actions in the tray below. Esc and a click on the backdrop close it, focus moves in,
// stays inside while it is open and goes back to the trigger afterwards; the page behind does not scroll.
// Motion follows the command palette: backdrop fades in 200ms, the panel rises from -6px / 0.98 in 260ms,
// leaving runs the same way back in 160ms. prefers-reduced-motion turns both off.
// Styling uses only the global tokens (--card, --ui-tray, --text*, --radius-*, --shadow-pop, --ease-out), so it
// works in a portal outside any app shell, in light and dark.
import * as React from "react";
import { createPortal } from "react-dom";
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

export const dialogStyles = `
.ui-dlg{position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-start;justify-content:center;padding:min(12vh,96px) 16px 16px;overflow-y:auto;font-family:var(--font-sans);-webkit-font-smoothing:antialiased}
.ui-dlg__backdrop{position:fixed;inset:0;background:rgba(0,0,0,0.12);animation:ui-dlg-fade 200ms ease both}
:where(.dark,[data-theme="dark"]) .ui-dlg__backdrop{background:rgba(0,0,0,0.45)}
.ui-dlg__panel{position:relative;display:flex;flex-direction:column;width:100%;max-width:var(--ui-dlg-w,520px);max-height:calc(100vh - min(12vh,96px) - 32px);padding:4px;border-radius:var(--radius-tray,16px);background:var(--ui-tray);box-shadow:var(--shadow-pop);outline:none;animation:ui-dlg-in 260ms var(--ease-out) both}
.ui-dlg[data-size="sm"]{--ui-dlg-w:400px}.ui-dlg[data-size="lg"]{--ui-dlg-w:680px}
.ui-dlg__head{display:flex;align-items:flex-start;gap:12px;padding:10px 10px 12px 14px}
.ui-dlg__titles{flex:1;min-width:0}
.ui-dlg__title{margin:0;font-size:15px;line-height:22px;font-weight:600;letter-spacing:-0.01em;color:var(--text)}
.ui-dlg__desc{margin:2px 0 0;font-size:13px;line-height:19px;color:var(--text-muted)}
.ui-dlg__close{display:grid;flex:none;place-items:center;width:28px;height:28px;margin:-2px -2px 0 0;border:0;border-radius:var(--radius-control,9px);background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color 140ms ease,color 140ms ease}
.ui-dlg__close:hover{background:var(--hover-bg);color:var(--text)}
.ui-dlg__close:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring-accent)}
.ui-dlg__close svg{width:16px;height:16px}
.ui-dlg__body{flex:1;min-height:0;overflow-y:auto;padding:16px;border-radius:var(--radius-surface,12px);background:var(--card);box-shadow:var(--shadow-classic-inner);font-size:13px;line-height:20px;color:var(--text-body);scrollbar-width:thin}
.ui-dlg__foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:8px;padding:10px 6px 6px}
.ui-dlg__foot > .ui-dlg__lead{margin-right:auto;font-size:12px;color:var(--text-muted);font-variant-numeric:tabular-nums}
.ui-dlg[data-state="closing"] .ui-dlg__backdrop{animation:ui-dlg-fade-out 160ms ease both}
.ui-dlg[data-state="closing"] .ui-dlg__panel{animation:ui-dlg-out 160ms var(--ease-out) both}
@keyframes ui-dlg-fade{from{opacity:0}}
@keyframes ui-dlg-fade-out{to{opacity:0}}
@keyframes ui-dlg-in{from{opacity:0;transform:translateY(-6px) scale(0.98)}}
@keyframes ui-dlg-out{to{opacity:0;transform:translateY(-6px) scale(0.98)}}
@media (prefers-reduced-motion: reduce){.ui-dlg__backdrop,.ui-dlg__panel,.ui-dlg[data-state="closing"] .ui-dlg__backdrop,.ui-dlg[data-state="closing"] .ui-dlg__panel{animation:none}}
@media (max-width: 560px){.ui-dlg{align-items:flex-end;padding:16px 8px 8px}.ui-dlg__panel{max-height:calc(100vh - 24px)}}
`;

const EXIT_MS = 160;
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
const openStack = []; // only the topmost dialog answers Esc and keeps focus

const CloseIcon = () => jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", "aria-hidden": "true", children: jsx("path", { d: "M6 6l12 12M18 6 6 18" }) });

/** Modal dialog. Controlled with open + onOpenChange, or uncontrolled with defaultOpen. */
function Dialog({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  title,
  description,
  children,
  footer,
  footerLead,
  size = "md",
  closeOnBackdrop = true,
  closeOnEscape = true,
  showClose = true,
  closeLabel = "Close",
  initialFocus,
  className,
  style,
  ref,
  ...rest
}) {
  const controlled = openProp !== undefined;
  const [inner, setInner] = React.useState(defaultOpen);
  const open = controlled ? !!openProp : inner;
  const [mounted, setMounted] = React.useState(open);
  const [closing, setClosing] = React.useState(false);
  const panel = React.useRef(null);
  const returnTo = React.useRef(null);
  const token = React.useRef({});
  const titleId = React.useId(), descId = React.useId();

  const setOpen = React.useCallback((next) => {
    if (!controlled) setInner(next);
    onOpenChange?.(next);
  }, [controlled, onOpenChange]);

  // Enter at once; leave after the exit animation.
  React.useEffect(() => {
    if (open) { setMounted(true); setClosing(false); return; }
    if (!mounted) return;
    setClosing(true);
    const reduce = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => { setMounted(false); setClosing(false); }, reduce ? 0 : EXIT_MS);
    return () => clearTimeout(timer);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Focus in, stack, scroll lock; focus back on close.
  React.useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const me = token.current;
    returnTo.current = document.activeElement;
    openStack.push(me);
    const html = document.documentElement, previous = html.style.overflow;
    html.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => {
      const node = panel.current;
      if (!node) return;
      const target = (typeof initialFocus === "string" ? node.querySelector(initialFocus) : initialFocus?.current) ?? node.querySelector("[data-autofocus]") ?? node.querySelector(".ui-dlg__body " + FOCUSABLE) ?? node;
      target.focus({ preventScroll: true });
    });
    return () => {
      cancelAnimationFrame(frame);
      openStack.splice(openStack.indexOf(me), 1);
      if (!openStack.length) html.style.overflow = previous;
      const back = returnTo.current;
      if (back && typeof back.focus === "function" && back.isConnected) back.focus({ preventScroll: true });
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const onKeyDown = (event) => {
    if (openStack[openStack.length - 1] !== token.current) return;
    if (event.key === "Escape" && closeOnEscape) { event.stopPropagation(); setOpen(false); return; }
    if (event.key !== "Tab" || !panel.current) return;
    const items = [...panel.current.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null || el === document.activeElement);
    if (!items.length) { event.preventDefault(); panel.current.focus(); return; }
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  if (!mounted || typeof document === "undefined") return null;
  return createPortal(jsxs("div", {
    className: "ui-dlg",
    "data-size": size,
    "data-state": closing ? "closing" : "open",
    onKeyDown,
    children: [
      jsx("style", { href: "ui-dialog", precedence: "default", children: dialogStyles }),
      jsx("div", { className: "ui-dlg__backdrop", "aria-hidden": "true", onPointerDown: closeOnBackdrop ? () => setOpen(false) : undefined }),
      jsxs("div", {
        ...pickDOMProps(rest),
        ref: mergeRefs(panel, ref),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": title ? titleId : undefined,
        "aria-describedby": description ? descId : undefined,
        tabIndex: -1,
        className: ["ui-dlg__panel", className].filter(Boolean).join(" "),
        style,
        children: [
          (title || description || showClose) && jsxs("div", { className: "ui-dlg__head", children: [
            jsxs("div", { className: "ui-dlg__titles", children: [
              title && jsx("h2", { id: titleId, className: "ui-dlg__title", children: title }),
              description && jsx("p", { id: descId, className: "ui-dlg__desc", children: description }),
            ] }),
            showClose && jsx("button", { type: "button", className: "ui-dlg__close", "aria-label": closeLabel, onClick: () => setOpen(false), children: jsx(CloseIcon, {}) }),
          ] }),
          jsx("div", { className: "ui-dlg__body", children }),
          (footer || footerLead) && jsxs("div", { className: "ui-dlg__foot", children: [
            footerLead && jsx("span", { className: "ui-dlg__lead", children: footerLead }),
            footer,
          ] }),
        ],
      }),
    ],
  }), document.body);
}

// Demo-only button in the library's dark-button tokens (the real Button lives in ./demo-DFP8ePHp.js; see the note on imports above).
const demoButton = (ghost) => ({ height: 32, padding: "0 12px", border: 0, borderRadius: "var(--radius-control, 9px)", font: "500 13px/1 var(--font-sans)", cursor: "pointer",
  ...(ghost ? { background: "transparent", color: "var(--text-body)" } : { background: "linear-gradient(var(--dark-btn-top), var(--dark-btn-bottom))", color: "var(--dark-btn-text)", boxShadow: "0 0 0 1px var(--dark-btn-ring), inset 0 1px 0 rgba(255,255,255,0.12)" }) });
const Button = ({ variant, children, ...props }) => jsx("button", { type: "button", style: demoButton(variant === "ghost"), ...props, children });

/** Demo: a trigger that opens a small confirmation dialog. */
function DialogDemo() {
  const [open, setOpen] = React.useState(false);
  return jsxs("div", { style: { display: "grid", placeItems: "center", minHeight: 240, padding: 24, fontFamily: "var(--font-sans)" }, children: [
    jsx(Button, { onClick: () => setOpen(true), children: "Open dialog" }),
    jsx(Dialog, {
      open,
      onOpenChange: setOpen,
      title: "Share this chat",
      description: "Anyone in Acme with the link can read it. Replies stay private.",
      footerLead: "3 people already have access",
      footer: [
        jsx(Button, { variant: "ghost", onClick: () => setOpen(false), children: "Cancel" }, "cancel"),
        jsx(Button, { onClick: () => setOpen(false), children: "Copy link" }, "ok"),
      ],
      children: jsx("p", { style: { margin: 0 }, children: "The link opens the chat as it is now. Later messages are added automatically until you stop sharing it from Settings / Privacy." }),
    }),
  ] });
}

export { DialogDemo as default, Dialog as __InnerComponent };

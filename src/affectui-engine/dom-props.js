// Only host attributes and handlers cross the boundary; business data stays out of the DOM.
const attributes = new Set(["id", "role", "style", "className", "title", "tabIndex", "hidden", "lang", "dir", "draggable", "ref", "accessKey", "contentEditable", "spellCheck", "translate", "slot"]);
export function pickDOMProps(props) {
  return Object.fromEntries(Object.entries(props ?? {}).filter(([key]) =>
    attributes.has(key) || key.startsWith("aria-") || key.startsWith("data-") || /^on[A-Z]/.test(key)));
}

// Preserve both internal measurement refs and the consumer's ref (including React 19 cleanup refs).
export function mergeRefs(...refs) {
  return node => {
    const cleanups = refs.map(ref => {
      if (typeof ref === "function") {
        const cleanup = ref(node);
        return typeof cleanup === "function" ? cleanup : () => ref(null);
      }
      if (ref) ref.current = node;
      return () => { if (ref) ref.current = null; };
    });
    return () => cleanups.forEach(cleanup => cleanup());
  };
}

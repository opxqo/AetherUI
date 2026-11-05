import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C8rgC34B.js";

/**
 * Context Window (Agents)
 * What fills the model's context, as a field of cells – hover a part to light it up, remove files, and compact the conversation while its cells shimmer and clear
 */
export function ContextWindow(props = {}) {
  const { demo, className, style, ...rest } = props;
  const hasCustomProps = demo === false || (!demo && Object.keys(rest).some(k => !["id", "children", "key", "ref"].includes(k) && !k.startsWith("data-") && !k.startsWith("aria-")));
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, { className, style, ...rest });
  }
  const element = React.createElement(DemoComponent, { className, style, ...rest });
  if (className || style) {
    return React.createElement("div", { className, style, "data-aether-wrapper": "" }, element);
  }
  return element;
}

export const ContextWindowRaw = __InnerComponent || DemoComponent;
export const ContextWindowDemo = DemoComponent;

export default ContextWindow;

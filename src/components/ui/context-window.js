import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C8rgC34B.js";

/**
 * Context Window (Agents)
 * What fills the model's context, as a field of cells – hover a part to light it up, remove files, and compact the conversation while its cells shimmer and clear
 */
export function ContextWindow(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ContextWindowRaw = __InnerComponent || DemoComponent;
export const ContextWindowDemo = DemoComponent;

export default ContextWindow;

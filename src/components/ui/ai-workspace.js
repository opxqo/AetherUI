import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CX33j9ef.js";

/**
 * AI Workspace (Productivity)
 * Complete assistant app – sidebar, welcome, streaming chat and projects, built on the Chat Composer
 */
export function AiWorkspace(props = {}) {
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

export const AiWorkspaceRaw = __InnerComponent || DemoComponent;
export const AiWorkspaceDemo = DemoComponent;
export const AIWorkspace = AiWorkspace;
export default AiWorkspace;

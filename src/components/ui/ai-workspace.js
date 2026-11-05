import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CX33j9ef.js";

/**
 * AI Workspace (Productivity)
 * Complete assistant app – sidebar, welcome, streaming chat and projects, built on the Chat Composer
 */
export function AiWorkspace(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AiWorkspaceRaw = __InnerComponent || DemoComponent;
export const AiWorkspaceDemo = DemoComponent;
export const AIWorkspace = AiWorkspace;
export default AiWorkspace;

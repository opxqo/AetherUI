import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Ioffv_GL.js";

/**
 * Comments Panel (Chat)
 * Comment feed with filters, runnable /edit commands, resolve and a composer
 */
export function CommentsPanel(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const CommentsPanelRaw = __InnerComponent || DemoComponent;
export const CommentsPanelDemo = DemoComponent;

export default CommentsPanel;

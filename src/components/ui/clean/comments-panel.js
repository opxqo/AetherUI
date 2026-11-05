import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CnjHsWNN.js";

/**
 * Comments Panel [Clean Style] (Chat)
 * Comment feed with filters, runnable /edit commands, resolve and a composer
 */
export function CommentsPanel(props = {}) {
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

export const CommentsPanelRaw = __InnerComponent || DemoComponent;
export const CommentsPanelDemo = DemoComponent;

export default CommentsPanel;

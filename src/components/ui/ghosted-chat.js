import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Cm2FVMWj.js";

/**
 * Ghosted Chat (Card illustrations)
 * Unanswered chat messages marked as read, with a thumbs-down reply on hover
 */
export function GhostedChat(props = {}) {
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

export const GhostedChatRaw = __InnerComponent || DemoComponent;
export const GhostedChatDemo = DemoComponent;

export default GhostedChat;

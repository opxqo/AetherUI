import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Cm2FVMWj.js";

/**
 * Ghosted Chat (Card illustrations)
 * Unanswered chat messages marked as read, with a thumbs-down reply on hover
 */
export function GhostedChat(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const GhostedChatRaw = __InnerComponent || DemoComponent;
export const GhostedChatDemo = DemoComponent;

export default GhostedChat;

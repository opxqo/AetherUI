import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-ap1FpgjI.js";

/**
 * Chat Composer (Chat)
 * Prompt composer with model picker, voice input, app connections and approval request
 */
export function ChatComposer(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ChatComposerRaw = __InnerComponent || DemoComponent;
export const ChatComposerDemo = DemoComponent;

export default ChatComposer;

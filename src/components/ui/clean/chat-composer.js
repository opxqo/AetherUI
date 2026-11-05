import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DX9zRbTo.js";

/**
 * Chat Composer [Clean Style] (Chat)
 * Prompt composer with model picker, voice input, app connections and approval request
 */
export function ChatComposer(props = {}) {
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

export const ChatComposerRaw = __InnerComponent || DemoComponent;
export const ChatComposerDemo = DemoComponent;

export default ChatComposer;

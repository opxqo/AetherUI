import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-ulTm4Y9p.js";

/**
 * Message Actions [Clean Style] (Chat)
 * The quiet bar under an AI message – copy turns into a check, regenerate spins and unfolds a version switcher, thumbs pop and ask why, read aloud becomes a tiny equalizer
 */
export function MessageActions(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const MessageActionsRaw = __InnerComponent || DemoComponent;
export const MessageActionsDemo = DemoComponent;
export const MessageText = MessageActions;
export default MessageActions;

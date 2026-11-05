import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DrVDkZ74.js";

/**
 * Message Actions (Chat)
 * The quiet bar under an AI message – copy turns into a check, regenerate spins and unfolds a version switcher, thumbs pop and ask why, read aloud becomes a tiny equalizer
 */
export function MessageActions(props = {}) {
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

export const MessageActionsRaw = __InnerComponent || DemoComponent;
export const MessageActionsDemo = DemoComponent;
export const MessageText = MessageActions;
export default MessageActions;

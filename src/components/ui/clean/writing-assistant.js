import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CXx2yr1v.js";

/**
 * Writing Assistant [Clean Style] (Chat)
 * AI chat card with a soft gradient glow, suggestions, streaming replies and live voice dictation
 */
export function WritingAssistant(props = {}) {
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

export const WritingAssistantRaw = __InnerComponent || DemoComponent;
export const WritingAssistantDemo = DemoComponent;

export default WritingAssistant;

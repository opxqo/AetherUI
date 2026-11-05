import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CXx2yr1v.js";

/**
 * Writing Assistant [Clean Style] (Chat)
 * AI chat card with a soft gradient glow, suggestions, streaming replies and live voice dictation
 */
export function WritingAssistant(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const WritingAssistantRaw = __InnerComponent || DemoComponent;
export const WritingAssistantDemo = DemoComponent;

export default WritingAssistant;

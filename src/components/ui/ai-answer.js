import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DBAxVX0U.js";

/**
 * AI Answer (Chat)
 * Streamed answer with source cards, citation chips that preview their source, copy, regenerate, feedback and follow-ups
 */
export function AIAnswer(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AIAnswerRaw = __InnerComponent || DemoComponent;
export const AIAnswerDemo = DemoComponent;

export default AIAnswer;

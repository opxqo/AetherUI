import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-ZdfWqiDN.js";

/**
 * AI Answer [Clean Style] (Chat)
 * Streamed answer with source cards, citation chips that preview their source, copy, regenerate, feedback and follow-ups
 */
export function AIAnswer(props = {}) {
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

export const AIAnswerRaw = __InnerComponent || DemoComponent;
export const AIAnswerDemo = DemoComponent;

export default AIAnswer;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Be9rfp7V.js";

/**
 * Cited Answer [Clean Style] (Chat)
 * An AI answer wired to its sources – point at a citation to light up its sentence and source, click to unfold the quoted passage with the matching words marked
 */
export function CitedAnswer(props = {}) {
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

export const CitedAnswerRaw = __InnerComponent || DemoComponent;
export const CitedAnswerDemo = DemoComponent;

export default CitedAnswer;

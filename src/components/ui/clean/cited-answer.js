import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Be9rfp7V.js";

/**
 * Cited Answer [Clean Style] (Chat)
 * An AI answer wired to its sources – point at a citation to light up its sentence and source, click to unfold the quoted passage with the matching words marked
 */
export function CitedAnswer(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const CitedAnswerRaw = __InnerComponent || DemoComponent;
export const CitedAnswerDemo = DemoComponent;

export default CitedAnswer;

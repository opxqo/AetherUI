import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Dcdtba_V.js";

/**
 * Gradient Text (Text)
 * Letters cut from a liquid, ever-flowing gradient – the color sweeps across the word the first time it's seen
 */
export function GradientText(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const GradientTextRaw = __InnerComponent || DemoComponent;
export const GradientTextDemo = DemoComponent;

export default GradientText;

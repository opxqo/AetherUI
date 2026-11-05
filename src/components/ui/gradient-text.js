import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Dcdtba_V.js";

/**
 * Gradient Text (Text)
 * Letters cut from a liquid, ever-flowing gradient – the color sweeps across the word the first time it's seen
 */
export function GradientText(props = {}) {
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

export const GradientTextRaw = __InnerComponent || DemoComponent;
export const GradientTextDemo = DemoComponent;

export default GradientText;

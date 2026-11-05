import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BpHzZoNS.js";

/**
 * Model Wheel (Card illustrations)
 * AI model names on a turning drum – the rows bend away at the edges and each model lands on a soft gray fill
 */
export function ModelWheel(props = {}) {
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

export const ModelWheelRaw = __InnerComponent || DemoComponent;
export const ModelWheelDemo = DemoComponent;

export default ModelWheel;

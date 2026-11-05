import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BpHzZoNS.js";

/**
 * Model Wheel (Card illustrations)
 * AI model names on a turning drum – the rows bend away at the edges and each model lands on a soft gray fill
 */
export function ModelWheel(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ModelWheelRaw = __InnerComponent || DemoComponent;
export const ModelWheelDemo = DemoComponent;

export default ModelWheel;

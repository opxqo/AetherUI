import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-_yTJ3G4b.js";

/**
 * Usage Meter [Clean Style] (Data display)
 * Plan usage and AI credits – a stacked credits meter by category, daily sparkline, limits and a button that speaks up near the limit
 */
export function UsageMeter(props = {}) {
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

export const UsageMeterRaw = __InnerComponent || DemoComponent;
export const UsageMeterDemo = DemoComponent;

export default UsageMeter;

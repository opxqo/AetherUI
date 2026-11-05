import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-D5XENR7-.js";

/**
 * Usage Meter (Data display)
 * Plan usage and AI credits – a stacked credits meter by category, daily sparkline, limits and a button that speaks up near the limit
 */
export function UsageMeter(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const UsageMeterRaw = __InnerComponent || DemoComponent;
export const UsageMeterDemo = DemoComponent;

export default UsageMeter;

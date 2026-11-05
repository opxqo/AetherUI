import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo.clean-wzchKI2C.js";

/**
 * Plan vs Actual (Agents)
 * An agent's plan against what really happens – every step's bar grows over its dashed planned ghost, overruns turn amber, the steps after it slide right, and the expected finish moves away from the planned one
 */
export function PlanVsActual(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const PlanVsActualRaw = __InnerComponent || DemoComponent;
export const PlanVsActualDemo = DemoComponent;

export default PlanVsActual;

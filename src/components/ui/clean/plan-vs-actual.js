import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-wzchKI2C.js";

/**
 * Plan vs Actual [Clean Style] (Agents)
 * An agent's plan against what really happens – every step's bar grows over its dashed planned ghost, overruns turn amber, the steps after it slide right, and the expected finish moves away from the planned one
 */
export function PlanVsActual(props = {}) {
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

export const PlanVsActualRaw = __InnerComponent || DemoComponent;
export const PlanVsActualDemo = DemoComponent;

export default PlanVsActual;

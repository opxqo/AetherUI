import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-tbaHea_K.js";

/**
 * Billing Schedule [Clean Style] (Inputs)
 * Build a billing phase – start date, duration, products with repeats and timing, discount, minimum and live totals
 */
export function BillingSchedule(props = {}) {
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

export const BillingScheduleRaw = __InnerComponent || DemoComponent;
export const BillingScheduleDemo = DemoComponent;

export default BillingSchedule;

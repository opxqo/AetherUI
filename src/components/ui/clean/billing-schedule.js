import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-tbaHea_K.js";

/**
 * Billing Schedule [Clean Style] (Inputs)
 * Build a billing phase – start date, duration, products with repeats and timing, discount, minimum and live totals
 */
export function BillingSchedule(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const BillingScheduleRaw = __InnerComponent || DemoComponent;
export const BillingScheduleDemo = DemoComponent;

export default BillingSchedule;

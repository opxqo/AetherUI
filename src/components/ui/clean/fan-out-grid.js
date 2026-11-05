import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Dh8J8jM5.js";

/**
 * Fan-out Grid [Clean Style] (Agents)
 * One agent hands a big job to many workers – every task a cell on a live grid that fills in as they get through it, with retries, failures, cost and the time left, and the details of any task on hover
 */
export function FanoutGrid(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const FanoutGridRaw = __InnerComponent || DemoComponent;
export const FanoutGridDemo = DemoComponent;
export const FanOutGrid = FanoutGrid;
export default FanoutGrid;

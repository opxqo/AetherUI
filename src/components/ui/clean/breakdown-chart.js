import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-BWVKmfqY.js";

/**
 * Breakdown Chart [Clean Style] (Data display)
 * Stacked bar chart with measure, slice and segment pickers, a hover breakdown and a linked table
 */
export function BreakdownChart(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const BreakdownChartRaw = __InnerComponent || DemoComponent;
export const BreakdownChartDemo = DemoComponent;

export default BreakdownChart;

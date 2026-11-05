import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-_DBbejj2.js";

/**
 * Breakdown Chart (Data display)
 * Stacked bar chart with measure, slice and segment pickers, a hover breakdown and a linked table
 */
export function BreakdownChart(props = {}) {
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

export const BreakdownChartRaw = __InnerComponent || DemoComponent;
export const BreakdownChartDemo = DemoComponent;

export default BreakdownChart;

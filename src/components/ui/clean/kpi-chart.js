import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-RZZ7XV1q.js";

/**
 * KPI Chart [Clean Style] (Data display)
 * Metric card with a multi-line chart and a tooltip that follows the pointer
 */
export function KpiChart(props = {}) {
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

export const KpiChartRaw = __InnerComponent || DemoComponent;
export const KpiChartDemo = DemoComponent;
export const KPIChart = KpiChart;
export default KpiChart;

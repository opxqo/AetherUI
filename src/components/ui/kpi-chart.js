import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CDO93-eN.js";

/**
 * KPI Chart (Data display)
 * Metric card with a multi-line chart and a tooltip that follows the pointer
 */
export function KpiChart(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const KpiChartRaw = __InnerComponent || DemoComponent;
export const KpiChartDemo = DemoComponent;
export const KPIChart = KpiChart;
export default KpiChart;

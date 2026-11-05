import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Coprs2Jd.js";

/**
 * Metrics Dashboard (Analytics)
 * Sales overview – KPI cards pick the metric, one chart switches between dotted line and bars, with top products and channels
 */
export function MetricsDashboard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const MetricsDashboardRaw = __InnerComponent || DemoComponent;
export const MetricsDashboardDemo = DemoComponent;

export default MetricsDashboard;

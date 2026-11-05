import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Coprs2Jd.js";

/**
 * Metrics Dashboard (Analytics)
 * Sales overview – KPI cards pick the metric, one chart switches between dotted line and bars, with top products and channels
 */
export function MetricsDashboard(props = {}) {
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

export const MetricsDashboardRaw = __InnerComponent || DemoComponent;
export const MetricsDashboardDemo = DemoComponent;

export default MetricsDashboard;

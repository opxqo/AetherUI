import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DqPXaheB.js";

/**
 * Analytics (App screens)
 * Revenue dashboard: key figures, revenue by channel, breakdown, top products and weekly trends
 */
export function AnalyticsScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AnalyticsScreenRaw = __InnerComponent || DemoComponent;
export const AnalyticsScreenDemo = DemoComponent;
export const Analytics = AnalyticsScreen;
export default AnalyticsScreen;

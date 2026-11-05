import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DqPXaheB.js";

/**
 * Analytics (App screens)
 * Revenue dashboard: key figures, revenue by channel, breakdown, top products and weekly trends
 */
export function AnalyticsScreen(props = {}) {
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

export const AnalyticsScreenRaw = __InnerComponent || DemoComponent;
export const AnalyticsScreenDemo = DemoComponent;
export const Analytics = AnalyticsScreen;
export default AnalyticsScreen;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-v8zKTRWM.js";

/**
 * Compact Breakdown (Data display)
 * A total split into its parts in one small card – numbers roll, the bar glides and the ranked rows trade places when the period changes
 */
export function CompactBreakdown(props = {}) {
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

export const CompactBreakdownRaw = __InnerComponent || DemoComponent;
export const CompactBreakdownDemo = DemoComponent;

export default CompactBreakdown;

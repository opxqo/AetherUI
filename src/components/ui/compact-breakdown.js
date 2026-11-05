import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-v8zKTRWM.js";

/**
 * Compact Breakdown (Data display)
 * A total split into its parts in one small card – numbers roll, the bar glides and the ranked rows trade places when the period changes
 */
export function CompactBreakdown(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const CompactBreakdownRaw = __InnerComponent || DemoComponent;
export const CompactBreakdownDemo = DemoComponent;

export default CompactBreakdown;

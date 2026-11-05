import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Cw1zxurv.js";

/**
 * Change Summary [Clean Style] (Data display)
 * What moved since last time – one metric per row with a colored trend
 */
export function ChangeSummary(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ChangeSummaryRaw = __InnerComponent || DemoComponent;
export const ChangeSummaryDemo = DemoComponent;

export default ChangeSummary;

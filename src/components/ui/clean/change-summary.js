import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Cw1zxurv.js";

/**
 * Change Summary [Clean Style] (Data display)
 * What moved since last time – one metric per row with a colored trend
 */
export function ChangeSummary(props = {}) {
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

export const ChangeSummaryRaw = __InnerComponent || DemoComponent;
export const ChangeSummaryDemo = DemoComponent;

export default ChangeSummary;

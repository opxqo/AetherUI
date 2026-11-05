import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DVOt8T4-.js";

/**
 * KPI Board (Analytics)
 * The top of a dashboard – three trend cards, an overview chart that compares this period with the last, and a focus card; hover shows any day's value and every number rolls when the range changes
 */
export function KpiBoard(props = {}) {
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

export const KpiBoardRaw = __InnerComponent || DemoComponent;
export const KpiBoardDemo = DemoComponent;
export const KPIBoard = KpiBoard;
export default KpiBoard;

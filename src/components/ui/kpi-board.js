import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DVOt8T4-.js";

/**
 * KPI Board (Analytics)
 * The top of a dashboard – three trend cards, an overview chart that compares this period with the last, and a focus card; hover shows any day's value and every number rolls when the range changes
 */
export function KpiBoard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const KpiBoardRaw = __InnerComponent || DemoComponent;
export const KpiBoardDemo = DemoComponent;
export const KPIBoard = KpiBoard;
export default KpiBoard;

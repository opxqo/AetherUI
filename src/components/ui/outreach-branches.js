import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-D-FldunI.js";

/**
 * Outreach Branches (Card illustrations)
 * Lines branching out to Gmail, Slack and Notion with colored pulses flowing down
 */
export function OutreachBranches(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const OutreachBranchesRaw = __InnerComponent || DemoComponent;
export const OutreachBranchesDemo = DemoComponent;

export default OutreachBranches;

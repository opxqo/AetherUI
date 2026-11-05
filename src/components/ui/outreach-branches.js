import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-D-FldunI.js";

/**
 * Outreach Branches (Card illustrations)
 * Lines branching out to Gmail, Slack and Notion with colored pulses flowing down
 */
export function OutreachBranches(props = {}) {
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

export const OutreachBranchesRaw = __InnerComponent || DemoComponent;
export const OutreachBranchesDemo = DemoComponent;

export default OutreachBranches;

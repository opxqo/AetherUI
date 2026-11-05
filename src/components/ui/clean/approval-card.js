import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CHh134hb.js";

/**
 * Approval Card [Clean Style] (Agents)
 * An agent asks before it acts – risk badge, preview, Approve and Deny with shortcuts, a pausing countdown, and a smooth morph into a resolved row
 */
export function ApprovalCard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ApprovalCardRaw = __InnerComponent || DemoComponent;
export const ApprovalCardDemo = DemoComponent;

export default ApprovalCard;

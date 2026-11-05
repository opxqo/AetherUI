import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CHh134hb.js";

/**
 * Approval Card [Clean Style] (Agents)
 * An agent asks before it acts – risk badge, preview, Approve and Deny with shortcuts, a pausing countdown, and a smooth morph into a resolved row
 */
export function ApprovalCard(props = {}) {
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

export const ApprovalCardRaw = __InnerComponent || DemoComponent;
export const ApprovalCardDemo = DemoComponent;

export default ApprovalCard;

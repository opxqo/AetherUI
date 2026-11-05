import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CfzVMkMh.js";

/**
 * Review Center [Clean Style] (Agents)
 * A focused workspace for what your agents want to do – the queue sorted by risk, one item at a time with the shaky spans marked, Approve, Edit, Reject and Skip on single keys, a stamp as each one leaves and the next one rising in
 */
export function ReviewCenter(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ReviewCenterRaw = __InnerComponent || DemoComponent;
export const ReviewCenterDemo = DemoComponent;

export default ReviewCenter;

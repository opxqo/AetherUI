import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BTRtmfz4.js";

/**
 * Decision Inbox (Feedback)
 * Open decisions with two quick answers each – answered ones confirm and fold away
 */
export function DecisionInbox(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const DecisionInboxRaw = __InnerComponent || DemoComponent;
export const DecisionInboxDemo = DemoComponent;

export default DecisionInbox;

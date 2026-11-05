import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-kiCHizEx.js";

/**
 * Agent Inbox [Clean Style] (Agents)
 * All your background agent tasks in one calm list – live clocks and status tags, filter tabs with rolling counts, rows that unfold to the last steps with Approve, Reject, Retry or Open, and glide to their new place
 */
export function AgentInbox(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentInboxRaw = __InnerComponent || DemoComponent;
export const AgentInboxDemo = DemoComponent;

export default AgentInbox;

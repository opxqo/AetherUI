import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B_JQedQ8.js";

/**
 * Agent Tree (Agents)
 * Who started whom – an orchestrator and its sub-agents as a live tree, with status, cost and time on every card, costs rolling up each branch, and branches that fold to one line
 */
export function AgentTree(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentTreeRaw = __InnerComponent || DemoComponent;
export const AgentTreeDemo = DemoComponent;

export default AgentTree;

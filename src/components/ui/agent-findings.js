import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-oWyfFMeM.js";

/**
 * Agent Findings (Agents)
 * A swarm of agents checking something – one calm row per agent with its progress, and their findings sliding into a short feed as they're found
 */
export function AgentFindings(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentFindingsRaw = __InnerComponent || DemoComponent;
export const AgentFindingsDemo = DemoComponent;

export default AgentFindings;

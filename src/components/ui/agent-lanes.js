import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-D2be2q7n.js";

/**
 * Agent Lanes (Agents)
 * Where every agent is right now – a live timeline with a lane per agent, tasks growing into “now”, hand-offs drawn between agents and approvals right on the block
 */
export function AgentLanes(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentLanesRaw = __InnerComponent || DemoComponent;
export const AgentLanesDemo = DemoComponent;

export default AgentLanes;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Dy8kRkE4.js";

/**
 * Agent Checkpoints (Agents)
 * An agent's run as a line of checkpoints, like git for agents – rewind to any of them and a new attempt branches out of it, while the one it left fades back but stays
 */
export function AgentCheckpoints(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentCheckpointsRaw = __InnerComponent || DemoComponent;
export const AgentCheckpointsDemo = DemoComponent;

export default AgentCheckpoints;

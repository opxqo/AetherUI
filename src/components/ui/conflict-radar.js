import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C8n-KhXq.js";

/**
 * Conflict Radar (Agents)
 * Agents working on their own branches at once, and where they get in each other's way – a row per file and a column per agent, a line between the agents that changed the same lines, each agent's way in one sentence to pick from, and Merge once all are settled
 */
export function ConflictRadar(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ConflictRadarRaw = __InnerComponent || DemoComponent;
export const ConflictRadarDemo = DemoComponent;

export default ConflictRadar;

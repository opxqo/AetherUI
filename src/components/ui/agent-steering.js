import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BlCEXjmy.js";

/**
 * Agent Steering (Agents)
 * Steer an agent while it works – queue a note for the next step and watch it glide into the plan when the agent picks it up, or interrupt right away
 */
export function AgentSteering(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentSteeringRaw = __InnerComponent || DemoComponent;
export const AgentSteeringDemo = DemoComponent;

export default AgentSteering;

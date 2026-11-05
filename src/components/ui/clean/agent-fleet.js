import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-2xe35V7E.js";

/**
 * Agent Fleet [Clean Style] (Agents)
 * Several agents side by side – each card sums up its sub-agents, and a click opens its tree to the right while the last one folds back into its card
 */
export function AgentFleet(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentFleetRaw = __InnerComponent || DemoComponent;
export const AgentFleetDemo = DemoComponent;

export default AgentFleet;

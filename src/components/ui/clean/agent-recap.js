import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DmExF8_a.js";

/**
 * Agent Recap [Clean Style] (Agents)
 * What the agents did while you were away – the night as a small chart with a peak per event, then a board of what needs you, what failed and what's done, acted on right on the card
 */
export function AgentRecap(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentRecapRaw = __InnerComponent || DemoComponent;
export const AgentRecapDemo = DemoComponent;

export default AgentRecap;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CW_0t88D.js";

/**
 * Agent Handoff (Agents)
 * A task passed from agent to agent like a relay – at every handoff what went along to the next one, and what got lost on the way
 */
export function AgentHandoff(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentHandoffRaw = __InnerComponent || DemoComponent;
export const AgentHandoffDemo = DemoComponent;

export default AgentHandoff;

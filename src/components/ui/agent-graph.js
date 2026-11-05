import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BbHNVcxq.js";

/**
 * Agent Graph (Agents)
 * Agents and the tools they call as a living network – a pulse along the link for every call and its answer, busy links growing thicker, agents that breathe while they work and turn amber when they need you
 */
export function AgentGraph(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentGraphRaw = __InnerComponent || DemoComponent;
export const AgentGraphDemo = DemoComponent;

export default AgentGraph;

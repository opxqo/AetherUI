import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BF7ciLLI.js";

/**
 * Agent Plan (Agents)
 * An agent's step-by-step plan to review before it runs – rename, drag to reorder, remove or add steps, then watch each one run with live timers and retry from a failed step
 */
export function AgentPlan(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentPlanRaw = __InnerComponent || DemoComponent;
export const AgentPlanDemo = DemoComponent;

export default AgentPlan;

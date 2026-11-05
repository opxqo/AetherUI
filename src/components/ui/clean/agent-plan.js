import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-7-boHMGq.js";

/**
 * Agent Plan [Clean Style] (Agents)
 * An agent's step-by-step plan to review before it runs – rename, drag to reorder, remove or add steps, then watch each one run with live timers and retry from a failed step
 */
export function AgentPlan(props = {}) {
  const { demo, className, style, ...rest } = props;
  const hasCustomProps = demo === false || (!demo && Object.keys(rest).some(k => !["id", "children", "key", "ref"].includes(k) && !k.startsWith("data-") && !k.startsWith("aria-")));
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, { className, style, ...rest });
  }
  const element = React.createElement(DemoComponent, { className, style, ...rest });
  if (className || style) {
    return React.createElement("div", { className, style, "data-aether-wrapper": "" }, element);
  }
  return element;
}

export const AgentPlanRaw = __InnerComponent || DemoComponent;
export const AgentPlanDemo = DemoComponent;

export default AgentPlan;

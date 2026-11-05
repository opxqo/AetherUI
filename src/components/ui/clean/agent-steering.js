import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DfiZ4T3_.js";

/**
 * Agent Steering [Clean Style] (Agents)
 * Steer an agent while it works – queue a note for the next step and watch it glide into the plan when the agent picks it up, or interrupt right away
 */
export function AgentSteering(props = {}) {
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

export const AgentSteeringRaw = __InnerComponent || DemoComponent;
export const AgentSteeringDemo = DemoComponent;

export default AgentSteering;

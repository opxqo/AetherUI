import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-UqHmaqVc.js";

/**
 * Agent Lanes [Clean Style] (Agents)
 * Where every agent is right now – a live timeline with a lane per agent, tasks growing into “now”, hand-offs drawn between agents and approvals right on the block
 */
export function AgentLanes(props = {}) {
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

export const AgentLanesRaw = __InnerComponent || DemoComponent;
export const AgentLanesDemo = DemoComponent;

export default AgentLanes;

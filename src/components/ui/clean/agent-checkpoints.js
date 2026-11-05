import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-rMzZE8NQ.js";

/**
 * Agent Checkpoints [Clean Style] (Agents)
 * An agent's run as a line of checkpoints, like git for agents – rewind to any of them and a new attempt branches out of it, while the one it left fades back but stays
 */
export function AgentCheckpoints(props = {}) {
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

export const AgentCheckpointsRaw = __InnerComponent || DemoComponent;
export const AgentCheckpointsDemo = DemoComponent;

export default AgentCheckpoints;

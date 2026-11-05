import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CRKNaMKk.js";

/**
 * Agent Queue (Agents)
 * The work waiting for your agents, and how fast it moves – jobs drop into a live queue, glide into free worker slots as growing bars and land in Done or Failed, while a depth chart shows the backlog build up when a rate limit pauses the workers and drain when they resume
 */
export function AgentQueue(props = {}) {
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

export const AgentQueueRaw = __InnerComponent || DemoComponent;
export const AgentQueueDemo = DemoComponent;

export default AgentQueue;

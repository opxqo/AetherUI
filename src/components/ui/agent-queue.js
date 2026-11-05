import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CRKNaMKk.js";

/**
 * Agent Queue (Agents)
 * The work waiting for your agents, and how fast it moves – jobs drop into a live queue, glide into free worker slots as growing bars and land in Done or Failed, while a depth chart shows the backlog build up when a rate limit pauses the workers and drain when they resume
 */
export function AgentQueue(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentQueueRaw = __InnerComponent || DemoComponent;
export const AgentQueueDemo = DemoComponent;

export default AgentQueue;

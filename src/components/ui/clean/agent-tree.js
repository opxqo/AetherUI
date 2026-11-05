import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DEOk3i7u.js";

/**
 * Agent Tree [Clean Style] (Agents)
 * Who started whom – an orchestrator and its sub-agents as a live tree, with status, cost and time on every card, costs rolling up each branch, and branches that fold to one line
 */
export function AgentTree(props = {}) {
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

export const AgentTreeRaw = __InnerComponent || DemoComponent;
export const AgentTreeDemo = DemoComponent;

export default AgentTree;

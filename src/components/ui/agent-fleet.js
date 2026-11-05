import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DIZ2E5-o.js";

/**
 * Agent Fleet (Agents)
 * Several agents side by side – each card sums up its sub-agents, and a click opens its tree to the right while the last one folds back into its card
 */
export function AgentFleet(props = {}) {
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

export const AgentFleetRaw = __InnerComponent || DemoComponent;
export const AgentFleetDemo = DemoComponent;

export default AgentFleet;

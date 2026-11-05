import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CC5Qxjh3.js";

/**
 * Agent Recap (Agents)
 * What the agents did while you were away – the night as a small chart with a peak per event, then a board of what needs you, what failed and what's done, acted on right on the card
 */
export function AgentRecap(props = {}) {
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

export const AgentRecapRaw = __InnerComponent || DemoComponent;
export const AgentRecapDemo = DemoComponent;

export default AgentRecap;

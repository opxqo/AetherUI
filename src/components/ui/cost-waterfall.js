import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-j3eWk5E0.js";

/**
 * Cost Waterfall (Agents)
 * Where the money and tokens of an agent run go – every LLM call, tool call and sub-agent as a step in a waterfall, with model, tokens, cost and time, the most expensive step on top and a switch between cost and tokens
 */
export function CostWaterfall(props = {}) {
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

export const CostWaterfallRaw = __InnerComponent || DemoComponent;
export const CostWaterfallDemo = DemoComponent;

export default CostWaterfall;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-OLdSLdLw.js";

/**
 * Trace Waterfall (Agents)
 * Where the time and money of an agent run go – every LLM call, tool call and sub-agent as a bar on a live timeline, with tokens and cost per step, the slowest call marked and branches that fold into their parent
 */
export function TraceWaterfall(props = {}) {
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

export const TraceWaterfallRaw = __InnerComponent || DemoComponent;
export const TraceWaterfallDemo = DemoComponent;

export default TraceWaterfall;

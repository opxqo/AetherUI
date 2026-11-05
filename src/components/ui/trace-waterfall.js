import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-OLdSLdLw.js";

/**
 * Trace Waterfall (Agents)
 * Where the time and money of an agent run go – every LLM call, tool call and sub-agent as a bar on a live timeline, with tokens and cost per step, the slowest call marked and branches that fold into their parent
 */
export function TraceWaterfall(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const TraceWaterfallRaw = __InnerComponent || DemoComponent;
export const TraceWaterfallDemo = DemoComponent;

export default TraceWaterfall;

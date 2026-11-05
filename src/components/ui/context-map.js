import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B9Q3KRp_.js";

/**
 * Context Map (Agents)
 * What fills an agent's context window, as a living treemap – system prompt, tools, memory, every file, the chat and tool results as tiles that glide as it grows, the free space dashed, and compaction squeezing old turns into a summary
 */
export function ContextMap(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ContextMapRaw = __InnerComponent || DemoComponent;
export const ContextMapDemo = DemoComponent;

export default ContextMap;

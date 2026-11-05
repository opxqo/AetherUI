import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DcCU7oPV.js";

/**
 * AI Chat / Run (App screens)
 * One autonomous agent run: the plan ticking through its steps, the tool calls, an approval it waits on and the draft it wrote
 */
export function AgentRunScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentRunScreenRaw = __InnerComponent || DemoComponent;
export const AgentRunScreenDemo = DemoComponent;
export const AgentRun = AgentRunScreen;
export default AgentRunScreen;

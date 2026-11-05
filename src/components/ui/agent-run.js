import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DcCU7oPV.js";

/**
 * AI Chat / Run (App screens)
 * One autonomous agent run: the plan ticking through its steps, the tool calls, an approval it waits on and the draft it wrote
 */
export function AgentRunScreen(props = {}) {
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

export const AgentRunScreenRaw = __InnerComponent || DemoComponent;
export const AgentRunScreenDemo = DemoComponent;
export const AgentRun = AgentRunScreen;
export default AgentRunScreen;

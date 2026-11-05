import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CW_0t88D.js";

/**
 * Agent Handoff (Agents)
 * A task passed from agent to agent like a relay – at every handoff what went along to the next one, and what got lost on the way
 */
export function AgentHandoff(props = {}) {
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

export const AgentHandoffRaw = __InnerComponent || DemoComponent;
export const AgentHandoffDemo = DemoComponent;

export default AgentHandoff;

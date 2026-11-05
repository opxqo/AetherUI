import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-oWyfFMeM.js";

/**
 * Agent Findings (Agents)
 * A swarm of agents checking something – one calm row per agent with its progress, and their findings sliding into a short feed as they're found
 */
export function AgentFindings(props = {}) {
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

export const AgentFindingsRaw = __InnerComponent || DemoComponent;
export const AgentFindingsDemo = DemoComponent;

export default AgentFindings;

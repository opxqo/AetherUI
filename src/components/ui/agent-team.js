import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BioXBQfc.js";

/**
 * Agent Team (Card illustrations)
 * A prompt types itself and branches out into three agents, each with a role and overlapping tool logos
 */
export function AgentTeam(props = {}) {
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

export const AgentTeamRaw = __InnerComponent || DemoComponent;
export const AgentTeamDemo = DemoComponent;

export default AgentTeam;

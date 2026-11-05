import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BioXBQfc.js";

/**
 * Agent Team (Card illustrations)
 * A prompt types itself and branches out into three agents, each with a role and overlapping tool logos
 */
export function AgentTeam(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentTeamRaw = __InnerComponent || DemoComponent;
export const AgentTeamDemo = DemoComponent;

export default AgentTeam;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-cWsVSmbI.js";

/**
 * Team Invite (Card illustrations)
 * Connected teammates – a cursor drags a new one into the empty slot, the line turns solid and they go online
 */
export function TeamInvite(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const TeamInviteRaw = __InnerComponent || DemoComponent;
export const TeamInviteDemo = DemoComponent;

export default TeamInvite;

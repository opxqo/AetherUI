import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-cWsVSmbI.js";

/**
 * Team Invite (Card illustrations)
 * Connected teammates – a cursor drags a new one into the empty slot, the line turns solid and they go online
 */
export function TeamInvite(props = {}) {
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

export const TeamInviteRaw = __InnerComponent || DemoComponent;
export const TeamInviteDemo = DemoComponent;

export default TeamInvite;

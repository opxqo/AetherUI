import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Dk3NEbkP.js";

/**
 * Profile Menu (Navigation)
 * Account card with the signed-in user, menu actions and profile setup progress
 */
export function ProfileMenu(props = {}) {
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

export const ProfileMenuRaw = __InnerComponent || DemoComponent;
export const ProfileMenuDemo = DemoComponent;
export const SettingsIcon = ProfileMenu;
export const LogoutIcon = ProfileMenu;
export default ProfileMenu;

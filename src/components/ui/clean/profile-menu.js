import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CPL7IiHS.js";

/**
 * Profile Menu [Clean Style] (Navigation)
 * Account card with the signed-in user, menu actions and profile setup progress
 */
export function ProfileMenu(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ProfileMenuRaw = __InnerComponent || DemoComponent;
export const ProfileMenuDemo = DemoComponent;
export const SettingsIcon = ProfileMenu;
export const LogoutIcon = ProfileMenu;
export default ProfileMenu;

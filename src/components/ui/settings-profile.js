import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DSMBQ3nl.js";

/**
 * Settings / Profile (App screens)
 * Profile settings with a settings sidebar: picture, name, role and email as rows, time preferences, personal context for the assistant and the password
 */
export function SettingsProfileScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsProfileScreenRaw = __InnerComponent || DemoComponent;
export const SettingsProfileScreenDemo = DemoComponent;
export const SettingsProfile = SettingsProfileScreen;
export default SettingsProfileScreen;

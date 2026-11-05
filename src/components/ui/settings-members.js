import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B27uonNG.js";

/**
 * Settings / Teams (App screens)
 * Members and teams in the settings: seats at a glance, search, role filter, export and invite, members with role, plan and usage, bulk changes, and teams
 */
export function SettingsMembersScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsMembersScreenRaw = __InnerComponent || DemoComponent;
export const SettingsMembersScreenDemo = DemoComponent;
export const SettingsMembers = SettingsMembersScreen;
export default SettingsMembersScreen;

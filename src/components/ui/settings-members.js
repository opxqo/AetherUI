import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B27uonNG.js";

/**
 * Settings / Teams (App screens)
 * Members and teams in the settings: seats at a glance, search, role filter, export and invite, members with role, plan and usage, bulk changes, and teams
 */
export function SettingsMembersScreen(props = {}) {
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

export const SettingsMembersScreenRaw = __InnerComponent || DemoComponent;
export const SettingsMembersScreenDemo = DemoComponent;
export const SettingsMembers = SettingsMembersScreen;
export default SettingsMembersScreen;

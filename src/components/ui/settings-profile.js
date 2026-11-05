import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DSMBQ3nl.js";

/**
 * Settings / Profile (App screens)
 * Profile settings with a settings sidebar: picture, name, role and email as rows, time preferences, personal context for the assistant and the password
 */
export function SettingsProfileScreen(props = {}) {
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

export const SettingsProfileScreenRaw = __InnerComponent || DemoComponent;
export const SettingsProfileScreenDemo = DemoComponent;
export const SettingsProfile = SettingsProfileScreen;
export default SettingsProfileScreen;

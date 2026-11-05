import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CtVTw0eN.js";

/**
 * Settings / Security (App screens)
 * Security settings with a settings sidebar: email domains to verify, sign-in rules with SSO and two-step verification, the identity provider details to copy, an IP allowlist and a danger zone that signs everyone out
 */
export function SettingsSecurityScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsSecurityScreenRaw = __InnerComponent || DemoComponent;
export const SettingsSecurityScreenDemo = DemoComponent;
export const SettingsSecurity = SettingsSecurityScreen;
export default SettingsSecurityScreen;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CtVTw0eN.js";

/**
 * Settings / Security (App screens)
 * Security settings with a settings sidebar: email domains to verify, sign-in rules with SSO and two-step verification, the identity provider details to copy, an IP allowlist and a danger zone that signs everyone out
 */
export function SettingsSecurityScreen(props = {}) {
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

export const SettingsSecurityScreenRaw = __InnerComponent || DemoComponent;
export const SettingsSecurityScreenDemo = DemoComponent;
export const SettingsSecurity = SettingsSecurityScreen;
export default SettingsSecurityScreen;

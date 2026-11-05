import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Bx6K_V5F.js";

/**
 * Settings / Privacy (App screens)
 * Privacy settings with a settings sidebar: switches for ad measurement, analytics and training on chats, this browser's cookies, product emails, active sessions to sign out, chats shared by link and a danger zone to export or delete every chat
 */
export function SettingsPrivacyScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsPrivacyScreenRaw = __InnerComponent || DemoComponent;
export const SettingsPrivacyScreenDemo = DemoComponent;
export const SettingsPrivacy = SettingsPrivacyScreen;
export default SettingsPrivacyScreen;

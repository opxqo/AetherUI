import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Bx6K_V5F.js";

/**
 * Settings / Privacy (App screens)
 * Privacy settings with a settings sidebar: switches for ad measurement, analytics and training on chats, this browser's cookies, product emails, active sessions to sign out, chats shared by link and a danger zone to export or delete every chat
 */
export function SettingsPrivacyScreen(props = {}) {
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

export const SettingsPrivacyScreenRaw = __InnerComponent || DemoComponent;
export const SettingsPrivacyScreenDemo = DemoComponent;
export const SettingsPrivacy = SettingsPrivacyScreen;
export default SettingsPrivacyScreen;

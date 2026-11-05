import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BVNs823U.js";

/**
 * Settings / Notifications (App screens)
 * Notification settings with a settings sidebar: a daily digest with its time, a table of notification types each sent by email, mobile, both or only to the inbox, and quiet hours at night
 */
export function SettingsNotificationsScreen(props = {}) {
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

export const SettingsNotificationsScreenRaw = __InnerComponent || DemoComponent;
export const SettingsNotificationsScreenDemo = DemoComponent;
export const SettingsNotifications = SettingsNotificationsScreen;
export default SettingsNotificationsScreen;

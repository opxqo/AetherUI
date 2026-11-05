import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BVNs823U.js";

/**
 * Settings / Notifications (App screens)
 * Notification settings with a settings sidebar: a daily digest with its time, a table of notification types each sent by email, mobile, both or only to the inbox, and quiet hours at night
 */
export function SettingsNotificationsScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsNotificationsScreenRaw = __InnerComponent || DemoComponent;
export const SettingsNotificationsScreenDemo = DemoComponent;
export const SettingsNotifications = SettingsNotificationsScreen;
export default SettingsNotificationsScreen;

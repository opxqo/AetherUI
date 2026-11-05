import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-D8SAlH2y.js";

/**
 * Notification Stack [Clean Style] (Feedback)
 * Notice cards stacked behind each other – dismiss the front one to reveal the next
 */
export function NotificationStack(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const NotificationStackRaw = __InnerComponent || DemoComponent;
export const NotificationStackDemo = DemoComponent;

export default NotificationStack;

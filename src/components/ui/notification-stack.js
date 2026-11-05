import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B6G7VOmY.js";

/**
 * Notification Stack (Feedback)
 * Notice cards stacked behind each other – dismiss the front one to reveal the next
 */
export function NotificationStack(props = {}) {
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

export const NotificationStackRaw = __InnerComponent || DemoComponent;
export const NotificationStackDemo = DemoComponent;

export default NotificationStack;

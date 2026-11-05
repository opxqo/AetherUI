import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BTRtmfz4.js";

/**
 * Decision Inbox (Feedback)
 * Open decisions with two quick answers each – answered ones confirm and fold away
 */
export function DecisionInbox(props = {}) {
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

export const DecisionInboxRaw = __InnerComponent || DemoComponent;
export const DecisionInboxDemo = DemoComponent;

export default DecisionInbox;

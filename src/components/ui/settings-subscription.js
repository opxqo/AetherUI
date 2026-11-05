import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CVegJkmk.js";

/**
 * Settings / Billing (App screens)
 * Billing in the settings: the plan with the upcoming bill and usage, plans with monthly or yearly pricing and an add-on, billing address and card, invoices and cancel
 */
export function SettingsSubscriptionScreen(props = {}) {
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

export const SettingsSubscriptionScreenRaw = __InnerComponent || DemoComponent;
export const SettingsSubscriptionScreenDemo = DemoComponent;
export const SettingsSubscription = SettingsSubscriptionScreen;
export default SettingsSubscriptionScreen;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CVegJkmk.js";

/**
 * Settings / Billing (App screens)
 * Billing in the settings: the plan with the upcoming bill and usage, plans with monthly or yearly pricing and an add-on, billing address and card, invoices and cancel
 */
export function SettingsSubscriptionScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsSubscriptionScreenRaw = __InnerComponent || DemoComponent;
export const SettingsSubscriptionScreenDemo = DemoComponent;
export const SettingsSubscription = SettingsSubscriptionScreen;
export default SettingsSubscriptionScreen;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CGLaBJBw.js";

/**
 * Pricing Plans (Pricing)
 * Pricing section with a monthly / yearly switch, three plan cards and collapsible details
 */
export function PricingPlans(props = {}) {
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

export const PricingPlansRaw = __InnerComponent || DemoComponent;
export const PricingPlansDemo = DemoComponent;

export default PricingPlans;

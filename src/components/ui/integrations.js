import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-tSofIbN8.js";

/**
 * Integrations (App screens)
 * App directory with a sticky header, categories, search and connect states
 */
export function IntegrationsScreen(props = {}) {
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

export const IntegrationsScreenRaw = __InnerComponent || DemoComponent;
export const IntegrationsScreenDemo = DemoComponent;
export const Integrations = IntegrationsScreen;
export default IntegrationsScreen;

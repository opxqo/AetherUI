import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-tSofIbN8.js";

/**
 * Integrations (App screens)
 * App directory with a sticky header, categories, search and connect states
 */
export function IntegrationsScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const IntegrationsScreenRaw = __InnerComponent || DemoComponent;
export const IntegrationsScreenDemo = DemoComponent;
export const Integrations = IntegrationsScreen;
export default IntegrationsScreen;

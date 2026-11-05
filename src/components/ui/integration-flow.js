import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BGQwbKVm.js";

/**
 * Integration Flow (Product scenes)
 * Integration pills rotating along a dashed arc, each beaming its data into a central analysis hub
 */
export function IntegrationFlow(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const IntegrationFlowRaw = __InnerComponent || DemoComponent;
export const IntegrationFlowDemo = DemoComponent;

export default IntegrationFlow;

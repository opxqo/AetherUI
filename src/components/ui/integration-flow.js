import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BGQwbKVm.js";

/**
 * Integration Flow (Product scenes)
 * Integration pills rotating along a dashed arc, each beaming its data into a central analysis hub
 */
export function IntegrationFlow(props = {}) {
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

export const IntegrationFlowRaw = __InnerComponent || DemoComponent;
export const IntegrationFlowDemo = DemoComponent;

export default IntegrationFlow;

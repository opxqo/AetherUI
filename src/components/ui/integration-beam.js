import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-JIg3CWgz.js";

/**
 * Integration Beam (Product scenes)
 * Your product between the tools it connects – light pulses flow along curved beams, hover to focus a tool, click to pause it
 */
export function IntegrationBeam(props = {}) {
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

export const IntegrationBeamRaw = __InnerComponent || DemoComponent;
export const IntegrationBeamDemo = DemoComponent;

export default IntegrationBeam;

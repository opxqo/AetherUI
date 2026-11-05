import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-JIg3CWgz.js";

/**
 * Integration Beam (Product scenes)
 * Your product between the tools it connects – light pulses flow along curved beams, hover to focus a tool, click to pause it
 */
export function IntegrationBeam(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const IntegrationBeamRaw = __InnerComponent || DemoComponent;
export const IntegrationBeamDemo = DemoComponent;

export default IntegrationBeam;

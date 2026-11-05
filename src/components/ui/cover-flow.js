import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DUDAZG_X.js";

/**
 * Cover Flow (Card illustrations)
 * Browse covers in 3D – drag, flick or scrub the row, it springs to the nearest cover; images drift in their frames over a soft reflection
 */
export function CoverFlow(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const CoverFlowRaw = __InnerComponent || DemoComponent;
export const CoverFlowDemo = DemoComponent;

export default CoverFlow;

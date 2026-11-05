import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DUDAZG_X.js";

/**
 * Cover Flow (Card illustrations)
 * Browse covers in 3D – drag, flick or scrub the row, it springs to the nearest cover; images drift in their frames over a soft reflection
 */
export function CoverFlow(props = {}) {
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

export const CoverFlowRaw = __InnerComponent || DemoComponent;
export const CoverFlowDemo = DemoComponent;

export default CoverFlow;

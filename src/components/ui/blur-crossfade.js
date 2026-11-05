import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Ye53Zfy1.js";

/**
 * Blur Crossfade (Transitions)
 * Swaps content with a soft blur while the box glides smoothly to the size of what comes next
 */
export function BlurCrossfade(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const BlurCrossfadeRaw = __InnerComponent || DemoComponent;
export const BlurCrossfadeDemo = DemoComponent;

export default BlurCrossfade;

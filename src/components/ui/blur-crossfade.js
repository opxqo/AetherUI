import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Ye53Zfy1.js";

/**
 * Blur Crossfade (Transitions)
 * Swaps content with a soft blur while the box glides smoothly to the size of what comes next
 */
export function BlurCrossfade(props = {}) {
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

export const BlurCrossfadeRaw = __InnerComponent || DemoComponent;
export const BlurCrossfadeDemo = DemoComponent;

export default BlurCrossfade;

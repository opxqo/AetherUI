import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Cm8kSHcX.js";

/**
 * Glow Cloud (Card illustrations)
 * A glowing cloud with eyes in blue or red-orange – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked
 */
export function GlowCloud(props = {}) {
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

export const GlowCloudRaw = __InnerComponent || DemoComponent;
export const GlowCloudDemo = DemoComponent;

export default GlowCloud;

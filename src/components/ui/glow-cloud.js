import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Cm8kSHcX.js";

/**
 * Glow Cloud (Card illustrations)
 * A glowing cloud with eyes in blue or red-orange – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked
 */
export function GlowCloud(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const GlowCloudRaw = __InnerComponent || DemoComponent;
export const GlowCloudDemo = DemoComponent;

export default GlowCloud;

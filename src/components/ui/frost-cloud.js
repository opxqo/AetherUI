import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DrDu-VuE.js";

/**
 * Frost Cloud (Card illustrations)
 * A frosted white cloud with eyes cut out of it, on a red-orange or blue sky – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked
 */
export function FrostCloud(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const FrostCloudRaw = __InnerComponent || DemoComponent;
export const FrostCloudDemo = DemoComponent;

export default FrostCloud;

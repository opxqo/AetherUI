import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DrDu-VuE.js";

/**
 * Frost Cloud (Card illustrations)
 * A frosted white cloud with eyes cut out of it, on a red-orange or blue sky – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked
 */
export function FrostCloud(props = {}) {
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

export const FrostCloudRaw = __InnerComponent || DemoComponent;
export const FrostCloudDemo = DemoComponent;

export default FrostCloud;

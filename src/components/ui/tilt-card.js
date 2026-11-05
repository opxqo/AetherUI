import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BijqyLh8.js";

/**
 * Tilt Card (Hover)
 * A card that tilts in 3D towards the pointer, with a soft glare that follows it and a smooth spring back
 */
export function TiltCard(props = {}) {
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

export const TiltCardRaw = __InnerComponent || DemoComponent;
export const TiltCardDemo = DemoComponent;

export default TiltCard;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BijqyLh8.js";

/**
 * Tilt Card (Hover)
 * A card that tilts in 3D towards the pointer, with a soft glare that follows it and a smooth spring back
 */
export function TiltCard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const TiltCardRaw = __InnerComponent || DemoComponent;
export const TiltCardDemo = DemoComponent;

export default TiltCard;

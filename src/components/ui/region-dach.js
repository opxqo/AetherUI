import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Ci6RIQmr.js";

/**
 * DACH Region (Maps)
 * DACH map with fading neighbours and a pastel band along the border, switchable to the US, China, India, Brazil or Japan
 */
export function RegionDach(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const RegionDachRaw = __InnerComponent || DemoComponent;
export const RegionDachDemo = DemoComponent;
export const RegionDACH = RegionDach;
export default RegionDach;

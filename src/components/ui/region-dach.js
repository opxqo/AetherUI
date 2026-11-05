import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Ci6RIQmr.js";

/**
 * DACH Region (Maps)
 * DACH map with fading neighbours and a pastel band along the border, switchable to the US, China, India, Brazil or Japan
 */
export function RegionDach(props = {}) {
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

export const RegionDachRaw = __InnerComponent || DemoComponent;
export const RegionDachDemo = DemoComponent;
export const RegionDACH = RegionDach;
export default RegionDach;

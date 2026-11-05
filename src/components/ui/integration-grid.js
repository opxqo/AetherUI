import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BABw5NIJ.js";

/**
 * Integration Grid (Card illustrations)
 * Honeycomb-like wall of integration logos around a bright centre tile with your product mark, fading out toward the edges
 */
export function IntegrationGrid(props = {}) {
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

export const IntegrationGridRaw = __InnerComponent || DemoComponent;
export const IntegrationGridDemo = DemoComponent;

export default IntegrationGrid;

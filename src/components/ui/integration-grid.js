import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BABw5NIJ.js";

/**
 * Integration Grid (Card illustrations)
 * Honeycomb-like wall of integration logos around a bright centre tile with your product mark, fading out toward the edges
 */
export function IntegrationGrid(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const IntegrationGridRaw = __InnerComponent || DemoComponent;
export const IntegrationGridDemo = DemoComponent;

export default IntegrationGrid;

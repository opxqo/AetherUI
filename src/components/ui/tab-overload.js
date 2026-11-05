import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CVKU8Uzh.js";

/**
 * Tab Overload (Card illustrations)
 * Overlapping browser windows where the highlight follows the hovered tab
 */
export function TabOverload(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const TabOverloadRaw = __InnerComponent || DemoComponent;
export const TabOverloadDemo = DemoComponent;

export default TabOverload;

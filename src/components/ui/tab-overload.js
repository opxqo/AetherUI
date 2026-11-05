import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CVKU8Uzh.js";

/**
 * Tab Overload (Card illustrations)
 * Overlapping browser windows where the highlight follows the hovered tab
 */
export function TabOverload(props = {}) {
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

export const TabOverloadRaw = __InnerComponent || DemoComponent;
export const TabOverloadDemo = DemoComponent;

export default TabOverload;

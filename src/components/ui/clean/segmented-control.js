import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-C-Z6yZbv.js";

/**
 * Segmented Control [Clean Style] (Navigation)
 * Switch between two to six options – a raised pill or underline that glides, stretches a little and can be dragged across, with icons, counts and badges
 */
export function SegmentedControl(props = {}) {
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

export const SegmentedControlRaw = __InnerComponent || DemoComponent;
export const SegmentedControlDemo = DemoComponent;

export default SegmentedControl;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Dm6BxvlO.js";

/**
 * Segmented Control (Navigation)
 * Switch between two to six options – a raised pill or underline that glides, stretches a little and can be dragged across, with icons, counts and badges
 */
export function SegmentedControl(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SegmentedControlRaw = __InnerComponent || DemoComponent;
export const SegmentedControlDemo = DemoComponent;

export default SegmentedControl;

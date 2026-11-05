import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DFP8ePHp.js";

/**
 * Button (Buttons)
 * Primary, secondary, ghost and destructive buttons with icons, sizes and a shimmering loading state
 */
export function Button(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ButtonRaw = __InnerComponent || DemoComponent;
export const ButtonDemo = DemoComponent;

export default Button;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-fXLK9gWq.js";

/**
 * Button [Clean Style] (Buttons)
 * Primary, secondary, ghost and destructive buttons with icons, sizes and a shimmering loading state
 */
export function Button(props = {}) {
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

export const ButtonRaw = __InnerComponent || DemoComponent;
export const ButtonDemo = DemoComponent;

export default Button;

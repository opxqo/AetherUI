import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B-TgH1P-.js";

/**
 * Gradient Floor (Backgrounds)
 * A blurred colour gradient that glows up from the bottom edge – two layers that drift and morph
 */
export function GradientFloor(props = {}) {
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

export const GradientFloorRaw = __InnerComponent || DemoComponent;
export const GradientFloorDemo = DemoComponent;

export default GradientFloor;

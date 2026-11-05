import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B-TgH1P-.js";

/**
 * Gradient Floor (Backgrounds)
 * A blurred colour gradient that glows up from the bottom edge – two layers that drift and morph
 */
export function GradientFloor(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const GradientFloorRaw = __InnerComponent || DemoComponent;
export const GradientFloorDemo = DemoComponent;

export default GradientFloor;

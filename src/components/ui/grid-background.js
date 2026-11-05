import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-S1hMjDCH.js";

/**
 * Grid Background (Backgrounds)
 * A fine line grid that drifts slowly behind your content and fades out towards the edges
 */
export function GridBackground(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const GridBackgroundRaw = __InnerComponent || DemoComponent;
export const GridBackgroundDemo = DemoComponent;

export default GridBackground;

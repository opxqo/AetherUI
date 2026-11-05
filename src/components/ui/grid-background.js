import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-S1hMjDCH.js";

/**
 * Grid Background (Backgrounds)
 * A fine line grid that drifts slowly behind your content and fades out towards the edges
 */
export function GridBackground(props = {}) {
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

export const GridBackgroundRaw = __InnerComponent || DemoComponent;
export const GridBackgroundDemo = DemoComponent;

export default GridBackground;

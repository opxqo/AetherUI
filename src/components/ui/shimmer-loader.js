import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BH465McH.js";

/**
 * Shimmer Loader (Loaders)
 * Skeleton blocks that share one soft light sweep, plus shimmering text for “Thinking…” states
 */
export function Skeleton(props = {}) {
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

export const SkeletonRaw = __InnerComponent || DemoComponent;
export const SkeletonDemo = DemoComponent;
export const ShimmerText = Skeleton;
export const ShimmerLoader = Skeleton;
export default Skeleton;

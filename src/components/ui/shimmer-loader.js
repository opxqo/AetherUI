import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BH465McH.js";

/**
 * Shimmer Loader (Loaders)
 * Skeleton blocks that share one soft light sweep, plus shimmering text for “Thinking…” states
 */
export function Skeleton(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SkeletonRaw = __InnerComponent || DemoComponent;
export const SkeletonDemo = DemoComponent;
export const ShimmerText = Skeleton;
export const ShimmerLoader = Skeleton;
export default Skeleton;

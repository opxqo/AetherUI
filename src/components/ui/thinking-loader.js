import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BKj0WRzp.js";

/**
 * Thinking Loader (Chat)
 * A small working pill for AI replies – an eight-ray spinner and a shimmering label that rolls through phases and settles on a check
 */
export function ThinkingLoader(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ThinkingLoaderRaw = __InnerComponent || DemoComponent;
export const ThinkingLoaderDemo = DemoComponent;

export default ThinkingLoader;

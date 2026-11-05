import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BKj0WRzp.js";

/**
 * Thinking Loader (Chat)
 * A small working pill for AI replies – an eight-ray spinner and a shimmering label that rolls through phases and settles on a check
 */
export function ThinkingLoader(props = {}) {
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

export const ThinkingLoaderRaw = __InnerComponent || DemoComponent;
export const ThinkingLoaderDemo = DemoComponent;

export default ThinkingLoader;

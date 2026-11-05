import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C-mWQewT.js";

/**
 * Thinking State (Chat)
 * AI working panel with a live timer, searched sources and thinking steps that appear one by one
 */
export function ThinkingState(props = {}) {
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

export const ThinkingStateRaw = __InnerComponent || DemoComponent;
export const ThinkingStateDemo = DemoComponent;

export default ThinkingState;

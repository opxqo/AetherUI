import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C-mWQewT.js";

/**
 * Thinking State (Chat)
 * AI working panel with a live timer, searched sources and thinking steps that appear one by one
 */
export function ThinkingState(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ThinkingStateRaw = __InnerComponent || DemoComponent;
export const ThinkingStateDemo = DemoComponent;

export default ThinkingState;

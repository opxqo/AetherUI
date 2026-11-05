import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BanY3X-P.js";

/**
 * Tool Call Card (Agents)
 * An agent's tool call in one line – live timer, status and summary, folds open to highlighted arguments and result with copy, retry on errors and a group that sums them up
 */
export function ToolCallCard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ToolCallCardRaw = __InnerComponent || DemoComponent;
export const ToolCallCardDemo = DemoComponent;
export const ToolCallGroup = ToolCallCard;
export default ToolCallCard;

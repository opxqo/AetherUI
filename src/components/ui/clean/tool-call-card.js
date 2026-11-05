import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Bc3dcFVh.js";

/**
 * Tool Call Card [Clean Style] (Agents)
 * An agent's tool call in one line – live timer, status and summary, folds open to highlighted arguments and result with copy, retry on errors and a group that sums them up
 */
export function ToolCallCard(props = {}) {
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

export const ToolCallCardRaw = __InnerComponent || DemoComponent;
export const ToolCallCardDemo = DemoComponent;
export const ToolCallGroup = ToolCallCard;
export default ToolCallCard;

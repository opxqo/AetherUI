import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DbZzI48W.js";

/**
 * Delegate Board [Clean Style] (Agents)
 * Hand work to your agents by dragging it onto them – each agent previews its new “busy until” time, or switch to Auto and every new task goes to whoever is free first
 */
export function DelegateBoard(props = {}) {
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

export const DelegateBoardRaw = __InnerComponent || DemoComponent;
export const DelegateBoardDemo = DemoComponent;

export default DelegateBoard;

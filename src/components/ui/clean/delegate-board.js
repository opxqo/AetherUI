import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DbZzI48W.js";

/**
 * Delegate Board [Clean Style] (Agents)
 * Hand work to your agents by dragging it onto them – each agent previews its new “busy until” time, or switch to Auto and every new task goes to whoever is free first
 */
export function DelegateBoard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const DelegateBoardRaw = __InnerComponent || DemoComponent;
export const DelegateBoardDemo = DemoComponent;

export default DelegateBoard;

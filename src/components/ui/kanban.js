import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BRSYeTDM.js";

/**
 * Kanban Board (App screens)
 * Issues on a board by priority – drag cards between columns, switch to a list, filter and sort
 */
export function KanbanScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const KanbanScreenRaw = __InnerComponent || DemoComponent;
export const KanbanScreenDemo = DemoComponent;
export const Kanban = KanbanScreen;
export default KanbanScreen;

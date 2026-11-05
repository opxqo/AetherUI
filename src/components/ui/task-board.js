import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CmolVFYq.js";

/**
 * Task Board (Productivity)
 * Kanban board with drag and drop, quick add, a detail panel, search, label filters and a compact view
 */
export function TaskBoard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const TaskBoardRaw = __InnerComponent || DemoComponent;
export const TaskBoardDemo = DemoComponent;

export default TaskBoard;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BRSYeTDM.js";

/**
 * Kanban Board (App screens)
 * Issues on a board by priority – drag cards between columns, switch to a list, filter and sort
 */
export function KanbanScreen(props = {}) {
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

export const KanbanScreenRaw = __InnerComponent || DemoComponent;
export const KanbanScreenDemo = DemoComponent;
export const Kanban = KanbanScreen;
export default KanbanScreen;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-BNHrnTlu.js";

/**
 * Memory Panel [Clean Style] (Agents)
 * What the assistant remembers about you, grouped and editable – a master switch, category filters, and on every memory edit in place, pause or forget with Undo on the tray
 */
export function MemoryPanel(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const MemoryPanelRaw = __InnerComponent || DemoComponent;
export const MemoryPanelDemo = DemoComponent;

export default MemoryPanel;

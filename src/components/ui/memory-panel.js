import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Dzop4bhP.js";

/**
 * Memory Panel (Agents)
 * What the assistant remembers about you, grouped and editable – a master switch, category filters, and on every memory edit in place, pause or forget with Undo on the tray
 */
export function MemoryPanel(props = {}) {
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

export const MemoryPanelRaw = __InnerComponent || DemoComponent;
export const MemoryPanelDemo = DemoComponent;

export default MemoryPanel;

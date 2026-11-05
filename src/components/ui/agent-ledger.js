import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CGzh0xx5.js";

/**
 * Agent Ledger (Agents)
 * Everything an agent changed in your systems, each change with an undo – before and after per row, and pointing at Undo shows what builds on it: what would be undone too, and what can't be taken back
 */
export function AgentLedger(props = {}) {
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

export const AgentLedgerRaw = __InnerComponent || DemoComponent;
export const AgentLedgerDemo = DemoComponent;

export default AgentLedger;

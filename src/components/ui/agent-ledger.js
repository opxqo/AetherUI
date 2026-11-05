import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CGzh0xx5.js";

/**
 * Agent Ledger (Agents)
 * Everything an agent changed in your systems, each change with an undo – before and after per row, and pointing at Undo shows what builds on it: what would be undone too, and what can't be taken back
 */
export function AgentLedger(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentLedgerRaw = __InnerComponent || DemoComponent;
export const AgentLedgerDemo = DemoComponent;

export default AgentLedger;

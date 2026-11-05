import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BbTawgt2.js";

/**
 * Agent Monitor (Agents)
 * One agent at work, as a card – its current step with a clock and the bill so far, a time strip and the finished steps with the logo of each tool, a click on any of them for the details; the exact command when it needs your OK; folds into a small bar with the tools it has used
 */
export function AgentMonitor(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentMonitorRaw = __InnerComponent || DemoComponent;
export const AgentMonitorDemo = DemoComponent;

export default AgentMonitor;

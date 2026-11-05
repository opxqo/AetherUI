import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-C6Ab9LLt.js";

/**
 * Agent Monitor [Clean Style] (Agents)
 * One agent at work, as a card – its current step with a clock and the bill so far, a time strip and the finished steps with the logo of each tool, a click on any of them for the details; the exact command when it needs your OK; folds into a small bar with the tools it has used
 */
export function AgentMonitor(props = {}) {
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

export const AgentMonitorRaw = __InnerComponent || DemoComponent;
export const AgentMonitorDemo = DemoComponent;

export default AgentMonitor;

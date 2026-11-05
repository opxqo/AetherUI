import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-At8-ozCe.js";

/**
 * Scheduled Runs (Agents)
 * Agent tasks sorted into a week of sessions – each session has a usage limit, small tasks fill the gaps, big ones are split across sessions, and the stack flies in one card at a time
 */
export function ScheduledRuns(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ScheduledRunsRaw = __InnerComponent || DemoComponent;
export const ScheduledRunsDemo = DemoComponent;

export default ScheduledRuns;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-At8-ozCe.js";

/**
 * Scheduled Runs (Agents)
 * Agent tasks sorted into a week of sessions – each session has a usage limit, small tasks fill the gaps, big ones are split across sessions, and the stack flies in one card at a time
 */
export function ScheduledRuns(props = {}) {
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

export const ScheduledRunsRaw = __InnerComponent || DemoComponent;
export const ScheduledRunsDemo = DemoComponent;

export default ScheduledRuns;

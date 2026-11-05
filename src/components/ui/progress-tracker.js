import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CRM2yhps.js";

/**
 * Progress Tracker (Feedback)
 * Onboarding checklist with an animated progress bar, ticks that draw themselves and auto play
 */
export function ProgressTracker(props = {}) {
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

export const ProgressTrackerRaw = __InnerComponent || DemoComponent;
export const ProgressTrackerDemo = DemoComponent;

export default ProgressTracker;

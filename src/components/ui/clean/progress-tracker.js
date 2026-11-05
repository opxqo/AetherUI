import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DEuHi6CX.js";

/**
 * Progress Tracker [Clean Style] (Feedback)
 * Onboarding checklist with an animated progress bar, ticks that draw themselves and auto play
 */
export function ProgressTracker(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ProgressTrackerRaw = __InnerComponent || DemoComponent;
export const ProgressTrackerDemo = DemoComponent;

export default ProgressTracker;

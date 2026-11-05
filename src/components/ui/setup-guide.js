import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BBQFFf2i.js";

/**
 * Setup Guide (Feedback)
 * Onboarding panel with a progress bar and collapsible task groups that strike through when done
 */
export function SetupGuide(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SetupGuideRaw = __InnerComponent || DemoComponent;
export const SetupGuideDemo = DemoComponent;

export default SetupGuide;

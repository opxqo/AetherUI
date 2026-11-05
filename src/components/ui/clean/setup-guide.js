import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Djp5LeyI.js";

/**
 * Setup Guide [Clean Style] (Feedback)
 * Onboarding panel with a progress bar and collapsible task groups that strike through when done
 */
export function SetupGuide(props = {}) {
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

export const SetupGuideRaw = __InnerComponent || DemoComponent;
export const SetupGuideDemo = DemoComponent;

export default SetupGuide;

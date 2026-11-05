import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BZKijLCU.js";

/**
 * Onboarding (App screens)
 * First-run flow of an AI workspace: workspace setup, tool connections, team invites and a first agent, with a getting-started checklist
 */
export function OnboardingScreen(props = {}) {
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

export const OnboardingScreenRaw = __InnerComponent || DemoComponent;
export const OnboardingScreenDemo = DemoComponent;
export const Onboarding = OnboardingScreen;
export default OnboardingScreen;

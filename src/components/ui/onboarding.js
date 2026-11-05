import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BZKijLCU.js";

/**
 * Onboarding (App screens)
 * First-run flow of an AI workspace: workspace setup, tool connections, team invites and a first agent, with a getting-started checklist
 */
export function OnboardingScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const OnboardingScreenRaw = __InnerComponent || DemoComponent;
export const OnboardingScreenDemo = DemoComponent;
export const Onboarding = OnboardingScreen;
export default OnboardingScreen;

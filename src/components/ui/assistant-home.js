import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CT4L5yLv.js";

/**
 * AI Chat / Start (App screens)
 * AI assistant start page: greeting, prompt box with tools, connected apps and suggestions
 */
export function AssistantHomeScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AssistantHomeScreenRaw = __InnerComponent || DemoComponent;
export const AssistantHomeScreenDemo = DemoComponent;
export const AssistantHome = AssistantHomeScreen;
export default AssistantHomeScreen;

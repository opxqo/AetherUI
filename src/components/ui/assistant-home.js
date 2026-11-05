import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CT4L5yLv.js";

/**
 * AI Chat / Start (App screens)
 * AI assistant start page: greeting, prompt box with tools, connected apps and suggestions
 */
export function AssistantHomeScreen(props = {}) {
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

export const AssistantHomeScreenRaw = __InnerComponent || DemoComponent;
export const AssistantHomeScreenDemo = DemoComponent;
export const AssistantHome = AssistantHomeScreen;
export default AssistantHomeScreen;

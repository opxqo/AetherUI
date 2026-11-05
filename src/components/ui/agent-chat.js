import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-9NZ5oo05.js";

/**
 * AI Chat / Agents (App screens)
 * Chat with an orchestrating agent, the agents at work, and a brief to fill in beside it
 */
export function AgentChatScreen(props = {}) {
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

export const AgentChatScreenRaw = __InnerComponent || DemoComponent;
export const AgentChatScreenDemo = DemoComponent;
export const AgentChat = AgentChatScreen;
export default AgentChatScreen;

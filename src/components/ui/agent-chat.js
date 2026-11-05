import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-9NZ5oo05.js";

/**
 * AI Chat / Agents (App screens)
 * Chat with an orchestrating agent, the agents at work, and a brief to fill in beside it
 */
export function AgentChatScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentChatScreenRaw = __InnerComponent || DemoComponent;
export const AgentChatScreenDemo = DemoComponent;
export const AgentChat = AgentChatScreen;
export default AgentChatScreen;

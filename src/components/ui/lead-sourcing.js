import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BTBcqeeL.js";

/**
 * Lead Sourcing (Card illustrations)
 * ChatGPT tile linked to Gmail and Grok, with a shine running along the connection
 */
export function LeadSourcing(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const LeadSourcingRaw = __InnerComponent || DemoComponent;
export const LeadSourcingDemo = DemoComponent;

export default LeadSourcing;

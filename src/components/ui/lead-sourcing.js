import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BTBcqeeL.js";

/**
 * Lead Sourcing (Card illustrations)
 * ChatGPT tile linked to Gmail and Grok, with a shine running along the connection
 */
export function LeadSourcing(props = {}) {
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

export const LeadSourcingRaw = __InnerComponent || DemoComponent;
export const LeadSourcingDemo = DemoComponent;

export default LeadSourcing;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Cr3cCxya.js";

/**
 * Fallback Chain (Agents)
 * One request finding a model that answers, as a small flow diagram – the request branches out to each model in its fallback order, a light runs to the one being tried, failed branches break red, and the one that answers runs on to the response
 */
export function FallbackChain(props = {}) {
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

export const FallbackChainRaw = __InnerComponent || DemoComponent;
export const FallbackChainDemo = DemoComponent;

export default FallbackChain;

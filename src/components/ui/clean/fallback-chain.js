import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CkD71wWL.js";

/**
 * Fallback Chain [Clean Style] (Agents)
 * One request finding a model that answers, as a small flow diagram – the request branches out to each model in its fallback order, a light runs to the one being tried, failed branches break red, and the one that answers runs on to the response
 */
export function FallbackChain(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const FallbackChainRaw = __InnerComponent || DemoComponent;
export const FallbackChainDemo = DemoComponent;

export default FallbackChain;

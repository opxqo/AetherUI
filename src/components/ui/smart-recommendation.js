import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Bmw88bzb.js";

/**
 * Smart Recommendation (Cards)
 * Suggestion card with a confidence signal, alternatives to switch to and accept with undo
 */
export function SmartRecommendation(props = {}) {
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

export const SmartRecommendationRaw = __InnerComponent || DemoComponent;
export const SmartRecommendationDemo = DemoComponent;

export default SmartRecommendation;

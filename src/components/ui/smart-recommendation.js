import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Bmw88bzb.js";

/**
 * Smart Recommendation (Cards)
 * Suggestion card with a confidence signal, alternatives to switch to and accept with undo
 */
export function SmartRecommendation(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SmartRecommendationRaw = __InnerComponent || DemoComponent;
export const SmartRecommendationDemo = DemoComponent;

export default SmartRecommendation;

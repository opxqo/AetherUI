import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DBtQYhoC.js";

/**
 * Experiment Card (Data display)
 * An A/B test in two lines that quietly unfolds on hover – variants linked to a tiny chart, a metric switch with rolling numbers, and a winner you pick with a click
 */
export function ExperimentCard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ExperimentCardRaw = __InnerComponent || DemoComponent;
export const ExperimentCardDemo = DemoComponent;

export default ExperimentCard;

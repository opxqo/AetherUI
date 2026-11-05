import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DBtQYhoC.js";

/**
 * Experiment Card (Data display)
 * An A/B test in two lines that quietly unfolds on hover – variants linked to a tiny chart, a metric switch with rolling numbers, and a winner you pick with a click
 */
export function ExperimentCard(props = {}) {
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

export const ExperimentCardRaw = __InnerComponent || DemoComponent;
export const ExperimentCardDemo = DemoComponent;

export default ExperimentCard;

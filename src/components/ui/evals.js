import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C75c5UD6.js";

/**
 * Evals (App screens)
 * Prompt evaluation dashboard: pass rate by version, reviewable prompt changes and test cases you can re-run
 */
export function EvalsScreen(props = {}) {
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

export const EvalsScreenRaw = __InnerComponent || DemoComponent;
export const EvalsScreenDemo = DemoComponent;
export const Evals = EvalsScreen;
export default EvalsScreen;

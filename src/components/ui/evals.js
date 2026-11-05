import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C75c5UD6.js";

/**
 * Evals (App screens)
 * Prompt evaluation dashboard: pass rate by version, reviewable prompt changes and test cases you can re-run
 */
export function EvalsScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const EvalsScreenRaw = __InnerComponent || DemoComponent;
export const EvalsScreenDemo = DemoComponent;
export const Evals = EvalsScreen;
export default EvalsScreen;

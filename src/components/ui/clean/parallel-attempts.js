import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-BhWfxUkE.js";

/**
 * Parallel Attempts [Clean Style] (Agents)
 * An agent tries the same task several ways at once and the best one wins – every attempt races as a row with its model, approach and live bar, then gets a score; the best is marked and picked, and you can switch to another
 */
export function ParallelAttempts(props = {}) {
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

export const ParallelAttemptsRaw = __InnerComponent || DemoComponent;
export const ParallelAttemptsDemo = DemoComponent;

export default ParallelAttempts;

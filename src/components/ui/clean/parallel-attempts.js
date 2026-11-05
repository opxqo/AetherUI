import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-BhWfxUkE.js";

/**
 * Parallel Attempts [Clean Style] (Agents)
 * An agent tries the same task several ways at once and the best one wins – every attempt races as a row with its model, approach and live bar, then gets a score; the best is marked and picked, and you can switch to another
 */
export function ParallelAttempts(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ParallelAttemptsRaw = __InnerComponent || DemoComponent;
export const ParallelAttemptsDemo = DemoComponent;

export default ParallelAttempts;

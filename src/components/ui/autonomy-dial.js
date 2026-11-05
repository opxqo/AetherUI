import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-D1Cm2Y4U.js";

/**
 * Autonomy Dial (Agents)
 * How much an agent may do on its own – a three-stop dial, and its real actions gliding between “Runs on its own” and “Asks you first”, with a lock for what always asks
 */
export function AutonomyDial(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AutonomyDialRaw = __InnerComponent || DemoComponent;
export const AutonomyDialDemo = DemoComponent;

export default AutonomyDial;

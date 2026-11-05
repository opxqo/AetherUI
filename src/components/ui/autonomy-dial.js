import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-D1Cm2Y4U.js";

/**
 * Autonomy Dial (Agents)
 * How much an agent may do on its own – a three-stop dial, and its real actions gliding between “Runs on its own” and “Asks you first”, with a lock for what always asks
 */
export function AutonomyDial(props = {}) {
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

export const AutonomyDialRaw = __InnerComponent || DemoComponent;
export const AutonomyDialDemo = DemoComponent;

export default AutonomyDial;

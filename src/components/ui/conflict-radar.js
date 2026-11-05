import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C8n-KhXq.js";

/**
 * Conflict Radar (Agents)
 * Agents working on their own branches at once, and where they get in each other's way – a row per file and a column per agent, a line between the agents that changed the same lines, each agent's way in one sentence to pick from, and Merge once all are settled
 */
export function ConflictRadar(props = {}) {
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

export const ConflictRadarRaw = __InnerComponent || DemoComponent;
export const ConflictRadarDemo = DemoComponent;

export default ConflictRadar;

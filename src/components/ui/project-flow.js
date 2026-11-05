import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Cwdm4ytX.js";

/**
 * Project Flow (Product scenes)
 * Animated scene of a client task branching into subtasks, notes and assigned roles
 */
export function ProjectFlow(props = {}) {
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

export const ProjectFlowRaw = __InnerComponent || DemoComponent;
export const ProjectFlowDemo = DemoComponent;

export default ProjectFlow;

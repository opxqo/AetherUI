import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Cwdm4ytX.js";

/**
 * Project Flow (Product scenes)
 * Animated scene of a client task branching into subtasks, notes and assigned roles
 */
export function ProjectFlow(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ProjectFlowRaw = __InnerComponent || DemoComponent;
export const ProjectFlowDemo = DemoComponent;

export default ProjectFlow;

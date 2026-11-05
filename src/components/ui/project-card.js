import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-mVJMtnH2.js";

/**
 * Project Card (Cards)
 * A two-line project summary that quietly unfolds on hover – a progress ring with one segment per subtask, a people filter and a status picker, all linked by hover
 */
export function ProjectCard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ProjectCardRaw = __InnerComponent || DemoComponent;
export const ProjectCardDemo = DemoComponent;

export default ProjectCard;

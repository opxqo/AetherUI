import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-mVJMtnH2.js";

/**
 * Project Card (Cards)
 * A two-line project summary that quietly unfolds on hover – a progress ring with one segment per subtask, a people filter and a status picker, all linked by hover
 */
export function ProjectCard(props = {}) {
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

export const ProjectCardRaw = __InnerComponent || DemoComponent;
export const ProjectCardDemo = DemoComponent;

export default ProjectCard;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BOeM0CYP.js";

/**
 * Testimonial Wall (Social proof)
 * The landing-page wall of quotes – columns that scroll endlessly in opposite directions, ease to a stop on hover and scrub with inertia
 */
export function TestimonialWall(props = {}) {
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

export const TestimonialWallRaw = __InnerComponent || DemoComponent;
export const TestimonialWallDemo = DemoComponent;

export default TestimonialWall;

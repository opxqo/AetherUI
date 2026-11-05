import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BOeM0CYP.js";

/**
 * Testimonial Wall (Social proof)
 * The landing-page wall of quotes – columns that scroll endlessly in opposite directions, ease to a stop on hover and scrub with inertia
 */
export function TestimonialWall(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const TestimonialWallRaw = __InnerComponent || DemoComponent;
export const TestimonialWallDemo = DemoComponent;

export default TestimonialWall;

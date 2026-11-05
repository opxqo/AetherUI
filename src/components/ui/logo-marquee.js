import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-dPDkooNn.js";

/**
 * Logo Marquee (Social proof)
 * The endless “Trusted by” strip – a seamless loop that eases to a stop on hover, scrubs with inertia and lifts the hovered logo to colour
 */
export function LogoMarquee(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const LogoMarqueeRaw = __InnerComponent || DemoComponent;
export const LogoMarqueeDemo = DemoComponent;

export default LogoMarquee;

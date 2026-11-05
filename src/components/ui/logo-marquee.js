import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-dPDkooNn.js";

/**
 * Logo Marquee (Social proof)
 * The endless “Trusted by” strip – a seamless loop that eases to a stop on hover, scrubs with inertia and lifts the hovered logo to colour
 */
export function LogoMarquee(props = {}) {
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

export const LogoMarqueeRaw = __InnerComponent || DemoComponent;
export const LogoMarqueeDemo = DemoComponent;

export default LogoMarquee;

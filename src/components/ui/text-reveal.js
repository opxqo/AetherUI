import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DU0pIcNJ.js";

/**
 * Text Reveal (Text)
 * Text that arrives word by word or letter by letter – each piece rises out of a soft blur as it scrolls into view
 */
export function TextReveal(props = {}) {
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

export const TextRevealRaw = __InnerComponent || DemoComponent;
export const TextRevealDemo = DemoComponent;

export default TextReveal;

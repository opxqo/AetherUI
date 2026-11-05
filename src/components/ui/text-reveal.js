import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DU0pIcNJ.js";

/**
 * Text Reveal (Text)
 * Text that arrives word by word or letter by letter – each piece rises out of a soft blur as it scrolls into view
 */
export function TextReveal(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const TextRevealRaw = __InnerComponent || DemoComponent;
export const TextRevealDemo = DemoComponent;

export default TextReveal;

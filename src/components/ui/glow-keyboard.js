import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-HT-hqV3e.js";

/**
 * Glow Keyboard (Product scenes)
 * AI chat input that types itself over a glass keyboard – every key press sends a wave up the gradient floor
 */
export function GlowKeyboard(props = {}) {
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

export const GlowKeyboardRaw = __InnerComponent || DemoComponent;
export const GlowKeyboardDemo = DemoComponent;

export default GlowKeyboard;

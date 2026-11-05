import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-HT-hqV3e.js";

/**
 * Glow Keyboard (Product scenes)
 * AI chat input that types itself over a glass keyboard – every key press sends a wave up the gradient floor
 */
export function GlowKeyboard(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const GlowKeyboardRaw = __InnerComponent || DemoComponent;
export const GlowKeyboardDemo = DemoComponent;

export default GlowKeyboard;

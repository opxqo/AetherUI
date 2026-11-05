import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CeNLDeWD.js";

/**
 * Tips Panel (Cards)
 * Grid of short tips with one action each – taken tips turn into a done state
 */
export function Kbd(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const KbdRaw = __InnerComponent || DemoComponent;
export const KbdDemo = DemoComponent;
export const TipsPanel = Kbd;
export default Kbd;

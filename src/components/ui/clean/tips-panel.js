import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-EtdM2R2t.js";

/**
 * Tips Panel [Clean Style] (Cards)
 * Grid of short tips with one action each – taken tips turn into a done state
 */
export function Kbd(props = {}) {
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

export const KbdRaw = __InnerComponent || DemoComponent;
export const KbdDemo = DemoComponent;
export const TipsPanel = Kbd;
export default Kbd;

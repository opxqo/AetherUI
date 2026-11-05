import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-fCatWsFs.js";

/**
 * Layer Stack (Card illustrations)
 * Isometric stack of five layers with a list beside it – the chosen entry lifts its layer out in color
 */
export function LayerStack(props = {}) {
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

export const LayerStackRaw = __InnerComponent || DemoComponent;
export const LayerStackDemo = DemoComponent;

export default LayerStack;

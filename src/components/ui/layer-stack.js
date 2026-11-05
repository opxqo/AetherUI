import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-fCatWsFs.js";

/**
 * Layer Stack (Card illustrations)
 * Isometric stack of five layers with a list beside it – the chosen entry lifts its layer out in color
 */
export function LayerStack(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const LayerStackRaw = __InnerComponent || DemoComponent;
export const LayerStackDemo = DemoComponent;

export default LayerStack;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Q0wmIwEm.js";

/**
 * World Map Continental (Maps)
 * World map with one highlighted continent and a pastel band along its coastline, switchable between all six
 */
export function WorldMap(props = {}) {
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

export const WorldMapRaw = __InnerComponent || DemoComponent;
export const WorldMapDemo = DemoComponent;

export default WorldMap;

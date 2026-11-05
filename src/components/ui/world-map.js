import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Q0wmIwEm.js";

/**
 * World Map Continental (Maps)
 * World map with one highlighted continent and a pastel band along its coastline, switchable between all six
 */
export function WorldMap(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const WorldMapRaw = __InnerComponent || DemoComponent;
export const WorldMapDemo = DemoComponent;

export default WorldMap;

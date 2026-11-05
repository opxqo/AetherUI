import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DjnGlKv0.js";

/**
 * Tool Access Map [Clean Style] (Agents)
 * An agent in the middle with every tool it can reach around it – which ones it used, which failed and which it calls right now; open a tool for its calls and replay one on its own
 */
export function ToolAccessMap(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ToolAccessMapRaw = __InnerComponent || DemoComponent;
export const ToolAccessMapDemo = DemoComponent;

export default ToolAccessMap;

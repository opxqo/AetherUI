import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-DjnGlKv0.js";

/**
 * Tool Access Map [Clean Style] (Agents)
 * An agent in the middle with every tool it can reach around it – which ones it used, which failed and which it calls right now; open a tool for its calls and replay one on its own
 */
export function ToolAccessMap(props = {}) {
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

export const ToolAccessMapRaw = __InnerComponent || DemoComponent;
export const ToolAccessMapDemo = DemoComponent;

export default ToolAccessMap;

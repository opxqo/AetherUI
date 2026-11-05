import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-S9qKZHRx.js";

/**
 * App Directory (Integrations)
 * Browse, search and connect integrations – categories, filters and app cards with a connect flow
 */
export function AppDirectory(props = {}) {
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

export const AppDirectoryRaw = __InnerComponent || DemoComponent;
export const AppDirectoryDemo = DemoComponent;

export default AppDirectory;

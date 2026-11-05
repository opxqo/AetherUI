import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-S9qKZHRx.js";

/**
 * App Directory (Integrations)
 * Browse, search and connect integrations – categories, filters and app cards with a connect flow
 */
export function AppDirectory(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AppDirectoryRaw = __InnerComponent || DemoComponent;
export const AppDirectoryDemo = DemoComponent;

export default AppDirectory;

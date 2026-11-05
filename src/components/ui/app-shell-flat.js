import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DUhSwzhW.js";

/**
 * App Shell Flat (App screens)
 * The App Shell laid flat – gray sidebar, an edge-to-edge page and the work area beside it, split by single hairlines
 */
export function AppShellFlat(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AppShellFlatRaw = __InnerComponent || DemoComponent;
export const AppShellFlatDemo = DemoComponent;
export const WorkspacePanel = AppShellFlat;
export default AppShellFlat;

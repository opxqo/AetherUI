import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Br2EPuwn.js";

/**
 * App Shell Inset (App screens)
 * Collapsible sidebar with workspace, menu, projects and account, and a resizable work area on the right – tools, browser and suggested sources – the frame every screen sits in
 */
export function AppShell(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AppShellRaw = __InnerComponent || DemoComponent;
export const AppShellDemo = DemoComponent;
export const WorkspacePanel = AppShell;
export default AppShell;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Br2EPuwn.js";

/**
 * App Shell Inset (App screens)
 * Collapsible sidebar with workspace, menu, projects and account, and a resizable work area on the right – tools, browser and suggested sources – the frame every screen sits in
 */
export function AppShell(props = {}) {
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

export const AppShellRaw = __InnerComponent || DemoComponent;
export const AppShellDemo = DemoComponent;
export const WorkspacePanel = AppShell;
export default AppShell;

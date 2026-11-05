import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DUhSwzhW.js";

/**
 * App Shell Flat (App screens)
 * The App Shell laid flat – gray sidebar, an edge-to-edge page and the work area beside it, split by single hairlines
 */
export function AppShellFlat(props = {}) {
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

export const AppShellFlatRaw = __InnerComponent || DemoComponent;
export const AppShellFlatDemo = DemoComponent;
export const WorkspacePanel = AppShellFlat;
export default AppShellFlat;

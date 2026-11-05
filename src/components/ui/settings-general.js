import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CvriwZ5d.js";

/**
 * Settings / General (App screens)
 * Workspace settings with a settings sidebar: icon, name and address as rows, a company context for the assistant and a danger zone that asks for the name
 */
export function SettingsGeneralScreen(props = {}) {
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

export const SettingsGeneralScreenRaw = __InnerComponent || DemoComponent;
export const SettingsGeneralScreenDemo = DemoComponent;
export const SettingsGeneral = SettingsGeneralScreen;
export default SettingsGeneralScreen;

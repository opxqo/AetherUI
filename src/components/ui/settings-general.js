import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CvriwZ5d.js";

/**
 * Settings / General (App screens)
 * Workspace settings with a settings sidebar: icon, name and address as rows, a company context for the assistant and a danger zone that asks for the name
 */
export function SettingsGeneralScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsGeneralScreenRaw = __InnerComponent || DemoComponent;
export const SettingsGeneralScreenDemo = DemoComponent;
export const SettingsGeneral = SettingsGeneralScreen;
export default SettingsGeneralScreen;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-mRChABp9.js";

/**
 * Settings / Preferences (App screens)
 * Personal preferences with a settings sidebar: default models with Auto and the Model Wheel, language and appearance, chat tools as tiles, custom instructions the model reads with every message and the memories it kept
 */
export function SettingsPreferencesScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsPreferencesScreenRaw = __InnerComponent || DemoComponent;
export const SettingsPreferencesScreenDemo = DemoComponent;
export const SettingsPreferences = SettingsPreferencesScreen;
export default SettingsPreferencesScreen;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-mRChABp9.js";

/**
 * Settings / Preferences (App screens)
 * Personal preferences with a settings sidebar: default models with Auto and the Model Wheel, language and appearance, chat tools as tiles, custom instructions the model reads with every message and the memories it kept
 */
export function SettingsPreferencesScreen(props = {}) {
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

export const SettingsPreferencesScreenRaw = __InnerComponent || DemoComponent;
export const SettingsPreferencesScreenDemo = DemoComponent;
export const SettingsPreferences = SettingsPreferencesScreen;
export default SettingsPreferencesScreen;

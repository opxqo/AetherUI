import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BtJme0MP.js";

/**
 * Settings / Models (App screens)
 * Model settings with a settings sidebar: default chat and image models with an animated Auto explainer, every provider's models grouped by hosting region with a switch and access per model, filter, search, custom endpoints and your own API keys
 */
export function SettingsModelsScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SettingsModelsScreenRaw = __InnerComponent || DemoComponent;
export const SettingsModelsScreenDemo = DemoComponent;
export const SettingsModels = SettingsModelsScreen;
export default SettingsModelsScreen;

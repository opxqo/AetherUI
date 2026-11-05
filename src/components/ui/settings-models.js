import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BtJme0MP.js";

/**
 * Settings / Models (App screens)
 * Model settings with a settings sidebar: default chat and image models with an animated Auto explainer, every provider's models grouped by hosting region with a switch and access per model, filter, search, custom endpoints and your own API keys
 */
export function SettingsModelsScreen(props = {}) {
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

export const SettingsModelsScreenRaw = __InnerComponent || DemoComponent;
export const SettingsModelsScreenDemo = DemoComponent;
export const SettingsModels = SettingsModelsScreen;
export default SettingsModelsScreen;

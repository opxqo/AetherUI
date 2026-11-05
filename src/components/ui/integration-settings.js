import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BSW5akXq.js";

/**
 * Integration Settings (Inputs)
 * Settings card for a connected service – on/off switch, API key, validated site address, time zone and a save bar
 */
export function IntegrationSettings(props = {}) {
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

export const IntegrationSettingsRaw = __InnerComponent || DemoComponent;
export const IntegrationSettingsDemo = DemoComponent;

export default IntegrationSettings;

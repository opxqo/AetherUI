import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-BjW5KB4-.js";

/**
 * Integration Settings [Clean Style] (Inputs)
 * Settings card for a connected service – on/off switch, API key, validated site address, time zone and a save bar
 */
export function IntegrationSettings(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const IntegrationSettingsRaw = __InnerComponent || DemoComponent;
export const IntegrationSettingsDemo = DemoComponent;

export default IntegrationSettings;

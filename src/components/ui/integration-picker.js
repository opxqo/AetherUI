import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BbtxcaBE.js";

/**
 * Integration Picker (Navigation)
 * Integrations page of a command menu – search, a list of services and the picked one with its connection on two tiles
 */
export function IntegrationPicker(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const IntegrationPickerRaw = __InnerComponent || DemoComponent;
export const IntegrationPickerDemo = DemoComponent;

export default IntegrationPicker;

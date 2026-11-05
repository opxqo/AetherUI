import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BbtxcaBE.js";

/**
 * Integration Picker (Navigation)
 * Integrations page of a command menu – search, a list of services and the picked one with its connection on two tiles
 */
export function IntegrationPicker(props = {}) {
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

export const IntegrationPickerRaw = __InnerComponent || DemoComponent;
export const IntegrationPickerDemo = DemoComponent;

export default IntegrationPicker;

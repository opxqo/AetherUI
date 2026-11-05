import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-COPIA0pP.js";

/**
 * Model Picker [Clean Style] (Chat)
 * The model menu of an AI chat – point at a model and its speed, quality and cost bars fill, switch on extended thinking and its effort unfolds, while the tray rolls the first-token time and price
 */
export function ModelPicker(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ModelPickerRaw = __InnerComponent || DemoComponent;
export const ModelPickerDemo = DemoComponent;

export default ModelPicker;

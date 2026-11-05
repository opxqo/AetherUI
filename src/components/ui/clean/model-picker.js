import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-COPIA0pP.js";

/**
 * Model Picker [Clean Style] (Chat)
 * The model menu of an AI chat – point at a model and its speed, quality and cost bars fill, switch on extended thinking and its effort unfolds, while the tray rolls the first-token time and price
 */
export function ModelPicker(props = {}) {
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

export const ModelPickerRaw = __InnerComponent || DemoComponent;
export const ModelPickerDemo = DemoComponent;

export default ModelPicker;

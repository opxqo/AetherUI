import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DqZv_kIm.js";

/**
 * Combobox (Inputs)
 * Pick one or many from a searchable, grouped list – chips with avatars, highlighted matches, create-on-the-fly and full keyboard support
 */
export function Combobox(props = {}) {
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

export const ComboboxRaw = __InnerComponent || DemoComponent;
export const ComboboxDemo = DemoComponent;

export default Combobox;

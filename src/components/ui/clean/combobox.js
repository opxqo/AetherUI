import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-BBOmnWT8.js";

/**
 * Combobox [Clean Style] (Inputs)
 * Pick one or many from a searchable, grouped list – chips with avatars, highlighted matches, create-on-the-fly and full keyboard support
 */
export function Combobox(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ComboboxRaw = __InnerComponent || DemoComponent;
export const ComboboxDemo = DemoComponent;

export default Combobox;

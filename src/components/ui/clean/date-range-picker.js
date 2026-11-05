import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Ce4Bm5uX.js";

/**
 * Date Range Picker [Clean Style] (Inputs)
 * Presets and two calendars with a hover preview, comparison with the previous period or year, full keyboard control
 */
export function DateRangePicker(props = {}) {
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

export const DateRangePickerRaw = __InnerComponent || DemoComponent;
export const DateRangePickerDemo = DemoComponent;

export default DateRangePicker;

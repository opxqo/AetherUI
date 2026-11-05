import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Ce4Bm5uX.js";

/**
 * Date Range Picker [Clean Style] (Inputs)
 * Presets and two calendars with a hover preview, comparison with the previous period or year, full keyboard control
 */
export function DateRangePicker(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const DateRangePickerRaw = __InnerComponent || DemoComponent;
export const DateRangePickerDemo = DemoComponent;

export default DateRangePicker;

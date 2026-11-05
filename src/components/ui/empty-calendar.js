import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-MXjIQshC.js";

/**
 * Empty Calendar (Card illustrations)
 * Stack of calendar cards marked empty, fanning out on hover
 */
export function EmptyCalendar(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const EmptyCalendarRaw = __InnerComponent || DemoComponent;
export const EmptyCalendarDemo = DemoComponent;

export default EmptyCalendar;

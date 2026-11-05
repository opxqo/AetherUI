import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DVKJvdEh.js";

/**
 * Number Ticker (Numbers)
 * Odometer-style numbers – every digit rolls to its new value and counts in from zero when it scrolls into view
 */
export function NumberTicker(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const NumberTickerRaw = __InnerComponent || DemoComponent;
export const NumberTickerDemo = DemoComponent;

export default NumberTicker;

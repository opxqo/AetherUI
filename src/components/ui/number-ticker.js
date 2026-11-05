import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DVKJvdEh.js";

/**
 * Number Ticker (Numbers)
 * Odometer-style numbers – every digit rolls to its new value and counts in from zero when it scrolls into view
 */
export function NumberTicker(props = {}) {
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

export const NumberTickerRaw = __InnerComponent || DemoComponent;
export const NumberTickerDemo = DemoComponent;

export default NumberTicker;

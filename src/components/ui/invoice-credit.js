import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C-iCHBJN.js";

/**
 * Invoice & Credit Note (Billing)
 * An invoice and its credit note stacked like paper – switch between them, pick lines to credit, adjust amounts and issue
 */
export function InvoiceCredit(props = {}) {
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

export const InvoiceCreditRaw = __InnerComponent || DemoComponent;
export const InvoiceCreditDemo = DemoComponent;

export default InvoiceCredit;

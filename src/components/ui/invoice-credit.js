import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-C-iCHBJN.js";

/**
 * Invoice & Credit Note (Billing)
 * An invoice and its credit note stacked like paper – switch between them, pick lines to credit, adjust amounts and issue
 */
export function InvoiceCredit(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const InvoiceCreditRaw = __InnerComponent || DemoComponent;
export const InvoiceCreditDemo = DemoComponent;

export default InvoiceCredit;

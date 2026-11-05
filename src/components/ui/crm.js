import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BTdzblYw.js";

/**
 * CRM (App screens)
 * Company list with pipelines, open views as tabs and an editable data table
 */
export function CrmScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const CrmScreenRaw = __InnerComponent || DemoComponent;
export const CrmScreenDemo = DemoComponent;
export const Crm = CrmScreen;
export default CrmScreen;

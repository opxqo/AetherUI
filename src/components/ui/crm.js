import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BTdzblYw.js";

/**
 * CRM (App screens)
 * Company list with pipelines, open views as tabs and an editable data table
 */
export function CrmScreen(props = {}) {
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

export const CrmScreenRaw = __InnerComponent || DemoComponent;
export const CrmScreenDemo = DemoComponent;
export const Crm = CrmScreen;
export default CrmScreen;

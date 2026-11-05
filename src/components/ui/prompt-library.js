import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-Dag7eJtM.js";

/**
 * Prompt Library (Inputs)
 * Saved prompt templates with variables – type straight into the sentence, watch the finished prompt assemble below, and use it once every variable is filled
 */
export function PromptLibrary(props = {}) {
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

export const PromptLibraryRaw = __InnerComponent || DemoComponent;
export const PromptLibraryDemo = DemoComponent;

export default PromptLibrary;

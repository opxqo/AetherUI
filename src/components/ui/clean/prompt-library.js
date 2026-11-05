import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CkmyfNZK.js";

/**
 * Prompt Library [Clean Style] (Inputs)
 * Saved prompt templates with variables – type straight into the sentence, watch the finished prompt assemble below, and use it once every variable is filled
 */
export function PromptLibrary(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const PromptLibraryRaw = __InnerComponent || DemoComponent;
export const PromptLibraryDemo = DemoComponent;

export default PromptLibrary;

import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DnMvqnaQ.js";

/**
 * Stepper Form (Inputs)
 * A multi-step flow for onboarding and setup – steps that fill and check off, sliding steps, a card that morphs to each step, inline validation and a success state
 */
export function StepperForm(props = {}) {
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

export const StepperFormRaw = __InnerComponent || DemoComponent;
export const StepperFormDemo = DemoComponent;
export const StepperField = StepperForm;
export const StepperInput = StepperForm;
export const StepperTags = StepperForm;
export const StepperChoices = StepperForm;
export const StepperReview = StepperForm;
export default StepperForm;

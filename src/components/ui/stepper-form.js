import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DnMvqnaQ.js";

/**
 * Stepper Form (Inputs)
 * A multi-step flow for onboarding and setup – steps that fill and check off, sliding steps, a card that morphs to each step, inline validation and a success state
 */
export function StepperForm(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const StepperFormRaw = __InnerComponent || DemoComponent;
export const StepperFormDemo = DemoComponent;
export const StepperField = StepperForm;
export const StepperInput = StepperForm;
export const StepperTags = StepperForm;
export const StepperChoices = StepperForm;
export const StepperReview = StepperForm;
export default StepperForm;

import * as React from "react";

export type Step = Record<string, any>;
export type V = Record<string, any>;
export type InputHTMLAttributes = Record<string, any>;

export interface StepperFormProps {
  /** { id, title, heading?, description?, render(ctx), validate?(values) } – render gets values, setValues, errors, goTo and next; validate returns messages by field name */
  steps?: Step<V>[];
  /** Values shared by all steps, so Back and Edit keep what was entered */
  initialValues?: V;
  /** Runs on the last step; a promise shows the submitting label until it settles, a thrown error is shown next to the button */
  onComplete?: (values: V) => void | Promise<void>;
  /** Index of the first step shown (default: 0) */
  initialStep?: number;
  /** Controlled step index; pair with onStepChange */
  step?: number;
  /** Called whenever the step changes */
  onStepChange?: (step: number) => void;
  /** Label of the button on the last step (default: "Finish") */
  submitLabel?: string;
  /** Label while onComplete runs (default: "Creating…") */
  submittingLabel?: string;
  /** Replaces the steps once done – StepperSuccess gives the popping check, a heading and a line */
  success?: (values: V, reset: () => void) => ReactNode;
  /** Label, control and inline message for the field name in validate; the control shakes when Continue finds a problem */
  StepperField?: Record<string, any>;
  /** A text field wired to its StepperField; prefix shows fixed text like "acme.app/" */
  StepperInput?: InputHTMLAttributes & Record<string, any>;
  /** Entries as chips – emails by default; Enter, comma or a pasted list add, × or Backspace remove */
  StepperTags?: Record<string, any>;
  /** Selectable cards { value, title, aside?, description?, badge? } as a radio group with a gliding ring */
  StepperChoices?: Record<string, any>;
  /** A summary { label, value, step? } – rows with a step get an Edit link (pass goTo) */
  StepperReview?: Record<string, any>;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Stepper Form — A multi-step flow for onboarding and setup – steps that fill and check off, sliding steps, a card that morphs to each step, inline validation and a success state
 */
export declare const StepperForm: React.FC<StepperFormProps>;
export declare const StepperFormRaw: React.FC<StepperFormProps>;
export declare const StepperFormDemo: React.FC<StepperFormProps>;
export declare const StepperField: React.FC<StepperFormProps>;
export declare const StepperInput: React.FC<StepperFormProps>;
export declare const StepperTags: React.FC<StepperFormProps>;
export declare const StepperChoices: React.FC<StepperFormProps>;
export declare const StepperReview: React.FC<StepperFormProps>;
export default StepperForm;

import * as React from "react";
import type { Step } from "./shared.js";
export type { Step, StepContext } from "./shared.js";
export interface StepperFormProps<V = Record<string, unknown>> extends Omit<React.HTMLAttributes<HTMLElement>, "steps" | "initialValues" | "onComplete" | "initialStep" | "step" | "onStepChange" | "submitLabel" | "submittingLabel" | "success" | "demo" | "className" | "style"> {
  steps: Step<V>[];
  initialValues: V;
  onComplete?: (values: V) => void | Promise<void>;
  initialStep?: number;
  step?: number;
  onStepChange?: (step: number) => void;
  submitLabel?: string;
  submittingLabel?: string;
  success?: (values: V, reset: () => void) => React.ReactNode;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function StepperForm<V = Record<string, unknown>>(props: StepperFormProps<V>): React.ReactElement;
export declare const StepperFormRaw: typeof StepperForm;
export declare const StepperFormDemo: React.FC<Partial<StepperFormProps>>;
export interface StepperFieldProps extends Omit<React.HTMLAttributes<HTMLElement>, never> { name: string; label: React.ReactNode; hint?: React.ReactNode; optional?: boolean; children?: React.ReactNode; className?: string }
export declare const StepperField: React.FC<StepperFieldProps | (Partial<StepperFieldProps> & { demo: true })>;
export declare const StepperInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { prefix?: React.ReactNode }>;
export declare const StepperTags: React.FC<{ value: string[]; onChange: (value: string[]) => void; validate?: (value: string) => boolean; max?: number; placeholder?: string }>;
export declare const StepperChoices: React.FC<{ value: string; onChange: (value: string) => void; label?: string; options: { value: string; title: string; aside?: string; description?: string; badge?: string }[] }>;
export declare const StepperReview: React.FC<{ rows: { label: string; value: React.ReactNode; step?: string }[]; onEdit?: (step: string) => void }>;
export default StepperForm;

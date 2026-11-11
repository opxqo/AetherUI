import * as React from "react";
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "demo" | "className" | "style" | "children" | "ref"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  autoResize?: boolean;
  showCount?: boolean;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLTextAreaElement>;
}
export declare const TextArea: React.FC<TextAreaProps | (Partial<TextAreaProps> & { demo: true })>;
export declare const TextAreaRaw: React.FC<TextAreaProps>;
export declare const TextAreaDemo: React.FC<Partial<TextAreaProps>>;
export default TextArea;

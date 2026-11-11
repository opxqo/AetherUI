import * as React from "react";
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "demo" | "className" | "style" | "children" | "ref"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}
export declare const TextField: React.FC<TextFieldProps | (Partial<TextFieldProps> & { demo: true })>;
export declare const TextFieldRaw: React.FC<TextFieldProps>;
export declare const TextFieldDemo: React.FC<Partial<TextFieldProps>>;
export default TextField;

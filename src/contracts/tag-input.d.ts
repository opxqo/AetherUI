import * as React from "react";
export interface TagInputProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange" | "defaultValue" | "demo" | "className" | "style" | "children" | "ref"> {
  value?: string[];
  defaultValue?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  label?: React.ReactNode;
  error?: React.ReactNode;
  max?: number;
  validate?: (tag: string) => boolean | string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const TagInput: React.FC<TagInputProps | (Partial<TagInputProps> & { demo: true })>;
export declare const TagInputRaw: React.FC<TagInputProps>;
export declare const TagInputDemo: React.FC<Partial<TagInputProps>>;
export default TagInput;

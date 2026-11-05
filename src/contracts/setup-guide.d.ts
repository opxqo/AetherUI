import type { SetupGroup } from "./shared.js";
export type { SetupGroup } from "./shared.js";
import * as React from "react";
export interface SetupGuideProps extends Omit<React.HTMLAttributes<HTMLElement>, "groups" | "title" | "onEdit" | "onClose" | "onChange" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Groups with an id, a title and tasks; each task has an id, a label and an optional done flag */
  "groups": SetupGroup[];
  /** Heading above the bar */
  "title"?: string;
  /** Shows an Edit link in the header */
  "onEdit"?: () => void;
  /** Shows a close button in the header */
  "onClose"?: () => void;
  /** Called with the ids of all finished tasks */
  "onChange"?: (done: string[]) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const SetupGuide: React.FC<SetupGuideProps | (Partial<SetupGuideProps> & { demo: true })>;
export declare const SetupGuideRaw: React.FC<SetupGuideProps>;
export declare const SetupGuideDemo: React.FC<Partial<SetupGuideProps>>;
export default SetupGuide;

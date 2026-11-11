import * as React from "react";
export type DecisionKind = "decision" | "pick" | "approval";
export interface DecisionOption { id?: string | number; label: string; detail?: string; recommended?: boolean; preview?: React.ReactNode }
export interface Decision { id: string; question: string; task?: string; kind?: DecisionKind; options?: DecisionOption[]; facts?: string[] }
export interface DecisionCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "demo" | "className" | "style" | "children" | "ref"> {
  decision?: Decision;
  onAnswer?: (answer: string | number, option?: DecisionOption) => void;
  onDecline?: () => void;
  onLater?: () => void;
  folded?: boolean;
  defaultFolded?: boolean;
  reveal?: number;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const DecisionCard: React.FC<DecisionCardProps | (Partial<DecisionCardProps> & { demo: true })>;
export declare const DecisionCardRaw: React.FC<DecisionCardProps>;
export declare const DecisionCardDemo: React.FC<Partial<DecisionCardProps>>;
export default DecisionCard;

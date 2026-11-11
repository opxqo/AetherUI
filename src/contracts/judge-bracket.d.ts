import * as React from "react";
export interface Contender { id: string; name: string; model?: string; icon?: React.ReactNode; meta?: string; output?: string }
export interface Verdict { winner: string; reason?: string; scores?: Record<string, number> }
export interface JudgeBracketProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "demo" | "className" | "style" | "children" | "ref"> {
  contenders?: Contender[];
  verdicts?: Record<string, Verdict>;
  judging?: string;
  judge?: string;
  task?: string;
  onPick?: (winner: Contender) => void;
  title?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const JudgeBracket: React.FC<JudgeBracketProps | (Partial<JudgeBracketProps> & { demo: true })>;
export declare const JudgeBracketRaw: React.FC<JudgeBracketProps>;
export declare const JudgeBracketDemo: React.FC<Partial<JudgeBracketProps>>;
export default JudgeBracket;

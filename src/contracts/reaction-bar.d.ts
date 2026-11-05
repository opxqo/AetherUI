import * as React from "react";
export type ReactionKey = "like" | "comment" | "repost" | "share";

export type ReactionState = { count: number; active?: boolean };

export type ReactionBarProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Starting counts and whether each action is already taken */
  reactions?: Partial<Record<ReactionKey, ReactionState>>;
  /** Called after an action was toggled, with its new state */
  onReact?: (key: ReactionKey, state: Required<ReactionState>) => void;
  /** Hide actions you don't need */
  actions?: ReactionKey[];
  className?: string;
};
/**
 * Reaction Bar — Like, comment, repost and share in one pill – icons pop and fill, counts roll in digit by digit
 */
export declare const ReactionBar: React.FC<ReactionBarProps | (Partial<ReactionBarProps> & { demo: true })>;
export declare const ReactionBarRaw: React.FC<ReactionBarProps>;
export declare const ReactionBarDemo: React.FC<Partial<ReactionBarProps>>;

export default ReactionBar;

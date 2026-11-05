import * as React from "react";

export type Partial = Record<string, any>;
export type ReactionKey = Record<string, any>;

export interface ReactionBarProps {
  /** Starting count and pressed state per action */
  reactions?: Partial<Record<ReactionKey, { count; active? }>>;
  /** Called after a toggle with the new count and state */
  onReact?: (key: any, state: any) => void;
  /** Which actions to show, in order (default: ["like", "comment", "repost", "share"]) */
  actions?: ReactionKey[];
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Reaction Bar — Like, comment, repost and share in one pill – icons pop and fill, counts roll in digit by digit
 */
export declare const ReactionBar: React.FC<ReactionBarProps>;
export declare const ReactionBarRaw: React.FC<ReactionBarProps>;
export declare const ReactionBarDemo: React.FC<ReactionBarProps>;

export default ReactionBar;

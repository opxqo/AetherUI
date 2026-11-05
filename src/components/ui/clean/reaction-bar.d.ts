import * as React from "react";

export interface ReactionBarProps {
  /** Starting count and pressed state per action */
  reactions?: any;
  /** Called after a toggle with the new count and state */
  onReact?: any;
  /** Which actions to show, in order (default: ["like", "comment", "repost", "share"]) */
  actions?: any;
  /** Extra class on the pill */
  className?: any;
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

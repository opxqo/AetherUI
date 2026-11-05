import * as React from "react";

export interface MessageActionsProps {
  /** The message text – Copy writes it to the clipboard, and an uncontrolled read aloud is timed by its length */
  text?: any;
  /** Which actions to show and in what order. feedback is the thumbs up and down (default: ["copy", "regenerate", "feedback", "speak"]) */
  actions?: any;
  /** All versions of the message, or just how many there are. From two on the "‹ 2 / 3 ›" switcher unfolds next to Regenerate (default: 1) */
  versions?: any;
  /** Controlled version, 0-based */
  version?: any;
  /** Starting version when uncontrolled. Uncontrolled, the switcher jumps to a version as soon as it is added (default: newest) */
  defaultVersion?: any;
  /** Called with the version picked in the switcher */
  onVersionChange?: any;
  /** Called after Copy, with text */
  onCopy?: any;
  /** Called when Regenerate is pressed – add a version to versions and it shows up in the switcher */
  onRegenerate?: any;
  /** Keeps the arrow spinning and the bar lit while a new version is written (default: false) */
  regenerating?: any;
  /** Called with the vote right away, with null when it is taken back, and once more with "down" and a reason when the feedback row is sent. A new version starts without a vote */
  onFeedback?: any;
  /** Quick reasons in the feedback row. "Other" unfolds a small text field whose words are sent as the reason (default: Not accurate, Too long, Didn't follow instructions, Other) */
  reasons?: any;
  /** Called with true when Read aloud starts and false when it stops */
  onSpeak?: any;
  /** Controlled playing state – tie it to your speech player. Without it the bar plays for speakDuration and stops on its own */
  speaking?: any;
  /** How long an uncontrolled read aloud plays, in ms (default: from text, at least 2600) */
  speakDuration?: any;
  /** Faded until the message (an ancestor with data-ui-message) or the bar is hovered or focused. Touch screens always show it fully (default: true) */
  quiet?: any;
  /** Accessible name of the bar (default: "Message actions") */
  label?: any;
  /** Extra class on the root */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Message Actions — The quiet bar under an AI message – copy turns into a check, regenerate spins and unfolds a version switcher, thumbs pop and ask why, read aloud becomes a tiny equalizer
 */
export declare const MessageActions: React.FC<MessageActionsProps>;
export declare const MessageActionsRaw: React.FC<MessageActionsProps>;
export declare const MessageActionsDemo: React.FC<MessageActionsProps>;
export declare const MessageText: React.FC<MessageActionsProps>;
export default MessageActions;

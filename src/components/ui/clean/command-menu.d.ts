import * as React from "react";

export interface CommandMenuProps {
  /** Each { id, label, commands: { id, label, hint?, logo? | icon?, keys?, keywords? }[] }; the group with id "suggestions" gets ⌘1–⌘5 (default: Suggestions, Share, General, Go to) */
  groups?: any;
  /** Text in the empty field (default: "Type a command or search…") */
  placeholder?: any;
  /** Called when a command runs; the assistant fallback sends "ask" and the typed text */
  onRun?: any;
  /** Runs on Esc in an empty field – close your dialog here */
  onClose?: any;
  /** Focus the field when the menu appears */
  autoFocus?: any;
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
 * Command Menu — Search and run anything from one field – tool actions with logos and ⌘1–⌘5, everyday commands with icons
 */
export declare const CommandMenu: React.FC<CommandMenuProps>;
export declare const CommandMenuRaw: React.FC<CommandMenuProps>;
export declare const CommandMenuDemo: React.FC<CommandMenuProps>;

export default CommandMenu;

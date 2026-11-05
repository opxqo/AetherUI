import type { CommandGroup } from "./shared.js";
export type { CommandGroup } from "./shared.js";
import * as React from "react";
export interface CommandMenuProps extends Omit<React.HTMLAttributes<HTMLElement>, "groups" | "placeholder" | "onRun" | "onClose" | "autoFocus" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Each { id, label, commands: { id, label, hint?, logo? | icon?, keys?, keywords? }[] }; the group with id "suggestions" gets ⌘1–⌘5 */
  "groups"?: CommandGroup[];
  /** Text in the empty field */
  "placeholder"?: string;
  /** Called when a command runs; the assistant fallback sends "ask" and the typed text */
  "onRun"?: (id: string, query?: string) => void;
  /** Runs on Esc in an empty field – close your dialog here */
  "onClose"?: () => void;
  /** Focus the field when the menu appears */
  "autoFocus"?: boolean;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const CommandMenu: React.FC<CommandMenuProps | (Partial<CommandMenuProps> & { demo: true })>;
export declare const CommandMenuRaw: React.FC<CommandMenuProps>;
export declare const CommandMenuDemo: React.FC<Partial<CommandMenuProps>>;
export default CommandMenu;

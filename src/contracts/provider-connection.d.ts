import * as React from "react";
export interface ProviderConnectionLabels {
  show?: string;
  hide?: string;
  edit?: string;
  save?: string;
  clear?: string;
  cancel?: string;
}
export interface ProviderConnectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "name" | "status" | "description" | "link" | "apiKey" | "keyLabel" | "keyPlaceholder" | "onKeyChange" | "keyDisabled" | "onSync" | "syncLabel" | "syncing" | "syncDisabled" | "result" | "onEditingChange" | "labels" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Service name, the heading of the card */
  name: React.ReactNode;
  /** Status dot and line under the name */
  status?: { tone: "ok" | "warn" | "idle"; text: React.ReactNode };
  /** Short explanation under the heading */
  description?: React.ReactNode;
  /** External link at the top right, e.g. the provider's console */
  link?: { href: string; label: React.ReactNode };
  /** Saved key – shown masked, never put into an input */
  apiKey?: string;
  /** Name of the key field */
  keyLabel?: string;
  /** Text in the empty field */
  keyPlaceholder?: string;
  /** Called with the new key after Save (an empty string after Clear and Save) */
  onKeyChange?: (value: string) => void;
  keyDisabled?: boolean;
  /** Connect / sync – the button is left out without it */
  onSync?: () => void;
  syncLabel?: React.ReactNode;
  /** Spins the icon and blocks the button */
  syncing?: boolean;
  syncDisabled?: boolean;
  /** Outcome of the last attempt, under the row – ok is muted, otherwise it is an alert */
  result?: { ok: boolean; text: React.ReactNode } | null;
  /** Called when the key field opens or closes for editing (sync waits meanwhile) */
  onEditingChange?: (editing: boolean) => void;
  /** Words of the key buttons, for other languages */
  labels?: ProviderConnectionLabels;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}
/**
 * Provider Connection — Connection card of one service: status, link, masked API key with edit and save, connect and sync, and the last result
 */
export declare const ProviderConnection: React.FC<ProviderConnectionProps | (Partial<ProviderConnectionProps> & { demo: true })>;
export declare const ProviderConnectionRaw: React.FC<ProviderConnectionProps>;
export declare const ProviderConnectionDemo: React.FC<Partial<ProviderConnectionProps>>;
export default ProviderConnection;

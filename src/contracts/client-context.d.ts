import type { ContextClient } from "./shared.js";
export type { ContextClient } from "./shared.js";
import * as React from "react";
export interface ClientContextProps extends Omit<React.HTMLAttributes<HTMLElement>, "clients" | "me" | "onAddContext" | "onCreateClient" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Each { id, name, meta, mark, kpis, reports, context } – the switcher lists them all */
  "clients"?: ContextClient[];
  /** Author of new context */
  "me"?: { name: string; avatar?: string };
  /** Called when context is added */
  "onAddContext"?: (clientId: string, text: string, files: File[]) => void;
  /** Called when a client is created from the switcher */
  "onCreateClient"?: (name: string) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ClientContext: React.FC<ClientContextProps | (Partial<ClientContextProps> & { demo: true })>;
export declare const ClientContextRaw: React.FC<ClientContextProps>;
export declare const ClientContextDemo: React.FC<Partial<ClientContextProps>>;
export default ClientContext;

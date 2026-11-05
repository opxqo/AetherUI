import * as React from "react";

export type ContextClient = Record<string, any>;
export type ContextEntry = Record<string, any>;

export interface ClientContextProps {
  /** Each { id, name, meta, mark, kpis, reports, context } – the switcher lists them all */
  clients?: ContextClient[];
  /** note ("@Report name" becomes a mention), report, files (type pdf · xlsx · csv · doc) or integration { app, connected } */
  "context entries"?: ContextEntry[];
  /** Author of new context */
  me?: Record<string, any>;
  /** Called when context is added */
  onAddContext?: (clientId: any, text: any, files: any) => void;
  /** Called when a client is created from the switcher */
  onCreateClient?: (name: any) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Client Context — A client workspace with live numbers and a shared context timeline – switch clients, search, filter and add notes or files
 */
export declare const ClientContext: React.FC<ClientContextProps>;
export declare const ClientContextRaw: React.FC<ClientContextProps>;
export declare const ClientContextDemo: React.FC<ClientContextProps>;

export default ClientContext;

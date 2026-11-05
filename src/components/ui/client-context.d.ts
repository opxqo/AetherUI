import * as React from "react";

export interface ClientContextProps {
  /** Each { id, name, meta, mark, kpis, reports, context } – the switcher lists them all */
  clients?: any;
  /** note ("@Report name" becomes a mention), report, files (type pdf · xlsx · csv · doc) or integration { app, connected } */
  "context entries"?: any;
  /** Author of new context */
  me?: any;
  /** Called when context is added */
  onAddContext?: any;
  /** Called when a client is created from the switcher */
  onCreateClient?: any;
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
 * Client Context — A client workspace with live numbers and a shared context timeline – switch clients, search, filter and add notes or files
 */
export declare const ClientContext: React.FC<ClientContextProps>;
export declare const ClientContextRaw: React.FC<ClientContextProps>;
export declare const ClientContextDemo: React.FC<ClientContextProps>;

export default ClientContext;

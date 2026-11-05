import * as React from "react";

export interface LogoClusterProps {
  /** Accessible description of the illustration (default: "The affectUI mark surrounded by…") */
  label?: any;
  /** Extra class on the root, e.g. for width */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Logo Cluster — Your mark on a white disc in the middle – company logos bounce out of it and settle around it
 */
export declare const LogoCluster: React.FC<LogoClusterProps>;
export declare const LogoClusterRaw: React.FC<LogoClusterProps>;
export declare const LogoClusterDemo: React.FC<LogoClusterProps>;

export default LogoCluster;

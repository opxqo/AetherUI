import * as React from "react";
export type ClusterLogo = { color: string; d: string };

export type LogoClusterProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};

export type Slot = [logo: string, x: number, y: number, size: number];
/**
 * Logo Cluster — Your mark on a white disc in the middle – company logos bounce out of it and settle around it
 */
export declare const LogoCluster: React.FC<LogoClusterProps | (Partial<LogoClusterProps> & { demo: true })>;
export declare const LogoClusterRaw: React.FC<LogoClusterProps>;
export declare const LogoClusterDemo: React.FC<Partial<LogoClusterProps>>;

export default LogoCluster;

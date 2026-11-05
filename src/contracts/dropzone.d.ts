import type { UploadItem } from "./shared.js";
export type { UploadItem } from "./shared.js";
import * as React from "react";
export interface DropzoneProps extends Omit<React.HTMLAttributes<HTMLElement>, "accept" | "maxSize" | "onUpload" | "onChange" | "hint" | "autoplay" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Allowed extensions, e.g. [".pdf", ".png"]; any file when left out. Other files get a row with an error */
  "accept"?: string[];
  /** Largest file in bytes; bigger files get a "Too large" row */
  "maxSize"?: number;
  /** Uploads one file and reports progress from 0 to 1; reject to mark it as failed (the message is shown, Retry calls it again). Simulated when left out */
  "onUpload"?: (file: File, onProgress: (p: number) => void) => Promise<void>;
  /** Every change of the list: { id, name, size, status, progress, error?, file? } */
  "onChange"?: (items: UploadItem[]) => void;
  /** Text under the title; defaults to the accepted types and the size limit */
  "hint"?: string;
  /** Plays a sample drop of four files – for previews and landing pages */
  "autoplay"?: boolean;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const Dropzone: React.FC<DropzoneProps | (Partial<DropzoneProps> & { demo: true })>;
export declare const DropzoneRaw: React.FC<DropzoneProps>;
export declare const DropzoneDemo: React.FC<Partial<DropzoneProps>>;
export default Dropzone;

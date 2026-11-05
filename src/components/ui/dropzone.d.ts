import * as React from "react";

export type File = Record<string, any>;
export type UploadItem = Record<string, any>;

export interface DropzoneProps {
  /** Allowed extensions, e.g. [".pdf", ".png"]; any file when left out. Other files get a row with an error */
  accept?: string[];
  /** Largest file in bytes; bigger files get a "Too large" row (default: 25 MB) */
  maxSize?: number;
  /** Uploads one file and reports progress from 0 to 1; reject to mark it as failed (the message is shown, Retry calls it again). Simulated when left out */
  onUpload?: (file: File, onProgress: (p: number) => void) => Promise<void>;
  /** Every change of the list: { id, name, size, status, progress, error?, file? } */
  onChange?: (items: UploadItem[]) => void;
  /** Text under the title; defaults to the accepted types and the size limit */
  hint?: string;
  /** Plays a sample drop of four files – for previews and landing pages (default: false) */
  autoplay?: boolean;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Dropzone — Drag files in and watch them upload – fanning documents, colored type badges, progress with time left, errors with retry
 */
export declare const Dropzone: React.FC<DropzoneProps>;
export declare const DropzoneRaw: React.FC<DropzoneProps>;
export declare const DropzoneDemo: React.FC<DropzoneProps>;

export default Dropzone;

import type { CursorAgent, DocBlock, AgentCursor, DocComment, DocSuggestion } from "./shared.js";
export type { CursorAgent, DocBlock, AgentCursor, DocComment, DocSuggestion } from "./shared.js";
import * as React from "react";
export interface AgentCursorsProps extends Omit<React.HTMLAttributes<HTMLElement>, "agents" | "blocks" | "cursors" | "comments" | "onResolveComment" | "onReply" | "height" | "tabs" | "tab" | "onTabChange" | "formatCost" | "suggestions" | "onAccept" | "onReject" | "onAcceptAll" | "following" | "onFollowingChange" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, color?, avatar?, tint?, cost? } – everyone who can be in the document; without a color every agent shares one ink (near-black, light in dark mode) and the logos tell them apart */
  "agents": CursorAgent[];
  /** { id, kind?: "title" | "heading" | "paragraph" | "item" | "code" | "image", text?, … } – the document; consecutive items form one list. Images take width (0–1), ratio, float ("left" | "right" – the next text runs beside them), loading, src and alt; their text is the caption. Tables take rows of cell blocks (the first row is the header); a cell with a tone shows as a status pill */
  "blocks": DocBlock[];
  /** Per agent: { block, at?, in?, select?, point?, doing?, typing? } – where it is (a block or a comment), a selected passage or a held image, the corner or middle of an image, what it's doing (on its flag) and whether it types; null or missing means it left */
  "cursors"?: Record<string, AgentCursor | null>;
  /** { id, agent, block, at?, x?, y?, text, open? } – comment pins on the page: on a character of the block (at), or at its top edge x along the page (0–1); y moves it down; open keeps the window open (e.g. while the agent writes), otherwise a dark round pin with the agent's mark that grows into the window on hover */
  "comments"?: DocComment[];
  /** The black check in a comment's window – remove it from your list */
  "onResolveComment"?: (comment: DocComment) => void;
  /** Shows a reply field in the window; Enter sends */
  "onReply"?: (comment: DocComment, text: string) => void;
  /** A fixed page height in px – the rest of the document fades out towards the bottom */
  "height"?: number;
  /** Tabs above the page – the open one white with a stroke; you switch the blocks and agents */
  "tabs"?: { id: string; label: string }[];
  /** Tabs above the page – the open one white with a stroke; you switch the blocks and agents */
  "tab"?: string;
  /** Tabs above the page – the open one white with a stroke; you switch the blocks and agents */
  "onTabChange"?: (id: string) => void;
  /** Formats every cost */
  "formatCost"?: (amount: number) => string;
  /** { id, agent, block, at, remove?, insert?, note? } – changes waiting for you: removed text is struck through, new text underlined, both in the agent's color */
  "suggestions"?: DocSuggestion[];
  /** From the window that opens on a suggestion – acceptSuggestion() writes one into your blocks */
  "onAccept"?: (suggestion: DocSuggestion) => void;
  /** From the window that opens on a suggestion – acceptSuggestion() writes one into your blocks */
  "onReject"?: (suggestion: DocSuggestion) => void;
  /** Shows "Accept all" in the header when there is more than one suggestion */
  "onAcceptAll"?: () => void;
  /** The agent you follow, controlled or uncontrolled – the other pointers and selections fade back */
  "following"?: string | null;
  /** The agent you follow, controlled or uncontrolled – the other pointers and selections fade back */
  "onFollowingChange"?: (id: string | null) => void;
  /** The document's name in the header */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentCursors: React.FC<AgentCursorsProps | (Partial<AgentCursorsProps> & { demo: true })>;
export declare const AgentCursorsRaw: React.FC<AgentCursorsProps>;
export declare const AgentCursorsDemo: React.FC<Partial<AgentCursorsProps>>;
export declare function acceptSuggestion(blocks: DocBlock[], suggestions: DocSuggestion[], id: string): { blocks: DocBlock[]; suggestions: DocSuggestion[] };
export default AgentCursors;

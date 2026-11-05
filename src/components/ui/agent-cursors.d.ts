import * as React from "react";

export interface AgentCursorsProps {
  /** { id, name, color?, avatar?, tint?, cost? } – everyone who can be in the document; without a color every agent shares one ink (near-black, light in dark mode) and the logos tell them apart */
  agents?: any;
  /** { id, kind?: "title" | "heading" | "paragraph" | "item" | "code" | "image", text?, … } – the document; consecutive items form one list. Images take width (0–1), ratio, float ("left" | "right" – the next text runs beside them), loading, src and alt; their text is the caption. Tables take rows of cell blocks (the first row is the header); a cell with a tone shows as a status pill */
  blocks?: any;
  /** Per agent: { block, at?, in?, select?, point?, doing?, typing? } – where it is (a block or a comment), a selected passage or a held image, the corner or middle of an image, what it's doing (on its flag) and whether it types; null or missing means it left */
  cursors?: any;
  /** { id, agent, block, at?, x?, y?, text, open? } – comment pins on the page: on a character of the block (at), or at its top edge x along the page (0–1); y moves it down; open keeps the window open (e.g. while the agent writes), otherwise a dark round pin with the agent's mark that grows into the window on hover */
  comments?: any;
  /** The black check in a comment's window – remove it from your list */
  onResolveComment?: any;
  /** Shows a reply field in the window; Enter sends */
  onReply?: any;
  /** A fixed page height in px – the rest of the document fades out towards the bottom */
  height?: any;
  /** Tabs above the page – the open one white with a stroke; you switch the blocks and agents */
  "tabs / tab / onTabChange"?: any;
  /** Per agent: what it has cost so far – a small tag on its flag, the total in the header */
  "agents[].cost"?: any;
  /** Per agent: the fill of its face while you follow it – defaults to a light wash of its color */
  "agents[].tint"?: any;
  /** Formats every cost (default: dollars, e.g. "$0.42") */
  formatCost?: any;
  /** { id, agent, block, at, remove?, insert?, note? } – changes waiting for you: removed text is struck through, new text underlined, both in the agent's color (default: []) */
  suggestions?: any;
  /** From the window that opens on a suggestion – acceptSuggestion() writes one into your blocks */
  "onAccept / onReject"?: any;
  /** Shows "Accept all" in the header when there is more than one suggestion */
  onAcceptAll?: any;
  /** The agent you follow, controlled or uncontrolled – the other pointers and selections fade back */
  "following / onFollowingChange"?: any;
  /** The document's name in the header (default: "Untitled") */
  title?: any;
  /** Extra class on the root */
  className?: any;
  /** Helper: writes a suggestion into the text and moves the other suggestions in that block along */
  acceptSuggestion?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Cursors — Agents working in a document like teammates in a multiplayer editor – live pointers with names, suggestions typed letter by letter, images they resize, code they fix and comments beside the page
 */
export declare const AgentCursors: React.FC<AgentCursorsProps>;
export declare const AgentCursorsRaw: React.FC<AgentCursorsProps>;
export declare const AgentCursorsDemo: React.FC<AgentCursorsProps>;
export declare const acceptSuggestion: React.FC<AgentCursorsProps>;
export default AgentCursors;

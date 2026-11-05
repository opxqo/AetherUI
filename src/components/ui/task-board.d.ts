import * as React from "react";

export interface TaskBoardProps {
  /** key, title, status, priority (0–4), estimate, labels, assignee, dueIn, subtasks, pullRequest, created */
  tasks?: any;
  /** Columns in order: id, label and icon */
  statuses?: any;
  /** id, label and color – used on cards, in the filter and in the panel */
  labels?: any;
  /** id, name and avatar for assignees */
  people?: any;
  /** Breadcrumb above the board */
  path?: any;
  /** Called with all tasks after every move, edit, add or delete */
  onChange?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Task Board — Kanban board with drag and drop, quick add, a detail panel, search, label filters and a compact view
 */
export declare const TaskBoard: React.FC<TaskBoardProps>;
export declare const TaskBoardRaw: React.FC<TaskBoardProps>;
export declare const TaskBoardDemo: React.FC<TaskBoardProps>;

export default TaskBoard;

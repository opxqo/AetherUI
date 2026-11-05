import * as React from "react";

export type Id = string;
export type Timestamp = number | string | Date;
export type AgentStatus = "queued" | "running" | "waiting" | "done" | "failed" | "stopped";
export type Tone = "blue" | "violet" | "pink" | "green" | "amber" | "gray";
export interface NamedItem { id: Id; label: string; icon?: React.ReactNode }
export interface Person { id: Id; name: string; avatar?: string; color?: string }
export interface AnswerSource { title: string; name: string; href?: string; icon?: React.ReactNode; snippet?: string }
export interface ChatModel { id: string; name: string; icon?: React.ReactNode; description?: string }
export interface ThinkingStep { label?: string; title?: string; kind?: "search" | "thinking"; text?: string; sources?: AnswerSource[]; moreSources?: AnswerSource[]; duration?: number }
export interface ComboboxOption { value: string; label: string; hint?: string; avatar?: string | boolean; color?: string; icon?: React.ReactNode; group?: string; keywords?: string[]; disabled?: boolean }
export interface Command { id: string; label: string; hint?: string; logo?: React.ReactNode; icon?: React.ReactNode; keys?: string[]; keywords?: string[] }
export interface CommandGroup { id: string; label: string; commands: Command[] }
export interface DateRange { start: Date; end: Date }
export interface UploadItem { id: string; name: string; size: number; status: "uploading" | "done" | "error"; progress: number; error?: string; file?: File }
export interface StepContext<V> { values: V; setValues: (values: Partial<V>) => void; errors: Partial<Record<keyof V, string>>; goTo: (step: string | number) => void; next: () => void }
export interface Step<V = Record<string, unknown>> { id: string; title: string; heading?: string; description?: string; render: (ctx: StepContext<V>) => React.ReactNode; validate?: (values: V) => Partial<Record<keyof V, string | undefined>> }
export interface Checkpoint { id: string; title: string; icon?: React.ReactNode; parent?: string; status?: "running" | "done" | "failed" | "stopped"; at?: number; files?: number; cost?: number }
export interface CursorAgent extends Person { tint?: string; cost?: number }
export interface DocBlock { id: string; kind?: "title" | "heading" | "paragraph" | "item" | "code" | "image" | "table"; text?: string; width?: number; ratio?: number; float?: "left" | "right"; loading?: boolean; src?: string; alt?: string; rows?: DocBlock[][]; tone?: Tone }
export interface AgentCursor { block: string; at?: number; in?: string; select?: [number, number]; point?: { x: number; y: number }; doing?: string; typing?: boolean }
export interface DocComment { id: string; agent: string; block: string; at?: number; x?: number; y?: number; text: string; open?: boolean }
export interface DocSuggestion { id: string; agent: string; block: string; at: number; remove?: number; insert?: string; note?: string }
export interface FindingAgent extends Person { step?: string; done?: number; total?: number; status?: AgentStatus }
export interface Finding { id: string; agent: string; title: string; detail?: string; severity?: "info" | "warning" | "error" | "critical"; where?: string; at?: number }
export interface FleetStep { title: string; status?: AgentStatus; tool?: React.ReactNode; took?: number }
export interface FleetAgent extends Person { task: string; model?: string; tools?: React.ReactNode[]; status: AgentStatus; steps?: FleetStep[]; cost?: number; started?: number; ended?: number; children?: FleetAgent[]; ask?: string; error?: string }
export interface GraphNode { id: string; name: string; kind: "agent" | "tool" | "user"; short?: string; icon?: React.ReactNode; detail?: string; status?: AgentStatus; doing?: string; cost?: number; lead?: boolean }
export interface GraphCall { id: string; from: string; to: string; at: number; status?: "running" | "ok" | "error"; label?: string; ms?: number }
export interface HandoffAgent { id: string; name: string; model?: string; avatar?: string; description?: string }
export interface HandoffItem { id: string; label: string; kind?: "file" | "source" | "fact" | "decision" | "note"; lost?: boolean; why?: string }
export interface Handoff { id: string; from: string; to: string; task: string; items: HandoffItem[] }
export interface HandoffTask { id: string; title: string; logo?: React.ReactNode; status: "todo" | "working" | "done" | "warning"; agent?: string; note?: string }
export interface AgentTask { id: string; title: string; description?: string; agent: string; status: "running" | "waiting" | "done" | "failed"; startedAt?: Timestamp; elapsed?: number; tools?: number; sources?: number; steps?: { label: string; time?: string }[] }
export type AgentInboxView = "board" | "list";
export interface LaneAgent extends Person { role?: string; color?: string }
export interface LaneTask { id: string; agentId: string; title: string; status: "done" | "running" | "waiting" | "failed"; start: number; end?: number; handoffTo?: string; ask?: string; summary?: string; tools?: React.ReactNode[] }
export interface LedgerEntry { id: string; action: string; target?: string; system: string; icon?: React.ReactNode; at: number; change?: [React.ReactNode, React.ReactNode]; detail?: string; reversible?: boolean; dependsOn?: string[] }
export interface AgentRunStep { id: string; label: string; kind?: "read" | "search" | "edit" | "run" | "think" | "web"; icon?: React.ReactNode; state: "queued" | "running" | "done" | "failed"; since?: number; took?: number }
export interface QueueJob { id: string; name: string; kind: "llm" | "tool" | "agent" | "human"; status: "queued" | "running" | "done" | "failed"; enqueuedAt: number; priority?: "high" | "normal" | "low"; startedAt?: number; endedAt?: number; worker?: string; progress?: number; estimate?: number; attempt?: number; maxAttempts?: number; detail?: string; icon?: React.ReactNode; error?: string }
export interface QueueWorker extends Person { job?: string; status?: "idle" | "running" | "paused" }
export interface RecapEvent { id: string; at: number; kind: "needs" | "failed" | "done"; title: string; detail?: string; logo?: React.ReactNode; count?: number; action?: string; doneLabel?: string }
export interface SteerStep { id: string; title: string; status?: "done" | "active" | "pending"; duration?: number; startedAt?: number; notes?: SteerNote[] }
export interface SteerNote { id: string; text: string; picked?: boolean }
export interface TreeAgent { id: string; name: string; task: string; model?: string; avatar?: string; tools?: React.ReactNode[]; status: AgentStatus; ask?: string; error?: string; cost?: number; started?: number; ended?: number; children?: TreeAgent[] }
export type AutonomyLevel = 0 | 1 | 2;
export interface AgentAction { id: string; label: string; detail?: string; risk: "safe" | "risky" | "destructive"; level?: AutonomyLevel; locked?: boolean; icon?: React.ReactNode }
export interface CitedSegment { text: string; cite?: string[]; paragraph?: boolean }
export interface CitedSource { id: string; title: string; site: string; url?: string; date?: string; quote?: string; highlight?: string; icon?: React.ReactNode }
export interface BreakdownItem { id: string; label: string; value: number; color?: string; icon?: React.ReactNode; detail?: string }
export interface RadarAgent extends Person { branch?: string }
export interface RadarFile { id: string; path: string; agents?: string[]; conflicts?: { agent: string; text: string }[]; status?: "conflict" | "resolved"; resolution?: string }
export type ContextKind = "system" | "tools" | "memory" | "file" | "chat" | "result" | "summary";
export interface ContextBlock { id: string; label: string; kind: ContextKind; tokens: number; detail?: string; icon?: React.ReactNode; items?: { label: string; icon?: React.ReactNode }[] }
export interface ContextAgent { id: string; label: string; limit?: number; model?: string; icon?: React.ReactNode }
export interface ContextCompaction { before: ContextBlock[]; summarized?: string[]; dropped?: string[]; summary?: ContextBlock }
export interface ContextPart { id: string; label: string; tokens?: number; items?: { id?: string; label: string; tokens?: number }[]; locked?: boolean; compact?: boolean; color?: string }
export interface CostStep { id: string; name: string; kind: "llm" | "tool" | "agent"; status: "running" | "done" | "failed"; model?: string; detail?: string; icon?: React.ReactNode; tokensIn?: number; tokensOut?: number; cost?: number; duration?: number; input?: string; output?: string; error?: string; children?: CostStep[] }
export type DecisionText = string | (string | { text: string; note: string; source?: string })[];
export interface DecisionOption { label: string; effects?: DecisionText[]; pick?: boolean }
export interface Decision { id: string; question: string; context?: string; agent: string; model?: string; icon?: React.ReactNode; risk?: "low" | "medium" | "high"; options: DecisionOption[] }
export interface DecisionTreeHandle { reset: () => void; focus: () => void }
export interface DelegateAgent { id: string; name: string; model?: string; avatar?: string; current?: number; rate?: number }
export interface DelegateTask { id: string; title: string; estimate: number; tools?: React.ReactNode[]; agentId?: string }
export type DelegateMode = "manual" | "auto";
export interface ExperimentVariant { id: string; key: string; name: string; values: Record<string, number>; control?: boolean; visitors?: number; confidence?: Record<string, number>; color?: string }
export interface ExperimentMetric { id: string; label: string; format?: (value: number) => string; lowerIsBetter?: boolean }
export type ExperimentTone = "red" | "amber" | "green" | "blue" | "violet" | "gray";
export interface FallbackAttempt { id: string; name: string; status: "waiting" | "trying" | "failed" | "answered" | "skipped"; model?: string; logo?: React.ReactNode; detail?: string; duration?: number; error?: string }
export interface ChainEnd { name: string; logo?: React.ReactNode; text?: string; details?: string[] }
export interface FanoutTask { id: string; label: string; status: "queued" | "running" | "retrying" | "done" | "failed"; worker?: string; start?: number; end?: number; cost?: number; attempts?: number; result?: string; error?: string }
export interface Integration { id: string; name: string; description?: string; icon?: React.ReactNode; logo?: React.ReactNode; connected?: boolean; category?: string }
export interface IntegrationValues { enabled: boolean; siteUrl: string; timeZone: string; apiKey: string }
export interface KpiSeries { id?: string; label: string; values: (number | null)[]; color?: string }
export interface Memory { id: string; text: string; category: string; source?: string; date?: string; paused?: boolean }
export interface PickerModel { id: string; name: string; provider?: string; description?: string; icon?: React.ReactNode; speed?: number; quality?: number; cost?: number; price?: string; latency?: string; thinking?: boolean }
export interface Attempt { id: string; name: string; approach: string; model?: string; icon?: React.ReactNode; status: "running" | "done" | "failed"; progress?: number; step?: string; score?: number; note?: string; took?: number; cost?: number }
export type PermissionScope = "once" | "timed" | "always";
export interface PermissionDecision { allow: boolean; scope?: PermissionScope; until?: number }
export interface PlanStep { id: string; title: string; description?: string; status?: "pending" | "running" | "done" | "failed"; start?: number; duration?: number; plannedStart?: number; plannedDuration?: number; actualStart?: number; actualDuration?: number }
export interface ProjectTask { id: string; label: string; done?: boolean; assignee?: string }
export interface ProjectOption { id: string; label: string; color?: string; icon?: React.ReactNode }
export interface ProjectMember { name: string; avatar?: string }
export interface PromptTemplate { id: string; title: string; category?: string; tone?: string; body: string; variables?: Record<string, { description?: string; default?: string }> }
export type ReviewText = DecisionText;
export interface ReviewFile { path: string; added?: number; removed?: number; diff?: string; start?: number }
export interface ReviewStep { title: ReviewText; tool?: string; icon?: React.ReactNode; detail?: ReviewText }
export interface ReviewItem { id: string; title: string; agent: string; model?: string; icon?: React.ReactNode; type: string; risk: "low" | "medium" | "high"; confidence: number; createdAt: number; reasoning?: string; fields?: Record<string, ReviewText>; body?: ReviewText; bodyLabel?: string; format?: string; sources?: CitedSource[]; files?: ReviewFile[]; steps?: ReviewStep[] }
export interface ReviewCenterHandle { next: () => void; previous: () => void; focus: () => void }
export interface ScheduledTask { id: string; title: string; usage: number; agent?: string; detail?: string; logo?: React.ReactNode; at?: { day: number; session: number } }
export interface ScheduledPart { id: string; task: string; session?: string; tokens?: number; start?: number; end?: number }
export interface MapAgent extends Person { status?: AgentStatus }
export interface AccessTool { id: string; name: string; icon?: React.ReactNode; description?: string }
export interface ToolCall { id: string; status: "running" | "done" | "failed"; input: unknown; output?: unknown; error?: string; at?: number; duration?: number; replay?: boolean }
export interface TraceSpan { id: string; name: string; kind: "agent" | "subagent" | "llm" | "tool"; status: "running" | "done" | "failed"; start: number; end?: number; detail?: string; icon?: React.ReactNode; model?: string; tokensIn?: number; tokensOut?: number; cost?: number; input?: string; output?: string; error?: string; children?: TraceSpan[] }
export interface BreakdownRecord { id?: string; value: number; dimensions?: Record<string, string>; measures?: Record<string, number> }
export interface Dimension { id: string; label: string; values?: { id: string; label: string }[] }
export interface Measure { id: string; label: string; format?: (value: number) => string }
export type TagTone = Tone;
export interface DataColumn { key: string; label: string; icon?: React.ReactNode; width?: number; type?: "title" | "tag" | "link" | "number" | "text"; editable?: boolean; options?: string[]; format?: (value: number) => string }
export type DataRow = { id: string; logo?: React.ReactNode } & Record<string, unknown>;
export interface CatalogItem { name: string; repeat: string; price: number }
export interface ScheduleLine { id: string; product: string; quantity?: number; repeat?: number; timing?: string }
export interface CommentAuthor { id?: string; name: string; avatar?: string; role?: string }
export interface PanelComment { id: string; text: string; author: CommentAuthor; at?: string; resolved?: boolean; replies?: PanelComment[] }
export type DiffSegment = { type: "equal"; text: string } | { type: "change"; remove: string; insert: string };
export interface InlineDiffHandle { acceptAll: () => void; rejectAll: () => void; reset: () => void }
export interface SetupGroup { id: string; title: string; tasks: { id: string; title: string; description?: string; done?: boolean; action?: { label: string; onClick: () => void } }[] }
export interface ShellNavItem { id?: string; label: string; icon?: React.ReactNode; count?: number; active?: boolean }
export interface ShellChat { id: string; title: string; active?: boolean }
export interface ShellGroup { label: string; items: ShellNavItem[] }
export interface WorkspaceTool { id: string; label: string; icon?: React.ReactNode; shortcut?: string }
export interface WorkspaceSource { id: string; title: string; source: string; mark?: React.ReactNode }
export interface RunStep { id: string; title: string; detail?: string; tool?: string; toolCalls?: { name: string; summary: string; icon?: React.ReactNode; args?: unknown; result?: unknown; duration?: number }[]; approval?: { title: string; description: string; risk: "low" | "medium" | "high"; details?: { label: string; value: React.ReactNode }[] } }
export interface OnboardingValues { workspace: string; slug: string; teamSize: string; tools: string[]; invites: string[]; role: string; template: string }
export interface ProviderModel { id: string; name: string; kind: "chat" | "image"; on: boolean; access: string; description?: string }
export interface Provider { id: string; name: string; region: "eu" | "global" | "custom"; logo?: React.ReactNode; models: ProviderModel[] }
export interface PreferenceValues { chatModel?: string; imageModel?: string; language?: string; theme?: "light" | "dark" | "system"; appActions?: boolean; chatTools?: string[]; instructions?: { on: boolean; about: string; style: string }; memories?: Memory[] }
export interface NotificationValues { digest?: boolean; digestTime?: string; weekly?: boolean; types?: { id: string; title: string; note?: string; channel: "both" | "email" | "mobile" | "inbox" }[]; quiet?: boolean; from?: string; to?: string }
export interface PrivacyValues { ads?: boolean; analytics?: boolean; training?: boolean; cookies?: boolean; emails?: boolean; sessions?: { id?: string; device: string; name: string; meta: string; current?: boolean }[]; shared?: { id?: string; title: string; scope: string; shared: string; views: number }[] }
export interface WorkspaceValues { name: string; slug: string; context: string; icon?: string }
export interface ProfileValues { firstName: string; lastName: string; email: string; role?: string; timezone: string; weekStart: string; context: string; avatar?: string; hasPassword?: boolean }
export interface Member { id: string; name?: string; email: string; role: string; plan: string; usage: number; invited?: boolean }
export interface Team { id: string; name: string; members: string[] }
export interface SecurityValues { domains?: { domain: string; verified?: boolean }[]; joinByDomain?: boolean; sso?: boolean; metadataUrl?: string; twoStep?: boolean; sessionLength?: string; ipRanges?: string[] }
export interface ContextEntry { id?: string; kind?: "note" | "report" | "files" | "integration"; text?: string; note?: string; report?: string; files?: { name: string; type: "pdf" | "xlsx" | "csv" | "doc" }[]; app?: string; connected?: boolean; author?: CommentAuthor }
export interface ContextClient { id: string; name: string; meta?: string; mark?: React.ReactNode; kpis?: { label: string; value: string; delta?: string }[]; reports?: { id: string; name: string }[]; context?: ContextEntry[] }
export interface InvoiceLine { id: string; name: string; qty: number; rate: number; tax: number; group?: string }
export interface Plan { id?: string; name: string; monthly: number | null; yearly: number | null; description?: string; features?: string[]; limits?: { label: string; value: string }[]; sync?: string; onSelect?: () => void }
export interface TaskStatus { id: string; label: string; icon?: React.ReactNode }
export interface TaskLabel { id: string; label: string; color: string }
export interface TaskPerson extends Person {}
export interface Task { id?: string; key: string; title: string; status: string; priority?: 0 | 1 | 2 | 3 | 4; estimate?: number; labels?: string[]; assignee?: string; dueIn?: string; subtasks?: { title: string; done: boolean }[]; pullRequest?: string; created?: string }
export interface ChatMessage { id?: string; role: "user" | "assistant"; content: string }
export interface Conversation { id: string; title: string; messages: ChatMessage[]; project?: string }
export interface Project { id: string; name: string; description?: string; days?: number; pinned?: boolean }
export interface App { id: string; name: string; vendor: string; description: string; categories: string[]; logo?: React.ReactNode; color?: string; essential?: boolean; connected?: boolean }
export interface AppCategory { id: string; label: string; icon?: React.ReactNode }
export interface KpiBoardData { stats: { id?: string; label: string; current: number[]; previous: number[]; unit?: string; format?: (value: number) => string }[]; overview: { title: string; labels: string[]; current: number[]; previous: number[]; segments?: Record<string, { current: number[]; previous: number[] }> }; focus: { title: string; metric: string; labels: string[]; values: number[]; previous: number } }
export interface GalleryItem { id: string; name: string; description: string; colors: [string, string]; trigger?: string; steps?: string[]; skills?: string[]; guardrail?: string }
export type Continent = "north-america" | "south-america" | "europe" | "africa" | "asia" | "oceania";

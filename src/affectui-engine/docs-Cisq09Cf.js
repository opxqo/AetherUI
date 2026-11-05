var e={requirements:[`React 19`],whenToUse:[`Seeing at a glance which tools of the run an agent can reach, which it actually used – and which one it calls right now`,`Debugging a tool call: read its input and output, then replay it on its own, with the same input or a changed one`,`Runs with several agents, each with its own set of tools – switch between them with the tabs on top`],whenNotToUse:[`Who started whom – use Agent Tree`,`Agents calling each other and their tools as one network – use Agent Graph`,`A single call with its arguments and result in a chat – use Tool Call Card`],usage:`import { ToolAccessMap, type MapAgent } from "@/components/ui/tool-access-map";

const agents: MapAgent[] = [
  {
    id: "coder",
    name: "Coder",
    model: "GPT-6 Sol",
    status: "running",
    task: "Build the pricing page",
    tools: [
      { id: "github", name: "GitHub", calls: [{ id: "c1", status: "done", input: { branch: "pricing-page" }, output: { ref: "refs/heads/pricing-page" }, duration: 450 }] },
      { id: "terminal", name: "Terminal", calls: [{ id: "c2", status: "running", input: { cmd: "npm test" } }] },
      // A tool it can use but hasn't yet
      { id: "stripe", name: "Stripe" },
    ],
  },
];

// Every tool of the run – the ones an agent can't reach are grayed out on its map, with a dashed line
const tools = [
  { id: "github", name: "GitHub" },
  { id: "terminal", name: "Terminal" },
  { id: "stripe", name: "Stripe" },
  { id: "slack", name: "Slack" },
];

export function Tools() {
  return <ToolAccessMap agents={agents} tools={tools} onReplay={(call, input, tool) => agent.call(tool.id, input)} />;
}`,examples:[{title:`Read only`,code:`// Without onReplay the calls view only shows input and output – no Replay or Edit input
<ToolAccessMap agents={agents} />`},{title:`Follow the agent you pick elsewhere`,code:`const [agent, setAgent] = useState("coder");

<ToolAccessMap agents={agents} agent={agent} onAgentChange={setAgent} />`},{title:`Replay into your data`,code:`// Add the replayed call to the tool – it shows as running with a "Replay" chip, then comes back like any other
const replay = async (call: ToolCall, input: unknown, tool: AccessTool, agent: MapAgent) => {
  const id = crypto.randomUUID();
  addCall(agent.id, tool.id, { id, status: "running", input, replay: true, at: Date.now() - startedAt });
  const result = await runTool(tool.id, input);
  updateCall(agent.id, tool.id, id, { status: result.ok ? "done" : "failed", output: result.data, error: result.error, duration: result.ms });
};`}],props:[{name:`agents`,type:`MapAgent[]`,description:`{ id, name, model?, avatar?, status, task?, tools } – pass them again whenever a call starts or comes back`},{name:`tools`,type:`AccessTool[]`,default:`the tools of all agents together`,description:`Every tool of the run, { id, name, icon?, description? }, in the order they're laid out – the first half on the left`},{name:`agent.tools`,type:`AgentTool[]`,description:`Per agent: { id, calls? } for every tool it has access to – name and icon come from tools; one without calls shows as not used yet, one that isn't listed as no access`},{name:`calls`,type:`ToolCall[]`,description:`Per tool, oldest first: { id, status, input, output?, error?, at?, duration?, replay? } – a running call turns its line blue`},{name:`status`,type:`"queued" | "running" | "waiting" | "done" | "failed"`,description:`Per agent – shown as a badge on its card; waiting reads "Needs you"`},{name:`agent`,type:`string`,description:`Controlled id of the agent on the map`},{name:`defaultAgent`,type:`string`,default:`the first agent`,description:`The agent on the map at first, uncontrolled`},{name:`onAgentChange`,type:`(id: string) => void`,description:`A tab was picked`},{name:`onReplay`,type:`(call, input, tool, agent) => void`,description:`Replay was pressed – input is the call's own, or the one it was changed to (parsed from JSON when the original was an object)`},{name:`formatTime`,type:`(ms: number) => string`,default:`0:42`,description:`Formats when a call was made`},{name:`title`,type:`string`,default:`"Tool access"`,description:`Heading of the bar`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`←`,`→`],description:`Moves between the agent tabs`},{keys:[`Tab`],description:`Moves through the tools; Enter opens the calls of one`},{keys:[`↑`,`↓`],description:`Moves through the calls of a tool and shows each – the list is one tab stop`},{keys:[`Esc`],description:`Back from the calls to the map – focus returns to the tool`},{keys:[`⌘`,`Enter`],description:`Runs the changed input`}],accessibility:[`The agents are tabs; the map is their tab panel and says whose tools it shows`,`Every tool it can reach is a button that says its name, how it stands and how many calls it got; one without access says so and can't be opened`,`Opening a tool moves focus into its calls; going back returns it to the tool, and the map underneath is inert meanwhile`,`Status is never color alone: running and failed are badges with words, unused tools say "Not used yet", the others "No access"`,`The counts in the bar on top are announced politely when they change; each keeps its width, and the blue running tag sits to their left so nothing shifts`],motion:[`Every tool the agent can use has a blue line, the rest a gray dashed one; while a tool is being called, a deeper blue shimmer keeps running down its line, from the agent to the tool`,`Switching agents keeps the tools and their gray lines in place: the blue runs in again over the lines from the agent, the card's content moves in from below, and tools gray out or come back softly`,`The calls view slides in over the map as a white card, and the map grows to fit it`,`With prefers-reduced-motion everything simply appears and the shimmer stays off`],responsive:[`Every tool card has a fixed size, so nothing moves when a call starts, finishes or fails`,`The map lays itself out from its own width; below 540px the tools sit in a grid under the agent and the lines give way`,`In the calls view, narrow puts the list above the call`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Pass every tool of the run in tools, and per agent only the ones it may use – the rest gray out with a dashed line`,`Keep calls oldest first and add new ones at the end; mark a replayed call with replay: true`,`Up to ten tools fit the map comfortably; more still work but make it tall`,`Line colors are solid, so lines that run together keep their color: --ui-tam-used for access, --ui-tam-off without, --ui-tam-glint for the shimmer; how far a tool without access fades is --ui-tam-dim`],related:[`agent-tree`,`agent-graph`,`tool-call-card`,`agent-checkpoints`]};export{e as docs};
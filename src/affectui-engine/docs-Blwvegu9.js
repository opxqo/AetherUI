var e={requirements:[`React 19`],whenToUse:[`An agent in a chat needs one answer from you before it goes on – which option, approve or not, which variant`,`Several tasks wait on you at once: one card with a pager, right where you type`,`You want answers by keyboard – 1–5, arrows, Enter – without leaving the chat`],whenNotToUse:[`Many open decisions across agents, worked through as a list – use Decision Inbox`,`Approving tool calls, file changes or messages with their diff or arguments – use Approval Gates`,`Steering a run while it works – use Agent Steering`],usage:`import { DecisionCard, type Decision } from "@/components/ui/decision-card";

const decisions: Decision[] = [
  {
    id: "queue",
    task: "Ingest pipeline",
    question: "Which queue should the ingest service use?",
    options: [
      { id: "kafka", title: "Kafka", summary: "A durable log – a day of events to replay", recommended: true },
      { id: "sqs", title: "SQS", summary: "Managed, nothing to run – but no replay" },
      { id: "pg", title: "Postgres queue", summary: "The database you already have" },
    ],
  },
];

export function Chat() {
  const [open, setOpen] = useState(decisions);
  return (
    <>
      <DecisionCard
        decisions={open}
        onDecide={(id, answer) => {
          agent.answer(id, answer);
          setOpen((l) => l.filter((d) => d.id !== id));
        }}
      />
      <Composer />
    </>
  );
}`,examples:[{title:`An approval`,code:`{ id: "weekly", kind: "approval", task: "Weekly update", question: "Send the weekly update to Northwind?",
  facts: [{ label: "To", value: "Dana Reyes, Northwind" }, { label: "Subject", value: "Week 45: ingest is live" }] }
// onDecide gets "approve" or "decline"`},{title:`A pick with preview tiles`,code:`{ id: "empty", kind: "pick", question: "Which empty state for the dashboard?",
  options: [
    { id: "list", title: "Setup checklist", recommended: true, preview: <img src="/checklist.png" alt="" /> },
    { id: "chart", title: "Sample data", blocks: [{ x: 14, y: 46, w: 10, h: 22 }, { x: 34, y: 12, w: 52, h: 12, r: 6, tone: "ink" }] },
  ] }`},{title:`Bring it up from elsewhere`,code:`// e.g. from an "Asked: … · waiting" line in the thread – the card unfolds, pulses once and takes the focus
const [reveal, setReveal] = useState(0);
<DecisionCard decisions={open} reveal={reveal} onDecide={…} />
<button onClick={() => setReveal((n) => n + 1)}>Show</button>`}],props:[{name:`decisions`,type:`Decision[]`,description:`The open decisions, oldest first – an answered one leaves the card at once; drop it from the array in onDecide`},{name:`onDecide`,type:`(id: string, answer: DecisionAnswer) => void`,description:`An answer: { option } for a row or tile, { text } for your own words, "approve" or "decline"`},{name:`onLater`,type:`(id: string) => void`,description:`Later or Esc folded the card to one line`},{name:`defaultFolded`,type:`boolean`,default:`false`,description:`Start folded to "2 decisions waiting · Show"`},{name:`reveal`,type:`number`,description:`Change it to bring the card up – it unfolds, pulses gray once and focuses the selected row`},{name:`labels`,type:`Partial<DecisionCardLabels>`,description:`Every text, e.g. needsYou, later, show, recommended, approve, decline, own, waiting(n), of(i, n)`},{name:`className`,type:`string`,description:`Extra class on the root`},{name:`Decision`,type:`{ id, question, task?, kind?, options?, facts? }`,description:`kind: "decision" (default) | "pick" | "approval"; options: three to five { id, title, summary?, recommended?, preview?, blocks? }; facts: two or three { label, value } for an approval`}],keyboard:[{keys:[`1`,`–`,`5`],description:`Answer with that row at once; the next number goes into the field`},{keys:[`Home`,`End`],description:`First or last row`},{keys:[`↑`,`↓`],description:`Move between the rows (← → on tiles); ↓ from the last row goes into the field, ↑ from an empty field back`},{keys:[`Enter`,`Space`],description:`Answer with the row in focus; in the field, Enter sends your own words`},{keys:[`Esc`],description:`Later – folds the card to one line`}],accessibility:[`The card is a group labelled by the question; the rows are a listbox with one tab stop that moves with the arrows`,`Every row says its number key (aria-keyshortcuts); Later says Escape`,`Answers and Later are announced politely – what you picked and how many still wait`,`Focus rings show only for the keyboard (:focus-visible); the field for your own words gets no ring, only a firmer edge`,`After an answer the focus moves to the next decision, the pager arrows keep it while you page, Later moves it to Show and Show back to the row – it never falls back to the page, even when your array drops the decision in focus`,`After the last answer the card folds away and can't know your composer: move the focus there yourself in onDecide, e.g. if (open.length === 1) composerRef.current?.focus()`],motion:[`The next decision fades in; after the last answer the card folds away – its height to zero, then gone`,`Brought up with reveal, the card pulses gray once`,`With prefers-reduced-motion everything simply appears`],responsive:[`A gray layer with the head on it and a white card with the rest – it takes the width of your composer`,`Long titles and fact values wrap to a second line, then end in …; summaries and the task stay on one line – nothing leaves the card on phones`,`One or two tiles keep the size of three; below 420px the tiles turn into rows`,`On touch screens rows are 44px tall and buttons 32px to see, 40px to hit`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Put it right above the chat composer, in the same column – the composer stays for new prompts, the card has its own field`,`Keep options to three to five with a one-line summary each; mark at most one recommended`,`Remove a decision from the array in onDecide – after the last one the card folds away by itself; then focus the composer`],related:[`decision-inbox`,`approval-gates`,`chat-composer`,`agent-steering`]};export{e as docs};
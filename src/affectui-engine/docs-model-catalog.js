// Docs for the hand-written Model Catalog component.
var e = {
  requirements: [`React 19`],
  whenToUse: [`Letting people choose which models a workspace or app uses, grouped by where they run and who provides them`, `Inside a Dialog behind an "Add model" button, so the settings page itself only lists what is on`],
  whenNotToUse: [`Picking one model for a single chat – use Model Picker`, `Editing per-model settings such as access or limits – that belongs on the settings page`],
  usage: `import { ModelCatalog } from "@/components/ui/model-catalog";

const regions = [{ id: "us", name: "United States", note: "Runs in the providers' US data centers", icon: <UsFlag /> }];
const providers = [{ id: "openai", name: "OpenAI", region: "us", logo: <OpenAILogo />, models: [
  { id: "gpt-6", name: "GPT-6", tag: "Chat" },
  { id: "gpt-image", name: "GPT Image 2", tag: "Image" },
] }];

export function Models() {
  const [enabled, setEnabled] = useState(["gpt-6"]);
  return <ModelCatalog regions={regions} providers={providers} enabled={enabled} onEnabledChange={setEnabled} />;
}`,
  examples: [
    { title: `Other languages`, code: `<ModelCatalog labels={{ search: "搜索模型", count: (on, total) => \`\${on}/\${total} 已启用\`, noMatch: q => \`没有找到“\${q}”\` }} … />` },
    { title: `Uncontrolled`, code: `<ModelCatalog regions={regions} providers={providers} defaultEnabled={["gpt-6"]} onToggle={(id, on) => save(id, on)} />` },
  ],
  props: [
    { name: `regions`, type: `{ id, name, note?, icon? }[]`, description: `Groups in order; empty regions are hidden` },
    { name: `providers`, type: `{ id, name, region, logo?, note?, models }[]`, description: `Each model is { id, name, tag?, description? }` },
    { name: `enabled`, type: `string[]`, description: `Ids that are on (controlled)` },
    { name: `defaultEnabled`, type: `string[]`, default: `[]`, description: `Ids that start on when uncontrolled` },
    { name: `onEnabledChange`, type: `(enabled: string[]) => void`, description: `Every id that is on after a change` },
    { name: `onToggle`, type: `(id, on, { model, provider }) => void`, description: `The one model that changed` },
    { name: `defaultExpanded`, type: `string[]`, description: `Providers that start open; the first one when left out` },
    { name: `searchable`, type: `boolean`, default: `true`, description: `Search field on top; a search opens every match` },
    { name: `labels`, type: `{ search?, clear?, count?, noMatch?, empty? }`, description: `Every word it shows, for other languages` },
  ],
};
export { e as docs };

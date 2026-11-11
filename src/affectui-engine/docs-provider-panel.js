// Docs for the hand-written Provider Panel component.
var e = {
  requirements: [`React 19`],
  whenToUse: [`Settings for several connected services where each one has its own detail – keys, sync, models`],
  whenNotToUse: [`Plain navigation between pages – use the app shell's sidebar`],
  usage: `import { ProviderPanel } from "@/components/ui/provider-panel";

<ProviderPanel groups={[{ label: "Providers", items: providers }]} selected={id} onSelect={setId} action={{ label: "Add endpoint", onClick: add }}>
  <ProviderConnection … />
  <ModelToggleList … />
</ProviderPanel>`,
  examples: [{ title: `Status per item`, code: `{ id: "openai", name: "OpenAI", logo: <img src="/openai.svg" />, meta: "Synced · 42 models", tone: "ok" }` }],
  props: [
    { name: `groups`, type: `{ label?, items: { id, name, logo?, meta?, tone? }[] }[]`, description: `List on the left` },
    { name: `selected`, type: `string`, description: `Selected id (controlled)` },
    { name: `onSelect`, type: `(id: string) => void`, description: `Called on click` },
    { name: `action`, type: `{ label, icon?, onClick }`, description: `Row at the end of the list` },
    { name: `children`, type: `ReactNode`, description: `Detail on the right` },
  ],
};
export { e as docs };

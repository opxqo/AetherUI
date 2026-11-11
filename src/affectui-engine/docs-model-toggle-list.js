// Docs for the hand-written Model Toggle List component.
var e = {
  requirements: [`React 19`],
  whenToUse: [`Turning a service's models on and off, with prices and one default per category`],
  whenNotToUse: [`Choosing across many services at once – use Model Catalog`],
  usage: `import { ModelToggleList } from "@/components/ui/model-toggle-list";

<ModelToggleList
  categories={[{ value: "chat", label: "Chat" }, { value: "image", label: "Image" }]}
  rows={rows}
  onToggle={(ids, on) => save(ids, on)}
  onSetDefault={setDefault}
/>`,
  examples: [{ title: `Price in the meta slot`, code: `{ id: "gpt-6", name: "GPT-6", category: "chat", group: "OpenAI", meta: <Price model="gpt-6" />, enabled: true }` }],
  props: [
    { name: `rows`, type: `ModelToggleRow[]`, description: `id, name, category, group?, icon?, meta?, note?, isDefault?, action?, enabled, locked?` },
    { name: `categories`, type: `{ value, label }[]`, description: `Tabs with counts` },
    { name: `onToggle`, type: `(ids, on) => void`, description: `One row or every visible switchable row` },
    { name: `onSetDefault`, type: `(id) => void`, description: `Shows "Set default" on enabled rows` },
    { name: `labels`, type: `ModelToggleListLabels`, description: `Every word it shows` },
  ],
};
export { e as docs };

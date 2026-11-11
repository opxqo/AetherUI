// Docs for the hand-written Provider Connection component.
var e = {
  requirements: [`React 19`],
  whenToUse: [`Connecting one service with an API key and syncing what it offers`],
  whenNotToUse: [`Secrets that must be typed on every use – this keeps a saved key`],
  usage: `import { ProviderConnection } from "@/components/ui/provider-connection";

<ProviderConnection
  name="OpenAI"
  status={{ tone: "ok", text: "Synced 42 models" }}
  link={{ href: consoleUrl, label: "Open console" }}
  apiKey={key}
  onKeyChange={saveKey}
  onSync={sync}
  syncing={busy}
  result={result}
/>`,
  examples: [{ title: `Other languages`, code: `<ProviderConnection labels={{ show: "显示", hide: "隐藏", edit: "编辑", save: "保存", clear: "清空", cancel: "取消" }} … />` }],
  props: [
    { name: `name`, type: `ReactNode`, description: `Heading` },
    { name: `status`, type: `{ tone, text }`, description: `Dot and line under the name` },
    { name: `apiKey`, type: `string`, description: `Saved key, shown masked` },
    { name: `onKeyChange`, type: `(value: string) => void`, description: `After Save` },
    { name: `onSync`, type: `() => void`, description: `Connect / sync button` },
    { name: `syncing`, type: `boolean`, description: `Spinner, blocks the button` },
    { name: `result`, type: `{ ok, text } | null`, description: `Outcome of the last attempt` },
    { name: `labels`, type: `{ show?, hide?, edit?, save?, clear?, cancel? }`, description: `Words of the key buttons` },
  ],
};
export { e as docs };

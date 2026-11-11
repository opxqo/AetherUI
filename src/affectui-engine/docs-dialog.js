// Docs for the hand-written Dialog component.
var e = {
  requirements: [`React 19`],
  whenToUse: [`A short task that needs the user's full attention before they go on – confirm, share, pick from a list`, `Choosing things to add to a page, e.g. "Add model" next to a settings list`],
  whenNotToUse: [`Messages that need no answer – use a toast`, `Long forms or anything users come back to – give it its own page`],
  usage: `import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ShareChat() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Share</Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Share this chat"
        description="Anyone in Acme with the link can read it."
        footer={<>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={copyLink}>Copy link</Button>
        </>}
      >
        The link opens the chat as it is now.
      </Dialog>
    </>
  );
}`,
  examples: [
    { title: `Wide, with a count in the footer`, code: `<Dialog open={open} onOpenChange={setOpen} size="lg" title="Add model" footerLead="4 models on" footer={<Button onClick={() => setOpen(false)}>Done</Button>}>
  <ModelCatalog regions={regions} providers={providers} enabled={enabled} onEnabledChange={setEnabled} />
</Dialog>` },
    { title: `Must answer`, code: `<Dialog open={open} onOpenChange={setOpen} closeOnBackdrop={false} showClose={false} title="Delete workspace?" footer={...}>…</Dialog>` },
  ],
  props: [
    { name: `open`, type: `boolean`, description: `Shown or not (controlled) – pair with onOpenChange` },
    { name: `defaultOpen`, type: `boolean`, default: `false`, description: `Starts open when uncontrolled` },
    { name: `onOpenChange`, type: `(open: boolean) => void`, description: `Called with false on Esc, a backdrop click or ×` },
    { name: `title`, type: `ReactNode`, description: `Heading in the tray; names the dialog` },
    { name: `description`, type: `ReactNode`, description: `Quiet line under the title` },
    { name: `children`, type: `ReactNode`, description: `Body on the white card; scrolls when tall` },
    { name: `footer`, type: `ReactNode`, description: `Actions on the right below the card` },
    { name: `footerLead`, type: `ReactNode`, description: `Muted text on the left of the footer` },
    { name: `size`, type: `"sm" | "md" | "lg"`, default: `"md"`, description: `400, 520 or 680px wide` },
    { name: `closeOnBackdrop`, type: `boolean`, default: `true`, description: `Backdrop click closes it` },
    { name: `closeOnEscape`, type: `boolean`, default: `true`, description: `Esc closes it` },
    { name: `showClose`, type: `boolean`, default: `true`, description: `The × in the corner` },
    { name: `initialFocus`, type: `string | RefObject`, description: `What gets focus on open; otherwise [data-autofocus] or the first control in the body` },
  ],
};
export { e as docs };

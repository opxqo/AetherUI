var e={requirements:[`React 19`],whenToUse:[`Several short values in one field: email addresses to invite, labels, keywords, domains, stop words`,`Lists people paste from elsewhere – commas, spaces or new lines turn into chips at once`],whenNotToUse:[`Picking from a fixed list – use the Combobox, which suggests as you type`,`A single value – use the Text Field`],usage:`import { useState } from "react";
import { TagInput } from "@/components/ui/tag-input";

const EMAIL = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;

export function InviteField() {
  const [emails, setEmails] = useState<string[]>([]);

  return (
    <TagInput
      label="Invite people"
      value={emails}
      onChange={setEmails}
      placeholder="name@company.com"
      avatar
      splitOnSpace
      max={10}
      normalize={(t) => t.trim().toLowerCase()}
      validate={(t) => (EMAIL.test(t) ? true : \`“\${t}” doesn't look like an email address.\`)}
      name="emails"
    />
  );
}`,props:[{name:`value`,type:`string[]`,description:`The chips – makes it controlled`},{name:`defaultValue`,type:`string[]`,default:`[]`,description:`Starting chips when uncontrolled`},{name:`onChange`,type:`(tags: string[]) => void`,description:`Called when a chip is added or removed`},{name:`validate`,type:`(tag: string) => true | string`,description:`Checks a value before it becomes a chip; a message keeps it in the field and shows under it`},{name:`normalize`,type:`(tag: string) => string`,default:`trim`,description:`Cleans a value first, e.g. lowercases an email`},{name:`splitOnSpace`,type:`boolean`,default:`false`,description:`Also split on spaces – right for emails and single words, wrong for labels with spaces`},{name:`max`,type:`number`,description:`At most this many chips; shows "3/10" under the field`},{name:`avatar`,type:`boolean`,default:`false`,description:`A small circle with the first letter on every chip, for people`},{name:`label`,type:`ReactNode`,description:`Shown above the field and tied to its input`},{name:`hint`,type:`ReactNode`,description:`A quiet line under the field – a message takes its place while there is one`},{name:`error`,type:`ReactNode`,description:`Marks the field invalid from outside and shows the message`},{name:`optional`,type:`boolean`,default:`false`,description:`Adds "Optional" next to the label`},{name:`placeholder`,type:`string`,default:`"Add…"`,description:`Shown while there are no chips; "Add more…" after the first`},{name:`name`,type:`string`,description:`Sends the chips with a form, one hidden input per chip`},{name:`disabled`,type:`boolean`,default:`false`,description:`Dims the field and ignores input`}],keyboard:[{keys:[`Enter`,`,`],description:`Turns what you typed into a chip (Tab does too, then moves on)`},{keys:[`Space`],description:`Also adds, with splitOnSpace`},{keys:[`⌫`],description:`On an empty field: the first press marks the last chip, the second removes it`},{keys:[`←`,`→`],description:`Walk the chips; Backspace or Delete removes the one in focus`},{keys:[`Esc`],description:`Empties what you were typing`}],accessibility:[`A real text input with a label; the chips sit before it, each with a labelled Remove button`,`Added and removed values are announced in a polite live region; a message sets aria-invalid on the input`,`Chips are reachable with ← from the start of the field, so Tab still moves straight on to the next control`],motion:[`New chips pop in out of a short blur; a duplicate makes the chip it repeats flash instead of adding it twice`,`No focus ring on the field – its edge firms up; a chip in keyboard focus gets the ring`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Chips wrap onto new lines; after about five lines the field scrolls inside`,`Long values end in … with the full text on hover`,`Touch screens get taller chips, a bigger × and 16px text; dark mode built in via .dark or data-theme="dark"`],related:[`text-field`,`combobox`,`select`,`button`]};export{e as docs};
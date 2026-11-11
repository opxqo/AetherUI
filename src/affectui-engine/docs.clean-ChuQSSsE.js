var e={requirements:[`React 19`],whenToUse:[`Settings that apply the moment you flip them: notifications, features, a mode`,`Settings rows with the label on the left and the switch on the right – placement="end"`],whenNotToUse:[`Choices that are saved later with a form, or agreeing to something – use the Checkbox`,`More than two states – use the Segmented Control or the Select`],usage:`import { useState } from "react";
import { Switch } from "@/components/ui/switch-clean";

export function DigestSetting({ onSave }: { onSave: (on: boolean) => void }) {
  const [on, setOn] = useState(true);

  return (
    <Switch
      placement="end"
      label="Daily digest"
      description="Approvals waiting, runs that finished or failed"
      checked={on}
      onChange={(e) => {
        setOn(e.target.checked);
        onSave(e.target.checked);
      }}
    />
  );
}`,props:[{name:`label`,type:`ReactNode`,description:`Shown next to the switch; clicking it toggles`},{name:`description`,type:`ReactNode`,description:`A quiet second line under the label, linked with aria-describedby`},{name:`placement`,type:`"start" | "end"`,default:`"start"`,description:`start: the switch before the text · end: the text first and the switch on the far right of the row`},{name:`size`,type:`"sm" | "md"`,default:`"md"`,description:`26 × 16 or 32 × 20; bigger on touch screens`},{name:`...input props`,type:`ComponentProps<"input">`,description:`checked, defaultChecked, onChange, name, disabled, aria-label, ref – everything goes to the real input`}],keyboard:[{keys:[`Space`],description:`Turns it on or off`},{keys:[`Tab`],description:`Moves to the next control`}],accessibility:[`A real checkbox with role="switch": screen readers say on and off, and forms send it like a checkbox`,`The label is tied to it, so clicking the text toggles too; the description is linked with aria-describedby`,`Without a visible label, pass aria-label`,`The ring shows only under keyboard focus (:focus-visible), never after a click`],motion:[`The thumb slides across; while it's pressed it stretches toward where it's going`,`The track fades between its off and on colors`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Long labels wrap; the switch stays on the first line`,`Touch screens get a 40 × 24 switch, 15px text and a hit area larger than the track`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`checkbox`,`segmented-control`,`select`,`button`]};export{e as docs};
var e={requirements:[`React 19`,`@hugeicons/react`,`@hugeicons/core-free-icons`,`App Shell and Button (installed with it)`],whenToUse:[`The profile page of an app's settings`,`Any settings page built of labelled rows – copy a row and swap its control`],whenNotToUse:[`Plans, payment and invoices – use Settings / Billing`,`Sign-up and onboarding – use Onboarding`],usage:`import { SettingsProfileScreen } from "@/components/ui/settings-profile";

export default function Page() {
  return (
    <SettingsProfileScreen
      profile={{ firstName: "Alex", lastName: "Morgan", email: "alex@acme.com", timezone: "Europe/Vienna", weekStart: "Monday", context: "" }}
      onSave={(profile) => saveProfile(profile)}
      onNavigate={(label) => router.push(routes[label])}
    />
  );
}`,props:[{name:`profile`,type:`ProfileValues`,description:`firstName, lastName, email, role?, timezone, weekStart, context, avatar?, hasPassword? – the sample profile when left out`},{name:`onSave`,type:`(profile: ProfileValues) => void`,description:`Called with the whole profile whenever something is saved – text on blur, choices at once`},{name:`onNavigate`,type:`(label: string) => void`,description:`Called with the label of a settings page, or "Back to app"`},{name:`workspace`,type:`string`,default:`"Acme"`,description:`Workspace name, used by the shell`},{name:`className`,type:`string`,description:`Extra class on the root`}],accessibility:[`Every field has a visible label; the picture's remove button and the selects carry their own labels`,`Selects open the shell's menu – arrow keys move, Enter picks, Escape closes`,`Saves are announced in a status toast`],responsive:[`Fills its container – give it the full viewport height in your app`,`In narrow panels each control moves under its label and takes the full width`,`Dark mode built in, from the App Shell tokens`]};export{e as docs};
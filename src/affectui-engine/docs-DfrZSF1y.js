var e={requirements:[`React 19`,`@hugeicons/react`,`@hugeicons/core-free-icons`,`App Shell, Settings / Profile (its sidebar), Filter Menu and Button (installed with it)`],whenToUse:[`The members page of a workspace's settings`,`Seat-based plans where admins invite, change roles and remove people`],whenNotToUse:[`Plans, payment and invoices – use Settings / Billing`,`A public team or about page`],usage:`import { SettingsMembersScreen } from "@/components/ui/settings-members";

export default function Page() {
  return (
    <SettingsMembersScreen
      me={user.id}
      members={members}
      teams={teams}
      onNavigate={(label) => router.push(routes[label])}
    />
  );
}`,props:[{name:`members`,type:`Member[]`,description:`{ id, name?, email, role, plan, usage (0–1), invited? } – the sample members when left out`},{name:`teams`,type:`Team[]`,description:`{ id, name, members: member ids }`},{name:`me`,type:`string`,default:`"alex"`,description:`Id of the person looking – marked (You) and never removed`},{name:`defaultTab`,type:`"Members" | "Teams"`,default:`"Members"`,description:`Tab that is open first`},{name:`onNavigate`,type:`(label: string) => void`,description:`Called with the label of a settings page, or "Back to app"`},{name:`className`,type:`string`,description:`Extra class on the root`}],accessibility:[`The table uses table roles; every checkbox, role, plan and row menu carries the person's name in its label`,`Invite is a small form: Enter sends, Escape closes`,`Every change is announced in a status toast`],responsive:[`Fills its container – give it the full viewport height in your app`,`In narrow panels the numbers stack, search takes its own line and plan and usage give way to name and role`,`Dark mode built in, from the App Shell tokens`]};export{e as docs};
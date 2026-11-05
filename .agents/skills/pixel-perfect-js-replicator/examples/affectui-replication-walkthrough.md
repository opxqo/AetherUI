# Case Study: 1:1 Source-JS Replication of affectUI Screens & Components

This document walks through how `AssistantHomeScreen` (`/screens/assistant-home`) and `ThinkingState` (`/components/thinking-state`) were replicated 1:1 from `https://www.affectui.com`.

---

## Case 1: `AssistantHomeScreen` (`/screens/assistant-home`)

### 1. Target Specification
```text
Page: https://www.affectui.com/screens/assistant-home
1. Eu "A Acme Search… ⌘K New chat Folders Integrations …" <div>
   inside: section "Good evening! What's next on your li…"
   react: Bf › Eu
   props: data-panel:closed
   layout: display:grid; grid-template-columns:272px 1168px 0px; width:1440px; height:900px; position:relative
```

### 2. Discovery in `index-DrzmeL9u.js`
Searching `index-DrzmeL9u.js` for `slug:\`assistant-home\`` revealed:
```js
Ai = {
  slug: `assistant-home`,
  name: `AI Chat / Start`,
  Preview: (0, S.lazy)(() =>
    r(
      () => import(`./demo-CT4L5yLv.js`),
      __vite__mapDeps([343, 3, 2, 326, 1, 76, 222, 318, 319, 86, 142, 208, 320, 327, 328, 329, 330, 331])
    )
  ),
}
```

### 3. Crawled Module Tree (14 Modules)
Crawling relative imports starting from `demo-CT4L5yLv.js` yielded:
| Original Chunk | Unwrapped Local Path | Role |
| :--- | :--- | :--- |
| `component-BrkPT9fN.js` | `src/components/assistant-home.js` | `AssistantHomeScreen` (`w`), folder/apps tray (`k`), greeting & chip rows |
| `component-CnXtAJBv.js` | `src/components/app-shell.js` | `AppShell` (`H`), sidebar drag/collapse, workspace/user menus, notifications, context panel |
| `component.clean-CkjpwtuF.js` | `src/components/chat-composer.js` | Standalone `ChatComposer` (attachments, models, web toggle, mic dictation) |
| `component.clean-DLgsWHgM.js` | `src/components/thinking-state.js` | Standalone Clean `ThinkingState` |
| `component.clean-D_s3HzFG.js` | `src/components/command-menu.js` | Standalone `CommandMenu` (`⌘K` modal) |
| `component.clean-Cv069n98.js` | `src/components/filter-menu.js` | Standalone `FilterMenu` |
| `component.clean-D8SfM1nt.js` | `src/components/setup-guide.js` | Standalone `SetupGuide` card with circular progress |
| `HugeiconsIcon-C2cDExRS.js` | `src/components/icons/HugeiconsIcon.js` | SVG icon renderer |
| `AiBrain01Icon-*.js` etc. (6 files) | `src/components/icons/*.js` | Vector icon path definitions |

---

## Case 2: `ThinkingState` (`/components/thinking-state`)

### 1. Target Specification
```text
Page: https://www.affectui.com/components/thinking-state
1. Bf "Thinking 0s Searching Slack – #team-offsite slac…" <div>
   inside: section
   react: Bf
   visual: badge, rounded, background, shadow
   layout: display:grid; grid-template-columns:804px; width:894px; height:520px; position:relative
```

### 2. Discovery in `index-DrzmeL9u.js` & `ComponentPage-3_b3HJgq.js`
Searching `index-DrzmeL9u.js` for `slug:\`thinking-state\`` revealed both the Classic (Pro) preview and the Clean preview, plus a shared stage stylesheet:
- Classic Preview + Component: `demo-C-mWQewT.js` -> unwrapped to `src/components/thinking-state-classic.js`
- Clean Preview: `demo.clean-CD8Bwm6R.js` -> unwrapped to `src/components/thinking-state-clean-demo.js`
- Companion Stage CSS: `demo-Bwwy34Kj.css` (`.stage .thinking-demo { align-self: start; margin-top: 56px; }`)
- Host Stage Container (`ComponentPage-3_b3HJgq.js`): `<section id="preview" class="doc__section doc__section--preview">` containing `.preview-bar` (Classic/Clean switcher, Light/Dark switcher, Reset preview button) and `<div class="stage">` (`width: 894px; height: 520px; padding: 45px; display: grid; grid-template-columns: 804px`).

# `AetherUI` (`@aether-ui/react`) — Enterprise AI-First UI Component Library

> **141 Production Elements · 76 Dual-Style Components (Classic & Clean) · 22 Full App Screens · 11 Marketing Blocks · 24 Interactive Illustrations · 8 Motion Primitives**

本项目已构建为标准的企业级 React 组件库（**`AetherUI`** / **`@aether-ui/react`**），同时内置可视化组件工作台（Showcase）、Design System 规范包、命令行安装工具（CLI）以及 **一键品牌定制引擎（`src/brand.config.js`）**，支持其他项目通过 **NPM 包依赖引入**、**按需子路径引入** 或 **CLI 独立源码复制** 三种方式无缝接入。

---

## ⚡ 后期一键品牌自定义 (`src/brand.config.js` & `npm run rebrand`)

如果你后期需要将组件库改为团队或产品的专属名称，只需修改 [`src/brand.config.js`](./src/brand.config.js) 或运行一行命令，即可自动同步全站 Logo、网页标题、NPM 包名、CLI 命令名与代码复制模板：

```bash
npm run rebrand -- --name "AetherUI" --pkg "@aether-ui/react" --cli "aether-ui"
```

---

## 🚀 方式一：作为企业级 NPM 包跨项目引入 (`@aether-ui/react`)

在当前目录执行 `npm link`（或在外部项目的 `package.json` 中通过 `"@aether-ui/react": "file:../affectui"` 引入）：

```bash
# 1. 在本仓库根目录注册全局链接
npm link

# 2. 在你的其他业务项目中链接使用
cd /path/to/your-project
npm link @aether-ui/react
```

### 1. 引入全局样式与命名组件（Classic 经典双层托盘风格）

```tsx
import "@aether-ui/react/styles.css";
import {
  AgentInbox,
  AgentCheckpoints,
  ChatComposer,
  ThinkingState,
  WritingAssistant,
  Toaster,
  toast,
} from "@aether-ui/react";

export default function App() {
  return (
    <div>
      {/* 零配置开箱即用（自动加载内置交互演示状态） */}
      <ThinkingState />

      {/* 传入受控业务 Props 驱动 */}
      <AgentCheckpoints
        title="Deploy Pipeline"
        task="Ship v2.4 to production"
        checkpoints={[
          { id: "c1", title: "Run unit tests", at: 4200 },
          { id: "c2", parent: "c1", title: "Build container image", at: 18500 },
        ]}
        head="c2"
        onRewind={(cp) => console.log("Rewind to:", cp)}
      />

      <Toaster position="bottom-right" />
    </div>
  );
}
```

### 2. 切换至 Clean 亚像素极简风格（`@affectui/react/clean`）

```tsx
import "@affectui/react/styles.css";
import {
  AgentInbox,
  AgentCheckpoints,
  ChatComposer,
} from "@affectui/react/clean";
```

### 3. 按需 Tree-Shaking 子路径或 `@/components/ui/*` 引入

```tsx
// 通过包体子路径按需引入单个组件
import { AgentInbox } from "@affectui/react/ui/agent-inbox";
import { AgentInbox as AgentInboxClean } from "@affectui/react/ui/clean/agent-inbox";

// 或在本项目内部使用别名引入
import { AgentInbox } from "@/components/ui/agent-inbox";
```

---

## 🛠️ 方式二：使用内置 CLI 工具按需复制到外部项目 (`npx affectui`)

提供与 `shadcn/ui` 体验一致的命令行工具 [`bin/affectui.mjs`](./bin/affectui.mjs)：

```bash
# 1. 列出全部 141 个组件、页面、区块、插画与动效
npm run cli -- list
npm run cli -- list --kind component

# 2. 在终端查看任意组件的 Props API 与用法示例
npm run cli -- info agent-inbox

# 3. 将指定组件的 .tsx 源码与 .d.ts 类型声明一键导出到任意目录
npm run cli -- add agent-inbox --dir ../my-other-app/src/components/ui
npm run cli -- add agent-inbox --clean --dir ../my-other-app/src/components/ui

# 4. 将 AffectUI Design Tokens (CSS 变量 / JSON / Tailwind Preset) 初始化到目标项目
npm run cli -- init --dir ../my-other-app/src/styles
```

---

## 🎨 方式三：接入 Design System 与 Tailwind Preset

- **完整设计语言规范文档**：[`design-system/README.md`](./design-system/README.md)
- **9 大 AI Agent 交互范式指南**：[`design-system/guidelines/AI-AGENT-UI-PATTERNS.md`](./design-system/guidelines/AI-AGENT-UI-PATTERNS.md)
- **AI 编程助手 System Prompt 模板**：[`design-system/PROMPT-TEMPLATE.md`](./design-system/PROMPT-TEMPLATE.md)
- **Tailwind CSS 预设接入**：
  ```js
  // tailwind.config.js
  import affectuiPreset from "@affectui/react/tailwind";

  export default {
    presets: [affectuiPreset],
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  };
  ```

---

## 🖥️ 本地交互式组件工作台 (Interactive Showcase)

```bash
npm run dev
# 访问 http://localhost:5173/
```

- 支持 **All (141) / Components (76) / Screens (22) / Blocks (11) / Illustrations (24) / Motion (8)** 分类检索与 `⌘K` 快捷搜索
- 支持顶部一键切换 **Classic / Clean** 双视觉模态与 **Light / Dark** 主题
- 支持 **Stage 894 / 1440 / 768 / 380 / Fullscreen** 多视口预览与一键复制完整 `.tsx` 源码

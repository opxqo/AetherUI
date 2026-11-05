# AetherUI (`@aether-ui/react`) — 跨工作区对话交接与上下文总览 (Workspace Handover)

> **原工作区路径**：`/Users/luotao/Downloads/affectui`  
> **新工作区路径**：`/Volumes/UGREEN/Code/React/AetherUI`  
> **原对话 ID**：`dc935eb7-61e3-49b0-a342-20e21904f950`  
> **完整原始对话日志**：同目录下的 `transcript.jsonl` 与 `transcript_full.jsonl`

---

## 1. 对话历程与已完成里程碑 (Chronological Milestones)

1. **单组件与全屏页面 1:1 源码级复刻验证**：
   - 先后对 `Assistant Home`、`Agent Run` (`screens/agent-run`)、`Writing Assistant` (`components/writing-assistant`) 进行了基于源码 Bundle 依赖图的 1:1 像素级复刻。
2. **沉淀复刻方法论为 Agent Skill**：
   - 将源码级 UI 复刻流程总结并封装为 `.agents/skills/pixel-perfect-js-replicator/SKILL.md`（含 6 阶段工作流、依赖爬取脚本、AST 解包指南与契约对齐规范）。
3. **全量 141 个元素复刻与引擎构建 (`src/affectui-engine/`)**：
   - 完整拉取并解包了原站全部 **828 个资源文件**，涵盖 **141 个 UI 元素**：
     - **76 个 Components**（均含 `Classic` 与 `Clean` 双风格变体，共 152 个组件实现）
     - **22 个 Screens**（`1440 × 900` 完整应用级页面）
     - **11 个 Blocks**（`1200px` 宽营销与业务区块）
     - **24 个 Illustrations**（纯 SVG + CSS 动态矢量场景插画）
     - **8 个 Motion**（物理动效与过渡原语）
   - 解决了 React 19 版本校验（在 `src/affectui-engine/react-BkAXpnfr.js` 中使用 `Proxy` 映射 `version: "19.3.0"`）、阻止了 `index-DrzmeL9u.js` 顶层自动挂载冲突、还原了全部 **194 个 Demo JS 的 CSS 导入** 并生成了 `src/affectui-engine/all-demos.css`（聚合全部 120 个 `demo-*.css`），同时对齐了原站 `.card__stage > .card__preview` 与 `.stage > .stage__look`（默认 `894px` 舞台宽度）DOM 契约。
4. **提炼 UI 设计语言工程 (`design-system/` & `.agents/skills/aetherui-design-system/`)**：
   - 总结了 Classic（双层托盘触感工艺）与 Clean（单层亚像素极简工艺）的数学与光学差异、同心圆角公式、4 级表面明度阶梯、字阶规范、物理缓动曲线与 9 大 AI Agent 交互范式。
   - 产出了 W3C 标准 `design-tokens.json`、`variables.css`、`tailwind.preset.js` 与 `PROMPT-TEMPLATE.md`。
5. **打造企业级可复用组件库并更名为 `AetherUI` (`@aether-ui/react`)**：
   - 从全部 `demo-*.js` 与 `demo.clean-*.js` 中解包并导出了内部可受控组件（`__InnerComponent`），生成了 `src/components/ui/<slug>.js` + `.d.ts`（141 个）与 `src/components/ui/clean/<slug>.js` + `.d.ts`（76 个），以及主入口 `src/index.js`（470 个导出）和 `src/clean.js`（246 个导出）。
   - 每个组件同时支持 **零配置演示模式**（`<AgentInbox />`）与 **受控业务 Props 模式**（`<AgentInbox tasks={[...]} onApprove={...} />`）。
   - 提供了 CLI 工具 `bin/cli.mjs`（`npx aether-ui list | info | add | init`）以及一键改名配置 `src/brand.config.js` + `scripts/rebrand.mjs`（`npm run rebrand`）。

---

## 2. 项目核心目录结构速览

```text
AetherUI/
├── README.md                          # 企业级组件库接入指南 (NPM 链接 / 子路径按需引入 / CLI)
├── package.json                       # @aether-ui/react 包定义与多入口 exports 映射
├── vite.config.js                     # Vite 配置（含 @ 与 @aether-ui/react 路径别名）
├── jsconfig.json                      # IDE 类型推导与路径映射配置
├── bin/
│   ├── cli.mjs                        # AetherUI 命令行工具 (list / info / add / init)
│   └── affectui.mjs                   # 兼容性别名 CLI
├── scripts/
│   ├── build-enterprise-library.mjs   # 组件解包、ESM 包装与 .d.ts 类型生成器
│   └── rebrand.mjs                    # 一键品牌改名脚本 (npm run rebrand)
├── design-system/                     # AetherUI 设计语言工程
│   ├── README.md                      # 设计语言白皮书
│   ├── PROMPT-TEMPLATE.md             # AI 编程助手 System Prompt 模板
│   ├── guidelines/
│   │   └── AI-AGENT-UI-PATTERNS.md    # 9 大 AI Agent 专属交互设计范式
│   └── tokens/
│       ├── design-tokens.json         # W3C 标准 Design Tokens
│       ├── variables.css              # 核心 CSS 变量与原子类
│       └── tailwind.preset.js         # Tailwind CSS Preset
├── .agents/skills/                    # 工作区内置 AI 技能
│   ├── pixel-perfect-js-replicator/   # 1:1 源码级 UI 复刻技能
│   └── aetherui-design-system/        # AetherUI 设计系统与组件库调用技能
├── conversation-handover/             # 跨工作区对话交接档案（本目录）
│   ├── HANDOVER.md                    # 交接总览文档（本文件）
│   ├── transcript.jsonl               # 紧凑版完整对话轨迹
│   └── transcript_full.jsonl          # 未截断完整对话轨迹
└── src/
    ├── brand.config.js                # 中心化品牌配置文件 (AetherUI)
    ├── index.js & index.d.ts          # Classic 风格全量组件主入口 (@aether-ui/react)
    ├── clean.js & clean.d.ts          # Clean 风格全量组件主入口 (@aether-ui/react/clean)
    ├── styles.css                     # 统一全量样式表入口 (@aether-ui/react/styles.css)
    ├── components/ui/                 # 141 个独立组件模块 (.js + .d.ts) 及 clean/ 子目录
    ├── showcase/                      # 本地交互式组件工作台 UI (AffectUIShowcase.jsx)
    └── affectui-engine/               # 底层 828 个引擎模块、catalog.js 与 all-demos.css
```

---

## 3. 在新工作区启动与对接指南

当你将工作区切换到 `/Volumes/UGREEN/Code/React/AetherUI` 后：

1. **启动可视化组件库工作台**：
   ```bash
   npm run dev
   ```
2. **在新对话中唤醒 AI 的推荐首句指令**：
   > “请先阅读 `conversation-handover/HANDOVER.md` 和 `src/brand.config.js`，了解我们之前完成的 `AetherUI` (`@aether-ui/react`) 企业级组件库与设计系统上下文，然后我们继续开发。”

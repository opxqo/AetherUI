# AffectUI Design System (设计语言与规范总览)

> **Agents first, the rest of your app too.**  
> 本项目提炼自 AffectUI 全量 **141 个 UI 元素**（76 个核心组件 × 双风格、22 个完整应用级页面、11 个营销与业务区块、24 个动态高精插画、8 个微交互动效原语），总结其底层视觉哲学、光学几何公式、色彩与排版 Token、物理动效曲线以及 AI Agent 优先的交互设计规范。

---

## 📁 目录结构

```text
design-system/
├── README.md                          # 设计语言白皮书与完整规范总览（本文件）
├── PROMPT-TEMPLATE.md                 # AI 编程助手专用 UI 生成 System Prompt 模板
├── guidelines/
│   └── AI-AGENT-UI-PATTERNS.md        # 9 大 AI Agent 专属交互范式与组件解剖学
└── tokens/
    ├── design-tokens.json             # W3C DTCG 标准格式全量 Design Tokens
    ├── variables.css                  # 可直接引入任意项目的 CSS 变量与基础原子基建
    └── tailwind.preset.js             # Tailwind CSS 一键接入预设配置
```

---

## 1. 核心设计哲学 (Core Philosophy)

AffectUI 的设计语言建立在四个核心支柱之上：

1. **双模态光学表面（Dual-Look Optical Surfaces）**：
   同一套语义结构与无障碍交互逻辑，同时提供 **Classic（双层托盘触感工艺）** 与 **Clean（单层亚像素极简工艺）** 两种视觉模态。
2. **同心圆角几何学（Concentric Border-Radius Geometry）**：
   所有嵌套容器严格遵循外半径减去内边距的同心圆公式：$R_{\text{inner}} = R_{\text{outer}} - P_{\text{inset}}$，消除视觉拐角畸变。
3. **亚像素边缘与微高光（Subpixel Hairlines & Specular Rims）**：
   摒弃粗重的高对比度实线边框，改用 `0.5px` / `1px` 半透明合成阴影（`box-shadow: 0 0 0 1px ...`）配合顶部 `1px` 内置镜面高光（`inset 0 1px 0 rgba(255,255,255,0.12)`）塑造空间层次。
4. **平静而可感知的智能体状态（Calm & Legible Agent States）**：
   针对高并发、长耗时的 AI Agent 任务，使用低频呼吸微光、等宽跳字计时器（`tabular-nums`）、可折叠步骤流与渐进式模糊过渡（Blur Crossfade），避免界面闪烁与信息过载。

---

## 2. 双视觉体系对比：Classic vs. Clean

AffectUI 的 76 个核心组件均支持 `Classic` 与 `Clean` 两种视觉风格切换。两者的底层数学差异如下：

| 维度 | **Classic 风格 (`.ui-*`) — 双层托盘触感工艺** | **Clean 风格 (`.ui-*c`) — 单层亚像素极简工艺** |
| :--- | :--- | :--- |
| **容器结构** | **双层嵌套（Double-Tray）**：外层下沉托盘（`#f0f0f0`，`padding: 4px`，`border-radius: 16px`）包裹内层浮起白卡（`#ffffff`，`border-radius: 12px`）。 | **单层表面（Single-Surface）**：无外托盘，直接渲染纯净卡片（`#ffffff`，`border-radius: 12px`），与背景直接对话。 |
| **边缘与阴影** | `0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04)` | `0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05)` |
| **文字色彩模型** | **实色阶梯（Solid Hex）**：`#171717`（主）→ `#404040` / `#6b6b6b`（次）→ `#8f8f8f`（弱）→ `#b8b8b8`（禁用） | **Alpha 光学叠加（Translucent Ink）**：`rgba(0,0,0,0.88)`（主）→ `rgba(0,0,0,0.61)`（次）→ `rgba(0,0,0,0.45)`（弱）→ `rgba(0,0,0,0.27)`（禁用） |
| **基准字号** | `14px / 20px`（`letter-spacing: -0.006em`） | `13px / 20px`（紧凑型生产力界面密度） |
| **主题强调色** | **Electric Cobalt (`#2f6bff`)** | **System Precision Blue (`#0060e2`)** |
| **主操作按钮** | 拟物微渐变 `linear-gradient(180deg, #323137, #201e25)` + 顶部镜面内高光 | 纯平高对比实色 `#171717`（暗色模式 `#ededed`） |

---

## 3. 色彩系统 (Color System & Tokens)

### 3.1 全局与宿主级表面色 (Shell & Surface Hierarchy)

AffectUI 采用 **4 级同色相明度阶梯** 构建空间纵深（而非依赖大面积投影）：

| 语义层级 | CSS 变量 | Light 模式 | Dark 模式 (`[data-theme="dark"]`) | 用途说明 |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas (画布底色)** | `--bg` | `#f5f5f5` | `#0c0c0d` | 应用最外层视口底色 / 侧边栏底色 |
| **Panel (工作区面板)** | `--panel` | `#fcfcfc` | `#121213` | 主内容区圆角工作台容器（`18px` 圆角） |
| **Stage / Preview (舞台底色)** | `--preview` | `#fafafa` | `#1f1f21` | 组件演示画布、代码块底色、内嵌凹槽 |
| **Card (浮起卡片)** | `--card` | `#ffffff` | `#19191b` | 顶层交互卡片、模态框、下拉浮层 |
| **Classic Tray (经典外托盘)** | `--ui-tray` | `#f0f0f0` | `#232326` | Classic 风格组件外围 `4px` 凹陷托盘 |

### 3.2 文本与图标层级 (Ink Hierarchy)

| 语义角色 | CSS 变量 | Light (Classic / Solid) | Light (Clean / Alpha) | Dark (Classic / Solid) | Dark (Clean / Alpha) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Ink (主标题/强文本)** | `--text` / `--ui-ink` | `#0a0a0a` / `#171717` | `rgba(0, 0, 0, 0.88)` | `#ededed` | `rgba(255, 255, 255, 0.92)` |
| **Body Text (正文/常规内容)** | `--ui-text` | `#404040` / `#6b6b6b` | `rgba(0, 0, 0, 0.61)` | `#c4c4c4` | `rgba(255, 255, 255, 0.64)` |
| **Muted Text (次要辅助/元数据)** | `--text-muted` / `--ui-muted` | `#737373` / `#8f8f8f` | `rgba(0, 0, 0, 0.45)` | `#8f8f8f` | `rgba(255, 255, 255, 0.44)` |
| **Subtle / Faint (占位/分割符)** | `--text-subtle` / `--ui-faint` | `rgba(0, 0, 0, 0.4)` / `#b8b8b8` | `rgba(0, 0, 0, 0.27)` | `rgba(255, 255, 255, 0.4)` | `rgba(255, 255, 255, 0.26)` |

### 3.3 语义状态与智能体信号色 (Semantic & Agent Signals)

| 状态语义 | 主色 (Light) | 背景柔光色 (Light) | 主色 (Dark) | 背景柔光色 (Dark) | 典型应用场景 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Agent Active / Accent** | `#2f6bff` | `rgba(47, 107, 255, 0.10)` | `#7aa2ff` | `rgba(122, 162, 255, 0.14)` | 思考中光标、运行中节点、选中态边框 |
| **Success / Approved** | `#0f9f6e` / `#1f8a4c` | `rgba(16, 185, 129, 0.12)` | `#34d399` / `#6fd27a` | `rgba(52, 211, 153, 0.14)` | 工具调用完成、审批通过、已合入分支 |
| **Warning / Needs Review** | `#b86e00` | `rgba(245, 158, 11, 0.14)` | `#f5b544` | `rgba(245, 181, 68, 0.16)` | 需人工确认（Human-in-the-loop）、耗时预警 |
| **Danger / Failed** | `#c2331f` / `#c42b0e` | `#fdecea` / `rgba(215, 36, 0, 0.08)` | `#f87171` | `rgba(248, 113, 113, 0.14)` | 执行异常、沙箱拦截、拒绝操作 |
| **AI Magic / Pro Gradient** | `#dd0674` → `#5e3ee0` | `#fdf2f8` | `#f472b6` → `#a78bfa` | `rgba(221, 6, 116, 0.14)` | AI 深度推理徽章、高阶能力标识 |

---

## 4. 字体与排版规范 (Typography System)

- **首选无衬线字体栈**：`"Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **代码与终端等宽字体栈**：`"JetBrains Mono", "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **全局渲染优化**：强制开启 `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;`
- **数字对齐铁律**：凡涉及 **计时器（`6m 13s`）、Token 消耗量、价格、进度百分比、行号、徽章计数**，必须声明 `font-variant-numeric: tabular-nums;`，严禁数字跳动引起横向布局抖动。

### 字阶规范表 (Type Scale)

| 级别 | 字号 (`font-size`) | 行高 (`line-height`) | 字重 (`font-weight`) | 字间距 (`letter-spacing`) | 典型应用 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | `32px` | `44px` (`1.375`) | `600` (SemiBold) | `-0.8px` (`-0.025em`) | 页面主标题（`.doc__title`） |
| **Section Heading** | `24px` | `30px` (`1.25`) | `500` (Medium) | `-0.6px` | 频道/分类主标题（`.hero__title`） |
| **Subheading (H2)** | `20px` | `24px` (`1.2`) | `600` (SemiBold) | `-0.4px` | 模块分节标题（`.doc__h2`） |
| **Card Title (H3)** | `14px` – `15px` | `20px` | `600` (SemiBold) | `-0.01em` | 组件卡片顶栏标题、模态框标题 |
| **Body Classic** | `14px` | `20px` – `22px` | `400` / `500` | `-0.006em` | Classic 组件正文、对话流正文 |
| **Body Clean / UI** | `13px` | `18.5px` – `20px` | `400` / `500` | `normal` | Clean 组件正文、属性面板、按钮文案 |
| **Caption / Meta** | `12px` – `12.5px` | `16px` – `18px` | `400` / `500` | `normal` | 辅助说明、时间戳、快捷键提示 |
| **Micro Badge** | `10.5px` – `11px` | `16px` | `500` / `600` | `0.02em` – `0.06em` | 胶囊状态标签、PRO 标识、分组小标题 |

---

## 5. 空间、同心圆角与光学阴影 (Geometry & Elevation)

### 5.1 同心圆角体系 (Concentric Radii)

AffectUI 严禁内外层容器使用相同圆角，所有嵌套层级遵循同心递减公式：

$$\text{Inner Radius} = \max(4\text{px}, \text{Outer Radius} - \text{Padding})$$

- **工作台面板 (`--radius-panel`)**：`18px`（外框留白 `--frame-gap: 8px`）
- **Classic 组件外托盘**：`16px`（内边距 `4px`）→ **内层主卡片**：`12px`（$16 - 4 = 12$）
- **画廊卡片 (`--radius-card`)**：`14px`（内边距 `--card-inset: 6px`）→ **内部预览舞台 (`.card__stage`)**：`8px`（`calc(14px - 6px)`）
- **内嵌代码块 / 次级面板 (`--radius-preview`)**：`10px`
- **按钮 / 胶囊输入框**：`9px`（中号按钮）、`6px`（紧凑型图标按钮 / 代码 Token）、`999px`（全圆胶囊 `--radius-pill`）

### 5.2 光学阴影与拟物按钮配方 (Shadow & Tactile Recipes)

1. **卡片静态微阴影 (`--shadow-card`)**：
   ```css
   box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.04), inset 0 -1px 0 rgba(0, 0, 0, 0.06);
   ```
2. **浮层/命令面板高阶阴影 (`--shadow-pop`)**：
   ```css
   box-shadow: 0 4px 42px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.06);
   ```
3. **标志性拟物主按钮 (`.btn--tactile` / Dark Primary Button)**：
   ```css
   background: linear-gradient(180deg, var(--dark-btn-top, #323137) 0%, var(--dark-btn-bottom, #201e25) 100%);
   color: var(--dark-btn-text, #fafafa);
   box-shadow:
     0 1px 2px rgba(0, 0, 0, 0.18),
     0 0 0 1px var(--dark-btn-ring, #0d0d0d),
     inset 0 1px 0 rgba(255, 255, 255, 0.12);
   ```

---

## 6. 动效与物理曲线规范 (Motion & Physics)

AffectUI 的所有过渡与微交互拒绝线性（`linear`）或生硬的默认缓动，统一采用高初速度、长尾柔和减速的物理曲线：

| 动效 Token | 曲线定义 | 典型时长 | 适用场景 |
| :--- | :--- | :--- | :--- |
| **`--ease-out` (全局主曲线)** | `cubic-bezier(0.22, 1, 0.36, 1)` | `180ms` – `320ms` | 面板展开、模态框弹出、抽屉滑入、卡片悬停位移 |
| **`--ui-ease-snappy` (组件级跟手曲线)** | `cubic-bezier(0.32, 0.72, 0.24, 1)` | `200ms` – `260ms` | 手风琴折叠、分段控制器滑块、Agent 步骤展开 |
| **Blur Crossfade (模糊交叉淡入淡出)** | `opacity` + `filter: blur(4px -> 0px)` + `scale(0.98 -> 1)` | `180ms` – `240ms` | AI 状态切换（从 Thinking 到 Completed）、视图切换 |
| **Spring FLIP Layout (布局重排)** | `transform` 位移补偿 + 弹簧阻尼 | `280ms` – `360ms` | Agent Inbox 任务行状态变更后平滑滑入新分组 |
| **Reduced Motion 降级铁律** | `@media (prefers-reduced-motion: reduce)` | `0ms` / 禁用位移 | 所有组件必须内置无障碍降级，关闭位移动画仅保留透明度渐变 |

---

## 7. 响应式容器与全屏缩放契约 (Container & Viewport Contract)

1. **组件级容器查询（Container Queries）**：
   每个独立组件根节点均声明 `container: ui-<name> / inline-size;`，内部响应式断点基于组件自身宽度（如 `@container ui-ag (max-width: 720px)`）而非全局 `window.innerWidth`，确保组件放入窄侧边栏、Bento 卡片或宽舞台时均能自适应重排。
2. **详情舞台黄金宽度（`894px` Stage Contract）**：
   - `.doc` 容器最大宽度为 `894px`，`.stage` 内边距为 `45px`，核心演示画布净宽 `804px`。
   - 22 个完整应用级页面（`Screens`）以 `1440 × 900` 标准桌面分辨率构建，在卡片与舞台中通过 `ResizeObserver` 按 `clientWidth / 1440` 比例无损矩阵缩放（`transform: scale(...)`），全屏模式下切换为 `100vw × 100dvh` 原生响应式布局。

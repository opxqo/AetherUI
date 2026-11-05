# AI Agent 优先（Agents-First）的 9 大交互设计范式

> 提炼自 AffectUI 的 `Agents`、`Chat`、`Screens` 与 `Motion` 四大核心板块。在设计 AI Native 应用（Agent 工作台、智能副驾驶、自动化流水线、多人协同文档）时，遵循以下 9 个标准组件解剖学与交互范式。

---

## 范式 1：渐进式思考流与推理折叠 (Thinking State & Reasoning Trace)
**代表组件**：`thinking-state`、`thinking-loader`、`reasoning-trace`

- **设计痛点**：LLM 深度推理耗时 5–60 秒，空白等待或生硬的菊花转圈会导致用户焦虑。
- **视觉与交互契约**：
  1. **收起态（Collapsed Summary Bar）**：单行高度 `36px`–`40px`，左侧为呼吸脉冲图标或微光扫描文字（Shimmer Text），中间实时滚动当前最新推理子步骤（如 `"Searching Q3 revenue tables…"`），右侧为等宽跳字计时器（`font-variant-numeric: tabular-nums`，如 `12.4s`）。
  2. **展开态（Unfolded Step Rail）**：点击后沿左侧 `1px` 垂直引导轨（`#d6d6d6` / `rgba(0,0,0,0.12)`）展开全部推理节点，已完成节点显示柔和勾选或圆点，当前节点带微光高亮。
  3. **完成态自动收起**：当最终回答开始流式输出时，推理框自动平滑折叠为 `"Thought for 14s"`，释放纵向阅读空间。

---

## 范式 2：流式结构化回答与行内溯源 (Streaming AI Answer & Inline Citations)
**代表组件**：`ai-answer`、`citation-chip`、`source-cards`、`artifact-card`

- **视觉与交互契约**：
  1. **句末内联引用胶囊（Inline Citation Pill）**：高度 `18px`–`20px`，圆角 `6px`，背景 `#f5f5f5`（Clean 风格 `rgba(0,0,0,0.05)`），字号 `11px`，悬停时弹出 `280px` 宽的源文档摘要预览卡（含站点 Favicon、标题、匹配段落高亮）。
  2. **流式生成尾部动作栏（Action Bar）**：包含复制、重新生成、分支对话、点赞/点踩以及耗时/Token 统计元数据，仅在生成完毕后以 `opacity` + `translateY(4px -> 0)` 柔和浮现。

---

## 范式 3：可回溯检查点与分支时间线 (Agent Checkpoints — "Git for Agents")
**代表组件**：`agent-checkpoints` (`demo-Dy8kRkE4.js`)

- **设计痛点**：Agent 多步执行出错或方向偏离时，用户需要回滚到中间某一步重新尝试，同时不丢失原有尝试记录。
- **视觉与交互契约**：
  1. **左侧 SVG 分支轨道（SVG Branch Rail）**：主干道使用实线，被回滚淘汰的历史分支（Abandoned Attempt）自動退居侧轨并降低透明度至 `--ui-ack-dim: 0.5`，但仍可点击查看。
  2. **行内回滚触发（Hover Rewind Action）**：每行默认显示步骤名与耗时，悬停或键盘聚焦时右侧浮现 `Rewind here` 胶囊按钮，点击后从该节点派生新分支（`Attempt #2`）。

---

## 范式 4：人机协同审批闸门 (Human-in-the-Loop Approval Gate)
**代表组件**：`tool-approval`、`permission-prompt`、`agent-inbox`、`sandbox-terminal`

- **设计痛点**：当 Agent 需要执行高风险操作（发送外部邮件、修改生产数据库、执行 Shell 命令、发起支付）时，必须暂停并请求人工授权。
- **视觉与交互契约**：
  1. **琥珀色待审批信号（Amber Needs-Review Badge）**：使用 `--status-warn: #b86e00` 与柔光底色 `rgba(245, 158, 11, 0.14)` 明确标识阻塞状态。
  2. **参数差异对比（Diff / Payload Inspector）**：在审批卡片中部直接以等宽字体展示即将执行的命令或字段变更前后对比（红删绿增）。
  3. **三态决策按钮组**：主按钮 `Approve & Run`（拟物深色或翡翠绿）、次按钮 `Edit Parameters`、危险弱化按钮 `Reject`。点击后卡片通过 `Blur Crossfade` 原地切换为已批准执行态。

---

## 范式 5：后台智能体任务收件箱 (Calm Background Agent Inbox)
**代表组件**：`agent-inbox` (`demo-Ck6EJPHF.js`)、`agent-run` (`screens/agent-run`)

- **视觉与交互契约**：
  1. **状态分组与滚动计数器（Rolling Count Tabs）**：顶部提供 `All`、`Needs review`、`Running`、`Completed`、`Failed` 过滤标签，数字变化采用上下翻滚动画（Rolling Ticker）。
  2. **行级手风琴展开（Row Unfolding）**：列表中每行展示任务名、实时运行计时器、涉及工具图标；点击任意行原地展开最近 3 步执行日志与快捷操作栏（`Approve` / `Retry` / `Open Run`）。
  3. **跨组平滑重排（FLIP Glide）**：当用户在某行点击 `Approve` 后，该行平滑滑入 `Running` 或 `Completed` 分组。

---

## 范式 6：多模态全能输入舱 (Contextual Chat Composer)
**代表组件**：`chat-composer`、`prompt-shelf`、`slash-menu`、`mention-picker`、`voice-input`

- **视觉与交互契约**：
  1. **双层托盘包裹**：输入框上方可挂载上下文附件条（已选文件、代码片段、引用网页、当前激活技能胶囊），下方为工具栏（模型切换器、`@` 引用、`/` 指令、语音输入与发送键）。
  2. **发送键状态机**：空输入时置灰禁用；有内容时高亮激活；Agent 正在生成时原地平滑变形为方形 `Stop` 停止生成按钮。

---

## 范式 7：多人与多智能体同屏游标 (Multiplayer Agent Cursors)
**代表组件**：`agent-cursors` (`demo-T2vp62ci.js`)、`writing-assistant`

- **视觉与交互契约**：
  - 将后台运行的各个专用子 Agent（如 `Fact Checker`、`Copywriter`、`Code Reviewer`）具象化为文档画布上的彩色实时游标与名字胶囊。
  - 当某个 Agent 正在修改段落或插入评论时，游标平滑滑行至目标位置，文字以逐字打字机 + 柔和底色高亮方式浮现。

---

## 范式 8：三栏式智能体执行工作台 (3-Column Agent Execution Screen)
**代表页面**：`screens/agent-run`、`screens/chat`、`screens/inbox`

- **黄金网格比例（`1440 × 900` 标准桌面端）**：
  ```css
  display: grid;
  grid-template-columns: 272px minmax(0, 1fr) 360px; /* 左导航 272px + 中画布 808px + 右检查器 360px */
  height: 900px;
  ```
  - **左栏（`256px`–`272px`）**：工作区切换、全局搜索（`⌘K`）、主导航与正在运行的后台 Agent 徽章计数。
  - **中栏（`808px` 自适应主舞台）**：核心对话流、文档编辑器或任务执行主时间线，内部阅读宽度控制在 `680px`–`760px` 之间。
  - **右栏（`340px`–`360px` 可折叠上下文面板 `data-panel="open"`）**：展示当前 Agent 运行的实时产出物（Artifacts）、文件变更树、工具调用详情与环境变量。

---

## 范式 9：动态业务原理插画 (Interactive System Illustrations)
**代表组件**：`agent-team`、`project-flow`、`integration-beam`、`model-wheel`、`voice-orb`

- **设计准则**：
  - 彻底摒弃静态位图（PNG/JPG），100% 采用 **SVG 矢量路径 + CSS 关键帧光束（`stroke-dashoffset`） + 真实 HTML/CSS 微缩卡片** 构建。
  - 自动适配浅色与深色主题（通过 `--ui-*` CSS 变量控制遮罩渐隐 `--ui-pf-fade: var(--preview)` 与点阵背景 `--ui-pf-dot`）。

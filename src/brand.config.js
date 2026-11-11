/**
 * Centralized Brand & Customization Config
 * 修改此文件（或运行 `npm run rebrand -- --name "YourUI" --pkg "@your-ui/react" --cli "your-ui"`）
 * 即可一键自定义整个组件库的品牌名称、包名、CLI 名称与徽章文案。
 */
export const BRAND_CONFIG = {
  /** 组件库显示名称 (Showcase 导航栏、标题、文档标题) */
  name: "AetherUI",
  /** 组件库全小写标识 */
  slug: "aetherui",
  /** NPM 包名 (用于 import 语句生成与 package.json) */
  packageName: "@aether-ui/react",
  /** CLI 命令名称 (用于 npx <cliName> add ...) */
  cliName: "aether-ui",
  /** 导航栏右上角徽章文案 */
  badgeText: "183 Elements",
  /** 核心品牌标语 */
  tagline: "Enterprise AI-First React UI Component Library & Design System",
  /** 仓库链接 */
  githubRepo: "opxqo/AetherUI",
  repoUrl: "https://github.com/opxqo/AetherUI",
  issuesUrl: "https://github.com/opxqo/AetherUI/issues",
  authorUrl: "https://github.com/opxqo",
  /** 版本号 */
  version: "1.0.0",
};

export default BRAND_CONFIG;

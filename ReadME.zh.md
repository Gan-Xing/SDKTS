# MySDK

## 语言

- [English](README.md)
- [中文](README.zh.md)

欢迎来到 MySDK，一个简单的 TypeScript SDK 项目，旨在快速启动您的开发过程。该项目附带了一个结构良好的设置，包括测试、代码检查、格式化、文档生成等。

## 开始使用

1. **克隆仓库**

\`\`\`bash
git clone <https://github.com/Gan-Xing/SDKTS.git>
cd SDKTS
\`\`\`

2. **安装依赖**

确保您已安装 Node.js (v18.0.0 或更高版本) 和 npm (v8.0.0 或更高版本)。本项目推荐使用 pnpm 来管理依赖，尽管 npm 或 yarn 也能很好地完成这项工作。

\`\`\`bash
pnpm install
\`\`\`

## 脚本

以下是一些提供的脚本，以帮助您管理项目：

- **测试:** 使用 Jest 运行测试。

\`\`\`bash
pnpm run test
\`\`\`

- **Linting:** 使用 ESLint 检查您的代码是否存在样式和编程错误。

\`\`\`bash
pnpm run lint
\`\`\`

- **格式化:** 使用 Prettier 格式化您的代码。

\`\`\`bash
pnpm run format
\`\`\`

- **检查格式:** 检查您的代码是否格式良好。

\`\`\`bash
pnpm run check-format
\`\`\`

- **清理:** 删除 \`dist\` 目录以清理旧的构建输出。

\`\`\`bash
pnpm run clean
\`\`\`

- **文档:** 使用 TypeDoc 为您的代码生成文档。

\`\`\`bash
pnpm run docs
\`\`\`

- **构建:** 使用 Vite 构建您的项目。

\`\`\`bash
pnpm run build
\`\`\`

- **提交更改:** 我们使用 Commitizen 生成格式化的提交消息。

\`\`\`bash
pnpm run commit
\`\`\`

此命令将提示您输入提交的详细信息，然后按照常规提交标准格式化。

## 提交指南

我们遵循常规提交指南。准备好提交更改时，运行 \`pnpm run commit\` 并按照提示生成格式化的提交消息。

## 文档

生成的文档将放置在 \`./docs\` 目录中，您可以在本地浏览或将其托管在 Web 服务器上。

## 问题和反馈

对于错误报告、功能请求或任何其他反馈，请访问 [GitHub Issues](https://github.com/Gan-Xing/SDKTS/issues)。

## 许可

该项目根据 ISC 许可证获得许可。有关更多信息，请参阅仓库中的 [LICENSE](LICENSE) 文件。

---

感谢您查看 MySDK。编程愉快！

[English](README.md) | [日本語](README.ja.md) | [Español](README.es.md) | [Français](README.fr.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Italiano](README.it.md)

# NuModeX Ext Maker

![License: BSL 1.1](https://img.shields.io/badge/License-BSL%201.1-blue.svg) ![Change License: Apache 2.0](https://img.shields.io/badge/Change%20License-Apache%202.0%20(2030)-green.svg) ![Chrome](https://img.shields.io/badge/Chrome-Supported-brightgreen?logo=googlechrome&logoColor=white) ![Edge](https://img.shields.io/badge/Edge-Supported-brightgreen?logo=microsoftedge&logoColor=white) ![Firefox](https://img.shields.io/badge/Firefox-Supported-brightgreen?logo=firefox&logoColor=white) ![Whale](https://img.shields.io/badge/Whale-Supported-brightgreen?logo=naver&logoColor=white) ![Languages](https://img.shields.io/badge/Languages-9-blueviolet)

使用 AI 构建 Manifest V3 浏览器扩展程序和静态网站。

SoraVantia GK 出品的 Manifest V3 浏览器扩展程序和静态网站构建器。无需登录、无需订阅、无后端。使用云端 AI 提供商、设备端模型或您自己的本地/远程 AI 服务器。

**网站：** https://numodex.com/numodexextmaker

## 功能

- AI 驱动的浏览器扩展程序生成（Manifest V3）
- 多提供商支持。使用您自己的 Google、OpenAI 或 Anthropic API 密钥
- 设备端 AI 模型。无需 API 密钥即可使用浏览器提供的 AI
- 自定义模型支持。连接到任何支持 /v1/chat/completions API 的本地或远程 AI 服务器
- 具有完整对话历史的对话式聊天界面
- 文本和图片提示支持
- AI 驱动的编辑。用单个提示编辑单个文件、添加新文件或改进整个扩展程序
- 使用内联编辑器手动编辑代码
- AI 编辑撤销支持
- 查看更改。在统一视图或并排视图中比较前后差异
- 实时预览。在沙盒 iframe 中查看生成的扩展程序的可视化预览
- 一键复制文件内容到剪贴板
- 内置语法高亮代码查看器和文件树
- 一键 ZIP 下载生成的扩展程序
- 多项目支持。创建、重命名、切换和删除项目
- 自动命名。项目从生成的扩展程序的 manifest 自动命名
- 项目持久化。您的工作自动保存并在重新打开时恢复
- 键盘快捷键。Enter 发送，Shift+Enter 换行，Ctrl/Cmd+Enter 构建扩展程序，Ctrl/Cmd+Shift+Enter 构建网站
- 系统深色模式检测。首次启动时自动匹配操作系统偏好
- 深色模式切换用于手动切换
- 多浏览器支持。为 Chrome、Edge 和 Firefox 构建
- 9 种语言：英语、日语、西班牙语、法语、韩语、中文、德语、葡萄牙语、意大利语
- 内置帮助指南和应用内服务条款
- 无需账户。完全在浏览器中运行
- 使用 AI 构建静态网站（HTML/CSS/JS）- 相同的聊天式工作流，不同的输出
- 可用于个人和商业用途

## 数据流

```mermaid
graph LR
    A[Your Browser] --> B[NuModeX Ext Maker]
    B --> C[Local Storage<br/>IndexedDB + Extension Storage]
    B --> D[Sandboxed Preview<br/>iframe]
    B --> E[Cloud AI Providers<br/>Your API Key]
    B --> F[On-Device AI<br/>Processed on Your Device]
    B --> G[Custom Local Server<br/>Your Configured Endpoint]
    B --> H[Custom Remote Server<br/>Your Configured Endpoint]

    style A fill:#6b7280,color:#fff,stroke:#4b5563
    style B fill:#f97316,color:#fff,stroke:#ea580c
    style C fill:#f97316,color:#fff,stroke:#ea580c
    style D fill:#f97316,color:#fff,stroke:#ea580c
    style E fill:#169cef,color:#fff,stroke:#1280c4
    style F fill:#f97316,color:#fff,stroke:#ea580c
    style G fill:#f97316,color:#fff,stroke:#ea580c
    style H fill:#169cef,color:#fff,stroke:#1280c4
```

> 🟠 橙色 = 留在您的设备上 | 🔵 蓝色 = 使用您的 API 密钥传输 | SoraVantia GK 不在数据路径中。

## 开始使用

1. 从 Chrome Web Store 安装扩展程序（或在开发者模式下加载未打包的扩展程序）。
2. 点击设置并输入您的云提供商 API 密钥。每个提供商的密钥单独保存 - 自由切换模型。
3. 从下拉菜单中选择 AI 模型。
4. 接受服务条款（仅首次）。
5. 在聊天中描述您想要构建的内容。
6. 点击"构建扩展程序"或"构建网站"并等待生成。
7. 使用内置编辑工具根据需要审查和编辑生成的文件。
8. 点击"全部下载为 ZIP"。
9. 对于扩展程序：解压 ZIP，前往 `chrome://extensions`，启用开发者模式，点击"加载已解压的扩展程序"。对于网站：解压并在浏览器中打开 `index.html`。

> **其他浏览器：** 生成的扩展程序是 Manifest V3，与 Edge、Brave、Whale 及其他基于 Chromium 的浏览器兼容。侧载步骤因浏览器而异。

## 获得最佳效果的提示

- 从简单描述开始逐步构建。先描述核心功能，然后使用编辑和改进逐步添加更多功能。
- 复杂项目使用上下文窗口更大的模型。较大的模型比较小的模型更好地处理较大的输出。
- 如果看到"无法提取扩展程序文件"，说明提示对于一次生成来说太复杂了。简化初始提示并通过编辑添加功能。
- 如果看到 JSON 解析错误，说明模型的响应太长被截断了。尝试更简单的提示或切换到输出限制更大的模型。
- 云端、自定义和远程模型都可以用于构建、编辑和聊天。选择最适合您需求和预算的模型。
- 设备端模型可用于聊天和编辑，但无法构建完整的扩展程序或网站。构建请使用云端或自定义模型。
- Enter 发送聊天消息。Shift+Enter 换行。Ctrl/Cmd+Enter 构建扩展程序。Ctrl/Cmd+Shift+Enter 构建网站。
- 构建后，使用编辑文件进行单文件更改，使用改进扩展程序进行跨多个文件的更改。
- 通过更多 (▾) → 导入文件导入现有文件以使用 AI 编辑。

## API 密钥

使用此扩展程序需要您自己的 API 密钥。从您的云提供商获取。API 密钥本地存储在您的浏览器中，永远不会发送给 SoraVantia GK 或任何第三方。

## 语言

英语、日语、西班牙语、法语、韩语、中文、德语、葡萄牙语、意大利语

## 许可证

NuModeX Ext Maker 是源代码公开的，根据 Business Source License 1.1（BSL 1.1）进行许可。源代码在项目存储库中公开提供。

**Business Source License 1.1** 源代码根据 BSL 1.1 提供使用。您可以为个人或内部业务目的使用、修改和创建衍生作品。2030 年 3 月 23 日，许可证自动转换为 Apache License, Version 2.0。完整文本请参阅 [LICENSE](LICENSE)。

**附加使用授权** 您可以对许可作品进行生产使用，前提是您的使用不包括将许可作品（或任何衍生作品）再分发至任何浏览器扩展程序市场。

### 您可以做的

- 为个人或内部业务目的使用扩展程序
- 克隆存储库并自行构建或侧载扩展程序
- 为非市场用途修改源代码和创建衍生作品
- 通过浏览器扩展程序市场以外的任何渠道分发
- 研究、学习和参考源代码
- 直接向用户侧载或部署（例如企业部署）
- 通过 Issues 报告错误、请求功能和发送建议
- 为原始项目做贡献

### 需要许可的

- 发布到 Chrome Web Store、Firefox Add-ons、Edge Add-ons、Safari Extensions、Naver Whale Store 或任何浏览器扩展程序市场

### 变更日期

2030 年 3 月 23 日，许可作品将自动根据 Apache License, Version 2.0 提供。

如需市场许可证或商务咨询，请联系：numodex@soravantia.com

## 法律声明

安装或使用 NuModeX Ext Maker，即表示您同意[最终用户许可协议](eula-zh-v2.5.md)和[隐私政策](privacy-policy-zh-v2.5.md)。

## 第三方声明

NuModeX Ext Maker 与第三方 AI 服务集成。SoraVantia GK 与任何第三方 AI 提供商之间不存在附属、认可或官方关系。所有产品名称、商标和注册商标均为其各自所有者的财产。本项目中对它们的提及仅用于识别目的。SoraVantia GK 可以随时添加、删除或更改对 AI 提供商和模型的支持。

## 第三方许可证

详情请参阅 [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES)。

## 版权

Copyright 2026 SoraVantia GK. All rights reserved.

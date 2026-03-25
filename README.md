[日本語](README.ja.md) | [Español](README.es.md) | [Français](README.fr.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Italiano](README.it.md)

# NuModeX Ext Maker

![License: BSL 1.1](https://img.shields.io/badge/License-BSL%201.1-blue.svg) ![Change License: Apache 2.0](https://img.shields.io/badge/Change%20License-Apache%202.0%20(2030)-green.svg) ![Chrome](https://img.shields.io/badge/Chrome-Supported-brightgreen?logo=googlechrome&logoColor=white) ![Edge](https://img.shields.io/badge/Edge-Supported-brightgreen?logo=microsoftedge&logoColor=white) ![Firefox](https://img.shields.io/badge/Firefox-Supported-brightgreen?logo=firefox&logoColor=white) ![Whale](https://img.shields.io/badge/Whale-Supported-brightgreen?logo=naver&logoColor=white) ![Languages](https://img.shields.io/badge/Languages-9-blueviolet)

Build Manifest V3 browser extensions and static websites with AI.

A Manifest V3 browser extension and static website builder by SoraVantia GK. No login, no subscription, no backend. Use cloud AI providers, on-device models, or your own local or remote AI server.

**Website:** https://numodex.com/numodexextmaker

## Features

- AI-powered browser extension generation (Manifest V3)
- Multi-provider support. Bring your own API key from Google, OpenAI, or Anthropic
- On-device AI models. Use browser-provided AI with no API key required
- Custom model support. Connect to any local or remote AI server that supports the /v1/chat/completions API
- Conversational chat interface with full conversation history
- Text and image prompt support
- AI-powered editing. Edit individual files, add new files, or improve the entire extension with a single prompt
- Manual code editing with inline editor
- Undo support for AI edits
- View Changes. Compare before and after diffs in unified or side-by-side view
- Live preview. See a visual preview of your generated extension in a sandboxed iframe
- Copy file content to clipboard with one click
- Built-in syntax-highlighted code viewer and file tree
- One-click ZIP download of generated extensions
- Multiple project support. Create, rename, switch between, and delete projects
- Auto-naming. Projects are automatically named from the generated extension's manifest
- Project persistence. Your work is saved automatically and restored on reopen
- Keyboard shortcuts. Enter to send, Shift+Enter for newline, Ctrl/Cmd+Enter to Build Extension, Ctrl/Cmd+Shift+Enter to Build Website
- System dark mode detection. Automatically matches your OS preference on first launch
- Dark mode toggle for manual switching
- Multi-browser support. Build for Chrome, Edge, and Firefox
- 9 languages: English, Japanese, Spanish, French, Korean, Chinese, German, Portuguese, Italian
- Built-in help guide and in-app Terms of Service
- No account required. Runs entirely in your browser
- Build static websites (HTML/CSS/JS) with AI - same chat-based workflow, different output
- Available for personal and commercial use

## Data Flow

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

> 🟠 Orange = stays on your device | 🔵 Blue = transmitted using your API key | SoraVantia GK is not in the data path.

## Getting Started

1. Accept the Terms of Service (first launch).
2. Enter your API key from your cloud AI provider in Settings.
3. Select a model, describe what you want, and click "Build Extension" or "Build Website".
4. Download the generated files as ZIP and load them in your browser.

For detailed setup instructions, on-device AI configuration, troubleshooting, and tips, see [Getting Started](getting-started-en-3-26-2026.md).

## API Keys

You need your own API key to use this extension. Get one from your cloud provider. API keys are stored locally in your browser and are never sent to SoraVantia GK or any third party.

## Languages

English, Japanese, Spanish, French, Korean, Chinese, German, Portuguese, Italian

## License

NuModeX Ext Maker is source available and licensed under the Business Source License 1.1 (BSL 1.1). The source code is publicly available in the project repository.

**Business Source License 1.1** The source code is available for use under the BSL 1.1. You may use, modify, and create derivative works for personal or internal business purposes. On March 23, 2030, the license automatically converts to the Apache License, Version 2.0. See [LICENSE](LICENSE) for the full text.

**Additional Use Grant** You may make production use of the Licensed Work, provided your use does not include redistributing the Licensed Work (or any derivative work) to any browser extension marketplace.

### What you CAN do

- Use the extension for personal or internal business purposes
- Clone the repository and build or sideload the extension yourself
- Modify the source code and create derivative works for non-marketplace use
- Distribute through any channel other than browser extension marketplaces
- Study, learn from, and reference the source code
- Sideload or deploy directly to users (e.g., enterprise deployment)
- Report bugs, request features, and send suggestions through Issues
- Contribute to the original project

### What requires permission

- Publishing to Chrome Web Store, Firefox Add-ons, Edge Add-ons, Safari Extensions, Naver Whale Store, or any browser extension marketplace

### Change Date

On March 23, 2030, the Licensed Work will automatically be available under the Apache License, Version 2.0.

For a Marketplace License or for business inquiries, contact: numodex@soravantia.com

## Legal

By installing or using NuModeX Ext Maker, you agree to the [End User License Agreement](eula-en-v2.5.md) and [Privacy Policy](privacy-policy-en-v2.5.md).
This project does not accept pull requests at this time. Please use Issues to report bugs and request features. This may change in the future.

## Third-Party Notices

NuModeX Ext Maker integrates with third-party AI services. SoraVantia GK is not affiliated with, endorsed by, or officially connected with any third-party AI provider. All product names, trademarks, and registered trademarks are the property of their respective owners. Their mention in this project is for identification purposes only. SoraVantia GK may add, remove, or change support for AI providers and models at any time.

## Third-Party Licenses

See [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES) for details.

## Copyright

Copyright 2026 SoraVantia GK. All rights reserved.

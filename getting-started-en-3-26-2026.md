[日本語](getting-started-ja-3-26-2026.md) | [Español](getting-started-es-3-26-2026.md) | [Français](getting-started-fr-3-26-2026.md) | [한국어](getting-started-ko-3-26-2026.md) | [中文](getting-started-zh-3-26-2026.md) | [Deutsch](getting-started-de-3-26-2026.md) | [Português](getting-started-pt-3-26-2026.md) | [Italiano](getting-started-it-3-26-2026.md)

# Getting Started with NuModeX Ext Maker

This guide walks you through setup, first build, and common issues in more detail than the README.

## Prerequisites

- A Chromium-based browser (Chrome, Edge, Brave, Whale) or Firefox
- An API key from at least one cloud AI provider - unless using on-device models
- Basic familiarity with browser extensions (helpful but not required)

## Cloud Model Setup

### 1. Install the Extension

**From browser extension stores (coming soon):**
NuModeX Ext Maker is not yet available on any browser extension store. Store availability will be announced at [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) and via GitHub Releases.

**From source (developer mode):**
1. Clone or download the repository.
2. Open `chrome://extensions` (or equivalent for your browser).
3. Enable Developer Mode.
4. Click "Load unpacked" and select the appropriate browser folder (`browsers/chrome`, `browsers/edge`, or `browsers/firefox`).

### 2. Get Your API Key

You need an API key from at least one supported cloud AI provider. Visit your provider's developer console or API platform to generate a key. Each provider's key is saved separately in the extension - you can switch between providers freely.

### 3. Configure and Build

1. Accept the Terms of Service (appears automatically on first launch).
2. Click the Settings icon in the extension popup.
3. Paste your API key and click "Save Key".
4. Select an AI model from the dropdown.
5. Describe what you want to build in the chat.
6. Click "Build Extension" or "Build Website" and wait for generation.
7. Review and edit generated files as needed using the built-in editing tools.
8. Click "Download All as ZIP".
9. For extensions: Extract the ZIP, go to `chrome://extensions`, enable Developer mode, and click "Load unpacked". For websites: Extract and open `index.html` in your browser.

> **Other browsers:** Generated extensions are Manifest V3 and compatible with Edge, Brave, Whale, and other Chromium-based browsers. Sideloading steps vary by browser.

## On-Device Model Setup

On-device models run entirely on your hardware with no API key or cloud connection needed. **These models are only available in specific browsers:** Gemini Nano in Google Chrome and Phi-4 Mini in Microsoft Edge. Other Chromium-based browsers (Brave, Whale, etc.) and Firefox do not currently support on-device AI through browser APIs.

**Key differences from cloud models:**
- On-device models can only be used for **chat and file editing**, not full builds.
- The model must download on first use (this can take several minutes).
- Hardware requirements are strict - check before troubleshooting.

### Chrome - Gemini Nano

1. Use Chrome version 127 or higher (Dev or Canary recommended for best results).
2. Go to `chrome://flags/#optimization-guide-on-device-model` and set to **Enabled BypassPerfRequirement**.
3. Go to `chrome://flags/#prompt-api-for-gemini-nano` and set to **Enabled**.
4. Restart Chrome.
5. Go to `chrome://on-device-internals` and verify the model status. If the model is not downloaded, go to `chrome://components/`, find **Optimization Guide On Device Model** and click **Check for update**.
6. Wait for the model to download. This may take several minutes. Keep Chrome open during the download.

### Edge - Phi-4 Mini

1. Use Edge Dev or Canary (version 138+). Edge 139+ includes Phi-4 Mini by default.
2. Go to `edge://flags/` and search for **Prompt API for Phi mini**, set to **Enabled**.
3. Optionally enable **Enable on device AI model debug logs** for troubleshooting.
4. Restart Edge.
5. Go to `edge://on-device-internals` and verify your **Device performance class** is **High** or greater.
6. The model downloads automatically on first use. This may take several minutes. Keep Edge open during the download.

### Hardware Requirements

**Edge:** Windows 10/11 or macOS 13.3+, at least 20 GB free storage, 5.5 GB+ VRAM, and an unmetered internet connection.

**Chrome:** 22 GB free storage, more than 4 GB VRAM (GPU) or 16 GB+ RAM with 4+ CPU cores (CPU mode), and an unmetered connection.

> **Note:** On-device models can only be used for chat and file editing. To build full extensions or websites, select a cloud model.

## Understanding Build Modes

NuModeX Ext Maker has two build modes:

**Build Extension** - Generates a complete Manifest V3 browser extension with manifest.json, popup files, content scripts, and any other required files.

**Build Website** - Generates a complete static website with HTML, CSS, and JavaScript files.

Both modes use the same chat interface. The AI reads your entire conversation history when generating, so you can refine your requirements over multiple messages before building.

## Reviewing Your Generated Files

After a build completes, the right panel of the extension displays your generated files.

**File tree** - All generated files appear in a clickable list at the top of the right panel. Click any file to view its content. Files are organized by name, including subdirectory paths (e.g., `assets/style.css`).

**Code viewer** - When you select a file, its content appears in the code viewer below the file tree with syntax highlighting. The viewer automatically detects the file type (JavaScript, JSON, HTML, CSS, Markdown) and applies the appropriate highlighting. You can copy the content of any file to your clipboard using the Copy button.

**Manual editing** - Click the Edit toggle above the code viewer to switch to manual editing mode. This turns the code viewer into a text editor where you can make changes directly by hand. Click the toggle again to exit manual editing mode.

**Live preview** - To see a visual preview of your extension or website, click More (▾) > Preview. This opens a modal with a sandboxed preview that renders your popup.html (for extensions) or index.html (for websites). The preview automatically inlines your CSS and JavaScript files so they render correctly. Note that this is a visual-only preview - browser extension APIs (like chrome.tabs, chrome.storage) and external resources will not work in the preview. If your project has no popup.html or index.html, the preview will show an informational message.

**View Changes** - After an AI edit, click View Changes to see a before-and-after diff of what was modified. You can toggle between unified and side-by-side view. If multiple files were changed, tabs at the top let you switch between them.

## Editing After Building

After your first build, you have several editing options:

**Edit File** - Select a single file and describe changes. Best for targeted fixes.

**Add File** - Create a new file and describe what it should contain.

**Improve Extension** - Describe changes across the entire project. The AI can modify multiple files at once.

**Manual Edit** - Click directly into the code viewer to edit code by hand.

**Undo** - Revert the last AI edit. Only one level of undo is available.

## Choosing the Right Model

Rather than recommending specific models (which change frequently), here is how to choose based on what matters:

**Context window size** - This determines how much conversation history and code the model can process at once. For simple extensions with a few files, a smaller context window is fine. For complex multi-file projects, choose a model with a larger context window so it can see all your files and conversation at once.

**Output token limit** - This determines how much code the model can generate in a single response. If you see JSON parsing errors or truncated output, switch to a model with a higher output limit. Larger projects need models that can output more tokens.

**Reasoning ability** - Some models are better at complex logic, multi-step instructions, and maintaining consistency across files. For simple popup extensions, most models work well. For extensions with content scripts, background workers, and complex interactions, choose a model known for strong reasoning.

**Cost** - Larger, more capable models cost more per API call. Start with a smaller model for chat and simple edits, then switch to a larger model when you need to build or improve complex projects. Costs vary depending on the model and AI provider you select. SoraVantia GK is not affiliated with any AI provider and does not control or receive any portion of API fees.

**Speed** - Smaller models respond faster. If you are iterating quickly on small changes, a fast model saves time. For full builds where quality matters more than speed, a larger model is worth the wait.

| Use Case | What to Look For |
|----------|-----------------|
| Simple extensions (popup-only, small scripts) | Any model with moderate context and output limits |
| Complex extensions (content scripts, background workers, multiple files) | Large context window, high output limit, strong reasoning |
| Quick chat questions and brainstorming | Any model - speed matters more than output size |
| Single-file edits | Any model, including on-device (free, no API key needed) |
| Budget-conscious development | Smaller or mid-tier models for chat, larger models only for builds |

Check your AI provider's model documentation for current context window sizes, output limits, and pricing.

## Tips for Best Results

- Start with a simple description and build up. Describe the core feature first, then use Edit and Improve to add more features incrementally.
- Use a model with a larger context window for complex projects. Larger models handle bigger outputs better than smaller ones.
- If you see "Could not extract extension files," the prompt was too complex for one generation. Simplify the initial prompt and add features through editing.
- If you see a JSON parsing error, the model's response was too long and got cut off. Try a simpler prompt or switch to a model with a larger output limit.
- Cloud, custom, and remote models can all be used to build, edit, and chat. Choose the model that best fits your needs and budget.
- On-device models work for chat and editing but cannot build full extensions or websites. Use a cloud or custom model for building.
- Enter to send a chat message. Shift+Enter for a new line. Ctrl/Cmd+Enter to build an extension. Ctrl/Cmd+Shift+Enter to build a website.
- After building, use Edit File for single-file changes and Improve Extension for changes across multiple files.
- Import existing files via More (▾) > Import Files to edit them with AI.

## Troubleshooting

**Before troubleshooting, check the following resources:**
- Your cloud AI provider's API documentation for current model limits, pricing, and status.
- Your browser's developer documentation for the latest on-device AI requirements and known issues.
- The [On-Device Model Setup](#on-device-model-setup) section above for flag and hardware requirements.

### "API key not set"
Open Settings and paste your API key for the selected provider. Each provider has its own key - make sure you saved the key for the provider whose model you selected.

### "Could not extract extension files"
The AI response was too complex or malformed. Try:
- Simplifying your prompt (describe fewer features at once)
- Switching to a model with a larger output limit
- Building a basic version first, then using "Improve Extension" to add features

### "JSON parsing error"
The model's response was too long and got truncated before the JSON could be completed. Try:
- A simpler prompt
- A model with a higher output token limit

### On-device model stuck on "Downloading"
This is a common issue. Check:
1. **Hardware requirements met?** Go to `edge://on-device-internals` (Edge) or `chrome://on-device-internals` (Chrome) and verify your device class.
2. **Flags enabled?** See the [On-Device Model Setup](#on-device-model-setup) section above.
3. **Enough storage?** Edge needs 20 GB free, Chrome needs 22 GB free.
4. **Metered connection?** The model will not download on a metered/limited data connection.
5. **Browser stayed open?** The download stops if you close the browser.
6. **Try restarting the browser** and waiting 5-10 minutes.

### Extension doesn't work after loading
- Check the browser console (`chrome://extensions` > click "Errors" on your extension) for error messages.
- Make sure you loaded the correct folder (the one containing manifest.json).
- Try regenerating with a more detailed prompt that specifies exact behavior.

### Custom model not responding
- Verify the endpoint URL is correct and reachable.
- Confirm the server supports the `/v1/chat/completions` API format.
- Check if the server requires an API key and whether you provided one.
- Grant the extension host permission when prompted.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Enter | Send chat message |
| Shift+Enter | New line in chat |
| Ctrl/Cmd+Enter | Build Extension |
| Ctrl/Cmd+Shift+Enter | Build Website |

## Next Steps

- Read the [README](README.md) for the full feature list
- Check [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES) for dependency information
- Report issues or request features via GitHub Issues
- Visit [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) for updates

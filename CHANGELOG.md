# Changelog

All notable changes to NuModeX Ext Maker are documented here.

## [2.3.0] - 2026-06-25

### Added
- Gemini 3.5 Flash (Google).
- GPT-5.4 Pro (OpenAI).
- Claude Opus 4.8 (Anthropic).

### Changed
- Raised Claude Haiku 4.5 maximum output from 8,192 to 64,000 tokens (was capping long generations early).

### Removed
- GPT-5.3 Instant (deprecated `gpt-5.3-chat-latest`).

## [2.2.0] - 2026-05-04

### Added
- Six AI models: Gemini 2.5 Pro; GPT-5.5; GPT-5.5 Pro; GPT-5.4 Mini; GPT-5.4 Nano; Claude Opus 4.7.
- Listed on the Chrome Web Store and Naver Whale Store (store download links added to the READMEs).

### Changed
- Clarified the in-code note on GPT-5 reasoning models that reject a custom temperature (no behavior change).

## [2.1.0] - 2026-03-30

### Added
- Import from ZIP — load an existing extension or website from a `.zip` into the editor to view and edit with AI.
- Safari and Firefox support — browser detection, a Safari-specific download fallback, a Safari popup layout, and automatic hiding of on-device models on browsers that don't support them.

## [2.0.0] - 2026-03-29 — Initial release

### Added
- AI-powered builder for Manifest V3 browser extensions and static websites, via a conversational chat workflow.
- Bring-your-own-key cloud providers: Google (Gemini), OpenAI (GPT), Anthropic (Claude).
- On-device AI models (Gemini Nano, Phi-4 Mini) and custom OpenAI-compatible endpoints.
- Text and image (vision) prompt input.
- AI editing: edit a single file, add a file, and improve the whole project from one prompt; plus a manual code editor, undo, a before/after diff viewer, and live preview in a sandboxed iframe.
- Import individual source files, copy file contents, and one-click ZIP download.
- Multi-project management with auto-naming from the generated manifest and automatic persistence.
- 9 UI languages, dark mode with system-theme detection, an in-app help guide, and an in-app EULA / Terms gate.
- Initial model lineup (15): Gemini 3.1 Pro, Gemini 3 Flash, Gemini 3.1 Flash Lite, Gemini 2.5 Flash; GPT-5.4, GPT-5.3 Instant, GPT-5 Mini, GPT-4.1, GPT-4.1 Mini, GPT-4.1 Nano; Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5; Gemini Nano, Phi-4 Mini.

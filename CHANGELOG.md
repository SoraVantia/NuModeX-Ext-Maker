# Changelog

All notable changes to NuModeX Ext Maker are documented here.

## [2.5.0] - 2026-08-22

### Added
- Gemini 3.7 Flash (Google).
- Claude Fable 5 (Anthropic).

### Fixed
- API keys could be saved under, or deleted from, the wrong provider when a custom model was selected. Keys now always resolve to the provider they were entered for.
- Google requests now send the API key in the `x-goog-api-key` header rather than the request URL, so it is no longer exposed in server and proxy logs.

## [2.4.0] - 2026-07-27

### Added
- Gemini 3.6 Flash (Google).
- Gemini 3.5 Flash Lite (Google).
- GPT-5.6 Sol (OpenAI).
- GPT-5.6 Terra (OpenAI).
- GPT-5.6 Luna (OpenAI).
- Claude Opus 5 (Anthropic).
- Claude Sonnet 5 (Anthropic).

### Removed
- GPT-5.4 Pro and GPT-5.5 Pro (not supported on the chat completions endpoint).
- Gemini 2.5 Flash and Gemini 2.5 Pro (no longer available to new users; Google has retired the Gemini 2.5 generation).

### Fixed
- OpenAI requests now use the `max_completion_tokens` parameter, restoring GPT-5 family models that were failing with a parameter error.
- Fixed a bug where the model shown in the selector could differ from the model actually used, which could cause an API key to be saved to the wrong provider's settings.

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

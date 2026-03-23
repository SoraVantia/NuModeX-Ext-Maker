[日本語](privacy-policy-ja-v2.5.md) | [Español](privacy-policy-es-v2.5.md) | [Français](privacy-policy-fr-v2.5.md) | [한국어](privacy-policy-ko-v2.5.md) | [中文](privacy-policy-zh-v2.5.md) | [Deutsch](privacy-policy-de-v2.5.md) | [Português](privacy-policy-pt-v2.5.md) | [Italiano](privacy-policy-it-v2.5.md)

# PRIVACY POLICY

**NuModeX Ext Maker - A Product of SoraVantia GK**
Effective Date: March 23, 2026
Version: 2.5

## IMPORTANT NOTICE

This Privacy Policy explains how NuModeX Ext Maker, developed by SoraVantia GK, handles your information. The short version: NuModeX Ext Maker does not collect, store, or transmit any personal data to SoraVantia GK. The extension has no backend server, no analytics, no telemetry, and no tracking code. Everything stays in your browser.

This Privacy Policy is drafted in English. Translations into other languages are provided for convenience only. In case of any discrepancy between the English version and any translated version, the English version shall prevail and be the sole legally binding version.

---

## 1. WHO WE ARE

SoraVantia GK is a Japanese corporation (SoraVantia合同会社) and the developer of NuModeX Ext Maker. We are subject to the Act on the Protection of Personal Information (APPI) of Japan.

**Contact:**
SoraVantia GK
Email: numodex@soravantia.com

---

## 2. WHAT NUMODEX EXT MAKER IS

NuModeX Ext Maker is a Manifest V3 browser extension that uses AI to help users build browser extensions and static websites. The extension operates entirely within your browser. There is no backend server, no user accounts, no login, no subscription, and no registration. Users provide their own API keys for AI services.

---

## 3. DATA WE DO NOT COLLECT

SoraVantia GK does not collect, receive, store, process, or transmit any personal data through NuModeX Ext Maker. Specifically, SoraVantia GK does not collect:

- Your name, email address, or any contact information
- Your IP address or device identifiers
- Your browsing history or browsing activity
- Your location data
- Your API keys or any credentials
- Your prompts, conversation history, or any content you create
- Any usage data, behavioral data, or interaction data
- Any cookies, fingerprints, or tracking identifiers

SoraVantia GK has no servers, databases, analytics platforms, or tracking infrastructure for NuModeX Ext Maker. The extension contains no analytics code, no telemetry code, and no tracking code of any kind.

---

## 4. DATA STORED LOCALLY IN YOUR BROWSER

NuModeX Ext Maker stores the following data locally in your browser. This data never leaves your device and is never sent to SoraVantia GK:

- **API Key:** Your AI service provider API key is stored in the browser's local extension storage. It is used solely to authenticate requests to the AI provider you selected. SoraVantia GK cannot access, view, or retrieve your API key.

- **EULA Acceptance Status:** A record of whether you have accepted the End User License Agreement, stored in the browser's local extension storage.

- **UI Preferences:** Your interface preferences such as selected language and dark mode setting, stored in the browser's local extension storage.

- **Selected AI Model:** The AI model you have chosen for generation, stored in the browser's local extension storage.

- **Projects:** Your generated files, conversation history, and undo history are stored in IndexedDB within your browser. These are your work products and remain entirely under your control.

- **Custom Model Configuration:** If you configure a custom AI server endpoint, the endpoint URL, model name, and optional API key are stored in the browser's local extension storage.

**How to delete your locally stored data:**

- Uninstall the NuModeX Ext Maker extension from your browser. This removes all locally stored data.
- Use the in-app delete options to selectively remove API keys and individual projects without uninstalling.

---

## 5. DATA SENT TO THIRD-PARTY AI PROVIDERS

When you use NuModeX Ext Maker to build, edit, improve, or chat about extensions and websites, the extension sends requests directly from your browser to the AI provider you selected. SoraVantia GK does not act as an intermediary and does not have access to any data transmitted between your browser and the AI provider.

### 5.1 What is sent to the AI provider

Each request to the AI provider includes:

- Your prompt text (the instructions you type)
- Conversation history from the current session
- Any images you attach to your prompt
- The Software's internal system prompt (proprietary instructions that guide the AI model's behavior and output format - these are not visible to you but are included in each request)

### 5.2 How this data is transmitted

Your data is transmitted directly from your browser to the AI provider's servers using your own API key. The transmission uses the AI provider's standard API endpoint and is encrypted via HTTPS. SoraVantia GK's servers are not involved in this transmission at any point.

### 5.3 Supported AI providers

NuModeX Ext Maker supports integration with various AI providers, including but not limited to:

- Google (Gemini)
- OpenAI (GPT)
- Anthropic (Claude)
- Custom AI server endpoints configured by the user
- On-device AI models provided by the browser

### 5.4 AI provider privacy policies

Each AI provider has its own privacy policy governing how it handles data received through API requests. SoraVantia GK has no control over how AI providers process, store, or use the data you send them. You are responsible for reviewing and understanding the privacy policies of the AI providers you choose to use.

### 5.5 On-device AI models

If you use on-device AI models provided by your browser, NuModeX Ext Maker does not transmit your prompts to any external server. However, SoraVantia GK does not control the browser vendor's implementation of on-device AI models. The browser vendor may collect telemetry, usage data, or other information related to on-device model usage under its own data practices. SoraVantia GK has no knowledge of, control over, or responsibility for any data collection performed by the browser vendor in connection with on-device AI models. You should consult your browser vendor's privacy policy for details on how on-device AI features handle your data.

### 5.6 Custom AI server endpoints

If you configure a custom AI server endpoint, your prompts are sent directly to the server address you configured. SoraVantia GK has no knowledge of, control over, or responsibility for custom endpoints. You are solely responsible for understanding the data practices, security, and privacy policies of any custom server you configure.

---

## 6. SYSTEM PROMPTS AND TOKEN USAGE

NuModeX Ext Maker includes internal system prompts that are sent with each API request to guide the AI model's behavior and output format. These system prompts are proprietary to SoraVantia GK and are not visible to the user. They do not contain any personal data about you.

The system prompts, along with your input and conversation history, contribute to the total token count of each API request. This affects your API costs, which are billed directly by the AI provider. For full details on token usage and costs, see Section 3.4 of the End User License Agreement.

---

## 7. MARKETPLACE ANALYTICS DATA

If NuModeX Ext Maker is distributed through one or more browser extension marketplaces (such as the Chrome Web Store, Edge Add-ons, Firefox Add-ons, Safari Extensions via the App Store, or Naver Whale Store), the marketplace operator may collect usage data from users and provide SoraVantia GK with aggregate, non-personally-identifiable analytics through the marketplace's developer dashboard.

### 7.1 What marketplace operators may provide to SoraVantia GK

The types of aggregate data that marketplace operators may provide include, but are not limited to:

- Install and uninstall counts
- Store listing page impressions and page views
- Weekly or daily active user counts
- Geographic distribution of users (country or region level)
- Operating system and language distribution
- Extension version adoption rates
- User retention metrics
- Campaign and referral source attribution (if UTM parameters are used)

### 7.2 Nature of marketplace analytics data

This data is aggregate and statistical in nature. It does not contain personally identifiable information such as names, email addresses, IP addresses, or individual browsing activity. SoraVantia GK cannot identify individual users from this data.

### 7.3 How SoraVantia GK uses marketplace analytics data

SoraVantia GK uses marketplace analytics data solely to:

- Understand adoption trends and user growth
- Improve the Software based on version adoption and retention patterns
- Evaluate the effectiveness of distribution channels

### 7.4 Source of marketplace analytics data

This data is collected and processed entirely by the marketplace operator under its own privacy policy and terms of service. NuModeX Ext Maker does not contain any code that collects or transmits analytics, telemetry, or tracking data. The extension itself plays no role in the collection of marketplace analytics data.

### 7.5 Marketplace privacy policies

Your use of a browser extension marketplace is governed by that marketplace operator's privacy policy. SoraVantia GK is not responsible for the data collection practices of marketplace operators. For information about how each marketplace handles your data, refer to:

- Google Chrome Web Store: https://policies.google.com/privacy
- Microsoft Edge Add-ons: https://privacy.microsoft.com/privacystatement
- Mozilla Firefox Add-ons: https://www.mozilla.org/privacy/
- Apple App Store: https://www.apple.com/privacy/
- Naver Whale Store: https://whale.naver.com/legal/privacy/

---

## 8. DATA WE DO NOT SHARE

Since SoraVantia GK does not collect any personal data through NuModeX Ext Maker, there is no personal data to share. SoraVantia GK does not:

- Sell personal data to any third party
- Share personal data with advertisers
- Share personal data with data brokers
- Provide personal data to any government or law enforcement agency
- Use personal data for profiling, targeted advertising, or automated decision-making

---

## 9. CHILDREN'S PRIVACY

NuModeX Ext Maker is not directed at children. As stated in the End User License Agreement, users must be at least 16 years of age, or the minimum age required to enter into a binding agreement under the laws of their jurisdiction, whichever is higher.

Since SoraVantia GK does not collect any personal data, no personal data from children is collected, stored, or processed. The Software does not have age verification mechanisms as it has no user accounts or registration system.

---

## 10. DATA PROTECTION COMPLIANCE

### 10.1 Act on the Protection of Personal Information (APPI) - Japan

SoraVantia GK is a Japanese corporation subject to the APPI. Since SoraVantia GK does not collect, receive, store, or process any personal data through NuModeX Ext Maker, no data processing obligations arise under the APPI with respect to this product.

### 10.2 General Data Protection Regulation (GDPR) - European Union

Since SoraVantia GK does not collect or process any personal data from users of NuModeX Ext Maker, the GDPR data processing obligations do not apply to SoraVantia GK's operation of this product. There is no data controller or data processor role for SoraVantia GK in relation to this product because no personal data flows to SoraVantia GK.

Users in the EU should be aware that when they send prompts to third-party AI providers, those providers may process their data under their own GDPR compliance frameworks. Users should review the privacy policies of their chosen AI providers.

### 10.3 California Consumer Privacy Act (CCPA/CPRA) - United States

Since SoraVantia GK does not collect, sell, or share any personal information from users of NuModeX Ext Maker, the CCPA/CPRA obligations regarding consumer rights (access, deletion, opt-out of sale) do not apply to SoraVantia GK's operation of this product.

### 10.4 Local-first architecture

The Software's local-first architecture is designed to satisfy applicable data protection requirements by default. All user data remains in the user's browser. SoraVantia GK has no technical capability to access, retrieve, or view any data stored locally by the extension.

---

## 11. SECURITY

### 11.1 Local data security

All data stored by NuModeX Ext Maker is stored locally in your browser using the browser's extension storage API and IndexedDB. The security of this data depends on the security of your browser and your device. SoraVantia GK does not have access to your locally stored data and cannot protect it from threats on your device.

### 11.2 API key security

Your API key is stored locally in the browser's extension storage and is used only to authenticate requests to your selected AI provider. SoraVantia GK does not have access to your API key. You are responsible for keeping your API key secure and should not share it with others.

### 11.3 Data in transit

When prompts are sent to third-party AI providers, they are transmitted via HTTPS directly from your browser to the AI provider. SoraVantia GK's infrastructure is not involved in this transmission. The security of data in transit to AI providers depends on the AI provider's security measures.

### 11.4 Generated code security

NuModeX Ext Maker generates browser extension and website code using AI. SoraVantia GK does not review, audit, or validate the security of generated code. Generated code may contain security vulnerabilities. You are solely responsible for reviewing the security of any code generated by the Software before installation, deployment, or distribution.

---

## 12. THIRD-PARTY SERVICES

NuModeX Ext Maker integrates with third-party AI providers, custom AI server endpoints configured by the user, and on-device AI models provided by the browser. These services are operated by independent third parties and are not under the control of SoraVantia GK.

SoraVantia GK is not affiliated with, endorsed by, sponsored by, or in any way officially connected with Google LLC, OpenAI Inc., Anthropic PBC, or any of their subsidiaries or affiliates. All product names, trademarks, and registered trademarks (including but not limited to Google, Gemini, OpenAI, GPT, Anthropic, and Claude) are the property of their respective owners. Their mention in this Software and its documentation is for identification purposes only and does not imply any endorsement, partnership, or affiliation. SoraVantia GK may add, remove, or change support for AI providers and models at any time. The addition of support for any AI provider does not imply any affiliation with or endorsement by that provider.

SoraVantia GK is not responsible for:

- Any data processing, storage, or handling performed by third-party service providers
- Any changes to third-party APIs, pricing, terms of service, or privacy policies
- Any content generated, returned, or processed by third-party services
- Any data transmitted to, processed by, or stored on custom AI server endpoints configured by the user

Your use of third-party services is governed by their respective terms of service and privacy policies.

---

## 13. CHANGES TO THIS PRIVACY POLICY

### 13.1 Modification rights

SoraVantia GK reserves the right to modify this Privacy Policy at any time. Non-material changes will be effective upon posting with an updated version number. Material changes will take effect no sooner than thirty (30) days after notification, unless a longer period is required by applicable law.

### 13.2 Notification

Material changes to this Privacy Policy will be communicated through one or more of the following channels:

- By including the updated Privacy Policy in a new release of the Software distributed through any browser extension marketplace where the Software is published (if applicable)
- By displaying a notice of the updated Privacy Policy through the Software's interface
- By posting the updated Privacy Policy on the product's official website (currently https://numodex.com/numodexextmaker/privacy, which may change in the event of a transfer of ownership or rebranding)
- By updating the Privacy Policy in the project's source code repository (if publicly available)

In the event of an assignment or transfer of the Software under Section 20.6 of the End User License Agreement, the successor entity may notify users through equivalent channels under its own control, provided that at least one notification method delivers the updated Privacy Policy directly through the Software itself.

### 13.3 Acceptance

Continued use of the Software after the effective date of any modification constitutes acceptance of the modified Privacy Policy. If you do not agree to the modified terms, you must discontinue use of the Software.

---

## 14. YOUR RIGHTS

Since SoraVantia GK does not collect any personal data through NuModeX Ext Maker, traditional data subject rights (access, correction, deletion, portability) do not apply in the context of this product because there is no personal data held by SoraVantia GK to exercise these rights against.

However, you have full control over all data stored locally by the extension:

- **Access:** You can view your locally stored data at any time through the extension's interface.
- **Deletion:** You can delete your API keys and projects through the in-app deletion options, or delete all locally stored data by uninstalling the extension.
- **Portability:** You can download and export your generated extensions and websites at any time through the extension's download functionality.

If you have questions or concerns about your data in relation to third-party AI providers, you should contact those providers directly.

---

## 15. CONTACT INFORMATION

For questions or concerns about this Privacy Policy, please contact:

**SoraVantia GK**
Email: numodex@soravantia.com

---

Copyright 2026 SoraVantia GK. All rights reserved.

Last Updated: March 23, 2026
Version: 2.5

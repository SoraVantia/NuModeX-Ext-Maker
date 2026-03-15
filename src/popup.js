/*
 * Copyright 2026 SoraVantia GK. All rights reserved.
 * Dual-licensed under the Apache License 2.0 and the Marketplace Publication License.
 * See LICENSE and LICENSE-MARKETPLACE for details.
 */
// Brand name helper
function createBrandedName(showExtMaker = true) {
    const span = document.createElement('span');
    span.className = 'brand-name';
    span.innerHTML = '<span class="brand-gradient">N</span><span class="brand-gray">u</span><span class="brand-gradient">M</span><span class="brand-gray">ode</span><span class="brand-gradient">X</span>' +
        (showExtMaker ? '<span class="brand-gray"> Ext Maker</span>' : '');
    return span;
}

// Global State
let apiKey = '';
let conversationHistory = []; // Structure: [{ role: 'user'/'model', parts: [{text: '...'}, {inlineData: {mimeType: '...', data: '...'}}] }]
let attachedFilesData = []; // Array of { name: string, type: string, base64: string }
let generatedFiles = []; // Array of { name: string, content: string }
let selectedModel = null; // Selected AI model
let currentProjectId = null; // Tracks the active project in IndexedDB
let selectedFileForEdit = null; // The filename currently selected in the tree
let isManualEditMode = false;

// --- Undo System ---
let undoStack = []; // Array of { files: [...], timestamp: Date }
const MAX_UNDO_STEPS = 10;

// --- Diff View System ---
let lastEditDiffs = []; // Stores {filename, oldContent, newContent} for each file changed in the last AI edit
let currentDiffFormat = 'line-by-line'; // 'line-by-line' or 'side-by-side'

// --- Multi-Project State ---
let projectList = []; // Array of {id, name, updatedAt}

// --- IndexedDB Project Storage ---
const db = new Dexie('NuModeXProjects');
db.version(1).stores({
    projects: '++id, name, createdAt, updatedAt'
});
// Each project record will have:
// {
//   id: auto-increment,
//   name: string,
//   files: [{ name: string, content: string }],
//   conversationHistory: [{ role, parts }],
//   selectedModelId: string,
//   createdAt: Date,
//   updatedAt: Date
// }

// Browser detection for on-device model filtering
const isEdgeBrowser = navigator.userAgent.includes('Edg');

// EULA Management State
let eulaCache = new Map(); // Cache loaded EULA content by language code
let eulaAcceptanceStatus = null; // Cache EULA acceptance status
let pendingEulaAction = null; // Store action to perform after EULA acceptance

// System Prompt (embedded locally — previously fetched from backend)
const SYSTEM_PROMPT = `You are an expert software developer named NuModeX Ext Maker specializing in creating Google Chrome extensions using Manifest V3.
Your task is to generate the complete set of files required for a functional Chrome extension and return the files in a JSON object with a 'files' array containing objects with 'name' and 'content' properties based on the user's request provided in the preceding conversation history.
OUTPUT FORMAT:
You MUST output your response as a single, valid JSON object. This JSON object must have a top-level key named "files".
The "files" key must contain an array of objects. Each object in this array represents a file in the Chrome extension and MUST have the following two keys:
1.  "name": A string representing the filename (e.g., "manifest.json", "popup.html", "script.js", "icons/icon16.png").
    - Include appropriate paths for files in subdirectories (e.g., "icons/icon16.png").
2.  "content": A string containing the full content of the file.
    - For JSON files like manifest.json, the content must be a valid JSON string.
    - For HTML, JS, CSS files, the content must be the respective code as a string.
MANDATORY FILES & STRUCTURE:
1.  manifest.json: This is the most crucial file.
    *   It MUST be manifest_version: 3.
    *   Include necessary fields like name, version (e.g., "1.0"), description.
    *   Determine and include appropriate permissions based on the user's request (e.g., "storage", "activeTab", "scripting").
    *   Define action (for popups), content_scripts, background service worker, icons, etc., as needed by the user's request.
    *   Ensure all script files, HTML files, and icon paths referenced in the manifest are also generated and included in the "files" array.
2.  Other necessary HTML, CSS, and JavaScript files as implied by the manifest and the user's request (e.g., popup.html, popup.js, content.js, background.js, styles.css).
GUIDELINES:
-   Generate all files necessary for the extension to be loadable and functional in Chrome.
-   Ensure code is well-formatted and follows common best practices for Chrome extensions.
-   If the user's request involves UI elements (like a popup), generate the necessary HTML, CSS, and JS.
-   If content scripts are needed, define their matches (e.g., ["<all_urls>"]), js, and/or css properties correctly.
-   If a background service worker is needed, create background.js.
-   For icons:
    - List them in the manifest (e.g., "icons": { "16": "icons/icon16.png", "48": "icons/icon48.png", "128": "icons/icon128.png" }).
    - For the content of these icon files in the JSON output, provide a brief placeholder string like: "This is a placeholder for icon16.png. An actual 16x16 PNG image file is required here."
    - Do NOT attempt to generate base64 image data or actual binary image content.
-   If the request is ambiguous or requires features beyond typical Chrome extension capabilities, try to create a sensible, simple extension that addresses the core request.
-   Do NOT include any explanatory text, apologies, or conversational fluff before or after the JSON object. Your ENTIRE response MUST be ONLY the JSON object.
Based on the user's entire conversation, generate the files for their requested Chrome extension.
REMEMBER: Output ONLY the JSON object. No markdown fences. No text before or after the JSON.`;

const EDIT_SYSTEM_PROMPT = `You are an expert software developer named NuModeX Ext Maker specializing in editing existing Google Chrome extensions (Manifest V3).
The user has an existing Chrome extension project. They want to make targeted changes — which may affect one file, several files, or the entire project — WITHOUT regenerating everything from scratch. You must read and understand ALL the provided file contents before making changes.

CURRENT PROJECT FILES:
{FILE_MAP}

FULL FILE CONTENTS:
{FULL_FILE_CONTENTS}

OUTPUT FORMAT:
You MUST output your response as a single, valid JSON object with a top-level key named "edits".
The "edits" key must contain an array of objects. Each object represents a file operation and MUST have:
1. "action": One of "update", "create", or "delete"
2. "file": The filename (e.g., "popup.js", "content.js", "styles.css")
3. "content": The COMPLETE new content of the file (required for "update" and "create", omit for "delete")

Example response:
{
  "edits": [
    {"action": "update", "file": "popup.js", "content": "// complete updated file content..."},
    {"action": "update", "file": "styles.css", "content": "/* complete updated CSS */"},
    {"action": "create", "file": "utils.js", "content": "// new file content..."},
    {"action": "delete", "file": "old-helper.js"}
  ]
}

RULES:
- READ and UNDERSTAND all provided file contents before making any changes.
- For "update" actions, return the COMPLETE file content, not just the changed parts.
- For "create" actions, return the complete content of the new file.
- Only include files that actually need to change. Do NOT include unchanged files.
- You MAY update multiple files in a single response if the user's request requires changes across files (e.g., adding a feature that touches HTML, JS, and CSS).
- If updating manifest.json, ALWAYS return the complete manifest.json content.
- If you create a new JS/CSS/HTML file, check if manifest.json needs to reference it and include a manifest.json update if so.
- When modifying code, preserve existing functionality that the user did not ask to change. Do not remove features, event listeners, or logic unless explicitly asked.
- Maintain consistent coding style with the existing codebase.
- Do NOT include any explanatory text, apologies, or conversational fluff. Your ENTIRE response MUST be ONLY the JSON object.
- No markdown fences. Output raw JSON only.`;

// AI Models Configuration
const AI_MODELS = [
    // --- Google Gemini ---
    {
        id: 'gemini-3.1-pro-preview',
        name: 'Gemini 3.1 Pro',
        provider: 'google',
        endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent',
        model: 'gemini-3.1-pro-preview'
    },
    {
        id: 'gemini-3-flash-preview',
        name: 'Gemini 3 Flash',
        provider: 'google',
        endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent',
        model: 'gemini-3-flash-preview'
    },
    {
        id: 'gemini-3.1-flash-lite',
        name: 'Gemini 3.1 Flash Lite',
        provider: 'google',
        endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent',
        model: 'gemini-3.1-flash-lite'
    },
    {
        id: 'gemini-2.5-flash',
        name: 'Gemini 2.5 Flash',
        provider: 'google',
        endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
        model: 'gemini-2.5-flash'
    },
    // --- OpenAI ---
    {
        id: 'gpt-5.4',
        name: 'GPT-5.4',
        provider: 'openai',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-5.4'
    },
    {
        id: 'gpt-5.3-chat-latest',
        name: 'GPT-5.3 Instant',
        provider: 'openai',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-5.3-chat-latest',
        supportsTemperature: false
    },
    {
        id: 'gpt-5-mini',
        name: 'GPT-5 Mini',
        provider: 'openai',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-5-mini',
        supportsTemperature: false
    },
    {
        id: 'gpt-4.1',
        name: 'GPT-4.1',
        provider: 'openai',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-4.1'
    },
    {
        id: 'gpt-4.1-mini',
        name: 'GPT-4.1 Mini',
        provider: 'openai',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-4.1-mini'
    },
    {
        id: 'gpt-4.1-nano',
        name: 'GPT-4.1 Nano',
        provider: 'openai',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-4.1-nano'
    },
    // --- Anthropic Claude ---
    {
        id: 'claude-opus-4-6-20260205',
        name: 'Claude Opus 4.6',
        provider: 'anthropic',
        endpoint: 'https://api.anthropic.com/v1/messages',
        model: 'claude-opus-4-6-20260205'
    },
    {
        id: 'claude-sonnet-4-6-20260217',
        name: 'Claude Sonnet 4.6',
        provider: 'anthropic',
        endpoint: 'https://api.anthropic.com/v1/messages',
        model: 'claude-sonnet-4-6-20260217'
    },
    {
        id: 'claude-haiku-4-5-20251001',
        name: 'Claude Haiku 4.5',
        provider: 'anthropic',
        endpoint: 'https://api.anthropic.com/v1/messages',
        model: 'claude-haiku-4-5-20251001'
    },
    // --- On-device Models ---
    {
        id: 'gemini-nano',
        name: 'Gemini Nano (On-device)',
        provider: 'on-device',
        browserOnly: 'chrome',
        onDeviceOnly: true,
        supportsTemperature: true
    },
    {
        id: 'phi-4-mini',
        name: 'Phi-4 Mini (On-device)',
        provider: 'on-device',
        browserOnly: 'edge',
        onDeviceOnly: true,
        supportsTemperature: true
    }
];

// Filter models available for the current browser
function getAvailableModels() {
    return AI_MODELS.filter(model => {
        if (!model.browserOnly) return true;
        if (model.browserOnly === 'chrome' && !isEdgeBrowser) return true;
        if (model.browserOnly === 'edge' && isEdgeBrowser) return true;
        return false;
    });
}

// ---- I18N START ----
let currentLang = 'en'; // Stores the currently active language code (e.g., 'en', 'ja')
let activeMessages = {}; // Holds the message bundle for the currentLang
// ---- I18N END ----

// DOM Elements
let domElements = {};

// --- Function Definitions ---
function updateStatus(messageKeyOrText, type = 'info', element = domElements.statusMessageArea) {
    if (!element) {
        console.warn("updateStatus: Target element is null. Message:", messageKeyOrText, "Type:", type);
        return;
    }

    let messageText = messageKeyOrText;
    // Check if it's a key and translate it
    if (typeof messageKeyOrText === 'string' && activeMessages.hasOwnProperty(messageKeyOrText)) {
        messageText = getTranslatedMessage(messageKeyOrText);
    } else if (typeof messageKeyOrText === 'string' && chrome.i18n.getMessage(messageKeyOrText)) {
        // Fallback for keys not yet in activeMessages (e.g. during init)
        messageText = chrome.i18n.getMessage(messageKeyOrText);
    }

    // Clear previous timeout if setting a new message on the main status bar
    if (element === domElements.statusMessageArea && domElements.statusMessageArea.timeoutId) {
        clearTimeout(domElements.statusMessageArea.timeoutId);
        domElements.statusMessageArea.timeoutId = null;
    }

    element.textContent = messageText;
    element.className = `status-message ${type}`; // Apply class for styling (e.g., error, success)

    // Auto-clear non-error messages from the main status bar after a delay
    if (element === domElements.statusMessageArea && messageText && type !== 'error') {
        domElements.statusMessageArea.timeoutId = setTimeout(() => {
            // Only clear if the message hasn't changed
            if (element.textContent === messageText) {
                element.textContent = '';
                element.className = 'status-message'; // Reset class
            }
            domElements.statusMessageArea.timeoutId = null;
        }, 5000); // 5 seconds
    }
}

function showPlaceholderIfNeeded() {
    if (generatedFiles.length === 0) {
        if(domElements.outputPanePlaceholder) {
            domElements.outputPanePlaceholder.textContent = getTranslatedMessage('outputPanePlaceholder');
            domElements.outputPanePlaceholder.style.display = 'block';
        }
        if(domElements.codeViewerPlaceholder) {
            domElements.codeViewerPlaceholder.textContent = getTranslatedMessage('codeViewerPlaceholder');
            domElements.codeViewerPlaceholder.style.display = 'block';
        }
        // Ensure code viewer itself is empty and unstyled if no files
        if(domElements.codeViewer) {
            domElements.codeViewer.textContent = '';
            domElements.codeViewer.className = ''; // Clear language class
        }
    } else {
        // Files are present
        if(domElements.outputPanePlaceholder) domElements.outputPanePlaceholder.style.display = 'none';
        // Show code viewer placeholder only if no file is selected in the tree
        if (domElements.fileTreeView && !domElements.fileTreeView.querySelector('li.selected')) {
            if(domElements.codeViewerPlaceholder) {
                domElements.codeViewerPlaceholder.textContent = getTranslatedMessage('codeViewerPlaceholder');
                domElements.codeViewerPlaceholder.style.display = 'block';
            }
        } else {
             if(domElements.codeViewerPlaceholder) domElements.codeViewerPlaceholder.style.display = 'none';
        }
    }
}

function getTranslatedMessage(key, substitutions) {
    let message = activeMessages[key];
    if (message === undefined) {
        // Fallback to chrome.i18n.getMessage if local cache fails (e.g. during init)
        message = chrome.i18n.getMessage(key, substitutions);
        // Special handling for language names as they might not be in messages.json if it's the default locale
        if (!message && key === "langEnglish") return "EN";
        if (!message && key === "langJapanese") return "日本語";
    }
    if (message && substitutions) {
        if (!Array.isArray(substitutions)) substitutions = [substitutions];
        for (let i = 0; i < substitutions.length; i++) {
            message = message.replace(new RegExp(`\\$${i + 1}\\$`, 'g'), substitutions[i]);
        }
    }
    return message || `_${key}_`; // Return key if not found, to help debugging
}

function updateButtonStates() {
    const isOnDeviceModel = selectedModel && selectedModel.provider === 'on-device';
    const hasApiKey = !!apiKey || isOnDeviceModel;
    const hasModel = !!selectedModel;
    const hasTextInInput = domElements.chatInputField ? domElements.chatInputField.value.trim() !== '' : false;
    const hasAttachedFiles = attachedFilesData.length > 0;
    const canSendMessage = hasTextInInput || hasAttachedFiles;
    const hasConversationHistory = conversationHistory.length > 0;

    if(domElements.sendMessageButton) domElements.sendMessageButton.disabled = !hasApiKey || !hasModel || !canSendMessage;
    if(domElements.generateExtensionButton) {
        const isOnDevice = selectedModel && selectedModel.onDeviceOnly;
        domElements.generateExtensionButton.disabled = isOnDevice || (!hasConversationHistory && !canSendMessage);
    }
    if(domElements.downloadZipButton) domElements.downloadZipButton.disabled = generatedFiles.length === 0;
    if(domElements.attachImageButton) domElements.attachImageButton.disabled = !hasApiKey || !hasModel;

    // Edit controls
    if (domElements.improveExtensionButton) {
        domElements.improveExtensionButton.disabled = generatedFiles.length === 0;
    }
    if (domElements.editFileButton) {
        domElements.editFileButton.disabled = !selectedFileForEdit || generatedFiles.length === 0;
    }
    if (domElements.copyFileButton) {
        domElements.copyFileButton.disabled = !selectedFileForEdit || generatedFiles.length === 0;
    }
    if (domElements.addFileButton) {
        domElements.addFileButton.disabled = generatedFiles.length === 0;
    }
    if (domElements.undoButton) {
        domElements.undoButton.disabled = undoStack.length === 0;
    }
    if (domElements.viewChangesButton) {
        domElements.viewChangesButton.disabled = lastEditDiffs.length === 0;
    }
    if (domElements.previewButton) {
        const hasPopupHtml = generatedFiles.some(f => f.name === 'popup.html');
        domElements.previewButton.disabled = !hasPopupHtml;
    }
}

function clearGeneratedFiles() {
    generatedFiles = []; // Clear the global state
    if(domElements.fileTreeView) domElements.fileTreeView.innerHTML = ''; // Clear UI
    if(domElements.codeViewer) {
      domElements.codeViewer.textContent = '';
      domElements.codeViewer.className = '';
    }
    showPlaceholderIfNeeded(); // Show relevant placeholders
    if(domElements.downloadZipButton) domElements.downloadZipButton.disabled = true; // Disable download
}

// --- Dark Mode Functions ---
function loadDarkModePreference() {
    chrome.storage.local.get(['darkMode'], result => {
        if (result.darkMode !== undefined) {
            // User has a saved preference — use it
            if (result.darkMode) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        } else {
            // No saved preference — detect system theme
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.body.classList.add('dark-mode');
                updateDarkModeIcon(true);
            }
        }
    });
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    chrome.storage.local.set({ darkMode: true });
    updateDarkModeIcon(true);
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    chrome.storage.local.set({ darkMode: false });
    updateDarkModeIcon(false);
}

function updateDarkModeIcon(isDarkMode) {
    if (!domElements.darkModeToggle) return;
    
    const sunIcon = domElements.darkModeToggle.querySelector('.sun-icon');
    const moonIcon = domElements.darkModeToggle.querySelector('.moon-icon');
    
    if (isDarkMode) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}


// ==========================================
// === ENHANCED EULA MANAGEMENT SYSTEM ===
// ==========================================

/**
 * Clear EULA cache and reset acceptance status
 */
function clearEulaCache() {
    eulaCache.clear();
    eulaAcceptanceStatus = null;
    pendingEulaAction = null;
    console.log('EULA cache cleared');
}

/**
 * Load EULA content for specified language with caching and fallback
 * @param {string} languageCode - Language code (e.g., 'en', 'ja', 'de')
 * @returns {Promise<Object>} EULA content object
 */
async function loadEULA(languageCode) {
    // Check cache first
    if (eulaCache.has(languageCode)) {
        console.log(`EULA loaded from cache for ${languageCode}`);
        return eulaCache.get(languageCode);
    }

    console.log(`Loading EULA for language: ${languageCode}`);
    
    try {
        const response = await fetch(`/_locales/${languageCode}/eula.json`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: Failed to load EULA for ${languageCode}`);
        }
        
        const eulaContent = await response.json();
        
        // Validate EULA content structure
        if (!eulaContent.title || !eulaContent.content || !eulaContent.version) {
            throw new Error(`Invalid EULA structure for ${languageCode}`);
        }
        
        // Cache the loaded content
        eulaCache.set(languageCode, eulaContent);
        console.log(`EULA successfully loaded and cached for ${languageCode}`);
        
        return eulaContent;
        
    } catch (error) {
        console.warn(`Failed to load EULA for ${languageCode}:`, error);
        
        // Fallback to English if not already trying English
        if (languageCode !== 'en') {
            console.log('Falling back to English EULA');
            try {
                const response = await fetch(`/_locales/en/eula.json`);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: Failed to load English EULA fallback`);
                }
                
                const eulaContent = await response.json();
                
                // Validate English EULA content
                if (!eulaContent.title || !eulaContent.content || !eulaContent.version) {
                    throw new Error('Invalid English EULA structure');
                }
                
                // Cache English content for both requested language and 'en'
                eulaCache.set('en', eulaContent);
                eulaCache.set(languageCode, eulaContent); // Cache as fallback
                console.log(`English EULA loaded as fallback for ${languageCode}`);
                
                return eulaContent;
                
            } catch (fallbackError) {
                console.error('Failed to load English EULA fallback:', fallbackError);
                throw new Error(`Failed to load EULA: ${error.message}. Fallback also failed: ${fallbackError.message}`);
            }
        } else {
            // Already trying English and it failed
            throw new Error(`Failed to load English EULA: ${error.message}`);
        }
    }
}

/**
 * Display EULA modal with content and setup event handlers
 * @param {Object} eulaContent - EULA content object from loadEULA
 */
function showEULAModal(eulaContent) {
    if (!domElements.eulaModal) {
        console.error('EULA modal element not found');
        return;
    }

    console.log('Showing EULA modal for version:', eulaContent.version);

    try {
        // Populate EULA content
        if (domElements.eulaTitle) {
            domElements.eulaTitle.textContent = eulaContent.title;
        }
        
        if (domElements.eulaContent) {
            // Create properly formatted content
            domElements.eulaContent.innerHTML = `<pre>${eulaContent.content}</pre>`;
        }
        
        if (domElements.eulaVersionInfo) {
            domElements.eulaVersionInfo.textContent = `Version ${eulaContent.version} - Last updated: ${eulaContent.lastUpdated}`;
        }
        
        // Set language selector to current language
        if (domElements.eulaLanguageSelect) {
            domElements.eulaLanguageSelect.value = eulaContent.language_code || currentLang;
        }

        // Reset checkbox and button state
        if (domElements.eulaAcceptCheckbox) {
            domElements.eulaAcceptCheckbox.checked = false;
        }
        
        if (domElements.eulaAcceptButton) {
            domElements.eulaAcceptButton.disabled = true;
        }

        // Show modal with fade effect
        domElements.eulaModal.style.display = 'block';
        
        // Add keyboard event listener for modal
        document.addEventListener('keydown', handleEulaModalKeydown);
        
        // Focus on the modal for accessibility
        domElements.eulaModal.focus();
        
        console.log('EULA modal displayed successfully');
        
    } catch (error) {
        console.error('Error displaying EULA modal:', error);
        updateStatus('Failed to display EULA', 'error');
    }
}

/**
 * Hide EULA modal and cleanup event handlers
 */
function hideEULAModal() {
    if (domElements.eulaModal) {
        domElements.eulaModal.style.display = 'none';
        document.removeEventListener('keydown', handleEulaModalKeydown);
        console.log('EULA modal hidden');
    }
}

/**
 * Handle keyboard events in EULA modal (ESC to close)
 * @param {KeyboardEvent} event 
 */
function handleEulaModalKeydown(event) {
    if (event.key === 'Escape') {
        // Only allow ESC to close the modal if EULA is already accepted
        // (i.e., user opened it from the Terms of Service link to re-read it)
        if (eulaAcceptanceStatus && eulaAcceptanceStatus.accepted && eulaAcceptanceStatus.eulaVersion === '2.3') {
            hideEULAModal();
            pendingEulaAction = null;
        } else {
            // EULA not accepted — ESC should close the popup, same as Decline
            window.close();
        }
    }
}

/**
 * Handle EULA language change in the modal
 */
async function handleEULALanguageChange() {
    if (!domElements.eulaLanguageSelect) return;
    
    const selectedLanguage = domElements.eulaLanguageSelect.value;
    console.log(`Changing EULA language to: ${selectedLanguage}`);
    
    try {
        // Show loading state
        if (domElements.eulaContent) {
            domElements.eulaContent.innerHTML = '<div style="text-align: center; padding: 20px; color: #666;">Loading...</div>';
        }
        
        const eulaContent = await loadEULA(selectedLanguage);
        
        // Update content without reshowing modal
        if (domElements.eulaTitle) {
            domElements.eulaTitle.textContent = eulaContent.title;
        }
        
        if (domElements.eulaContent) {
            domElements.eulaContent.innerHTML = `<pre>${eulaContent.content}</pre>`;
        }
        
        if (domElements.eulaVersionInfo) {
            domElements.eulaVersionInfo.textContent = `Version ${eulaContent.version} - Last updated: ${eulaContent.lastUpdated}`;
        }

        // Update EULA modal UI elements from the selected language's messages.json
        try {
            const msgsResponse = await fetch(`/_locales/${selectedLanguage}/messages.json`);
            if (msgsResponse.ok) {
                const msgsData = await msgsResponse.json();
                const eulaModalKeys = ['eulaAgreeCheckbox', 'eulaAcceptButton', 'eulaDeclineButton', 'eulaLanguageLabel'];
                eulaModalKeys.forEach(key => {
                    if (msgsData[key] && msgsData[key].message) {
                        const el = document.querySelector(`[data-i18n="${key}"]`);
                        if (el) el.textContent = msgsData[key].message;
                    }
                });
            }
        } catch (_) { /* Fall through — EULA content already updated above */ }

        console.log(`EULA language changed to ${selectedLanguage} successfully`);
        
    } catch (error) {
        console.error('Failed to change EULA language:', error);
        updateStatus('Failed to load EULA in selected language', 'error');
        
        // Restore error message in content area
        if (domElements.eulaContent) {
            domElements.eulaContent.innerHTML = `<div style="text-align: center; padding: 20px; color: #e53e3e;">Failed to load EULA content</div>`;
        }
    }
}

/**
 * Handle EULA acceptance process
 */
async function handleEULAAccept() {
    if (!domElements.eulaLanguageSelect) return;
    
    const selectedLanguage = domElements.eulaLanguageSelect.value;
    console.log(`Accepting EULA version 2.0 in language: ${selectedLanguage}`);

    try {
        showLoading('Accepting EULA...', 'generation');

        const response = await acceptEULA('2.3', selectedLanguage);

        if (response.accepted) {
            // Update cached acceptance status
            eulaAcceptanceStatus = {
                accepted: true,
                eulaVersion: '2.3',
                language_code: selectedLanguage,
                accepted_at: new Date().toISOString()
            };
            
            hideEULAModal();
            updateStatus('EULA accepted successfully', 'success');

            console.log('EULA accepted successfully');

            // Sync EULA language selection to main UI
            const eulaLang = domElements.eulaLanguageSelect?.value;
            if (eulaLang && eulaLang !== currentLang) {
                switchLanguage(eulaLang);
                if (domElements.languageSwitcher) {
                    domElements.languageSwitcher.value = eulaLang;
                }
            }

            // Execute pending action if any
            if (pendingEulaAction) {
                console.log('Executing pending action after EULA acceptance');
                const action = pendingEulaAction;
                pendingEulaAction = null;
                
                // Delay execution slightly to allow UI updates
                setTimeout(() => {
                    if (action === 'generate') {
                        handleGenerateExtension();
                    }
                }, 1000);
            }
            
        } else {
            throw new Error(response.error || 'EULA acceptance failed');
        }
        
    } catch (error) {
        console.error('EULA acceptance failed:', error);
        updateStatus(`EULA acceptance failed: ${error.message}`, 'error');
        
        // Keep modal open on error so user can try again
        
    } finally {
        hideLoading();
    }
}

/**
 * Check EULA acceptance status from local chrome.storage.local
 * @returns {Promise<Object>} EULA status object
 */
async function checkEULAStatus() {
    // Return cached status if available
    if (eulaAcceptanceStatus && eulaAcceptanceStatus.accepted) {
        console.log('Returning cached EULA status');
        return eulaAcceptanceStatus;
    }

    console.log('Checking EULA status from local storage');

    return new Promise((resolve) => {
        chrome.storage.local.get(['eulaAccepted', 'eulaVersion', 'eulaLanguage', 'eulaAcceptedAt'], (result) => {
            eulaAcceptanceStatus = {
                accepted: !!result.eulaAccepted,
                eulaVersion: result.eulaVersion || null,
                language_code: result.eulaLanguage || null,
                accepted_at: result.eulaAcceptedAt || null
            };
            console.log('EULA status retrieved:', eulaAcceptanceStatus);
            resolve(eulaAcceptanceStatus);
        });
    });
}

/**
 * Accept EULA via local chrome.storage.local
 * @param {string} version - EULA version (e.g., '2.0')
 * @param {string} languageCode - Language code of accepted EULA
 * @returns {Promise<Object>} Acceptance response
 */
async function acceptEULA(version, languageCode) {
    console.log(`Accepting EULA version ${version} in ${languageCode}`);

    return new Promise((resolve, reject) => {
        chrome.storage.local.set({
            eulaAccepted: true,
            eulaVersion: version,
            eulaLanguage: languageCode,
            eulaAcceptedAt: new Date().toISOString()
        }, () => {
            if (chrome.runtime.lastError) {
                console.error('EULA acceptance failed:', chrome.runtime.lastError);
                reject(new Error(chrome.runtime.lastError.message));
            } else {
                console.log('EULA acceptance saved locally');
                resolve({ accepted: true });
            }
        });
    });
}

/**
 * Validate EULA requirement before allowing extension generation
 * @returns {Promise<boolean>} True if EULA is accepted, false if EULA modal was shown
 */
async function validateEulaForGeneration() {
    try {
        console.log('Validating EULA for generation');

        const eulaStatus = await checkEULAStatus();

        if (eulaStatus.accepted && eulaStatus.eulaVersion === '2.3') {
            console.log('EULA validation passed');
            return true;
        }

        console.log('EULA acceptance required, showing modal');

        // Store the action to perform after EULA acceptance
        pendingEulaAction = 'generate';

        // Load and show EULA modal
        const eulaContent = await loadEULA(currentLang);
        showEULAModal(eulaContent);

        return false; // Generation blocked until EULA accepted

    } catch (error) {
        console.error('EULA validation failed:', error);
        updateStatus(`EULA validation failed: ${error.message}`, 'error');
        return false;
    }
}

/**
 * Check EULA status on startup and show modal immediately if not accepted.
 * Called during DOMContentLoaded initialization.
 */
async function checkAndShowEulaOnStartup() {
    try {
        console.log('Checking EULA status on startup');
        const eulaStatus = await checkEULAStatus();

        // Check if EULA has been accepted for the current version
        if (eulaStatus.accepted && eulaStatus.eulaVersion === '2.3') {
            console.log('EULA already accepted for current version, skipping modal');
            return;
        }

        console.log('EULA not accepted for current version, showing modal on startup');

        // Load and show EULA modal immediately
        const eulaContent = await loadEULA(currentLang);
        showEULAModal(eulaContent);

    } catch (error) {
        console.error('Failed to check EULA on startup:', error);
        // Don't block the app if EULA check fails — the generation check is still a safety net
    }
}

/**
 * Preload EULA for current language (optional optimization)
 * Called during initialization to cache EULA content
 */
async function preloadEulaForCurrentLanguage() {
    try {
        console.log(`Preloading EULA for ${currentLang}`);
        await loadEULA(currentLang);
        console.log('EULA preloaded successfully');
    } catch (error) {
        console.warn('Failed to preload EULA:', error);
        // Non-critical error, don't show to user
    }
}

// ==========================================
// === END EULA MANAGEMENT SYSTEM ===
// ==========================================

// --- Help Modal Functions ---
function showHelpModal() {
    if (domElements.helpModal) {
        domElements.helpModal.style.display = 'block';
        console.log('Help modal shown');
    }
}

function hideHelpModal() {
    if (domElements.helpModal) {
        domElements.helpModal.style.display = 'none';
        console.log('Help modal hidden');
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM fully loaded and parsed");
    cacheDomElements();
    loadDarkModePreference();

    const storageResult = await new Promise(resolve =>
        chrome.storage.local.get(['userPreferredLanguage'], resolve)
    );

    const preferredLang = storageResult.userPreferredLanguage;
    const browserLang = chrome.i18n.getUILanguage().split('-')[0] || 'en';
    const supportedLangs = ['en', 'ja', 'es', 'fr', 'ko', 'zh', 'de', 'pt', 'it'];

    if (preferredLang && supportedLangs.includes(preferredLang)) {
        currentLang = preferredLang;
    } else if (supportedLangs.includes(browserLang)) {
        currentLang = browserLang;
    } else {
        currentLang = 'en';
    }

    if (domElements.languageSwitcher) {
        domElements.languageSwitcher.value = currentLang;
    }

    await initLocalization();

    // Show main app directly — no auth required
    loadApiKey();
    await loadCustomModel();
    loadSelectedModel();
    setupEventListeners();
    setupCombobox();
    updateButtonStates();
    showPlaceholderIfNeeded();

    // Check EULA acceptance on startup — show modal immediately if not accepted
    await checkAndShowEulaOnStartup();

    // Load the most recent project from IndexedDB
    await loadLastProject();

    console.log("NuModeX Ext Maker initialization complete.");
});

function cacheDomElements() {
    console.log("cacheDomElements: Caching DOM elements...");
    domElements = {
        // Project picker elements
        projectSelector: document.getElementById('project-selector'),
        newProjectButton: document.getElementById('new-project-button'),
        projectActionsButton: document.getElementById('project-actions-button'),
        projectActionsMenu: document.getElementById('project-actions-menu'),
        renameProjectButton: document.getElementById('rename-project-button'),
        deleteProjectButton: document.getElementById('delete-project-button'),
        // Existing elements
        languageSwitcher: document.getElementById('language-switcher'),
        settingsButton: document.getElementById('settings-button'),
        darkModeToggle: document.getElementById('dark-mode-toggle'),
        apiKeySection: document.getElementById('api-key-section'),
        apiKeyInput: document.getElementById('api-key-input'),
        saveApiKeyButton: document.getElementById('save-api-key-button'),
        deleteApiKeyButton: document.getElementById('delete-api-key-button'),
        apiKeyStatus: document.getElementById('api-key-status'),
        closeApiModalButton: document.getElementById('close-api-modal'),
        conversationDisplayArea: document.getElementById('conversation-display-area'),
        imagePreviewArea: document.getElementById('image-preview-area'),
        attachImageButton: document.getElementById('attach-image-button'),
        imageInputField: document.getElementById('image-input-field'),
        chatInputField: document.getElementById('chat-input-field'),
        sendMessageButton: document.getElementById('send-message-button'),
        generateExtensionButton: document.getElementById('generate-extension-button'),
        outputPanePlaceholder: document.getElementById('output-pane-placeholder'),
        fileTreeView: document.getElementById('file-tree-view'),
        codeViewer: document.getElementById('code-viewer'),
        codeViewerPlaceholder: document.getElementById('code-viewer-placeholder'),
        downloadZipButton: document.getElementById('download-zip-button'),
        startOverButton: document.getElementById('start-over-button'),
        loadingIndicator: document.getElementById('loading-indicator'),
        statusMessageArea: document.getElementById('status-message-area'),
        
        // Combobox elements
        modelSearchInput: document.getElementById('model-search-input'),
        modelDropdownToggle: document.getElementById('model-dropdown-toggle'),
        modelDropdown: document.getElementById('model-dropdown'),
        // EULA modal elements
        eulaModal: document.getElementById('eula-modal'),
        eulaTitle: document.getElementById('eula-title'),
        eulaContent: document.getElementById('eula-content'),
        eulaVersionInfo: document.getElementById('eula-version-info'),
        eulaLanguageSelect: document.getElementById('eula-language'),
        eulaAcceptCheckbox: document.getElementById('eula-accept-checkbox'),
        eulaAcceptButton: document.getElementById('eula-accept-button'),
        eulaDeclineButton: document.getElementById('eula-decline-button'),
        
        // Help modal elements
        helpButton: document.getElementById('help-button'),
        helpModal: document.getElementById('help-modal'),
        closeHelpModal: document.getElementById('close-help-modal'),
        helpCloseButton: document.getElementById('help-close-button'),

        // Incremental editing elements
        improveExtensionButton: document.getElementById('improve-extension-button'),
        improvePromptArea: document.getElementById('improve-prompt-area'),
        improvePromptInput: document.getElementById('improve-prompt-input'),
        applyImproveButton: document.getElementById('apply-improve-button'),
        cancelImproveButton: document.getElementById('cancel-improve-button'),
        editFileButton: document.getElementById('edit-file-button'),
        addFileButton: document.getElementById('add-file-button'),
        undoButton: document.getElementById('undo-button'),
        editPromptArea: document.getElementById('edit-prompt-area'),
        editPromptInput: document.getElementById('edit-prompt-input'),
        applyEditButton: document.getElementById('apply-edit-button'),
        cancelEditButton: document.getElementById('cancel-edit-button'),
        addFileArea: document.getElementById('add-file-area'),
        newFileNameInput: document.getElementById('new-file-name-input'),
        addFilePromptInput: document.getElementById('add-file-prompt-input'),
        createFileButton: document.getElementById('create-file-button'),
        cancelAddFileButton: document.getElementById('cancel-add-file-button'),
        codeViewerContainer: document.getElementById('code-viewer-container'),

        // Diff modal elements
        diffModal: document.getElementById('diff-modal'),
        diffModalTitle: document.getElementById('diff-modal-title'),
        diffContainer: document.getElementById('diff-container'),
        diffFileTabs: document.getElementById('diff-file-tabs'),
        diffToggleView: document.getElementById('diff-toggle-view'),
        closeDiffModal: document.getElementById('close-diff-modal'),
        viewChangesButton: document.getElementById('view-changes-button'),

        // More actions dropdown
        moreActionsButton: document.getElementById('more-actions-button'),
        moreActionsDropdown: document.getElementById('more-actions-dropdown'),
        copyFileButton: document.getElementById('copy-file-button'),

        // Preview modal elements
        previewButton: document.getElementById('preview-button'),
        previewModal: document.getElementById('preview-modal'),
        previewIframe: document.getElementById('preview-iframe'),
        closePreviewModal: document.getElementById('close-preview-modal'),

        // Custom model elements
        customEndpointInput: document.getElementById('custom-endpoint-input'),
        customModelNameInput: document.getElementById('custom-model-name-input'),
        customApiKeyInput: document.getElementById('custom-api-key-input'),
        saveCustomModelButton: document.getElementById('save-custom-model-button'),
        deleteCustomModelButton: document.getElementById('delete-custom-model-button'),
        customModelStatus: document.getElementById('custom-model-status'),

        // Import project elements
        importProjectButton: document.getElementById('import-project-button'),
        importFileInput: document.getElementById('import-file-input'),
    };
    console.log("cacheDomElements: Caching complete.");
}

// --- Custom Model ---
async function loadCustomModel() {
    return new Promise(resolve => {
        chrome.storage.local.get(['customModel'], result => {
            if (result.customModel && result.customModel.endpoint && result.customModel.modelName) {
                // Remove any existing custom model from the array first
                const existingIndex = AI_MODELS.findIndex(m => m.id === 'custom-local');
                if (existingIndex !== -1) AI_MODELS.splice(existingIndex, 1);

                // Add the custom model
                AI_MODELS.push({
                    id: 'custom-local',
                    name: `Custom: ${result.customModel.modelName}`,
                    provider: 'openai',
                    endpoint: result.customModel.endpoint,
                    model: result.customModel.modelName,
                    isCustom: true,
                    customApiKey: result.customModel.apiKey || ''
                });

                // Populate the settings fields
                if (domElements.customEndpointInput) domElements.customEndpointInput.value = result.customModel.endpoint;
                if (domElements.customModelNameInput) domElements.customModelNameInput.value = result.customModel.modelName;
                if (domElements.customApiKeyInput) domElements.customApiKeyInput.value = result.customModel.apiKey || '';
                if (domElements.deleteCustomModelButton) domElements.deleteCustomModelButton.disabled = false;
            }
            resolve();
        });
    });
}

function saveCustomModel() {
    const endpoint = domElements.customEndpointInput?.value.trim();
    const modelName = domElements.customModelNameInput?.value.trim();
    const customApiKey = domElements.customApiKeyInput?.value.trim();

    if (!endpoint || !modelName) {
        updateStatus(getTranslatedMessage('customModelMissingFields') || 'Please enter both an endpoint URL and model name.', 'error', domElements.customModelStatus);
        return;
    }

    // Basic URL validation
    try {
        new URL(endpoint);
    } catch (e) {
        updateStatus(getTranslatedMessage('customModelInvalidUrl') || 'Please enter a valid URL.', 'error', domElements.customModelStatus);
        return;
    }

    const customModel = { endpoint, modelName, apiKey: customApiKey };

    chrome.storage.local.set({ customModel }, () => {
        if (chrome.runtime.lastError) {
            updateStatus('Error saving custom model.', 'error', domElements.customModelStatus);
            return;
        }

        // Remove any existing custom model from the array
        const existingIndex = AI_MODELS.findIndex(m => m.id === 'custom-local');
        if (existingIndex !== -1) AI_MODELS.splice(existingIndex, 1);

        // Add the updated custom model
        AI_MODELS.push({
            id: 'custom-local',
            name: `Custom: ${modelName}`,
            provider: 'openai',
            endpoint: endpoint,
            model: modelName,
            isCustom: true,
            customApiKey: customApiKey
        });

        if (domElements.deleteCustomModelButton) domElements.deleteCustomModelButton.disabled = false;
        updateStatus(getTranslatedMessage('customModelSaved') || 'Custom model saved.', 'success', domElements.customModelStatus);

        // Clear status after delay
        setTimeout(() => {
            if (domElements.customModelStatus) updateStatus('', 'info', domElements.customModelStatus);
        }, 2000);
    });
}

function deleteCustomModel() {
    chrome.storage.local.remove('customModel', () => {
        // Remove from AI_MODELS array
        const existingIndex = AI_MODELS.findIndex(m => m.id === 'custom-local');
        if (existingIndex !== -1) AI_MODELS.splice(existingIndex, 1);

        // Clear inputs
        if (domElements.customEndpointInput) domElements.customEndpointInput.value = '';
        if (domElements.customModelNameInput) domElements.customModelNameInput.value = '';
        if (domElements.customApiKeyInput) domElements.customApiKeyInput.value = '';
        if (domElements.deleteCustomModelButton) domElements.deleteCustomModelButton.disabled = true;

        // If the custom model was currently selected, deselect it
        if (selectedModel && selectedModel.id === 'custom-local') {
            selectedModel = null;
        }

        updateStatus(getTranslatedMessage('customModelDeleted') || 'Custom model deleted.', 'success', domElements.customModelStatus);
        setTimeout(() => {
            if (domElements.customModelStatus) updateStatus('', 'info', domElements.customModelStatus);
        }, 2000);
    });
}

// --- I18n ---
async function initLocalization() {
    console.log(`initLocalization: Initializing localization for language: ${currentLang}`);
    await updateMessagesForLanguage(currentLang);
    applyLocalization();
    console.log("initLocalization: Localization applied.");
}

async function updateMessagesForLanguage(lang) {
    console.log(`updateMessagesForLanguage: Fetching messages for ${lang}`);
    try {
        const response = await fetch(`/_locales/${lang}/messages.json`);
        if (!response.ok) {
            console.error(`Failed to load messages for ${lang}: ${response.statusText}. Falling back to 'en'.`);
            if (lang !== 'en') {
                await updateMessagesForLanguage('en');
            } else {
                activeMessages = {}; currentLang = 'en';
            }
            return;
        }
        const messagesData = await response.json();
        activeMessages = {};
        for (const key in messagesData) {
            if (messagesData[key] && messagesData[key].message) {
                activeMessages[key] = messagesData[key].message;
            }
        }
        currentLang = lang;
        console.log(`updateMessagesForLanguage: Messages loaded for ${lang}`);
    } catch (error) {
        console.error(`Error fetching messages for ${lang}:`, error, ". Falling back to 'en'.");
        if (lang !== 'en') {
            await updateMessagesForLanguage('en');
        } else {
            activeMessages = {}; currentLang = 'en';
        }
    }
}

function applyLocalization() {
    console.log(`applyLocalization: Applying translations for ${currentLang}`);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const message = getTranslatedMessage(key);
        if (message || el.tagName.toLowerCase() === 'option') el.textContent = message;
        else if (!message) console.warn(`applyLocalization: No message found for key (data-i18n): ${key}`);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const message = getTranslatedMessage(key);
        if (message) el.placeholder = message;
        else console.warn(`applyLocalization: No message found for key (data-i18n-placeholder): ${key}`);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        const message = getTranslatedMessage(key);
        if (message) el.setAttribute('aria-label', message);
        else console.warn(`applyLocalization: No message found for key (data-i18n-aria): ${key}`);
    });
    if (domElements.chatInputField) {
      domElements.chatInputField.placeholder = getTranslatedMessage('chatInputPlaceholder') || domElements.chatInputField.placeholder;
    }
    if (domElements.modelSearchInput) {
      domElements.modelSearchInput.placeholder = getTranslatedMessage('selectAiModel') || domElements.modelSearchInput.placeholder;
    }
    showPlaceholderIfNeeded(); // Update placeholders with new lang
    // Update copyright year dynamically: floor at 2026, use current year if higher
    const copyrightEl = document.getElementById('copyright-notice');
    if (copyrightEl) {
        const copyrightYear = Math.max(2026, new Date().getFullYear());
        copyrightEl.textContent = copyrightEl.textContent.replace(/© \d{4}/, `© ${copyrightYear}`);
    }
}

async function switchLanguage(lang) {
    console.log(`switchLanguage: Switching to language: ${lang}`);
    if (domElements.languageSwitcher) domElements.languageSwitcher.value = lang;
    await updateMessagesForLanguage(lang);
    applyLocalization();
    chrome.storage.local.set({ userPreferredLanguage: lang });

    // Clear EULA cache when language changes to force reload
    clearEulaCache();
    
    // Preload EULA for new language
    preloadEulaForCurrentLanguage();

    // Update API key status message after language switch
    if (domElements.apiKeyStatus) {
        const isModalVisible = domElements.apiKeySection && domElements.apiKeySection.style.display !== 'none';
        if (apiKey) updateStatus('apiKeyLoadedFeedback', isModalVisible ? 'info' : 'success', domElements.apiKeyStatus);
        else updateStatus('apiKeyMissing', 'error', domElements.apiKeyStatus);

        if (isModalVisible) {
            // If modal is visible, we might want to clear the status after a bit, or let it persist
            // For now, let it persist while modal is open.
        } else {
            // If modal is not visible, clear non-error status messages after a delay
             if (domElements.apiKeyStatus && (domElements.apiKeyStatus.textContent === getTranslatedMessage('apiKeyLoadedFeedback'))) {
                setTimeout(() => {
                    if (domElements.apiKeyStatus.textContent === getTranslatedMessage('apiKeyLoadedFeedback')) {
                       updateStatus('', 'info', domElements.apiKeyStatus); // Clear it
                    }
                }, 3000);
            }
        }
    }
    updateButtonStates(); // Update button text/states if needed
}

// --- Model Selection ---
function loadSelectedModel() {
    console.log("loadSelectedModel: Loading selected model...");
    chrome.storage.local.get(['selectedAiModel'], result => {
        if (chrome.runtime.lastError) {
            console.error("loadSelectedModel: Error loading model from storage:", chrome.runtime.lastError.message);
            return;
        }
        if (result.selectedAiModel) {
            const availableModels = getAvailableModels();
            const model = availableModels.find(m => m.id === result.selectedAiModel);
            if (model) {
                selectModel(model);
                console.log("loadSelectedModel: Model loaded from storage:", model.name);
            } else {
                console.warn("loadSelectedModel: Saved model '" + result.selectedAiModel + "' not found. Falling back to default.");
                if (availableModels.length > 0) {
                    selectModel(availableModels[0]);
                }
            }
        }
    });
}

function selectModel(model) {
    selectedModel = model;
    chrome.storage.local.set({ selectedAiModel: model.id });

    // Update UI
    if (domElements.modelSearchInput) {
        domElements.modelSearchInput.value = model.name;
    }

    // Disable/enable Build Extension button for on-device models
    if (domElements.generateExtensionButton) {
        if (model.onDeviceOnly) {
            domElements.generateExtensionButton.disabled = true;
            domElements.generateExtensionButton.title = getTranslatedMessage('onDeviceBuildDisabled') || 'On-device models can only be used for chat and editing. Select a cloud model to build extensions.';
        } else {
            domElements.generateExtensionButton.title = '';
        }
    }

    updateButtonStates();
}

function clearModelSelection() {
    selectedModel = null;
    chrome.storage.local.remove('selectedAiModel');
    
    // Update UI
    if (domElements.modelSearchInput) {
        domElements.modelSearchInput.value = '';
    }
    updateButtonStates();
}

// --- Combobox Setup ---
function setupCombobox() {
    if (!domElements.modelSearchInput || !domElements.modelDropdown || !domElements.modelDropdownToggle) {
        console.error("setupCombobox: Required combobox elements not found");
        return;
    }

    let currentHighlight = -1;
    let isOpen = false;

    // Create dropdown options
    function renderDropdown(filter = '') {
        domElements.modelDropdown.innerHTML = '';
        currentHighlight = -1;

        const filteredModels = getAvailableModels().filter(model =>
            model.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredModels.length === 0) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'dropdown-empty';
            emptyDiv.textContent = 'No results found';
            domElements.modelDropdown.appendChild(emptyDiv);
            return;
        }

        filteredModels.forEach((model, index) => {
            const option = document.createElement('div');
            option.className = 'dropdown-option';
            option.setAttribute('role', 'option');
            option.dataset.modelId = model.id;

            if (selectedModel && selectedModel.id === model.id) {
                option.classList.add('selected');
            }

            // Highlight matching text
            if (filter) {
                const regex = new RegExp(`(${filter})`, 'gi');
                option.innerHTML = model.name.replace(regex, '<mark>$1</mark>');
            } else {
                option.textContent = model.name;
            }

            option.addEventListener('click', () => {
                selectModel(model);
                closeDropdown();
            });

            option.addEventListener('mouseenter', () => {
                setHighlight(index);
            });

            domElements.modelDropdown.appendChild(option);
        });
    }

    function openDropdown() {
        isOpen = true;
        domElements.modelDropdown.classList.add('show');
        domElements.modelDropdownToggle.classList.add('expanded');
        domElements.modelSearchInput.setAttribute('aria-expanded', 'true');
        renderDropdown(domElements.modelSearchInput.value);
    }

    function closeDropdown() {
        isOpen = false;
        domElements.modelDropdown.classList.remove('show');
        domElements.modelDropdownToggle.classList.remove('expanded');
        domElements.modelSearchInput.setAttribute('aria-expanded', 'false');
        currentHighlight = -1;
    }

    function setHighlight(index) {
        const options = domElements.modelDropdown.querySelectorAll('.dropdown-option');
        options.forEach((opt, i) => {
            if (i === index) {
                opt.classList.add('highlighted');
            } else {
                opt.classList.remove('highlighted');
            }
        });
        currentHighlight = index;
    }

    // Event listeners
    domElements.modelSearchInput.addEventListener('focus', openDropdown);
    
    domElements.modelSearchInput.addEventListener('input', (e) => {
        openDropdown();
        renderDropdown(e.target.value);
    });

    domElements.modelSearchInput.addEventListener('keydown', (e) => {
        const options = domElements.modelDropdown.querySelectorAll('.dropdown-option');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (!isOpen) openDropdown();
                setHighlight(Math.min(currentHighlight + 1, options.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlight(Math.max(currentHighlight - 1, 0));
                break;
            case 'Enter':
                e.preventDefault();
                if (currentHighlight >= 0 && options[currentHighlight]) {
                    const modelId = options[currentHighlight].dataset.modelId;
                    const model = getAvailableModels().find(m => m.id === modelId);
                    if (model) {
                        selectModel(model);
                        closeDropdown();
                    }
                }
                break;
            case 'Escape':
                closeDropdown();
                domElements.modelSearchInput.blur();
                break;
        }
    });

    domElements.modelDropdownToggle.addEventListener('click', () => {
        if (isOpen) {
            closeDropdown();
        } else {
            openDropdown();
            domElements.modelSearchInput.focus();
        }
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#model-selection-container') && isOpen) {
            closeDropdown();
        }
    });
}

// --- API Key Management ---
function loadApiKey() {
    console.log("loadApiKey: Loading API key...");
    chrome.storage.local.get(['geminiApiKey'], result => {
        if (chrome.runtime.lastError) {
            console.error("loadApiKey: Error loading API key from storage:", chrome.runtime.lastError.message);
            updateStatus("Error loading API key.", 'error', domElements.apiKeyStatus);
            updateButtonStates();
            return;
        }
        if (result.geminiApiKey) {
            apiKey = result.geminiApiKey;
            if (domElements.apiKeyInput) domElements.apiKeyInput.value = apiKey;
            updateStatus('apiKeyLoadedFeedback', 'success', domElements.apiKeyStatus);
            console.log("loadApiKey: API key loaded from storage.");
            if (domElements.deleteApiKeyButton) domElements.deleteApiKeyButton.disabled = false;
            // Clear success message after a delay if modal is not open
            if (domElements.apiKeySection && domElements.apiKeySection.style.display === 'none') {
                setTimeout(() => {
                    if (domElements.apiKeyStatus && (domElements.apiKeyStatus.textContent === getTranslatedMessage('apiKeyLoadedFeedback'))) {
                        updateStatus('', 'info', domElements.apiKeyStatus);
                    }
                }, 3000);
            }
        } else {
            updateStatus('apiKeyMissing', 'error', domElements.apiKeyStatus);
            console.log("loadApiKey: API key not found in storage.");
            if (domElements.deleteApiKeyButton) domElements.deleteApiKeyButton.disabled = true;
        }
        updateButtonStates();
    });
}

function saveApiKey() {
    console.log("saveApiKey: Attempting to save API key...");
    if (!domElements.apiKeyInput) {
        console.error("saveApiKey: apiKeyInput element not found.");
        return;
    }
    const newApiKey = domElements.apiKeyInput.value.trim();
    if (newApiKey) {
        apiKey = newApiKey;
        chrome.storage.local.set({ geminiApiKey: apiKey }, () => {
            if (chrome.runtime.lastError) {
                console.error("saveApiKey: Error saving API key:", chrome.runtime.lastError.message);
                updateStatus("Error saving API key.", 'error', domElements.apiKeyStatus);
                return;
            }
            updateStatus('apiKeySavedFeedback', 'success', domElements.apiKeyStatus);
            console.log("saveApiKey: API key saved.");
            if (domElements.deleteApiKeyButton) domElements.deleteApiKeyButton.disabled = false;
            setTimeout(() => {
                if (domElements.apiKeySection) domElements.apiKeySection.style.display = 'none';
                // Clear the main status bar's API key message if it was the "saved" one
                 if (domElements.statusMessageArea && (domElements.statusMessageArea.textContent === getTranslatedMessage('apiKeySavedFeedback'))) {
                     updateStatus('', 'info', domElements.statusMessageArea);
                }
                // Also ensure modal status is clear or reflects current state
                if (domElements.apiKeyStatus && (domElements.apiKeyStatus.textContent === getTranslatedMessage('apiKeySavedFeedback'))) {
                     updateStatus('', 'info', domElements.apiKeyStatus);
                }
            }, 1500);
            updateButtonStates();
        });
    } else {
        apiKey = ''; // Clear the runtime API key
        chrome.storage.local.remove('geminiApiKey', () => {
            if (chrome.runtime.lastError) console.error("saveApiKey: Error removing API key:", chrome.runtime.lastError.message);
            updateStatus('apiKeyMissing', 'error', domElements.apiKeyStatus); // Show missing in modal
            console.log("saveApiKey: API key cleared from input and storage.");
        });
        updateButtonStates(); // Reflect that API key is now missing
    }
}

function deleteApiKey() {
    // Clear the stored key
    apiKey = '';
    chrome.storage.local.remove('geminiApiKey');

    // Clear the input field
    if (domElements.apiKeyInput) {
        domElements.apiKeyInput.value = '';
    }

    // Show feedback
    updateStatus(getTranslatedMessage('apiKeyDeletedFeedback') || 'API Key deleted.', 'success', domElements.apiKeyStatus);

    // Update button states
    updateButtonStates();

    // Disable delete button since key is now empty
    if (domElements.deleteApiKeyButton) {
        domElements.deleteApiKeyButton.disabled = true;
    }
}

function toggleApiKeySection() {
    console.log("toggleApiKeySection: Called.");
    if (!domElements.apiKeySection) {
        console.error("toggleApiKeySection: API Key Section element is null.");
        return;
    }
    const isHidden = domElements.apiKeySection.style.display === 'none' || domElements.apiKeySection.style.display === '';
    domElements.apiKeySection.style.display = isHidden ? 'block' : 'none';

    if (isHidden) { // Modal is now visible
        if (domElements.apiKeyInput) domElements.apiKeyInput.focus();
        // Update status within the modal
        if (domElements.apiKeyStatus) {
            if (apiKey) updateStatus('apiKeyLoadedFeedback', 'info', domElements.apiKeyStatus);
            else updateStatus('apiKeyMissing', 'error', domElements.apiKeyStatus);
        }
        // Update delete button state based on whether key exists
        if (domElements.deleteApiKeyButton) {
            domElements.deleteApiKeyButton.disabled = !apiKey;
        }
    } else { // Modal is now hidden
        // Clear specific modal status, or main status if it was about API key
        if (domElements.apiKeyStatus && (domElements.apiKeyStatus.textContent === getTranslatedMessage('apiKeyLoadedFeedback') || domElements.apiKeyStatus.textContent === getTranslatedMessage('apiKeyMissing'))) {
            updateStatus('', 'info', domElements.apiKeyStatus);
        }
        // Optionally, if a general API key message was in main status, clear it or update it
        loadApiKey(); // Re-check and display status in main bar if needed
    }
}

// --- Chat & Interaction ---
function handleSendMessage() {
    const text = domElements.chatInputField.value.trim();
    if (!text && attachedFilesData.length === 0) return;

    if (!apiKey && !(selectedModel && selectedModel.provider === 'on-device') && !(selectedModel && selectedModel.isCustom)) {
        updateStatus('errorApiKeyMissing', 'error');
        toggleApiKeySection(); // Show API key modal
        return;
    }

    if (!selectedModel) {
        updateStatus('Please select an AI model', 'error');
        return;
    }

    const userMessageParts = [];
    if (text) userMessageParts.push({ text: text });

    attachedFilesData.forEach(file => {
        userMessageParts.push({ inlineData: { mimeType: file.type, data: file.base64 }});
    });

    conversationHistory.push({ role: 'user', parts: userMessageParts });
    addMessageToChatDOM('user', text, attachedFilesData.map(f => ({ base64: f.base64, type: f.type, name: f.name })));

    domElements.chatInputField.value = '';
    attachedFilesData = [];
    renderImagePreviews(); // Clear previews

    callAPI(false); // false means it's a regular chat message, not a generation request
    updateButtonStates();
}

// --- Generation Flow ---
async function handleGenerateExtension() {
    // Check if there's enough context to generate
    if ((conversationHistory.length === 0 && domElements.chatInputField.value.trim() === '' && attachedFilesData.length === 0)) {
        updateStatus('errorEmptyPromptGeneric', 'error');
        return;
    }

    try {
        // STEP 1: Check API key (not needed for on-device models)
        if (!apiKey && !(selectedModel && selectedModel.provider === 'on-device') && !(selectedModel && selectedModel.isCustom)) {
            updateStatus('errorApiKeyMissing', 'error');
            toggleApiKeySection();
            return;
        }

        // STEP 2: Check AI model selection
        if (!selectedModel) {
            updateStatus('Please select an AI model', 'error');
            return;
        }

        // STEP 2.5: Block generation for on-device models
        if (selectedModel.onDeviceOnly) {
            updateStatus(getTranslatedMessage('onDeviceBuildDisabled') || 'On-device models can only be used for chat and editing. Select a cloud model to build extensions.', 'error');
            return;
        }

        // STEP 3: Check EULA acceptance
        const eulaValid = await validateEulaForGeneration();

        if (!eulaValid) {
            return;
        }

        // STEP 4: If there's text in the input field, add it as a final user message
        const currentInputText = domElements.chatInputField.value.trim();
        if (currentInputText || attachedFilesData.length > 0) {
            const userMessageParts = [];
            if (currentInputText) userMessageParts.push({ text: currentInputText });
            attachedFilesData.forEach(file => {
                userMessageParts.push({ inlineData: { mimeType: file.type, data: file.base64 }});
            });

            conversationHistory.push({ role: 'user', parts: userMessageParts });
            addMessageToChatDOM('user', currentInputText, attachedFilesData.map(f => ({ base64: f.base64, type: f.type, name: f.name })));

            domElements.chatInputField.value = '';
            attachedFilesData = [];
            renderImagePreviews();
        }

        // STEP 5: Proceed with generation
        callAPI(true);

    } catch (error) {
        hideLoading();
        console.error('Generation check failed:', error);
        updateStatus(`Generation failed: ${error.message}`, 'error');
    }
}

function handleAttachImage(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const maxImages = 5; // Limit number of images that can be attached
    if (attachedFilesData.length + files.length > maxImages) {
        updateStatus(getTranslatedMessage('errorTooManyImages', [maxImages.toString()]), 'error');
        domElements.imageInputField.value = ''; // Reset file input
        return;
    }

    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) {
            updateStatus(`${getTranslatedMessage('errorInvalidFileType')}: ${file.name}`, 'error');
            return;
        }
        if (file.size > 4 * 1024 * 1024) { // Limit file size (e.g., 4MB)
            updateStatus(`Image ${file.name} is too large (max 4MB).`, 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = e => {
            attachedFilesData.push({ name: file.name, type: file.type, base64: e.target.result.split(',')[1] });
            renderImagePreviews();
            updateButtonStates();
        };
        reader.onerror = () => {
            updateStatus(`${getTranslatedMessage('errorReadingFile')}: ${file.name}`, 'error');
        };
        reader.readAsDataURL(file);
    });
    domElements.imageInputField.value = ''; // Reset file input to allow re-selection of same file
}

function renderImagePreviews() {
    if (!domElements.imagePreviewArea) return;
    domElements.imagePreviewArea.innerHTML = '';
    attachedFilesData.forEach((file, index) => {
        const previewDiv = document.createElement('div');
        previewDiv.className = 'image-thumbnail-preview';

        const img = document.createElement('img');
        img.src = `data:${file.type};base64,${file.base64}`;
        img.alt = file.name;
        img.title = file.name; // Show full name on hover

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-image-btn';
        removeBtn.textContent = '✕';
        removeBtn.title = `Remove ${file.name}`;
        removeBtn.setAttribute('aria-label', `Remove ${file.name}`);
        removeBtn.onclick = () => removeAttachedImage(index);

        previewDiv.appendChild(img);
        previewDiv.appendChild(removeBtn);
        domElements.imagePreviewArea.appendChild(previewDiv);
    });
}

function removeAttachedImage(index) {
    attachedFilesData.splice(index, 1);
    renderImagePreviews();
    updateButtonStates();
}

function addMessageToChatDOM(sender, text, images = []) {
    if (!domElements.conversationDisplayArea) return;

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'llm-message');

    const senderSpan = document.createElement('div');
    senderSpan.className = 'message-sender';
    if (sender === 'user') {
        senderSpan.textContent = getTranslatedMessage('chatUserLabel');
    } else {
        senderSpan.appendChild(createBrandedName());
    }
    messageDiv.appendChild(senderSpan);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    if (text) {
        // Process text for markdown-like code blocks and inline code
        if (sender === 'llm') { // Apply special formatting only for LLM messages
            const segments = text.split(/(```(?:[\w-]*\n)?[\s\S]*?\n?```|`[^`\n\r]+`)/g);
            let currentParagraph = document.createElement('p');

            for (const segment of segments) {
                if (!segment) continue;

                if (segment.startsWith('```') && segment.endsWith('```')) {
                    // Finalize current paragraph if it has content
                    if (currentParagraph.hasChildNodes()) {
                        contentDiv.appendChild(currentParagraph);
                        currentParagraph = document.createElement('p');
                    }

                    let lang = 'clike'; // Default language
                    let rawCodeContent = segment.substring(3, segment.length - 3);
                    const firstNewlineIdx = rawCodeContent.indexOf('\n');
                    let finalCode = rawCodeContent;

                    if (firstNewlineIdx !== -1) {
                        const potentialLangLine = rawCodeContent.substring(0, firstNewlineIdx).trim();
                        // Basic check for language hint (e.g., "javascript", "python")
                        if (potentialLangLine.length > 0 && potentialLangLine.length <= 15 && /^[a-zA-Z0-9_-]+$/.test(potentialLangLine)) {
                            lang = potentialLangLine;
                            finalCode = rawCodeContent.substring(firstNewlineIdx + 1);
                        }
                    } else { // Handle single line code block with potential language hint: ```js console.log()
                        const parts = rawCodeContent.trim().split(/\s+/);
                        if (parts.length > 1 && parts[0].length <= 15 && /^[a-zA-Z0-9_-]+$/.test(parts[0])) {
                           lang = parts[0];
                           finalCode = parts.slice(1).join(' ');
                        } else {
                           finalCode = rawCodeContent.trim();
                        }
                    }
                    finalCode = finalCode.replace(/^\n+|\n+$/g, ''); // Trim leading/trailing newlines from code itself

                    const preElement = document.createElement('pre');
                     // Add some default styling; can be overridden by prism.css
                    preElement.style.margin = "0.5em 0";
                    preElement.style.borderRadius = "4px";

                    const codeElement = document.createElement('code');
                    codeElement.className = `language-${lang.toLowerCase() || 'clike'}`; // Ensure lang is lowercase
                    codeElement.textContent = finalCode;
                    preElement.appendChild(codeElement);
                    contentDiv.appendChild(preElement);

                } else if (segment.startsWith('`') && segment.endsWith('`')) {
                    const codeNode = document.createElement('code');
                    codeNode.textContent = segment.substring(1, segment.length - 1);
                    codeNode.classList.add('inline-code'); // Add class for specific styling
                    currentParagraph.appendChild(codeNode);
                } else {
                    // Split by newlines to create separate paragraphs for LLM text
                    const textParts = segment.split('\n');
                    textParts.forEach((part, index) => {
                        if (part.trim() !== "" || index < textParts.length -1 ) { // Add text node if part is not just whitespace
                           currentParagraph.appendChild(document.createTextNode(part));
                        }
                        if (index < textParts.length - 1) { // If not the last part, finalize current paragraph and start new
                            if(currentParagraph.hasChildNodes()){
                               contentDiv.appendChild(currentParagraph);
                            }
                            currentParagraph = document.createElement('p');
                        }
                    });
                }
            }
            // Append the last paragraph if it has content
            if (currentParagraph.hasChildNodes()) {
                contentDiv.appendChild(currentParagraph);
            }

        } else { // User message: simple text display
            const p = document.createElement('p');
            p.textContent = text;
            contentDiv.appendChild(p);
        }
    }

    images.forEach(imgInfo => {
        const img = document.createElement('img');
        img.src = `data:${imgInfo.type};base64,${imgInfo.base64}`;
        img.alt = imgInfo.name || 'Attached image';
        img.className = 'attached-image-thumbnail';
        contentDiv.appendChild(img);
    });
    messageDiv.appendChild(contentDiv);

    // Optional: Add a timestamp (simple version)
    const timestampSpan = document.createElement('span');
    timestampSpan.className = 'message-timestamp';
    timestampSpan.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageDiv.appendChild(timestampSpan);

    domElements.conversationDisplayArea.appendChild(messageDiv);
    domElements.conversationDisplayArea.scrollTop = domElements.conversationDisplayArea.scrollHeight; // Auto-scroll
}

// --- API Interaction ---
async function callAPI(isGenerationRequest, systemPromptOverride = null) {
    if (!apiKey && !(selectedModel && selectedModel.provider === 'on-device') && !(selectedModel && selectedModel.isCustom)) {
        updateStatus('errorApiKeyMissing', 'error');
        toggleApiKeySection();
        return;
    }

    if (!selectedModel) {
        updateStatus('Please select an AI model', 'error');
        return;
    }

    showLoading(isGenerationRequest ? 'generation' : 'message');

    try {
        let response;

        // Call AI API — each provider handles system prompt + full history internally
        if (selectedModel.provider === 'google') {
            response = await callGeminiAPI(isGenerationRequest, systemPromptOverride);
        } else if (selectedModel.provider === 'openai') {
            response = await callOpenAIAPI(isGenerationRequest, systemPromptOverride);
        } else if (selectedModel.provider === 'anthropic') {
            response = await callClaudeAPI(isGenerationRequest, systemPromptOverride);
        } else if (selectedModel.provider === 'on-device') {
            // Build a single prompt string from conversation history for on-device models
            const chatPrompt = conversationHistory.map(msg => {
                const role = msg.role === 'user' ? 'User' : 'Assistant';
                const text = msg.parts.filter(p => p.text).map(p => p.text).join('\n');
                return `${role}: ${text}`;
            }).join('\n\n');
            const sysPrompt = systemPromptOverride || 'You are a helpful AI assistant.';
            const resultText = await callOnDeviceAPI(chatPrompt, sysPrompt, false);
            response = { text: resultText };
        } else {
            throw new Error(`Unknown provider: ${selectedModel.provider}`);
        }

        hideLoading();

        if (response.error) {
            updateStatus(`${getTranslatedMessage('errorApiGeneric')} ${response.error}`, 'error');
            addMessageToChatDOM('llm', `API Error: ${response.error}`);
            if (!isGenerationRequest) {
                conversationHistory.push({ role: 'model', parts: [{text: `API Error: ${response.error}`}]});
            }
            return;
        }

        const llmResponseText = response.text;

        if (isGenerationRequest) {
            processGenerationResponse(llmResponseText);
        } else {
            addMessageToChatDOM('llm', llmResponseText);
            conversationHistory.push({ role: 'model', parts: [{text: llmResponseText}]});
        }

    } catch (error) {
        hideLoading();
        console.error('API Error:', error);
        const errorMsg = `${getTranslatedMessage('errorNetwork') || "Network Error:"} ${error.message}`;
        updateStatus(errorMsg, 'error');
        addMessageToChatDOM('llm', `Error: ${error.message}`);
        if (!isGenerationRequest) {
            conversationHistory.push({ role: 'model', parts: [{text: `Error: ${error.message}`}]});
        }
        if (isGenerationRequest) clearGeneratedFiles();
    }

    updateButtonStates();
}

async function callGeminiAPI(isGenerationRequest, systemPromptOverride = null) {
    const activeSystemPrompt = systemPromptOverride || SYSTEM_PROMPT;
    let payloadContents = [...conversationHistory];

    if (isGenerationRequest) {
        // Append generation trigger as final user message
        const triggerText = systemPromptOverride
            ? "Based on the project context above and the user's request, output ONLY the JSON object with the edits array. No markdown fences, no explanation."
            : "Based on our entire conversation above, now generate the complete Chrome extension. Output ONLY the JSON object with the files array. No markdown fences, no explanation.";
        payloadContents.push({
            role: "user",
            parts: [{ text: triggerText }]
        });
    }

    const body = {
        contents: payloadContents,
        generationConfig: {
            temperature: isGenerationRequest ? 0.3 : 0.7,
        },
        safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
        ]
    };

    // Use native systemInstruction for generation requests
    if (isGenerationRequest) {
        body.systemInstruction = { parts: [{ text: activeSystemPrompt }] };
    }

    const response = await fetch(`${selectedModel.endpoint}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: `HTTP ${response.status} ${response.statusText}` } }));
        return { error: errorData.error?.message || `HTTP error! status: ${response.status}` };
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates.length > 0) {
        const candidate = data.candidates[0];
        let text = '';
        if (candidate.content && candidate.content.parts) {
            text = candidate.content.parts.map(p => p.text).join('\n');
        }
        return { text };
    }
    
    return { error: 'No valid response from Gemini API' };
}

async function callOpenAIAPI(isGenerationRequest, systemPromptOverride = null) {
    const activeSystemPrompt = systemPromptOverride || SYSTEM_PROMPT;
    let messages = conversationHistory.map(msg => {
        const role = msg.role === 'user' ? 'user' : 'assistant';
        const content = msg.parts.map(part => {
            if (part.text) return { type: 'text', text: part.text };
            if (part.inlineData) return {
                type: 'image_url',
                image_url: {
                    url: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
                }
            };
            return null;
        }).filter(Boolean);

        return { role, content: content.length === 1 && content[0].type === 'text' ? content[0].text : content };
    });

    if (isGenerationRequest) {
        // Prepend system message and append generation trigger
        messages.unshift({ role: 'system', content: activeSystemPrompt });
        const triggerText = systemPromptOverride
            ? "Based on the project context above and the user's request, output ONLY the JSON object with the edits array. No markdown fences, no explanation."
            : "Based on our entire conversation above, now generate the complete Chrome extension. Output ONLY the JSON object with the files array. No markdown fences, no explanation.";
        messages.push({ role: 'user', content: triggerText });
    }

    const body = {
        model: selectedModel.model,
        messages: messages,
    };

    // Only set temperature for models that support it.
    // GPT-5 Mini and GPT-5.3 are reasoning models that reject custom temperature.
    if (selectedModel.supportsTemperature !== false) {
        body.temperature = isGenerationRequest ? 0.3 : 0.7;
    }

    const headers = {
        'Content-Type': 'application/json'
    };

    // Use custom API key for custom models, or global API key for cloud models
    const authKey = selectedModel.isCustom ? selectedModel.customApiKey : apiKey;
    if (authKey) {
        headers['Authorization'] = `Bearer ${authKey}`;
    }

    const response = await fetch(selectedModel.endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: `HTTP ${response.status} ${response.statusText}` } }));
        return { error: errorData.error?.message || `HTTP error! status: ${response.status}` };
    }

    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
        return { text: data.choices[0].message.content };
    }
    
    return { error: 'No valid response from OpenAI API' };
}

async function callClaudeAPI(isGenerationRequest, systemPromptOverride = null) {
    const activeSystemPrompt = systemPromptOverride || SYSTEM_PROMPT;
    let messages = conversationHistory.map(msg => {
        const role = msg.role === 'user' ? 'user' : 'assistant';
        const parts = msg.parts || [];

        const content = [];
        parts.forEach(part => {
            if (part.text) {
                content.push({ type: 'text', text: part.text });
            }
            if (part.inlineData) {
                content.push({
                    type: 'image',
                    source: {
                        type: 'base64',
                        media_type: part.inlineData.mimeType,
                        data: part.inlineData.data
                    }
                });
            }
        });

        return { role, content: content.length === 1 && content[0].type === 'text' ? content[0].text : content };
    });

    if (isGenerationRequest) {
        // Append generation trigger as final user message
        const triggerText = systemPromptOverride
            ? "Based on the project context above and the user's request, output ONLY the JSON object with the edits array. No markdown fences, no explanation."
            : "Based on our entire conversation above, now generate the complete Chrome extension. Output ONLY the JSON object with the files array. No markdown fences, no explanation.";
        messages.push({ role: 'user', content: triggerText });
    }

    const body = {
        model: selectedModel.model,
        max_tokens: 8192,
        messages: messages
    };

    // Use native system parameter for system instructions
    if (isGenerationRequest) {
        body.system = activeSystemPrompt;
    } else {
        body.system = 'You are a helpful AI assistant.';
    }

    const response = await fetch(selectedModel.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: `HTTP ${response.status} ${response.statusText}` } }));
        return { error: errorData.error?.message || `HTTP error! status: ${response.status}` };
    }

    const data = await response.json();

    if (data.content && data.content.length > 0) {
        const text = data.content
            .filter(block => block.type === 'text')
            .map(block => block.text)
            .join('\n');
        return { text };
    }

    return { error: 'No valid response from Claude API' };
}

// --- On-device AI (LanguageModel API) ---
async function callOnDeviceAPI(prompt, systemPrompt, isEdit = false) {
    // Check if LanguageModel API is available
    if (typeof LanguageModel === 'undefined') {
        throw new Error(getTranslatedMessage('onDeviceNotAvailable') || 'On-device AI is not available in this browser. Please enable it in browser flags or use a cloud model.');
    }

    // Determine output language based on current locale
    const currentUiLang = chrome.i18n.getUILanguage().split('-')[0];
    const supportedLangs = ['en', 'es', 'ja'];
    const outputLang = supportedLangs.includes(currentUiLang) ? currentUiLang : 'en';

    // Check availability with language options
    let availabilityOptions = {};
    try {
        availabilityOptions = {
            expectedInputs: [{ type: 'text', languages: [outputLang] }],
            expectedOutputs: [{ type: 'text', languages: [outputLang] }]
        };
        const availability = await LanguageModel.availability(availabilityOptions);
        if (availability === 'unavailable') {
            throw new Error('On-device AI model is not available on this device. Hardware requirements: 22GB free disk space, 4GB+ VRAM or 16GB+ RAM.');
        }
        if (availability === 'downloadable' || availability === 'downloading') {
            addMessageToChatDOM('system', getTranslatedMessage('onDeviceDownloading') || 'The on-device AI model is being downloaded. This may take a few minutes. Please wait...');
        }
    } catch (e) {
        if (e.message.includes('On-device AI model is not available')) throw e;
        // Edge may not support expectedInputs/expectedOutputs yet — try without them
        const availability = await LanguageModel.availability();
        if (availability === 'unavailable') {
            throw new Error(getTranslatedMessage('onDeviceNotAvailable') || 'On-device AI model is not available on this device.');
        }
    }

    // Create session
    let sessionOptions = {
        initialPrompts: [
            { role: 'system', content: systemPrompt }
        ],
        monitor(m) {
            m.addEventListener('downloadprogress', (e) => {
                console.log(`Model download: ${Math.round(e.loaded * 100)}%`);
            });
        }
    };

    // Try to set expected outputs (Chrome requires this, Edge may not)
    try {
        sessionOptions.expectedInputs = [{ type: 'text', languages: [outputLang] }];
        sessionOptions.expectedOutputs = [{ type: 'text', languages: [outputLang] }];
    } catch (e) {
        // Silently fall back without language options
    }

    const session = await LanguageModel.create(sessionOptions);
    try {
        const result = await session.prompt(prompt);
        return result;
    } finally {
        session.destroy();
    }
}

// --- IndexedDB Project Persistence ---
// --- Multi-Project Management ---
async function loadProjectList() {
    const projects = await db.projects.orderBy('updatedAt').reverse().toArray();
    projectList = projects.map(p => ({ id: p.id, name: p.name || 'Untitled Project', updatedAt: p.updatedAt }));
    renderProjectSelector();
}

function renderProjectSelector() {
    if (!domElements.projectSelector) return;
    domElements.projectSelector.innerHTML = '';

    projectList.forEach(project => {
        const option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        if (project.id === currentProjectId) {
            option.selected = true;
        }
        domElements.projectSelector.appendChild(option);
    });

    // Disable delete if only one project exists
    if (domElements.deleteProjectButton) {
        domElements.deleteProjectButton.disabled = projectList.length <= 1;
    }
}

async function switchProject(projectId) {
    // Save current project first
    if (currentProjectId) {
        await saveProjectToDb();
    }

    // Clear current state
    conversationHistory = [];
    generatedFiles = [];
    attachedFilesData = [];
    undoStack = [];
    lastEditDiffs = [];
    selectedFileForEdit = null;
    isManualEditMode = false;

    // Clear UI
    if (domElements.conversationDisplayArea) domElements.conversationDisplayArea.innerHTML = '';
    if (domElements.chatInputField) domElements.chatInputField.value = '';
    renderImagePreviews();
    clearGeneratedFiles();
    if (domElements.improvePromptArea) domElements.improvePromptArea.style.display = 'none';
    if (domElements.editPromptArea) domElements.editPromptArea.style.display = 'none';
    if (domElements.addFileArea) domElements.addFileArea.style.display = 'none';

    // Load the selected project
    const project = await db.projects.get(projectId);
    if (project) {
        currentProjectId = project.id;
        generatedFiles = project.files || [];
        conversationHistory = project.conversationHistory || [];

        // Restore selected model if saved
        if (project.selectedModelId) {
            const model = getAvailableModels().find(m => m.id === project.selectedModelId);
            if (model) selectModel(model);
        }

        // Restore UI
        displayGeneratedFiles(generatedFiles);

        // Restore conversation display
        conversationHistory.forEach(msg => {
            const role = msg.role === 'user' ? 'user' : 'llm';
            const textPart = msg.parts?.find(p => p.text);
            if (textPart) addMessageToChatDOM(role, textPart.text);
        });
    }

    updateButtonStates();
    showPlaceholderIfNeeded();
    renderProjectSelector();
}

async function createNewProject() {
    // Save current project first
    if (currentProjectId) {
        await saveProjectToDb();
    }

    // Prompt for name
    const name = prompt(getTranslatedMessage('newProjectPrompt') || 'Enter project name:', 'Untitled Project');
    if (name === null) return; // User cancelled

    const trimmedName = name.trim() || 'Untitled Project';

    // Create new project in DB
    const newId = await db.projects.add({
        name: trimmedName,
        files: [],
        conversationHistory: [],
        selectedModelId: selectedModel?.id || null,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    // Switch to the new project (this clears state and UI)
    currentProjectId = newId;
    conversationHistory = [];
    generatedFiles = [];
    attachedFilesData = [];
    undoStack = [];
    lastEditDiffs = [];
    selectedFileForEdit = null;
    isManualEditMode = false;

    // Clear UI
    if (domElements.conversationDisplayArea) domElements.conversationDisplayArea.innerHTML = '';
    if (domElements.chatInputField) domElements.chatInputField.value = '';
    renderImagePreviews();
    clearGeneratedFiles();
    if (domElements.improvePromptArea) domElements.improvePromptArea.style.display = 'none';
    if (domElements.editPromptArea) domElements.editPromptArea.style.display = 'none';
    if (domElements.addFileArea) domElements.addFileArea.style.display = 'none';

    // Refresh project list and selector
    await loadProjectList();

    updateButtonStates();
    showPlaceholderIfNeeded();
    updateStatus(getTranslatedMessage('newProjectCreated') || 'New project created.', 'success');
    if (domElements.chatInputField) domElements.chatInputField.focus();
}

async function renameCurrentProject() {
    if (!currentProjectId) return;

    const currentProject = projectList.find(p => p.id === currentProjectId);
    const currentName = currentProject?.name || 'Untitled Project';

    const newName = prompt(getTranslatedMessage('renameProjectPrompt') || 'Enter new project name:', currentName);
    if (newName === null || newName.trim() === '') return;

    await db.projects.update(currentProjectId, { name: newName.trim(), updatedAt: new Date() });
    await loadProjectList();
    updateStatus(getTranslatedMessage('projectRenamed') || 'Project renamed.', 'success');
}

async function deleteCurrentProject() {
    if (!currentProjectId || projectList.length <= 1) return;

    const currentProject = projectList.find(p => p.id === currentProjectId);
    const confirmed = confirm(
        (getTranslatedMessage('deleteProjectConfirm') || 'Delete project "{name}"? This cannot be undone.')
            .replace('{name}', currentProject?.name || 'Untitled Project')
    );

    if (!confirmed) return;

    await db.projects.delete(currentProjectId);

    // Switch to the most recent remaining project
    await loadProjectList();
    if (projectList.length > 0) {
        await switchProject(projectList[0].id);
    }

    updateStatus(getTranslatedMessage('projectDeleted') || 'Project deleted.', 'success');
}

async function saveProjectToDb() {
    const now = new Date();
    if (currentProjectId) {
        await db.projects.update(currentProjectId, {
            files: generatedFiles,
            conversationHistory: conversationHistory,
            selectedModelId: selectedModel?.id || null,
            updatedAt: now
        });
    } else {
        currentProjectId = await db.projects.add({
            name: `Project ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`,
            files: generatedFiles,
            conversationHistory: conversationHistory,
            selectedModelId: selectedModel?.id || null,
            createdAt: now,
            updatedAt: now
        });
    }
}

async function importProject(file) {
    try {
        const text = await file.text();
        let importData;

        try {
            importData = JSON.parse(text);
        } catch (e) {
            updateStatus(getTranslatedMessage('importInvalidJson') || 'Invalid JSON file.', 'error');
            return;
        }

        // Validate structure
        if (!importData.project || !importData.exportedFrom || importData.exportedFrom !== 'NuModeX Ext Maker') {
            updateStatus(getTranslatedMessage('importInvalidFormat') || 'This file is not a valid NuModeX Ext Maker project.', 'error');
            return;
        }

        const projectData = importData.project;

        if (!projectData.files || !Array.isArray(projectData.files)) {
            updateStatus(getTranslatedMessage('importInvalidFormat') || 'This file is not a valid NuModeX Ext Maker project.', 'error');
            return;
        }

        // Validate each file has name and content
        for (const f of projectData.files) {
            if (!f.name || typeof f.content !== 'string') {
                updateStatus(getTranslatedMessage('importInvalidFormat') || 'This file is not a valid NuModeX Ext Maker project.', 'error');
                return;
            }
        }

        // Save current project first
        if (currentProjectId) {
            await saveProjectToDb();
        }

        // Create new project from imported data
        const newId = await db.projects.add({
            name: projectData.name || 'Imported Project',
            files: projectData.files,
            conversationHistory: projectData.conversationHistory || [],
            selectedModelId: projectData.selectedModelId || null,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        // Switch to the imported project
        await switchProject(newId);
        await loadProjectList();

        updateStatus(
            (getTranslatedMessage('importSuccess') || 'Project "{name}" imported successfully.')
                .replace('{name}', projectData.name || 'Imported Project'),
            'success'
        );

    } catch (e) {
        console.error('Import error:', e);
        updateStatus(getTranslatedMessage('importFailed') || 'Failed to import project.', 'error');
    }
}

async function loadLastProject() {
    let lastProject = await db.projects.orderBy('updatedAt').reverse().first();

    // First launch: create a default project if none exist
    if (!lastProject) {
        const now = new Date();
        const newId = await db.projects.add({
            name: 'Untitled Project',
            files: [],
            conversationHistory: [],
            selectedModelId: null,
            createdAt: now,
            updatedAt: now
        });
        lastProject = await db.projects.get(newId);
    }

    if (lastProject) {
        currentProjectId = lastProject.id;
        generatedFiles = lastProject.files || [];
        conversationHistory = lastProject.conversationHistory || [];
        if (lastProject.selectedModelId) {
            // Restore selected model from AI_MODELS
            const model = AI_MODELS.find(m => m.id === lastProject.selectedModelId);
            if (model) selectedModel = model;
        }
        if (generatedFiles.length > 0) {
            displayGeneratedFiles(generatedFiles);
        }
        // Restore chat display
        conversationHistory.forEach(msg => {
            const role = msg.role === 'user' ? 'user' : 'llm';
            const textPart = msg.parts?.find(p => p.text);
            if (textPart) addMessageToChatDOM(role, textPart.text);
        });
    }

    // Load full project list and populate selector
    await loadProjectList();
}

// --- Edit System Prompt Helpers ---
function buildFileMap() {
    if (generatedFiles.length === 0) return 'No files generated yet.';
    return generatedFiles.map(f => {
        const lines = f.content.split('\n').length;
        const size = f.content.length;
        return `- ${f.name} (${lines} lines, ${size} chars)`;
    }).join('\n');
}

function buildFullProjectContext() {
    if (generatedFiles.length === 0) return 'No files in project.';
    return generatedFiles.map(f => {
        return `========== ${f.name} ==========\n${f.content}\n`;
    }).join('\n');
}

function buildSelectiveContext(targetFileName) {
    let context = '';

    // Target file in full
    const targetFile = generatedFiles.find(f => f.name === targetFileName);
    if (targetFile) {
        context += `========== ${targetFile.name} (EDITING THIS FILE) ==========\n${targetFile.content}\n\n`;
    }

    // Always include manifest.json in full if it exists and isn't the target
    const manifest = generatedFiles.find(f => f.name === 'manifest.json');
    if (manifest && manifest.name !== targetFileName) {
        context += `========== manifest.json (for reference) ==========\n${manifest.content}\n\n`;
    }

    // Include other files in full too — Chrome extensions are small enough
    const otherFiles = generatedFiles.filter(f => f.name !== targetFileName && f.name !== 'manifest.json');
    if (otherFiles.length > 0) {
        otherFiles.forEach(f => {
            context += `========== ${f.name} ==========\n${f.content}\n\n`;
        });
    }

    return context;
}

// --- Incremental Edit API Call ---
async function callEditAPI(targetFileName, userRequest) {
    if (!apiKey && !(selectedModel && selectedModel.provider === 'on-device') && !(selectedModel && selectedModel.isCustom)) {
        updateStatus('errorApiKeyMissing', 'error');
        return;
    }
    if (!selectedModel) {
        updateStatus('Please select an AI model', 'error');
        return;
    }

    const fileMap = buildFileMap();

    // Full-project mode: send ALL file contents
    // Single-file mode: send selective context (target file + others for reference)
    const fileContents = targetFileName
        ? buildSelectiveContext(targetFileName)
        : buildFullProjectContext();

    const systemPrompt = EDIT_SYSTEM_PROMPT
        .replace('{FILE_MAP}', fileMap)
        .replace('{FULL_FILE_CONTENTS}', fileContents);

    // Build the messages for the edit request
    const editMessages = [
        { role: 'user', parts: [{ text: 'I have a Chrome extension project. Here are the current files and their contents. Review them carefully.' }] },
        { role: 'model', parts: [{ text: 'I have reviewed all the current project files and understand the codebase. What changes would you like me to make?' }] },
        { role: 'user', parts: [{ text: userRequest }] }
    ];

    // Temporarily swap conversation history for the edit call
    const savedHistory = conversationHistory;
    conversationHistory = editMessages;

    const modeLabel = targetFileName ? `Editing ${targetFileName}...` : 'Improving extension...';
    showLoading(modeLabel, 'generation');

    try {
        let result;

        switch (selectedModel.provider) {
            case 'google':
                result = await callGeminiAPI(true, systemPrompt);
                break;
            case 'openai':
                result = await callOpenAIAPI(true, systemPrompt);
                break;
            case 'anthropic':
                result = await callClaudeAPI(true, systemPrompt);
                break;
            case 'on-device': {
                const editPrompt = conversationHistory.map(msg => {
                    const role = msg.role === 'user' ? 'User' : 'Assistant';
                    const text = msg.parts.filter(p => p.text).map(p => p.text).join('\n');
                    return `${role}: ${text}`;
                }).join('\n\n');
                const resultText = await callOnDeviceAPI(editPrompt, systemPrompt, true);
                result = { text: resultText };
                break;
            }
            default:
                result = { error: 'Unknown provider' };
        }

        conversationHistory = savedHistory; // Restore original history

        if (result.error) {
            updateStatus(`${getTranslatedMessage('errorApiGeneric')} ${result.error}`, 'error');
            hideLoading();
            return;
        }

        processEditResponse(result.text, userRequest);
    } catch (e) {
        conversationHistory = savedHistory; // Restore on error
        console.error('Edit API error:', e);
        updateStatus(`${getTranslatedMessage('errorNetwork')} ${e.message}`, 'error');
    } finally {
        hideLoading();
    }
}

// ==========================================
// === DIFF VIEW SYSTEM ===
// ==========================================

/**
 * Store diffs for the last AI edit operation.
 * Called before applying edits so we capture the before/after state.
 * @param {Array} edits - Array of {action, file, content} from AI response
 */
function captureEditDiffs(edits) {
    lastEditDiffs = [];

    edits.forEach(edit => {
        if (edit.action === 'update' || edit.action === 'create') {
            const existingFile = generatedFiles.find(f => f.name === edit.file);
            const oldContent = existingFile ? existingFile.content : '';
            const newContent = edit.content || '';

            // Only store if there's actually a difference
            if (oldContent !== newContent) {
                lastEditDiffs.push({
                    filename: edit.file,
                    oldContent: oldContent,
                    newContent: newContent,
                    action: edit.action
                });
            }
        } else if (edit.action === 'delete') {
            const existingFile = generatedFiles.find(f => f.name === edit.file);
            if (existingFile) {
                lastEditDiffs.push({
                    filename: edit.file,
                    oldContent: existingFile.content,
                    newContent: '',
                    action: 'delete'
                });
            }
        }
    });

    console.log(`Captured diffs for ${lastEditDiffs.length} changed files`);
}

/**
 * Render a diff for a specific file into the diff container.
 * @param {Object} diffData - {filename, oldContent, newContent, action}
 * @param {string} outputFormat - 'line-by-line' or 'side-by-side'
 */
function renderFileDiff(diffData, outputFormat) {
    if (!domElements.diffContainer) return;

    const oldLabel = diffData.action === 'create' ? '(new file)' : 'original';
    const newLabel = diffData.action === 'delete' ? '(deleted)' : 'ai-edited';

    // Step 1: Compute unified diff using jsdiff
    const patch = Diff.createTwoFilesPatch(
        `a/${diffData.filename}`,
        `b/${diffData.filename}`,
        diffData.oldContent,
        diffData.newContent,
        oldLabel,
        newLabel,
        { context: 3 }
    );

    // Step 2: Render HTML using diff2html
    const diffHtml = Diff2Html.html(patch, {
        drawFileList: false,
        outputFormat: outputFormat || 'line-by-line',
        matching: 'lines',
        diffStyle: 'char'
    });

    domElements.diffContainer.innerHTML = diffHtml;
}

/**
 * Show the diff modal with tabs for each changed file.
 */
function showDiffModal() {
    if (!domElements.diffModal || lastEditDiffs.length === 0) return;

    // Build file tabs
    if (domElements.diffFileTabs) {
        domElements.diffFileTabs.innerHTML = '';

        lastEditDiffs.forEach((diff, index) => {
            const tab = document.createElement('button');
            tab.className = 'diff-file-tab' + (index === 0 ? ' active' : '');

            let prefix = '';
            if (diff.action === 'create') prefix = '+ ';
            else if (diff.action === 'delete') prefix = '- ';
            else prefix = '~ ';

            tab.textContent = prefix + diff.filename;
            tab.addEventListener('click', () => {
                // Update active tab
                domElements.diffFileTabs.querySelectorAll('.diff-file-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                // Render this file's diff
                renderFileDiff(diff, currentDiffFormat);
            });
            domElements.diffFileTabs.appendChild(tab);
        });
    }

    // Update title
    if (domElements.diffModalTitle) {
        const fileCount = lastEditDiffs.length;
        domElements.diffModalTitle.textContent = `Changes (${fileCount} file${fileCount !== 1 ? 's' : ''} modified)`;
    }

    // Render first file's diff
    renderFileDiff(lastEditDiffs[0], currentDiffFormat);

    // Show modal
    domElements.diffModal.style.display = 'block';
    console.log('Diff modal shown');
}

/**
 * Hide the diff modal.
 */
function hideDiffModal() {
    if (domElements.diffModal) {
        domElements.diffModal.style.display = 'none';
        console.log('Diff modal hidden');
    }
}

// --- Preview Modal ---
function buildInlinedPreviewHTML() {
    // Find popup.html in generated files
    const popupHtml = generatedFiles.find(f => f.name === 'popup.html');
    if (!popupHtml) return null;

    let html = popupHtml.content;

    // Inline CSS: replace <link rel="stylesheet" href="X"> with <style>content</style>
    html = html.replace(/<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*\/?>/gi, (match, href) => {
        const cssFile = generatedFiles.find(f => f.name === href);
        if (cssFile) {
            return `<style>${cssFile.content}</style>`;
        }
        return '<!-- ' + href + ' not found -->';
    });

    // Also handle <link href="X" rel="stylesheet"> (href before rel)
    html = html.replace(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']stylesheet["'][^>]*\/?>/gi, (match, href) => {
        const cssFile = generatedFiles.find(f => f.name === href);
        if (cssFile) {
            return `<style>${cssFile.content}</style>`;
        }
        return '<!-- ' + href + ' not found -->';
    });

    // Inline JS: replace <script src="X"></script> with <script>content</script>
    html = html.replace(/<script\s+[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi, (match, src) => {
        const jsFile = generatedFiles.find(f => f.name === src);
        if (jsFile) {
            return `<script>${jsFile.content}<\/script>`;
        }
        return '<!-- ' + src + ' not found -->';
    });

    // Replace image references with placeholder (images can't load in sandbox)
    // Leave them as-is — they'll show broken image icons which is expected for a visual preview

    return html;
}

function showPreviewModal() {
    if (!domElements.previewModal || !domElements.previewIframe) return;
    if (generatedFiles.length === 0) return;

    const inlinedHTML = buildInlinedPreviewHTML();
    if (!inlinedHTML) {
        updateStatus(getTranslatedMessage('previewNoPopup') || 'No popup.html found in generated files.', 'error');
        return;
    }

    // Set the iframe content using srcdoc
    domElements.previewIframe.srcdoc = inlinedHTML;

    // Show modal
    domElements.previewModal.style.display = 'block';
}

function hidePreviewModal() {
    if (domElements.previewModal) {
        domElements.previewModal.style.display = 'none';
    }
    // Clear iframe content when closing
    if (domElements.previewIframe) {
        domElements.previewIframe.srcdoc = '';
    }
}

// --- Edit Response Processor ---
function processEditResponse(llmResponseText, originalRequest) {
    console.log("Processing edit response from LLM.");
    let responseContent = llmResponseText.trim();

    // Strip markdown code fences (same cleanup as processGenerationResponse)
    if (responseContent.startsWith('```')) {
        responseContent = responseContent.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?\s*```\s*$/i, '');
    }

    try {
        const parsed = JSON.parse(responseContent);

        if (!parsed.edits || !Array.isArray(parsed.edits)) {
            // Fallback: check if it returned the old { files: [...] } format
            if (parsed.files && Array.isArray(parsed.files)) {
                console.warn("AI returned full generation format instead of edit format. Applying as full replacement.");
                generatedFiles = parsed.files.filter(f => f && typeof f.name === 'string' && typeof f.content === 'string');
                displayGeneratedFiles(generatedFiles);
                saveProjectToDb();
                updateStatus('statusGenerated', 'success');
                return;
            }
            throw new Error('Response missing "edits" array.');
        }

        // Save snapshot for undo before applying edits
        const previousFiles = JSON.parse(JSON.stringify(generatedFiles));
        saveUndoSnapshot(previousFiles);

        let changesMade = [];

        // Capture diffs before applying edits
        captureEditDiffs(parsed.edits);

        parsed.edits.forEach(edit => {
            if (!edit.action || !edit.file) return;

            switch (edit.action) {
                case 'update': {
                    const idx = generatedFiles.findIndex(f => f.name === edit.file);
                    if (idx !== -1 && typeof edit.content === 'string') {
                        generatedFiles[idx].content = edit.content;
                        changesMade.push(`Updated: ${edit.file}`);
                    } else if (idx === -1) {
                        // File doesn't exist, treat as create
                        generatedFiles.push({ name: edit.file, content: edit.content });
                        changesMade.push(`Created: ${edit.file}`);
                    }
                    break;
                }
                case 'create': {
                    if (typeof edit.content === 'string') {
                        // Check if file already exists (overwrite)
                        const idx = generatedFiles.findIndex(f => f.name === edit.file);
                        if (idx !== -1) {
                            generatedFiles[idx].content = edit.content;
                            changesMade.push(`Replaced: ${edit.file}`);
                        } else {
                            generatedFiles.push({ name: edit.file, content: edit.content });
                            changesMade.push(`Created: ${edit.file}`);
                        }
                    }
                    break;
                }
                case 'delete': {
                    const idx = generatedFiles.findIndex(f => f.name === edit.file);
                    if (idx !== -1) {
                        generatedFiles.splice(idx, 1);
                        changesMade.push(`Deleted: ${edit.file}`);
                    }
                    break;
                }
            }
        });

        if (changesMade.length > 0) {
            displayGeneratedFiles(generatedFiles);
            saveProjectToDb();

            const summaryMsg = `Edit applied:\n${changesMade.join('\n')}`;
            addMessageToChatDOM('llm', summaryMsg);
            conversationHistory.push({ role: 'model', parts: [{ text: summaryMsg }] });
            updateStatus('Edit applied successfully!', 'success');
        } else {
            updateStatus('No changes were made.', 'warning');
        }

    } catch (e) {
        console.error('Edit response parsing error:', e);
        updateStatus(`Edit failed: ${e.message}`, 'error');
        // Show raw response for debugging
        const preview = llmResponseText.substring(0, 1000);
        addMessageToChatDOM('llm', `Could not parse edit response.\n\nRaw response:\n${preview}${llmResponseText.length > 1000 ? '\n...(truncated)' : ''}`);
        conversationHistory.push({ role: 'model', parts: [{ text: llmResponseText }] });
    }
}

// --- Undo System ---
function saveUndoSnapshot(files) {
    undoStack.push({
        files: files,
        timestamp: new Date()
    });
    if (undoStack.length > MAX_UNDO_STEPS) {
        undoStack.shift(); // Remove oldest
    }
    if (domElements.undoButton) {
        domElements.undoButton.disabled = false;
    }
}

function undoLastEdit() {
    if (undoStack.length === 0) return;
    const snapshot = undoStack.pop();
    generatedFiles = snapshot.files;
    displayGeneratedFiles(generatedFiles);
    saveProjectToDb();
    updateStatus('Undo successful — reverted to previous state.', 'success');
    if (undoStack.length === 0 && domElements.undoButton) {
        domElements.undoButton.disabled = true;
    }
}

// --- Manual Code Editing ---
function toggleManualEditMode() {
    if (!selectedFileForEdit || generatedFiles.length === 0) return;

    isManualEditMode = !isManualEditMode;
    const container = domElements.codeViewerContainer || document.getElementById('code-viewer-container');

    if (isManualEditMode) {
        // Save current content and create textarea
        const currentFile = generatedFiles.find(f => f.name === selectedFileForEdit);
        if (!currentFile) return;

        const textarea = document.createElement('textarea');
        textarea.id = 'manual-code-editor';
        textarea.value = currentFile.content;
        textarea.className = 'manual-editor';
        textarea.style.cssText = 'width:100%;height:100%;box-sizing:border-box;font-family:var(--code-font-family);font-size:0.85em;line-height:1.5;padding:10px;border:none;resize:none;background:var(--code-bg);color:var(--text-color);tab-size:4;';

        // Handle Tab key for indentation
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 4;
            }
        });

        // Hide the <pre> and show the textarea
        const pre = container.querySelector('pre');
        if (pre) pre.style.display = 'none';
        container.appendChild(textarea);
        textarea.focus();

        // Change button text
        const toggleBtn = document.getElementById('toggle-edit-mode');
        if (toggleBtn) toggleBtn.textContent = '💾 Save';

    } else {
        // Save the edited content back
        const textarea = document.getElementById('manual-code-editor');
        if (textarea && selectedFileForEdit) {
            const newContent = textarea.value;
            const idx = generatedFiles.findIndex(f => f.name === selectedFileForEdit);
            if (idx !== -1) {
                // Save undo snapshot before manual edit
                saveUndoSnapshot(JSON.parse(JSON.stringify(generatedFiles)));
                generatedFiles[idx].content = newContent;
                saveProjectToDb();
            }
            textarea.remove();
        }

        // Show the <pre> again
        const pre = container.querySelector('pre');
        if (pre) pre.style.display = '';

        // Refresh display
        const file = generatedFiles.find(f => f.name === selectedFileForEdit);
        if (file) displayFileContent(file.name, file.content);

        // Change button text back
        const toggleBtn = document.getElementById('toggle-edit-mode');
        if (toggleBtn) toggleBtn.textContent = '📝 Edit';
    }
}

function processGenerationResponse(llmResponseText) {
    console.log("Attempting to parse generated files from LLM response text.");
    let jsonString = null;
    let responseContent = llmResponseText.trim();

    // === PRE-CLEANING ===
    // Strip markdown code fences
    if (responseContent.startsWith('```')) {
        responseContent = responseContent.replace(/^```(?:json|JSON)?\s*\n?/, '').replace(/\n?\s*```\s*$/, '');
        responseContent = responseContent.trim();
    }

    // Strip leading preamble before JSON
    const firstBrace = responseContent.indexOf('{');
    if (firstBrace > 0 && firstBrace < 300) {
        const preamble = responseContent.substring(0, firstBrace).trim();
        if (!preamble.includes('{') && !preamble.includes('[')) {
            console.log(`Pre-clean: Stripped ${firstBrace} chars of preamble`);
            responseContent = responseContent.substring(firstBrace);
        }
    }

    // Strip trailing postamble after JSON
    const lastBrace = responseContent.lastIndexOf('}');
    if (lastBrace !== -1 && lastBrace < responseContent.length - 1) {
        const postamble = responseContent.substring(lastBrace + 1).trim();
        if (postamble.length > 0 && !postamble.startsWith(',') && !postamble.startsWith(']') && !postamble.startsWith('}')) {
            console.log(`Pre-clean: Stripped ${postamble.length} chars of postamble`);
            responseContent = responseContent.substring(0, lastBrace + 1);
        }
    }
    // === END PRE-CLEANING ===

    try {
        // Try to extract JSON from the response
        const markdownJsonMatch = responseContent.match(/```json\s*([\s\S]*?)\s*```/);
        if (markdownJsonMatch && markdownJsonMatch[1]) {
            jsonString = markdownJsonMatch[1].trim();
        } else {
            const genericMarkdownMatch = responseContent.match(/```(?:[\w-]*\n)?([\s\S]*?)\n?```/);
            if (genericMarkdownMatch && genericMarkdownMatch[1]) {
                jsonString = genericMarkdownMatch[1].trim();
            } else {
                const potentialJsonMatches = responseContent.match(/({[\s\S]*}|\[[\s\S]*])/g);
                if (potentialJsonMatches && potentialJsonMatches.length > 0) {
                    let bestMatch = potentialJsonMatches.find(m => m.startsWith('{') && m.includes('"files":'));
                    if (!bestMatch) {
                        bestMatch = potentialJsonMatches.reduce((a, b) => (a.length > b.length ? a : b));
                    }
                    jsonString = bestMatch;
                } else {
                    if (((responseContent.startsWith('{') && responseContent.endsWith('}')) ||
                         (responseContent.startsWith('[') && responseContent.endsWith(']'))) &&
                        responseContent.includes('"files":')) {
                        jsonString = responseContent;
                    }
                }
            }
        }

        if (!jsonString) {
            console.error("Could not extract JSON from response");
            throw new Error("Failed to extract JSON data from AI response.");
        }

        const parsedJson = JSON.parse(jsonString);

        if (parsedJson.files && Array.isArray(parsedJson.files)) {
            const validFiles = parsedJson.files.filter(f => f && typeof f.name === 'string' && typeof f.content === 'string');
            
            if (validFiles.length !== parsedJson.files.length) {
                updateStatus("Warning: Some files were malformed and excluded.", 'warning');
            }
            
            generatedFiles = validFiles;
            displayGeneratedFiles(generatedFiles);

            if (generatedFiles.length > 0) {
                updateStatus('statusGenerated', 'success');
                const successMsg = getTranslatedMessage('statusGeneratedMessageContent') || `Extension files generated successfully!`;
                addMessageToChatDOM('llm', successMsg);
                conversationHistory.push({ role: 'model', parts: [{text: successMsg}]});

                // Auto-name project based on manifest.json if still "Untitled Project"
                const currentProject = projectList.find(p => p.id === currentProjectId);
                if (currentProject && currentProject.name === 'Untitled Project') {
                    const manifestFile = generatedFiles.find(f => f.name === 'manifest.json');
                    if (manifestFile) {
                        try {
                            const manifest = JSON.parse(manifestFile.content);
                            if (manifest.name && manifest.name.trim()) {
                                db.projects.update(currentProjectId, { name: manifest.name.trim(), updatedAt: new Date() });
                                loadProjectList();
                            }
                        } catch (e) { /* ignore parse errors */ }
                    }
                }

                saveProjectToDb();
            } else {
                clearGeneratedFiles();
            }
        } else {
            console.error("Invalid JSON structure");
            throw new Error(getTranslatedMessage('errorInvalidJsonStructure'));
        }
    } catch (e) {
        console.error("JSON parsing error:", e);
        const errorMsg = `${getTranslatedMessage('errorParsingJson') || "Error parsing AI response"}: ${e.message}`;
        updateStatus(errorMsg, 'error');
        const rawPreview = llmResponseText.substring(0, 1500);
        addMessageToChatDOM('llm',
            `Could not extract extension files from the AI response.\n\n` +
            `Raw AI response:\n${rawPreview}${llmResponseText.length > 1500 ? '\n...(truncated)' : ''}`
        );
        conversationHistory.push({ role: 'model', parts: [{text: llmResponseText}]});
        clearGeneratedFiles();
    }
}

// --- File Generation & Display ---
function displayGeneratedFiles(files) {
    if(!domElements.fileTreeView || !domElements.codeViewer) return;

    domElements.fileTreeView.innerHTML = ''; // Still clear and rebuild — the tree is small
    domElements.codeViewer.textContent = ''; // Clear code viewer
    domElements.codeViewer.className = ''; // Reset language class

    if (!files || files.length === 0) {
        showPlaceholderIfNeeded(); // Show "no files" placeholder
        if(domElements.downloadZipButton) domElements.downloadZipButton.disabled = true;
        if (domElements.editFileButton) domElements.editFileButton.disabled = true;
        if (domElements.copyFileButton) domElements.copyFileButton.disabled = true;
        if (domElements.addFileButton) domElements.addFileButton.disabled = true;
        if (domElements.improveExtensionButton) domElements.improveExtensionButton.disabled = true;
        selectedFileForEdit = null;
        return;
    }

    if(domElements.outputPanePlaceholder) domElements.outputPanePlaceholder.style.display = 'none';
    if(domElements.codeViewerPlaceholder) domElements.codeViewerPlaceholder.style.display = 'block'; // Show "select a file"

    const ul = document.createElement('ul');
    files.forEach((file, index) => {
        const li = document.createElement('li');
        li.textContent = file.name;
        li.dataset.fileName = file.name; // Store name for easy access
        li.setAttribute('role', 'button');
        li.setAttribute('tabindex', '0'); // Make it focusable

        li.addEventListener('click', (e) => selectFileForView(e.currentTarget, files, ul));
        li.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') selectFileForView(e.currentTarget, files, ul);
        });
        ul.appendChild(li);

        // Auto-select manifest.json or the first file
        if (index === 0 || file.name.toLowerCase() === 'manifest.json') {
             // Use a timeout to ensure the element is in the DOM and clickable
             setTimeout(() => { if (!ul.querySelector('li.selected')) li.click(); }, 0);
        }
    });
    domElements.fileTreeView.appendChild(ul);
    if(domElements.downloadZipButton) domElements.downloadZipButton.disabled = false;
    if (domElements.addFileButton) domElements.addFileButton.disabled = false;
    if (domElements.improveExtensionButton) domElements.improveExtensionButton.disabled = false;

    // Re-select the previously selected file if it still exists
    if (selectedFileForEdit) {
        const selectedLi = domElements.fileTreeView.querySelector(`li[data-file-name="${selectedFileForEdit}"]`);
        if (selectedLi) {
            setTimeout(() => selectedLi.click(), 0);
            return; // Don't auto-select first file
        } else {
            selectedFileForEdit = null; // File was deleted
        }
    }
}

function selectFileForView(listItem, files, fileListElement) {
    // Deselect previously selected item
    fileListElement.querySelectorAll('li.selected').forEach(item => item.classList.remove('selected'));
    // Select new item
    listItem.classList.add('selected');

    const fileName = listItem.dataset.fileName;
    const file = files.find(f => f.name === fileName);

    if (file) {
        displayFileContent(file.name, file.content);
        selectedFileForEdit = file.name; // Track selected file
        if (domElements.editFileButton) domElements.editFileButton.disabled = false;
        if (domElements.copyFileButton) domElements.copyFileButton.disabled = false;

        // Show the manual edit toggle button
        const toggleBtn = document.getElementById('toggle-edit-mode');
        if (toggleBtn) toggleBtn.style.display = 'inline-block';

        // If we were in manual edit mode, exit it when switching files
        if (isManualEditMode) {
            isManualEditMode = false;
            const container = domElements.codeViewerContainer || document.getElementById('code-viewer-container');
            const textarea = document.getElementById('manual-code-editor');
            if (textarea) textarea.remove();
            const pre = container?.querySelector('pre');
            if (pre) pre.style.display = '';
            if (toggleBtn) toggleBtn.textContent = '📝 Edit';
        }
    }
}

function displayFileContent(fileName, fileContent) {
    if(!domElements.codeViewer) return;

    domElements.codeViewer.textContent = fileContent;
    const extension = fileName.split('.').pop().toLowerCase();
    let languageClass = 'language-clike'; // Default
    switch (extension) {
        case 'js': languageClass = 'language-javascript'; break;
        case 'json': languageClass = 'language-json'; break;
        case 'html': case 'htm': case 'xml': case 'svg': languageClass = 'language-markup'; break;
        case 'css': languageClass = 'language-css'; break;
        case 'md': languageClass = 'language-markdown'; break;
        // Add more cases as needed
    }
    domElements.codeViewer.className = languageClass; // Set class for Prism

    if(domElements.codeViewerPlaceholder) domElements.codeViewerPlaceholder.style.display = 'none';
}

// --- Download ---
async function downloadAllFilesAsZip() {
    if (generatedFiles.length === 0) return;

    const zip = new JSZip();
    generatedFiles.forEach(file => {
        // JSZip handles paths in filenames to create directories
        zip.file(file.name, file.content);
    });

    try {
        updateStatus("Creating ZIP file...", 'info'); // i18n this key
        const zipBlob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(zipBlob);

        chrome.downloads.download({
            url: url,
            filename: "NuModeX_Ext_Maker_generated_extension.zip", // Suggest a filename
            saveAs: true // Ask user where to save
        }, downloadId => {
            URL.revokeObjectURL(url); // Clean up blob URL
            if (chrome.runtime.lastError) {
                console.error("Download error:", chrome.runtime.lastError.message);
                updateStatus(`${getTranslatedMessage('errorDownload')} ${chrome.runtime.lastError.message}`, 'error');
            } else if (downloadId === undefined && !chrome.runtime.lastError) {
                 // This can happen if the user cancels the download dialog
                 updateStatus(`${getTranslatedMessage('errorDownload')} Download cancelled or failed.`, 'warning');
            } else {
                updateStatus('downloadSuccess', 'success');
            }
        });
    } catch (error) {
        console.error("JSZip error:", error);
        updateStatus(`${getTranslatedMessage('errorZipCreation')} ${error.message}`, 'error');
    }
}

// --- Typing Indicator ---
function showTypingIndicator() {
    if (!domElements.conversationDisplayArea) return;

    // Remove any existing indicator first
    hideTypingIndicator();

    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator-message';
    indicator.id = 'typing-indicator-bubble';

    const label = document.createElement('div');
    label.className = 'typing-indicator-label';
    label.textContent = getTranslatedMessage('chatLlmLabel') || 'NuModeX Ext Maker';

    const dots = document.createElement('div');
    dots.className = 'typing-dots';
    dots.innerHTML = '<span></span><span></span><span></span>';

    indicator.appendChild(label);
    indicator.appendChild(dots);

    domElements.conversationDisplayArea.appendChild(indicator);
    domElements.conversationDisplayArea.scrollTop = domElements.conversationDisplayArea.scrollHeight;
}

function hideTypingIndicator() {
    const existing = document.getElementById('typing-indicator-bubble');
    if (existing) {
        existing.remove();
    }
}

// --- UI & State Updates ---
function showLoading(messageText, type = 'message') {
    let msgKey = type === 'message' ? 'statusSendingMessage' : 'statusGenerating';
    let displayMessage = messageText || getTranslatedMessage(msgKey) || "Loading...";
    
    if(domElements.sendMessageButton && type === 'message') domElements.sendMessageButton.disabled = true;
    if(domElements.generateExtensionButton && type === 'generation') domElements.generateExtensionButton.disabled = true;

    if(domElements.loadingIndicator) {
      domElements.loadingIndicator.textContent = `⏳ ${displayMessage}`;
      domElements.loadingIndicator.style.display = 'inline';
    }
    if(domElements.statusMessageArea) domElements.statusMessageArea.textContent = ''; // Clear previous status message
    showTypingIndicator();
}

function hideLoading() {
    hideTypingIndicator();
    if(domElements.loadingIndicator) {
      domElements.loadingIndicator.style.display = 'none';
      domElements.loadingIndicator.textContent = '';
    }
    updateButtonStates(); // Re-enable buttons based on current state
}

function startOver() {
    console.log("startOver: Resetting current project content.");
    conversationHistory = [];
    generatedFiles = [];
    attachedFilesData = [];

    if (domElements.conversationDisplayArea) domElements.conversationDisplayArea.innerHTML = '';
    if (domElements.chatInputField) domElements.chatInputField.value = '';
    renderImagePreviews(); // Clear image previews

    clearGeneratedFiles(); // Clear right pane (files and code viewer)

    // Clear pending EULA actions
    pendingEulaAction = null;

    // Reset incremental editing state — keep currentProjectId so we stay in the same project
    selectedFileForEdit = null;
    undoStack = [];
    lastEditDiffs = [];
    isManualEditMode = false;
    if (domElements.improvePromptArea) domElements.improvePromptArea.style.display = 'none';
    if (domElements.editPromptArea) domElements.editPromptArea.style.display = 'none';
    if (domElements.addFileArea) domElements.addFileArea.style.display = 'none';

    // Save the cleared state to DB immediately
    if (currentProjectId) {
        saveProjectToDb();
    }

    updateStatus('startOverConfirmation', 'success');
    if (domElements.chatInputField) domElements.chatInputField.focus();
    updateButtonStates();
    showPlaceholderIfNeeded(); // Ensure placeholders are correctly displayed
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    console.log("setupEventListeners: Attaching event listeners...");

    // Project picker listeners
    if (domElements.projectSelector) {
        domElements.projectSelector.addEventListener('change', (e) => {
            const selectedId = parseInt(e.target.value, 10);
            if (selectedId && selectedId !== currentProjectId) {
                switchProject(selectedId);
            }
        });
    }

    if (domElements.newProjectButton) {
        domElements.newProjectButton.addEventListener('click', createNewProject);
    }

    if (domElements.renameProjectButton) {
        domElements.renameProjectButton.addEventListener('click', () => {
            if (domElements.projectActionsMenu) domElements.projectActionsMenu.classList.remove('show');
            renameCurrentProject();
        });
    }

    if (domElements.deleteProjectButton) {
        domElements.deleteProjectButton.addEventListener('click', () => {
            if (domElements.projectActionsMenu) domElements.projectActionsMenu.classList.remove('show');
            deleteCurrentProject();
        });
    }

    // Project actions dropdown toggle
    if (domElements.projectActionsButton && domElements.projectActionsMenu) {
        domElements.projectActionsButton.addEventListener('click', (e) => {
            e.stopPropagation();
            domElements.projectActionsMenu.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!domElements.projectActionsMenu.contains(e.target) && e.target !== domElements.projectActionsButton) {
                domElements.projectActionsMenu.classList.remove('show');
            }
        });
    }

    if (domElements.languageSwitcher) {
        domElements.languageSwitcher.addEventListener('change', (e) => switchLanguage(e.target.value));
        console.log("Attached listener to languageSwitcher");
    } else { console.error("setupEventListeners: domElements.languageSwitcher is null!"); }

    if (domElements.settingsButton) {
        domElements.settingsButton.addEventListener('click', toggleApiKeySection);
        console.log("Attached listener to settingsButton");
    } else { console.error("setupEventListeners: domElements.settingsButton is null!"); }
    
    if (domElements.darkModeToggle) {
        domElements.darkModeToggle.addEventListener('click', toggleDarkMode);
        console.log("Attached listener to darkModeToggle");
    } else { console.error("setupEventListeners: domElements.darkModeToggle is null!"); }

    if (domElements.closeApiModalButton) {
        domElements.closeApiModalButton.addEventListener('click', toggleApiKeySection);
        console.log("Attached listener to closeApiModalButton");
    } else { console.error("setupEventListeners: domElements.closeApiModalButton is null!"); }

    if (domElements.saveApiKeyButton) {
        domElements.saveApiKeyButton.addEventListener('click', saveApiKey);
        console.log("Attached listener to saveApiKeyButton");
    } else { console.error("setupEventListeners: domElements.saveApiKeyButton is null!"); }

    if (domElements.deleteApiKeyButton) {
        domElements.deleteApiKeyButton.addEventListener('click', deleteApiKey);
        console.log("Attached listener to deleteApiKeyButton");
    }

    if (domElements.apiKeyInput) {
        domElements.apiKeyInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); saveApiKey(); } });
        console.log("Attached keypress listener to apiKeyInput");
    } else { console.error("setupEventListeners: domElements.apiKeyInput is null!"); }

    if (domElements.attachImageButton) {
        domElements.attachImageButton.addEventListener('click', () => {
            if (domElements.imageInputField) domElements.imageInputField.click();
            else console.error("attachImageButton listener: domElements.imageInputField is null!");
        });
        console.log("Attached listener to attachImageButton");
    } else { console.error("setupEventListeners: domElements.attachImageButton is null!"); }

    if (domElements.imageInputField) {
        domElements.imageInputField.addEventListener('change', handleAttachImage);
        console.log("Attached listener to imageInputField");
    } else { console.error("setupEventListeners: domElements.imageInputField is null!"); }

    if (domElements.sendMessageButton) {
        domElements.sendMessageButton.addEventListener('click', handleSendMessage);
        console.log("Attached listener to sendMessageButton");
    } else { console.error("setupEventListeners: domElements.sendMessageButton is null!"); }

    if (domElements.chatInputField) {
        domElements.chatInputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                handleGenerateExtension();
            } else if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
            }
        });
        domElements.chatInputField.addEventListener('input', updateButtonStates); // Update on input change
        console.log("Attached listeners to chatInputField");
    } else { console.error("setupEventListeners: domElements.chatInputField is null!"); }

    if (domElements.generateExtensionButton) {
        domElements.generateExtensionButton.addEventListener('click', handleGenerateExtension);
        console.log("Attached listener to generateExtensionButton");
    } else { console.error("setupEventListeners: domElements.generateExtensionButton is null!"); }

    if (domElements.downloadZipButton) {
        domElements.downloadZipButton.addEventListener('click', downloadAllFilesAsZip);
        console.log("Attached listener to downloadZipButton");
    } else { console.error("setupEventListeners: domElements.downloadZipButton is null!"); }

    if (domElements.startOverButton) {
        domElements.startOverButton.addEventListener('click', startOver);
        console.log("Attached listener to startOverButton");
    } else { console.error("setupEventListeners: domElements.startOverButton is null!"); }

    // EULA modal listeners
    if (domElements.eulaLanguageSelect) {
        domElements.eulaLanguageSelect.addEventListener('change', handleEULALanguageChange);
        console.log("Attached listener to eulaLanguageSelect");
    }

    if (domElements.eulaAcceptCheckbox) {
        domElements.eulaAcceptCheckbox.addEventListener('change', (e) => {
            if (domElements.eulaAcceptButton) {
                domElements.eulaAcceptButton.disabled = !e.target.checked;
            }
        });
        console.log("Attached listener to eulaAcceptCheckbox");
    }

    if (domElements.eulaAcceptButton) {
        domElements.eulaAcceptButton.addEventListener('click', handleEULAAccept);
        console.log("Attached listener to eulaAcceptButton");
    }

    if (domElements.eulaDeclineButton) {
        domElements.eulaDeclineButton.addEventListener('click', () => {
            // Close the entire popup — user cannot use the extension without accepting the EULA
            window.close();
        });
        console.log("Attached listener to eulaDeclineButton");
    }

    // Help modal listeners
    if (domElements.helpButton) {
        domElements.helpButton.addEventListener('click', showHelpModal);
        console.log("Attached listener to helpButton");
    } else { console.error("setupEventListeners: domElements.helpButton is null!"); }

    if (domElements.closeHelpModal) {
        domElements.closeHelpModal.addEventListener('click', hideHelpModal);
        console.log("Attached listener to closeHelpModal");
    } else { console.error("setupEventListeners: domElements.closeHelpModal is null!"); }

    if (domElements.helpCloseButton) {
        domElements.helpCloseButton.addEventListener('click', hideHelpModal);
        console.log("Attached listener to helpCloseButton");
    } else { console.error("setupEventListeners: domElements.helpCloseButton is null!"); }

    // Click outside modals to close
    document.addEventListener('click', (e) => {
        if (e.target === domElements.eulaModal) {
            hideEULAModal();
            // Cancel any pending action
            pendingEulaAction = null;
        }
        if (e.target === domElements.helpModal) {
            hideHelpModal();
        }
    });

    // Make brand header clickable to open NuModeX Ext Maker website
    const appTitleContainer = document.getElementById('app-title-container');
    if (appTitleContainer) {
        appTitleContainer.addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://numodex.com/numodexextmaker' });
        });
    }

    // Make copyright notice clickable to open SoraVantia website
    const copyrightEl = document.getElementById('copyright-notice');
    if (copyrightEl) {
        copyrightEl.addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://soravantia.com' });
        });
    }

    // Footer legal links
    const privacyLink = document.getElementById('privacy-policy-link');
    if (privacyLink) {
        privacyLink.addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://numodex.com/numodexextmaker/privacy' });
        });
    }

    const termsLink = document.getElementById('terms-of-service-link');
    if (termsLink) {
        termsLink.addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://numodex.com/numodexextmaker/eula' });
        });
    }

    // --- Incremental Editing Listeners ---

    // Improve Extension button — full-project mode
    if (domElements.improveExtensionButton) {
        domElements.improveExtensionButton.addEventListener('click', () => {
            if (generatedFiles.length === 0) return;
            // Show the improve prompt area, hide others
            if (domElements.improvePromptArea) domElements.improvePromptArea.style.display = 'block';
            if (domElements.editPromptArea) domElements.editPromptArea.style.display = 'none';
            if (domElements.addFileArea) domElements.addFileArea.style.display = 'none';
            if (domElements.improvePromptInput) domElements.improvePromptInput.focus();
        });
    }

    // Apply Improve button — sends ALL files to the AI
    if (domElements.applyImproveButton) {
        domElements.applyImproveButton.addEventListener('click', async () => {
            const improveText = domElements.improvePromptInput?.value.trim();
            if (!improveText) return;

            // Add the improve request to chat
            addMessageToChatDOM('user', `[Improve Extension]: ${improveText}`);
            conversationHistory.push({ role: 'user', parts: [{ text: `[Improve Extension]: ${improveText}` }] });

            // Hide the improve prompt area
            if (domElements.improvePromptArea) domElements.improvePromptArea.style.display = 'none';
            if (domElements.improvePromptInput) domElements.improvePromptInput.value = '';

            // Call the edit API in FULL-PROJECT mode (null targetFileName)
            await callEditAPI(null, improveText);
        });
    }

    // Cancel Improve button
    if (domElements.cancelImproveButton) {
        domElements.cancelImproveButton.addEventListener('click', () => {
            if (domElements.improvePromptArea) domElements.improvePromptArea.style.display = 'none';
            if (domElements.improvePromptInput) domElements.improvePromptInput.value = '';
        });
    }

    // Edit File button — single-file mode
    if (domElements.editFileButton) {
        domElements.editFileButton.addEventListener('click', () => {
            if (!selectedFileForEdit || generatedFiles.length === 0) return;
            // Show the edit prompt area
            if (domElements.editPromptArea) domElements.editPromptArea.style.display = 'block';
            if (domElements.addFileArea) domElements.addFileArea.style.display = 'none';
            if (domElements.improvePromptArea) domElements.improvePromptArea.style.display = 'none';
            if (domElements.editPromptInput) {
                domElements.editPromptInput.placeholder = `Describe changes to ${selectedFileForEdit}...`;
                domElements.editPromptInput.focus();
            }
        });
    }

    // Copy File button
    if (domElements.copyFileButton) {
        domElements.copyFileButton.addEventListener('click', async () => {
            if (!selectedFileForEdit || generatedFiles.length === 0) return;

            const file = generatedFiles.find(f => f.name === selectedFileForEdit);
            if (!file) return;

            try {
                await navigator.clipboard.writeText(file.content);

                // Show feedback
                const originalText = domElements.copyFileButton.textContent;
                domElements.copyFileButton.textContent = getTranslatedMessage('copyFileSuccess') || '✅ Copied!';
                setTimeout(() => {
                    domElements.copyFileButton.textContent = getTranslatedMessage('copyFileButton') || '📋 Copy';
                }, 1500);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    }

    // Apply Edit button
    if (domElements.applyEditButton) {
        domElements.applyEditButton.addEventListener('click', async () => {
            const editText = domElements.editPromptInput?.value.trim();
            if (!editText || !selectedFileForEdit) return;

            // Add the edit request to chat
            addMessageToChatDOM('user', `[Edit ${selectedFileForEdit}]: ${editText}`);
            conversationHistory.push({ role: 'user', parts: [{ text: `[Edit ${selectedFileForEdit}]: ${editText}` }] });

            // Hide the edit prompt area
            if (domElements.editPromptArea) domElements.editPromptArea.style.display = 'none';
            if (domElements.editPromptInput) domElements.editPromptInput.value = '';

            // Call the edit API
            await callEditAPI(selectedFileForEdit, `Edit the file "${selectedFileForEdit}": ${editText}`);
        });
    }

    // Cancel Edit button
    if (domElements.cancelEditButton) {
        domElements.cancelEditButton.addEventListener('click', () => {
            if (domElements.editPromptArea) domElements.editPromptArea.style.display = 'none';
            if (domElements.editPromptInput) domElements.editPromptInput.value = '';
        });
    }

    // Add File button
    if (domElements.addFileButton) {
        domElements.addFileButton.addEventListener('click', () => {
            if (generatedFiles.length === 0) return;
            if (domElements.addFileArea) domElements.addFileArea.style.display = 'block';
            if (domElements.editPromptArea) domElements.editPromptArea.style.display = 'none';
            if (domElements.improvePromptArea) domElements.improvePromptArea.style.display = 'none';
            if (domElements.newFileNameInput) domElements.newFileNameInput.focus();
        });
    }

    // Create File button
    if (domElements.createFileButton) {
        domElements.createFileButton.addEventListener('click', async () => {
            const newFileName = domElements.newFileNameInput?.value.trim();
            const description = domElements.addFilePromptInput?.value.trim();
            if (!newFileName || !description) {
                updateStatus('Please enter a filename and description.', 'error');
                return;
            }

            // Add the request to chat
            addMessageToChatDOM('user', `[Add file ${newFileName}]: ${description}`);
            conversationHistory.push({ role: 'user', parts: [{ text: `[Add file ${newFileName}]: ${description}` }] });

            // Hide the add file area
            if (domElements.addFileArea) domElements.addFileArea.style.display = 'none';
            if (domElements.newFileNameInput) domElements.newFileNameInput.value = '';
            if (domElements.addFilePromptInput) domElements.addFilePromptInput.value = '';

            // Call the edit API
            await callEditAPI(null, `Create a new file named "${newFileName}" with the following purpose: ${description}`);
        });
    }

    // Cancel Add File button
    if (domElements.cancelAddFileButton) {
        domElements.cancelAddFileButton.addEventListener('click', () => {
            if (domElements.addFileArea) domElements.addFileArea.style.display = 'none';
            if (domElements.newFileNameInput) domElements.newFileNameInput.value = '';
            if (domElements.addFilePromptInput) domElements.addFilePromptInput.value = '';
        });
    }

    // Undo button
    if (domElements.undoButton) {
        domElements.undoButton.addEventListener('click', undoLastEdit);
    }

    // View Changes button
    if (domElements.viewChangesButton) {
        domElements.viewChangesButton.addEventListener('click', showDiffModal);
    }

    // More actions dropdown toggle
    if (domElements.moreActionsButton && domElements.moreActionsDropdown) {
        domElements.moreActionsButton.addEventListener('click', (e) => {
            e.stopPropagation();
            domElements.moreActionsDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!domElements.moreActionsDropdown.contains(e.target) && e.target !== domElements.moreActionsButton) {
                domElements.moreActionsDropdown.classList.remove('show');
            }
        });
    }

    // Close diff modal
    if (domElements.closeDiffModal) {
        domElements.closeDiffModal.addEventListener('click', hideDiffModal);
    }

    // Toggle diff view format
    if (domElements.diffToggleView) {
        domElements.diffToggleView.addEventListener('click', () => {
            currentDiffFormat = currentDiffFormat === 'line-by-line' ? 'side-by-side' : 'line-by-line';
            domElements.diffToggleView.textContent = currentDiffFormat === 'line-by-line' ? 'Side-by-side' : 'Unified';

            // Re-render the currently active tab's diff
            const activeTab = domElements.diffFileTabs?.querySelector('.diff-file-tab.active');
            if (activeTab) {
                const activeIndex = Array.from(domElements.diffFileTabs.children).indexOf(activeTab);
                if (activeIndex >= 0 && lastEditDiffs[activeIndex]) {
                    renderFileDiff(lastEditDiffs[activeIndex], currentDiffFormat);
                }
            }
        });
    }

    // Close diff modal on backdrop click
    if (domElements.diffModal) {
        domElements.diffModal.addEventListener('click', (e) => {
            if (e.target === domElements.diffModal) {
                hideDiffModal();
            }
        });
    }

    // Preview button
    if (domElements.previewButton) {
        domElements.previewButton.addEventListener('click', () => {
            // Close the More dropdown
            if (domElements.moreActionsDropdown) domElements.moreActionsDropdown.classList.remove('show');
            showPreviewModal();
        });
    }

    // Close preview modal
    if (domElements.closePreviewModal) {
        domElements.closePreviewModal.addEventListener('click', hidePreviewModal);
    }

    // Close preview modal on backdrop click
    if (domElements.previewModal) {
        domElements.previewModal.addEventListener('click', (e) => {
            if (e.target === domElements.previewModal) {
                hidePreviewModal();
            }
        });
    }

    // Manual code edit toggle
    const toggleEditBtn = document.getElementById('toggle-edit-mode');
    if (toggleEditBtn) {
        toggleEditBtn.addEventListener('click', toggleManualEditMode);
    }

    // Custom model buttons
    if (domElements.saveCustomModelButton) {
        domElements.saveCustomModelButton.addEventListener('click', saveCustomModel);
    }

    if (domElements.deleteCustomModelButton) {
        domElements.deleteCustomModelButton.addEventListener('click', deleteCustomModel);
    }

    // Import Project
    if (domElements.importProjectButton) {
        domElements.importProjectButton.addEventListener('click', () => {
            if (domElements.moreActionsDropdown) domElements.moreActionsDropdown.classList.remove('show');
            if (domElements.importFileInput) domElements.importFileInput.click();
        });
    }

    // Import file selected
    if (domElements.importFileInput) {
        domElements.importFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                importProject(file);
                e.target.value = '';
            }
        });
    }

    updateButtonStates(); // Initial button state update
    console.log("setupEventListeners: Finished attaching listeners and called updateButtonStates.");
}

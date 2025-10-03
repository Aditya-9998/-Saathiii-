// i18n.js
let currentLang = localStorage.getItem('preferredLang') || 'en'; // Default language

// -----------------------
// 1️⃣ Translation Data Load
// -----------------------
async function loadTranslations(lang) {
    try {
        // Path update: ./data folder me JSON files
        const response = await fetch(`./data/${lang}.json`, { cache: 'no-cache' });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Translation file not found:", error);
        return {};
    }
}

// -----------------------
// 2️⃣ Get Translation by Key (dot notation supported)
// -----------------------
function getTranslation(key, translations) {
    const keys = key.split('.');
    let result = translations;

    for (const k of keys) {
        if (result && result.hasOwnProperty(k)) {
            result = result[k];
        } else {
            return `[KEY NOT FOUND: ${key}]`;
        }
    }

    if (typeof result === 'string' || typeof result === 'number') return result;
    return `[INCOMPLETE KEY: ${key}]`;
}

// -----------------------
// 3️⃣ Translate Entire Page
// -----------------------
async function translatePage(lang) {
    const translations = await loadTranslations(lang);
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translatedText = getTranslation(key, translations);

        const tag = element.tagName.toUpperCase();

        if (tag === 'INPUT' || tag === 'TEXTAREA') {
            // Placeholder or value update
            if (element.hasAttribute('placeholder') || element.getAttribute('type') === 'text' || element.getAttribute('type') === 'search') {
                element.setAttribute('placeholder', translatedText);
            } else {
                element.value = translatedText;
            }
        } else if (tag === 'BUTTON' || tag === 'OPTION') {
            element.textContent = translatedText;
        } else {
            element.textContent = translatedText;
        }
    });

    // Save language preference
    localStorage.setItem('preferredLang', lang);

    // Update dropdown if present
    const selectElement = document.getElementById('language-select');
    if (selectElement) selectElement.value = lang;

    // Notify other modules
    document.dispatchEvent(new CustomEvent('translationsLoaded', { detail: { lang, translations } }));
}

// -----------------------
// 4️⃣ DOMContentLoaded Hook
// -----------------------
document.addEventListener('DOMContentLoaded', () => {
    // Initial load
    translatePage(currentLang);

    // Language selector dropdown
    const selectElement = document.getElementById('language-select');
    if (selectElement) {
        selectElement.addEventListener('change', (e) => {
            translatePage(e.target.value);
        });
    }
});

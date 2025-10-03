// js/language.js
// Robust translation loader — supports both `data-i18n` and `data-lang-key` attributes
(function () {
  const DATA_FOLDER = "./data"; // <-- रखो data folder को index.html के साथ उसी level पर

  window.currentTranslations = window.currentTranslations || {};
  window.currentLang = window.currentLang || "en";

  async function loadTranslations(lang) {
    const path = `${DATA_FOLDER}/${lang}.json`;
    try {
      const resp = await fetch(path, { cache: "no-cache" });
      if (!resp.ok) throw new Error(`Failed to load ${path}: ${resp.status}`);
      const json = await resp.json();
      return json;
    } catch (err) {
      console.error(`Translation error (Check path: ${path} or JSON structure):`, err);
      return {};
    }
  }

  function getTranslation(key, translations) {
    if (!key) return "";
    const keys = key.split(".");
    let res = translations;
    for (const k of keys) {
      if (res && typeof res === "object" && Object.prototype.hasOwnProperty.call(res, k)) {
        res = res[k];
      } else {
        return `[KEY NOT FOUND: ${key}]`;
      }
    }
    if (typeof res === "string" || typeof res === "number") return res;
    return `[INCOMPLETE KEY: ${key}]`;
  }

  async function translatePage(lang) {
    const translations = await loadTranslations(lang);
    window.currentTranslations = translations;
    window.currentLang = lang;

    // select both attribute styles so it's backward-compatible
    const nodes = document.querySelectorAll("[data-i18n], [data-lang-key]");

    nodes.forEach((el) => {
      const key = el.getAttribute("data-i18n") || el.getAttribute("data-lang-key");
      const translated = getTranslation(key, translations);

      const tag = el.tagName.toUpperCase();
      if (tag === "INPUT" || tag === "TEXTAREA") {
        // prefer placeholder if present or input text type
        if (el.hasAttribute("placeholder") || el.getAttribute("type") === "text" || el.getAttribute("type") === "search") {
          el.setAttribute("placeholder", translated);
        } else {
          el.value = translated;
        }
      } else if (tag === "OPTION") {
        el.textContent = translated;
      } else {
        el.textContent = translated;
      }
    });

    localStorage.setItem("preferredLang", lang);

    const selectElement = document.getElementById("language-select");
    if (selectElement) selectElement.value = lang;

    // notify other modules
    document.dispatchEvent(new CustomEvent("translationsLoaded", { detail: { translations, lang } }));
  }

  // Initial load & hook for language select
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("preferredLang") || "en";
    translatePage(saved);

    const selectElement = document.getElementById("language-select");
    if (selectElement) {
      selectElement.addEventListener("change", (e) => {
        translatePage(e.target.value);
      });
    }
  });

})();

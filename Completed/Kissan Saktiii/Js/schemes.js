// js/schemes.js
(function () {
  const schemesData = [
    {
      title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      text: "Crop insurance scheme for farmers to protect against crop failure due to natural calamities.",
      link: "https://pmfby.gov.in/",
      langKeyTitle: "schemes.pmfby.title",
      langKeyText: "schemes.pmfby.text"
    },
    {
      title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      text: "A central sector scheme providing income support to all landholding farmer families.",
      link: "https://pmkisan.gov.in/",
      langKeyTitle: "schemes.pmkisan.title",
      langKeyText: "schemes.pmkisan.text"
    },
    {
      title: "Kisan Credit Card (KCC)",
      text: "Provides timely and adequate credit support to farmers for their agricultural needs.",
      link: "https://www.india.gov.in/scheme-kisan-credit-card-kcc-scheme",
      langKeyTitle: "schemes.kcc.title",
      langKeyText: "schemes.kcc.text"
    },
    {
      title: "e-NAM (National Agriculture Market)",
      text: "An online trading portal for agricultural commodities to ensure fair prices for farmers.",
      link: "https://www.enam.gov.in/web/",
      langKeyTitle: "schemes.enam.title",
      langKeyText: "schemes.enam.text"
    }
  ];

  const schemesContainer = document.querySelector(".schemes-carousel");
  const dotsContainer = document.querySelector(".carousel-dots");
  let currentSchemeIndex = 0;
  let carouselInterval = null;

  function getSchemeTranslation(key, translations) {
    if (!translations || !key) return `[SCHEME KEY MISSING: ${key}]`;
    const keys = key.split(".");
    let res = translations;
    for (const k of keys) {
      if (res && typeof res === "object" && Object.prototype.hasOwnProperty.call(res, k)) {
        res = res[k];
      } else {
        return `[SCHEME KEY MISSING: ${key}]`;
      }
    }
    return typeof res === "string" || typeof res === "number" ? res : `[SCHEME KEY MISSING: ${key}]`;
  }

  function renderScheme(translations, lang) {
    if (!schemesContainer) return;

    const scheme = schemesData[currentSchemeIndex];

    const tTitle = getSchemeTranslation(scheme.langKeyTitle, translations);
    const tText = getSchemeTranslation(scheme.langKeyText, translations);

    // fallback to english text if translation key missing
    const titleToShow = (typeof tTitle === "string" && tTitle.startsWith("[SCHEME KEY MISSING]")) ? scheme.title : tTitle;
    const textToShow = (typeof tText === "string" && tText.startsWith("[SCHEME KEY MISSING]")) ? scheme.text : tText;

    schemesContainer.innerHTML = "";
    const schemeCard = document.createElement("a");
    schemeCard.href = scheme.link;
    schemeCard.target = "_blank";
    schemeCard.classList.add("scheme-card");
    schemeCard.innerHTML = `
      <div class="scheme-content">
        <h3 class="scheme-title">${titleToShow}</h3>
        <p class="scheme-text">${textToShow}</p>
      </div>
    `;
    schemesContainer.appendChild(schemeCard);

    // update dots active state
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, index) => dot.classList.toggle("active", index === currentSchemeIndex));
    }
  }

  function startCarousel(translations = window.currentTranslations || {}, lang = window.currentLang || "en") {
    if (carouselInterval) clearInterval(carouselInterval);
    renderScheme(translations, lang);
    carouselInterval = setInterval(() => {
      currentSchemeIndex = (currentSchemeIndex + 1) % schemesData.length;
      renderScheme(translations, lang);
    }, 5000);
  }

  // Listen for translationsLoaded event
  document.addEventListener("translationsLoaded", (event) => {
    const { translations, lang } = event.detail || {};
    startCarousel(translations || window.currentTranslations || {}, lang || window.currentLang || "en");
  });

  // If translations already loaded before this script attaches, start carousel now
  document.addEventListener("DOMContentLoaded", () => {
    // create dots (if container available)
    if (dotsContainer) {
      dotsContainer.innerHTML = schemesData.map((_, idx) => `<span class="dot ${idx === 0 ? "active" : ""}" data-index="${idx}"></span>`).join("");
      dotsContainer.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("dot")) {
          currentSchemeIndex = Number(e.target.dataset.index);
          startCarousel(window.currentTranslations || {}, window.currentLang || "en");
        }
      });
    }

    if (window.currentTranslations && Object.keys(window.currentTranslations).length) {
      startCarousel(window.currentTranslations, window.currentLang || "en");
    }
  });

})();

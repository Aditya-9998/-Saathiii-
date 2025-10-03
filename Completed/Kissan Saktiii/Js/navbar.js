document.addEventListener("DOMContentLoaded", async () => {
  // Load translations first
  const preferredLang = localStorage.getItem("preferredLang") || "en";
  let translations = {};
  try {
    const resp = await fetch(`./data/${preferredLang}.json`);
    translations = await resp.json();
  } catch (err) {
    console.error("Failed to load translations:", err);
  }

  // Helper to get translation
  function t(key) {
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), translations) || `[KEY NOT FOUND: ${key}]`;
  }

  // Create header
  const header = document.createElement("header");
  header.classList.add("navbar");
  header.innerHTML = `
    <div class="logo-and-language">
        <div class="logo">🌿किसान Saathiii 🌿</div>
        <div class="language-switcher">
            <select id="language-select">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
            </select>
        </div>
    </div>
    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <nav class="nav-links">
        <ul>
            <li><a href="index.html" data-lang-key="navbar.home">${t("navbar.home")}</a></li>
            <li><a href="weather.html" data-lang-key="navbar.weather">${t("navbar.weather")}</a></li>
            <li><a href="advisory.html" data-lang-key="navbar.advisory">${t("navbar.advisory")}</a></li>
            <li><a href="news.html" data-lang-key="navbar.news">${t("navbar.news")}</a></li>
            <li><a href="insurance.html" data-lang-key="navbar.insurance">${t("navbar.insurance")}</a></li>
            <li><a href="mrp-rate.html" data-lang-key="navbar.mrpRate">${t("navbar.mrpRate")}</a></li>
            <li><a href="about.html" data-lang-key="navbar.about">${t("navbar.about")}</a></li>
            <li><a href="login.html" data-lang-key="navbar.loginSignup">${t("navbar.loginSignup")}</a></li>
        </ul>
    </nav>
  `;
  document.body.prepend(header);

  // Highlight active page
  const links = header.querySelectorAll("a");
  links.forEach(link => {
    if (window.location.pathname.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // Language change handler
  const langSelect = header.querySelector("#language-select");
  langSelect.value = preferredLang;
  langSelect.addEventListener("change", async (e) => {
    const lang = e.target.value;
    localStorage.setItem("preferredLang", lang);

    // Reload translations
    try {
      const resp = await fetch(`./data/${lang}.json`);
      translations = await resp.json();
    } catch (err) {
      console.error("Failed to load translations:", err);
    }

    // Update all navbar links dynamically
    links.forEach(link => {
      const key = link.getAttribute("data-lang-key");
      link.textContent = key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : `[KEY NOT FOUND: ${key}]`), translations);
    });
  });
});

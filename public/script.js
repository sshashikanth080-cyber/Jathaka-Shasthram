// ========================================
// JATHAKA SHASTHRAM - GLOBAL LANGUAGE SYSTEM
// ========================================
const SITE_TRANSLATIONS = {
    English: {
        navHome:'Home', navHoroscope:'Horoscope', navKundli:'Kundli', navCompatibility:'Compatibility', navNumerology:'Numerology',
        eyebrow:'✦ VEDIC ASTROLOGY ✦', heroTitle:'Discover Your <span>Cosmic Path</span>',
        heroText:'Explore your birth chart, planetary placements, Nakshatra and traditional Vedic astrology insights in one simple place.', heroButton:'Create My Kundli →',
        explore:'✦ EXPLORE JATHAKA SHASTHRAM', toolsTitle:'Astrology tools for your journey',
        birthTitle:'Birth Chart', birthText:'Explore your Lagna, planetary positions, Nakshatra, houses and personalized traditional guidance.', birthCta:'Create Kundli →',
        dailyTitle:'Daily Guide', dailyText:'A simple traditional daily-theme section designed for a future daily horoscope experience.', dailyCta:'View module →',
        compTitle:'Compatibility', compText:'Compare two birth dates using a clearly labeled numerology-based compatibility preview.', compCta:'Try compatibility →',
        numTitle:'Numerology', numText:'Calculate Life Path and Name Number using common traditional numerology methods.', numCta:'Calculate number →',
        personalKicker:'✦ PERSONAL BIRTH CHART', personalTitle:'Create Your Janma Kundli', personalText:'Enter your birth details to calculate a Vedic sidereal birth chart.',
        fullName:'Full Name', enterName:'Enter your name', birthDate:'Birth Date', birthTime:'Birth Time', birthPlace:'Birth Place', placePlaceholder:'Example: Bengaluru, Karnataka, India', placeHelp:'Enter city, state and country for better location matching.', resultLanguage:'Result Language', generate:'🔮 Generate My Birth Chart',
        dailyKicker:'✦ DAILY TRADITIONAL GUIDE', dailySectionTitle:'Today’s astrology theme', dailySectionText:'A lightweight educational section — not a guaranteed prediction.',
        dailyCardTitle:'Use reflection, not certainty', dailyCardText:'Astrology can be used as a cultural reflection tool. For important choices, combine any traditional insight with reliable information and your own judgment.',
        compKicker:'✦ COMPATIBILITY', compSectionTitle:'Compatibility Preview', compSectionText:'This quick preview uses date-based numerology only. It is not a full Kundli matching score.',
        person1:'Person 1', person2:'Person 2', name:'Name', namePlaceholder:'Name', placeShort:'City, State, Country', compare:'💫 Compare Birth Charts',
        numKicker:'✦ NUMEROLOGY', numSectionTitle:'Calculate Your Numbers', numSectionText:'Traditional numerology calculation for educational and entertainment use.', enterFullName:'Enter your full name', calculate:'🔢 Calculate Numbers', reportTitle:'Full Kundli Report', reportText:'Generate a structured report from your current birth chart and save it as a PDF.', reportCta:'Generate Report →',
        about:'About Jathaka Shasthram', aboutText:'Jathaka Shasthram presents traditional Vedic astrology calculations for cultural and entertainment purposes. Astrology interpretations are not guaranteed predictions and should not replace professional medical, legal or financial advice.',
        footer:'© 2026 Jathaka Shasthram · Traditional astrology experience', language:'Language', scrollExplore:'Scroll to explore', backTop:'Back to top'
    },
    Kannada: {
        navHome:'ಮುಖಪುಟ', navHoroscope:'ರಾಶಿಫಲ', navKundli:'ಕುಂಡಲಿ', navCompatibility:'ಹೊಂದಾಣಿಕೆ', navNumerology:'ಅಂಕಶಾಸ್ತ್ರ',
        eyebrow:'✦ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ✦', heroTitle:'ನಿಮ್ಮ <span>ಕಾಸ್ಮಿಕ ಪಥ</span>ವನ್ನು ಕಂಡುಕೊಳ್ಳಿ',
        heroText:'ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿ, ಗ್ರಹಗಳ ಸ್ಥಾನ, ನಕ್ಷತ್ರ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಮಾಹಿತಿಯನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ತಿಳಿದುಕೊಳ್ಳಿ.', heroButton:'ನನ್ನ ಕುಂಡಲಿ ರಚಿಸಿ →',
        explore:'✦ JATHAKA SHASTHRAM ಅನ್ವೇಷಿಸಿ', toolsTitle:'ನಿಮ್ಮ ಪ್ರಯಾಣಕ್ಕಾಗಿ ಜ್ಯೋತಿಷ್ಯ ಸಾಧನಗಳು',
        birthTitle:'ಜನ್ಮ ಕುಂಡಲಿ', birthText:'ಲಗ್ನ, ಗ್ರಹಗಳ ಸ್ಥಾನ, ನಕ್ಷತ್ರ, ಭವನಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೋಡಿ.', birthCta:'ಕುಂಡಲಿ ರಚಿಸಿ →',
        dailyTitle:'ದೈನಂದಿನ ಮಾರ್ಗದರ್ಶನ', dailyText:'ಭವಿಷ್ಯದ ದೈನಂದಿನ ರಾಶಿಫಲ ಅನುಭವಕ್ಕಾಗಿ ಸರಳ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರ್ಗದರ್ಶನ ವಿಭಾಗ.', dailyCta:'ವಿಭಾಗ ನೋಡಿ →',
        compTitle:'ಹೊಂದಾಣಿಕೆ', compText:'ಎರಡು ಜನ್ಮ ದಿನಾಂಕಗಳ ಆಧಾರದ ಮೇಲೆ ಅಂಕಶಾಸ್ತ್ರದ ಹೊಂದಾಣಿಕೆ ಪೂರ್ವವೀಕ್ಷಣೆಯನ್ನು ನೋಡಿ.', compCta:'ಹೊಂದಾಣಿಕೆ ನೋಡಿ →',
        numTitle:'ಅಂಕಶಾಸ್ತ್ರ', numText:'ಸಾಂಪ್ರದಾಯಿಕ ಅಂಕಶಾಸ್ತ್ರದ ವಿಧಾನದಿಂದ Life Path ಮತ್ತು Name Number ಲೆಕ್ಕಿಸಿ.', numCta:'ಅಂಕ ಲೆಕ್ಕಿಸಿ →',
        personalKicker:'✦ ವೈಯಕ್ತಿಕ ಜನ್ಮ ಕುಂಡಲಿ', personalTitle:'ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿ ರಚಿಸಿ', personalText:'ವೈದಿಕ ಸೈಡೀರಿಯಲ್ ಜನ್ಮ ಕುಂಡಲಿಯನ್ನು ಲೆಕ್ಕಿಸಲು ನಿಮ್ಮ ಜನ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.',
        fullName:'ಪೂರ್ಣ ಹೆಸರು', enterName:'ನಿಮ್ಮ ಹೆಸರು ನಮೂದಿಸಿ', birthDate:'ಜನ್ಮ ದಿನಾಂಕ', birthTime:'ಜನ್ಮ ಸಮಯ', birthPlace:'ಜನ್ಮ ಸ್ಥಳ', placePlaceholder:'ಉದಾಹರಣೆ: ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ', placeHelp:'ಉತ್ತಮ ಸ್ಥಳ ಹೊಂದಾಣಿಕೆಗಾಗಿ ನಗರ, ರಾಜ್ಯ ಮತ್ತು ದೇಶ ನಮೂದಿಸಿ.', resultLanguage:'ಫಲಿತಾಂಶದ ಭಾಷೆ', generate:'🔮 ನನ್ನ ಜನ್ಮ ಕುಂಡಲಿ ರಚಿಸಿ',
        dailyKicker:'✦ ದೈನಂದಿನ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರ್ಗದರ್ಶನ', dailySectionTitle:'ಇಂದಿನ ಜ್ಯೋತಿಷ್ಯ ಥೀಮ್', dailySectionText:'ಇದು ಶೈಕ್ಷಣಿಕ ವಿಭಾಗ — ಖಚಿತ ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ.',
        dailyCardTitle:'ಖಚಿತತೆಯ ಬದಲು ಆತ್ಮಪರಿಶೀಲನೆ', dailyCardText:'ಜ್ಯೋತಿಷ್ಯವನ್ನು ಸಾಂಸ್ಕೃತಿಕ ಆತ್ಮಪರಿಶೀಲನೆಯ ಸಾಧನವಾಗಿ ಬಳಸಬಹುದು. ಪ್ರಮುಖ ನಿರ್ಧಾರಗಳಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಮಾಹಿತಿಯನ್ನೂ ನಿಮ್ಮ ಸ್ವಂತ ವಿವೇಚನೆಯನ್ನೂ ಪರಿಗಣಿಸಿ.',
        compKicker:'✦ ಹೊಂದಾಣಿಕೆ', compSectionTitle:'ಹೊಂದಾಣಿಕೆ ಪೂರ್ವವೀಕ್ಷಣೆ', compSectionText:'ಈ ತ್ವರಿತ ಪೂರ್ವವೀಕ್ಷಣೆ ದಿನಾಂಕ ಆಧಾರಿತ ಅಂಕಶಾಸ್ತ್ರವನ್ನು ಮಾತ್ರ ಬಳಸುತ್ತದೆ. ಇದು ಸಂಪೂರ್ಣ ಕುಂಡಲಿ ಹೊಂದಾಣಿಕೆ ಅಂಕವಲ್ಲ.',
        person1:'ವ್ಯಕ್ತಿ 1', person2:'ವ್ಯಕ್ತಿ 2', name:'ಹೆಸರು', namePlaceholder:'ಹೆಸರು', placeShort:'ನಗರ, ರಾಜ್ಯ, ದೇಶ', compare:'💫 ಜನ್ಮ ಕುಂಡಲಿಗಳನ್ನು ಹೋಲಿಸಿ',
        numKicker:'✦ ಅಂಕಶಾಸ್ತ್ರ', numSectionTitle:'ನಿಮ್ಮ ಅಂಕಗಳನ್ನು ಲೆಕ್ಕಿಸಿ', numSectionText:'ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಮನರಂಜನಾ ಉದ್ದೇಶಕ್ಕಾಗಿ ಸಾಂಪ್ರದಾಯಿಕ ಅಂಕಶಾಸ್ತ್ರದ ಲೆಕ್ಕಾಚಾರ.', enterFullName:'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು ನಮೂದಿಸಿ', calculate:'🔢 ಅಂಕಗಳನ್ನು ಲೆಕ್ಕಿಸಿ', reportTitle:'ಸಂಪೂರ್ಣ ಕುಂಡಲಿ ವರದಿ', reportText:'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಜನ್ಮ ಕುಂಡಲಿಯಿಂದ ವಿವರವಾದ ವರದಿ ರಚಿಸಿ ಮತ್ತು PDF ಆಗಿ ಉಳಿಸಿ.', reportCta:'ವರದಿ ರಚಿಸಿ →',
        about:'Jathaka Shasthram ಬಗ್ಗೆ', aboutText:'Jathaka Shasthram ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಮನರಂಜನಾ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಲೆಕ್ಕಾಚಾರಗಳನ್ನು ನೀಡುತ್ತದೆ. ಜ್ಯೋತಿಷ್ಯ ವಿವರಣೆಗಳು ಖಚಿತ ಭವಿಷ್ಯವಾಣಿಗಳಲ್ಲ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ, ಕಾನೂನು ಅಥವಾ ಹಣಕಾಸು ಸಲಹೆಗೆ ಬದಲಿಯಾಗುವುದಿಲ್ಲ.',
        footer:'© 2026 Jathaka Shasthram · ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯ ಅನುಭವ', language:'ಭಾಷೆ', scrollExplore:'ಅನ್ವೇಷಿಸಲು ಕೆಳಗೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ', backTop:'ಮೇಲಕ್ಕೆ'
    }
};

function getSiteLanguage() {
    return document.getElementById('siteLanguage')?.value || document.getElementById('language')?.value || localStorage.getItem('jathakaShasthramLanguage') || 'English';
}

function applySiteLanguage(language, options = {}) {
    const lang = language === 'Kannada' ? 'Kannada' : 'English';
    const t = SITE_TRANSLATIONS[lang];
    document.documentElement.lang = lang === 'Kannada' ? 'kn' : 'en';
    document.body.classList.toggle('lang-kn', lang === 'Kannada');
    localStorage.setItem('jathakaShasthramLanguage', lang);

    const siteSelect = document.getElementById('siteLanguage');
    const resultSelect = document.getElementById('language');
    if (siteSelect) siteSelect.value = lang;
    if (resultSelect) resultSelect.value = lang;

    const text = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
    const html = (selector, value) => { const el = document.querySelector(selector); if (el) el.innerHTML = value; };

    const nav = ['navHome','navHoroscope','navKundli','navCompatibility','navNumerology'];
    document.querySelectorAll('.nav-links a').forEach((el, i) => { if (t[nav[i]]) el.textContent = t[nav[i]]; });
    html('.hero .eyebrow', t.eyebrow); html('.hero h1', t.heroTitle); text('.hero-content > p', t.heroText); html('.hero-button', t.heroButton);
    text('.features .small-title', t.explore); text('.features h2', t.toolsTitle);
    const cards = document.querySelectorAll('.feature-card');
    const cardData = [['birthTitle','birthText','birthCta'],['dailyTitle','dailyText','dailyCta'],['compTitle','compText','compCta'],['numTitle','numText','numCta']];
    cards.forEach((card,i)=>{ if(!cardData[i])return; const [a,b,c]=cardData[i]; card.querySelector('h3').textContent=t[a]; card.querySelector('p').textContent=t[b]; card.querySelector('.feature-cta').textContent=t[c]; });
    const reportCard=document.querySelector('.report-feature'); if(reportCard){ reportCard.querySelector('h3').textContent=t.reportTitle; reportCard.querySelector('p').textContent=t.reportText; reportCard.querySelector('.feature-cta').textContent=t.reportCta; }
    text('.birth-section .small-title',t.personalKicker); text('.birth-section h2',t.personalTitle); text('.birth-section .section-heading > p:last-child',t.personalText);
    text('label[for="fullName"]',t.fullName); document.getElementById('fullName')?.setAttribute('placeholder',t.enterName);
    text('label[for="birthDate"]',t.birthDate); text('label[for="birthTime"]',t.birthTime); text('label[for="birthPlace"]',t.birthPlace); document.getElementById('birthPlace')?.setAttribute('placeholder',t.placePlaceholder); text('.birth-form .form-group small',t.placeHelp);
    text('label[for="language"]',t.resultLanguage); html('.generate-btn',`<span>🔮</span> ${t.generate.replace(/^🔮\s*/,'')}`);
    text('#daily-guide .small-title',t.dailyKicker); text('#daily-guide h2',t.dailySectionTitle); text('#daily-guide .section-heading > p:last-child',t.dailySectionText); text('.daily-guide-card h3',t.dailyCardTitle); text('.daily-guide-card p',t.dailyCardText);
    text('#compatibility .small-title',t.compKicker); text('#compatibility h2',t.compSectionTitle); text('#compatibility .section-heading > p:last-child',t.compSectionText); text('#personOneName',t.namePlaceholder); text('#personTwoName',t.namePlaceholder);
    document.querySelectorAll('.tool-person-title strong').forEach((el,i)=>el.textContent=i===0?t.person1:t.person2);
    text('label[for="personOneName"]',t.name); text('label[for="personTwoName"]',t.name); text('label[for="personOneDate"]',t.birthDate); text('label[for="personTwoDate"]',t.birthDate); text('label[for="personOneTime"]',t.birthTime); text('label[for="personTwoTime"]',t.birthTime); text('label[for="personOnePlace"]',t.birthPlace); text('label[for="personTwoPlace"]',t.birthPlace);
    document.getElementById('personOnePlace')?.setAttribute('placeholder',t.placeShort); document.getElementById('personTwoPlace')?.setAttribute('placeholder',t.placeShort); const compBtn=document.querySelector('#compatibilityForm .generate-btn'); if(compBtn) compBtn.innerHTML=`<span>💫</span> ${t.compare.replace(/^💫\s*/,'')}`;
    text('#numerology .small-title',t.numKicker); text('#numerology h2',t.numSectionTitle); text('#numerology .section-heading > p:last-child',t.numSectionText); text('label[for="numerologyName"]',t.fullName); document.getElementById('numerologyName')?.setAttribute('placeholder',t.enterFullName); text('label[for="numerologyDate"]',t.birthDate); const numBtn=document.querySelector('#numerologyForm .generate-btn'); if(numBtn) numBtn.innerHTML=`<span>🔢</span> ${t.calculate.replace(/^🔢\s*/,'')}`;
    text('.disclaimer h3',t.about); text('.disclaimer p',t.aboutText); text('.footer-inner > p',t.footer); text('.hero-scroll-hint span',t.scrollExplore); document.getElementById('backToTop')?.setAttribute('aria-label',t.backTop);

    if (window.__astroLastChart && options.rerenderResult !== false) {
        showBirthChartResult(window.__astroLastChart.name, window.__astroLastChart.birthPlace, window.__astroLastChart.chart, window.__astroLastChart.kundliSvg, lang, window.__astroLastChart.d9, window.__astroLastChart.d9Svg);
    }
    if (typeof window.__astroUpdateDaily === 'function') window.__astroUpdateDaily(lang);
}

function initGlobalLanguageSystem() {
    const saved = localStorage.getItem('jathakaShasthramLanguage') || 'English';
    const siteSelect = document.getElementById('siteLanguage');
    const resultSelect = document.getElementById('language');
    siteSelect?.addEventListener('change', () => applySiteLanguage(siteSelect.value));
    resultSelect?.addEventListener('change', () => applySiteLanguage(resultSelect.value));
    applySiteLanguage(saved, { rerenderResult: false });
}

// ========================================
// JATHAKA SHASTHRAM - FRONTEND
// ========================================

console.log("🔮 Jathaka Shasthram loaded successfully!");

const birthForm = document.getElementById("birthForm");

function getApiBase() {
    // Same-origin in production/Vercel.
    // When opened through VS Code Live Server, use the local Express API.
    const hostname = window.location.hostname;
    const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1";

    if (!isLocalHost) return "";
    return window.location.port === "3000" ? "" : "http://localhost:3000";
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function isKannadaLanguage(language) {
    return String(language || "").toLowerCase().includes("kannada") || language === "kn";
}

function initTimePickers() {
    document.querySelectorAll("[data-time-picker]").forEach((picker) => {
        const targetId = picker.dataset.target;
        const target = document.getElementById(targetId);
        const hour = picker.querySelector("select[id$='Hour']");
        const minute = picker.querySelector("select[id$='Minute']");
        const period = picker.querySelector("select[id$='Period']");
        if (!target || !hour || !minute || !period || hour.dataset.ready === "1") return;

        hour.innerHTML = Array.from({ length: 12 }, (_, i) => {
            const value = String(i + 1).padStart(2, "0");
            return `<option value="${i + 1}">${value}</option>`;
        }).join("");
        minute.innerHTML = Array.from({ length: 60 }, (_, i) => {
            const value = String(i).padStart(2, "0");
            return `<option value="${i}">${value}</option>`;
        }).join("");
        hour.value = "12";
        minute.value = "0";
        period.value = "AM";
        hour.dataset.ready = "1";

        const sync = () => {
            let h = Number(hour.value);
            if (period.value === "PM" && h !== 12) h += 12;
            if (period.value === "AM" && h === 12) h = 0;
            target.value = `${String(h).padStart(2, "0")}:${String(Number(minute.value)).padStart(2, "0")}`;
        };
        [hour, minute, period].forEach((el) => el.addEventListener("change", sync));
        sync();
    });
}

initTimePickers();


// ========================================
// DATE INPUTS — controlled DD-MM-YYYY format
// Prevents browsers from accepting extra year digits such as 199999.
// ========================================
(function initDateInputs() {
    const dateInputs = document.querySelectorAll('.date-input');

    dateInputs.forEach((input) => {
        const formatDateTyping = () => {
            const digits = input.value.replace(/\D/g, '').slice(0, 8);
            let formatted = digits;
            if (digits.length > 2) formatted = `${digits.slice(0, 2)}-${digits.slice(2)}`;
            if (digits.length > 4) formatted = `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4)}`;
            input.value = formatted;
            input.setCustomValidity('');
        };

        input.addEventListener('input', formatDateTyping);
        input.addEventListener('blur', () => {
            if (!input.value) return;
            const iso = dateToIso(input.value);
            if (!iso) {
                input.setCustomValidity('Enter a valid date in DD-MM-YYYY format.');
            } else {
                input.setCustomValidity('');
            }
        });
    });

    window.dateToIso = function dateToIso(value) {
        const match = String(value || '').trim().match(/^(\d{2})-(\d{2})-(\d{4})$/);
        if (!match) return '';
        const day = Number(match[1]);
        const month = Number(match[2]);
        const year = Number(match[3]);
        if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) return '';
        const date = new Date(Date.UTC(year, month - 1, day));
        if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return '';
        return `${String(year).padStart(4, '0')}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };
})();


if (birthForm) {
    birthForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const birthDate = dateToIso(document.getElementById("birthDate").value);
        const birthTime = document.getElementById("birthTime").value;
        const birthPlace = document.getElementById("birthPlace").value.trim();
        const language = document.getElementById("language").value;
        const button = birthForm.querySelector(".generate-btn");

        if (!name || !birthDate || !birthTime || !birthPlace) {
            alert("Please fill in all birth details, including the exact birth time and AM/PM.");
            return;
        }

        const [year, month, date] = birthDate.split("-").map(Number);
        const [hours, minutes] = birthTime.split(":").map(Number);
        const originalButtonText = button.innerHTML;

        button.disabled = true;
        button.innerHTML = '<span class="button-spinner"></span> Calculating Birth Chart...';

        try {
            const response = await fetch(`${getApiBase()}/api/birth-chart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, year, month, date, hours, minutes, birthPlace, language })
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                console.error("Backend error:", result);
                alert(`❌ Unable to generate the birth chart.\n\n${result.message || "Please try again."}`);
                return;
            }

            // Keep the result UI limited to the place the user entered.
            // The geocoder may return a much more detailed address string.
            const displayBirthPlace = birthPlace;
            window.__astroLastChart = {
                name,
                birthPlace: displayBirthPlace,
                chart: result.chart,
                kundliSvg: result.kundliSvg,
                d9: result.d9 || null,
                d9Svg: result.d9Svg || null
            };
            showBirthChartResult(
                name,
                displayBirthPlace,
                result.chart,
                result.kundliSvg,
                language,
                result.d9 || null,
                result.d9Svg || null
            );
        } catch (error) {
            console.error("Connection error:", error);
            alert("❌ Could not connect to Jathaka Shasthram server.\n\nPlease make sure the backend is running on port 3000.");
        } finally {
            button.disabled = false;
            button.innerHTML = originalButtonText;
        }
    });
}

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = [...document.querySelectorAll('.nav-links a')];
    const backToTop = document.getElementById('backToTop');

    const closeMenu = () => {
        navbar?.classList.remove('menu-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
    };

    menuToggle?.addEventListener('click', () => {
        const open = !navbar?.classList.contains('menu-open');
        navbar?.classList.toggle('menu-open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('click', (event) => {
        if (!navbar?.contains(event.target)) closeMenu();
    });

    const sections = navLinks
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const setActive = (id) => {
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    };

    const observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, .2, .5, 1] });

    sections.forEach(section => observer.observe(section));
    setActive('home');

    window.addEventListener('scroll', () => {
        backToTop?.classList.toggle('visible', window.scrollY > 650);
    }, { passive: true });

    backToTop?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) closeMenu();
    });
}

initNavigation();
initGlobalLanguageSystem();

function showBirthChartResult(name, birthPlace, chart, kundliSvg, language, d9, d9Svg) {
    const isKannada = isKannadaLanguage(language);

    const labels = isKannada
        ? {
            birthChart: "ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿ", welcome: "ಸ್ವಾಗತ", place: "ಜನ್ಮ ಸ್ಥಳ",
            lagna: "ಲಗ್ನ", lagnaDegree: "ಲಗ್ನದ ಅಂಶ", lagnaNakshatra: "ಲಗ್ನ ನಕ್ಷತ್ರ",
            janmaRashi: "ಜನ್ಮ ರಾಶಿ", janmaNakshatra: "ಜನ್ಮ ನಕ್ಷತ್ರ", pada: "ನಕ್ಷತ್ರ ಪಾದ",
            planets: "ಗ್ರಹಗಳ ಸ್ಥಾನ", planetaryDetails: "ನವಗ್ರಹಗಳ ವಿವರ", houses: "ಭವನಗಳ ವಿವರ",
            sign: "ರಾಶಿ", retrograde: "ವಕ್ರಿ", direct: "ಸಾಮಾನ್ಯ", emptyHouse: "ಯಾವುದೇ ಗ್ರಹ ಇಲ್ಲ",
            d1Title: "ದಕ್ಷಿಣ ಭಾರತೀಯ ಜನ್ಮ ಕುಂಡಲಿ", d1Label: "D1 ರಾಶಿ ಚಾರ್ಟ್",
            chartCaption: "ನಿಮ್ಮ ಜನ್ಮ ಸಮಯದ ಆಧಾರದ ಮೇಲೆ ರಚಿಸಲಾದ D1 ರಾಶಿ ಚಾರ್ಟ್",
            unavailable: "ಕುಂಡಲಿ ಚಾರ್ಟ್ ಲಭ್ಯವಿಲ್ಲ.",
            housesTitle: "ದ್ವಾದಶ ಭವನಗಳ ವಿವರ",
            readingTitle: "ವೈಯಕ್ತಿಕ ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ", readingKicker: "ಸಾಂಪ್ರದಾಯಿಕ ವಿವರಣೆ",
            readingIntro: "ನಿಮ್ಮ ಕುಂಡಲಿಯ ಪ್ರಮುಖ ಸ್ಥಾನಗಳನ್ನು ಆಧರಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯ ವಿವರಣೆ.",
            personality: "ಸ್ವಭಾವ ಮತ್ತು ಮನೋಭಾವ", career: "ವೃತ್ತಿ ಮತ್ತು ಕೆಲಸ", finance: "ಹಣ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು",
            relationship: "ಸಂಬಂಧಗಳು", learning: "ಶಿಕ್ಷಣ ಮತ್ತು ಸೃಜನಶೀಲತೆ", growth: "ಬೆಳವಣಿಗೆ ಮತ್ತು ದಿಕ್ಕು",
            traditionalNote: "ಇವು ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯದಲ್ಲಿನ ಸಾಮಾನ್ಯ ಅರ್ಥೈಸಿಕೆಗಳು; ಖಚಿತ ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ.",
            note: "ಈ ಫಲಿತಾಂಶವು ಲಭ್ಯವಿರುವ ಜನ್ಮ ಕುಂಡಲಿ ಗಣನೆಯ ಆಧಾರದ ಮೇಲೆ ನೀಡಲಾಗಿದೆ. ಇದು ಸಾಂಪ್ರದಾಯಿಕ/ಮನರಂಜನಾ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ."
        }
        : {
            birthChart: "YOUR BIRTH CHART", welcome: "Welcome", place: "Birth Place",
            lagna: "Ascendant / Lagna", lagnaDegree: "Ascendant Degree", lagnaNakshatra: "Lagna Nakshatra",
            janmaRashi: "Janma Rashi / Moon Sign", janmaNakshatra: "Janma Nakshatra", pada: "Nakshatra Pada",
            planets: "Planetary Positions", planetaryDetails: "Nine Planetary Positions", houses: "12 Bhava / Houses",
            sign: "Sign", retrograde: "Retrograde", direct: "Direct", emptyHouse: "No planets",
            d1Title: "South Indian Birth Chart", d1Label: "D1 Rashi Chart",
            chartCaption: "D1 Rashi chart generated from your birth details",
            unavailable: "Kundli chart is not available.",
            housesTitle: "12 Houses / Bhavas",
            readingTitle: "Personalized Astrology Guidance", readingKicker: "TRADITIONAL INTERPRETATION",
            readingIntro: "A structured traditional interpretation based on key placements in your birth chart.",
            personality: "Personality & Temperament", career: "Career & Work", finance: "Money & Resources",
            relationship: "Relationships", learning: "Learning & Creativity", growth: "Growth & Direction",
            traditionalNote: "These are traditional astrology themes, not guaranteed predictions.",
            note: "This result is based on the calculated birth-chart data returned by our astrology calculation service. It is intended for traditional/cultural and entertainment guidance only."
        };

    document.getElementById("chartResult")?.remove();

    const d9Data = d9 || {};
    const d9Placements = d9Data.placements || {};
    const d9ReferenceSign = d9Data.reference_sign || d9Data.referenceSign || "—";
    const d9PlanetConfig = [
        { key: "Sun", icon: "☀️", kannada: "ಸೂರ್ಯ" },
        { key: "Moon", icon: "🌙", kannada: "ಚಂದ್ರ" },
        { key: "Mars", icon: "🔴", kannada: "ಮಂಗಳ" },
        { key: "Mercury", icon: "☿️", kannada: "ಬುಧ" },
        { key: "Jupiter", icon: "🟠", kannada: "ಗುರು" },
        { key: "Venus", icon: "💎", kannada: "ಶುಕ್ರ" },
        { key: "Saturn", icon: "🪐", kannada: "ಶನಿ" },
        { key: "Rahu", icon: "☊", kannada: "ರಾಹು" },
        { key: "Ketu", icon: "☋", kannada: "ಕೇತು" }
    ];
    const getD9Planet = (key) => d9Placements[key] || d9Placements[key.toLowerCase()] || {};
    const d9Rows = d9PlanetConfig.map(item => {
        const pd = getD9Planet(item.key);
        return {
            ...item,
            sign: pd.sign || pd.zodiac_sign_name || "—",
            degree: pd.longitude !== undefined ? Number(pd.longitude).toFixed(2) : (pd.normDegree !== undefined ? Number(pd.normDegree).toFixed(2) : "—"),
            house: pd.house ?? pd.house_number ?? "—"
        };
    });
    const d9SvgMarkup = typeof d9Svg === "string" ? d9Svg.trim() : "";

    const ascendant = chart?.ascendant || {};
    const planets = chart?.planets || {};

    const d1D9PlanetComparison = d9PlanetConfig.map(item => {
        const d1 = planets[item.key] || planets[item.key.toLowerCase()] || {};
        const d1Sign = d1.zodiac_sign_name || d1.sign || "—";
        const d9 = getD9Planet(item.key);
        const d9Sign = d9.sign || d9.zodiac_sign_name || "—";
        return { ...item, d1Sign, d9Sign, vargottama: d1Sign !== "—" && d9Sign !== "—" && d1Sign.toLowerCase() === d9Sign.toLowerCase() };
    });
    const vargottamaPlanets = d1D9PlanetComparison.filter(x => x.vargottama);

    const ascendantName = ascendant.zodiac_sign_name || ascendant.sign || "Not available";
    const ascendantDegree = ascendant.normDegree !== undefined ? Number(ascendant.normDegree).toFixed(2) : "—";
    const lagnaNakshatra = ascendant.nakshatra_name || ascendant.nakshatra || "Not available";
    const lagnaPada = ascendant.nakshatra_pada !== undefined ? ascendant.nakshatra_pada : "—";

    const zodiacSigns = [
        "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
        "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
    ];

    const zodiacKannada = {
        Aries: "ಮೇಷ", Taurus: "ವೃಷಭ", Gemini: "ಮಿಥುನ", Cancer: "ಕರ್ಕಾಟಕ",
        Leo: "ಸಿಂಹ", Virgo: "ಕನ್ಯಾ", Libra: "ತುಲಾ", Scorpio: "ವೃಶ್ಚಿಕ",
        Sagittarius: "ಧನು", Capricorn: "ಮಕರ", Aquarius: "ಕುಂಭ", Pisces: "ಮೀನ"
    };

    const nakshatraKannada = {
        Ashwini: "ಅಶ್ವಿನಿ", Bharani: "ಭರಣಿ", Krittika: "ಕೃತ್ತಿಕಾ", Rohini: "ರೋಹಿಣಿ",
        Mrigashira: "ಮೃಗಶಿರ", Ardra: "ಆದ್ರಾ", Punarvasu: "ಪುನರ್ವಸು", Pushya: "ಪುಷ್ಯ",
        Ashlesha: "ಆಶ್ಲೇಷಾ", Magha: "ಮಘಾ", "Purva Phalguni": "ಪೂರ್ವ ಫಲ್ಗುಣಿ",
        "Uttara Phalguni": "ಉತ್ತರ ಫಲ್ಗುಣಿ", Hasta: "ಹಸ್ತ", Chitra: "ಚಿತ್ರಾ", Swati: "ಸ್ವಾತಿ",
        Vishakha: "ವಿಶಾಖಾ", Anuradha: "ಅನುರಾಧಾ", Jyeshtha: "ಜ್ಯೇಷ್ಠಾ", Mula: "ಮೂಲ",
        "Purva Ashadha": "ಪೂರ್ವಾಷಾಢಾ", "Uttara Ashadha": "ಉತ್ತರಾಷಾಢಾ", Shravana: "ಶ್ರವಣ",
        Dhanishta: "ಧನಿಷ್ಠಾ", Shatabhisha: "ಶತಭಿಷಾ", "Purva Bhadrapada": "ಪೂರ್ವ ಭಾದ್ರಪದ",
        "Uttara Bhadrapada": "ಉತ್ತರ ಭಾದ್ರಪದ", Revati: "ರೇವತಿ"
    };

    const planetConfig = [
        { key: "Sun", icon: "☀️", kannada: "ಸೂರ್ಯ" },
        { key: "Moon", icon: "🌙", kannada: "ಚಂದ್ರ" },
        { key: "Mars", icon: "🔴", kannada: "ಮಂಗಳ" },
        { key: "Mercury", icon: "☿️", kannada: "ಬುಧ" },
        { key: "Jupiter", icon: "🟠", kannada: "ಗುರು" },
        { key: "Venus", icon: "💎", kannada: "ಶುಕ್ರ" },
        { key: "Saturn", icon: "🪐", kannada: "ಶನಿ" },
        { key: "Rahu", icon: "☊", kannada: "ರಾಹು" },
        { key: "Ketu", icon: "☋", kannada: "ಕೇತು" }
    ];

    const translateSign = (sign) => !sign ? "—" : (isKannada ? (zodiacKannada[sign] || sign) : sign);
    const translateNakshatra = (nakshatra) => !nakshatra ? "—" : (isKannada ? (nakshatraKannada[nakshatra] || nakshatra) : nakshatra);
    const formatDisplayTime = (timeValue) => {
        const match = String(timeValue || "").match(/^(\d{2}):(\d{2})$/);
        if (!match) return "—";
        let hour = Number(match[1]);
        const minute = match[2];
        const period = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        return `${String(hour).padStart(2, "0")}:${minute} ${period}`;
    };
    const getPlanetData = (item) => planets[item.key] || planets[item.key.toLowerCase()] || {};

    let kundliSvgMarkup = "";
    if (typeof kundliSvg === "string") kundliSvgMarkup = kundliSvg.trim();
    else if (kundliSvg && typeof kundliSvg === "object") kundliSvgMarkup = (kundliSvg.svg || kundliSvg.svg_code || kundliSvg.code || "").trim();

    // Normalize the API SVG for a square, non-clipped responsive chart stage.
    if (kundliSvgMarkup) {
        kundliSvgMarkup = kundliSvgMarkup
            .replace(/<svg\b([^>]*)>/i, (match, attrs) => {
                const cleaned = attrs
                    .replace(/\s(width|height)\s*=\s*["\'][^"\']*["\']/gi, "")
                    .replace(/\sstyle\s*=\s*["\'][^"\']*["\']/gi, "");
                return `<svg${cleaned} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;">`;
            });
    }

    let planetCards = "";
    const housePlanets = Array.from({ length: 13 }, () => []);

    planetConfig.forEach((planetInfo) => {
        const data = getPlanetData(planetInfo);
        const sign = data.zodiac_sign_name || data.sign || "—";
        const degree = data.normDegree !== undefined ? `${Number(data.normDegree).toFixed(2)}°` : "—";
        const houseNumber = Number(data.house_number);
        const nakshatra = data.nakshatra_name || data.nakshatra || "—";
        const pada = data.nakshatra_pada !== undefined ? data.nakshatra_pada : "—";
        const isRetro = data.isRetro === true || String(data.isRetro).toLowerCase() === "true";
        const displayName = isKannada ? planetInfo.kannada : planetInfo.key;

        if (houseNumber >= 1 && houseNumber <= 12) housePlanets[houseNumber].push(planetInfo);

        planetCards += `
            <article class="planet-card">
                <div class="planet-top">
                    <span class="planet-icon">${planetInfo.icon}</span>
                    <span class="planet-name">${escapeHtml(displayName)}</span>
                </div>
                <div class="planet-main">
                    <span class="planet-sign">${escapeHtml(translateSign(sign))}</span>
                    <span class="planet-degree">${escapeHtml(degree)}</span>
                </div>
                <div class="planet-details">
                    <div class="planet-detail"><span>${isKannada ? "ಭವನ" : "House"}</span><strong>${escapeHtml(houseNumber || "—")}</strong></div>
                    <div class="planet-detail"><span>${labels.nakshatra || (isKannada ? "ನಕ್ಷತ್ರ" : "Nakshatra")}</span><strong>${escapeHtml(translateNakshatra(nakshatra))}</strong></div>
                    <div class="planet-detail"><span>${labels.pada}</span><strong>${escapeHtml(pada)}</strong></div>
                </div>
                <div class="planet-status ${isRetro ? "retrograde" : "direct"}">${isRetro ? "↺ " + labels.retrograde : "✓ " + labels.direct}</div>
            </article>`;
    });

    const lagnaIndex = zodiacSigns.indexOf(ascendantName);
    const houseNamesKannada = [
        "ಲಗ್ನ ಭವನ", "ಧನ ಭವನ", "ಸಹೋದರ ಭವನ", "ಸುಖ ಭವನ", "ಪುತ್ರ ಭವನ", "ರೋಗ ಭವನ",
        "ವಿವಾಹ ಭವನ", "ಆಯು ಭವನ", "ಭಾಗ್ಯ ಭವನ", "ಕರ್ಮ ಭವನ", "ಲಾಭ ಭವನ", "ವ್ಯಯ ಭವನ"
    ];
    const houseNamesEnglish = [
        "Self / Personality", "Wealth / Family", "Siblings / Courage", "Home / Comfort",
        "Children / Creativity", "Health / Service", "Marriage / Partnership", "Transformation",
        "Fortune / Dharma", "Career / Karma", "Gains / Network", "Expenses / Spirituality"
    ];

    let houseCards = "";
    for (let house = 1; house <= 12; house++) {
        let houseSign = "—";
        if (lagnaIndex >= 0) houseSign = zodiacSigns[(lagnaIndex + house - 1) % 12];
        const planetsInHouse = housePlanets[house];
        const planetHTML = planetsInHouse.length
            ? planetsInHouse.map((p) => `<span class="house-planet">${p.icon} ${escapeHtml(isKannada ? p.kannada : p.key)}</span>`).join("")
            : `<span class="house-empty">${labels.emptyHouse}</span>`;

        houseCards += `
            <article class="house-card">
                <div class="house-number">${house}</div>
                <div class="house-title">${escapeHtml(isKannada ? houseNamesKannada[house - 1] : houseNamesEnglish[house - 1])}</div>
                <div class="house-sign">${labels.sign}: <strong>${escapeHtml(translateSign(houseSign))}</strong></div>
                <div class="house-planets">${planetHTML}</div>
            </article>`;
    }

    const moon = planets.Moon || planets.moon || {};
    const moonSign = moon.zodiac_sign_name || moon.sign || "—";
    const moonNakshatra = moon.nakshatra_name || moon.nakshatra || "—";

    // Traditional interpretation helpers. These intentionally use cautious language
    // and describe themes rather than guaranteed predictions.
    const getHouse = (planetKey) => {
        const data = planets[planetKey] || planets[planetKey.toLowerCase()] || {};
        const value = Number(data.house_number);
        return Number.isFinite(value) ? value : null;
    };

    const housePlanetNames = (houseNumber) => housePlanets[houseNumber]
        .map((p) => isKannada ? p.kannada : p.key)
        .join(", ");

    const signTheme = (sign) => {
        const themes = {
            Aries: isKannada ? "ಚುರುಕುತನ, ಆರಂಭಿಸುವ ಮನೋಭಾವ ಮತ್ತು ಸ್ವತಂತ್ರತೆ" : "initiative, directness and independence",
            Taurus: isKannada ? "ಸ್ಥಿರತೆ, ಪ್ರಾಯೋಗಿಕತೆ ಮತ್ತು ಮೌಲ್ಯಗಳ ಮೇಲೆ ಗಮನ" : "stability, practicality and value-consciousness",
            Gemini: isKannada ? "ಕುತೂಹಲ, ಸಂವಹನ ಮತ್ತು ಕಲಿಕೆಯ ಆಸಕ್ತಿ" : "curiosity, communication and learning",
            Cancer: isKannada ? "ಭಾವನಾತ್ಮಕ ಸಂಪರ್ಕ, ಆರೈಕೆ ಮತ್ತು ಮನೆಯ ಮೇಲಿನ ಗಮನ" : "emotional connection, care and a strong home focus",
            Leo: isKannada ? "ಸ್ವಾಭಿಮಾನ, ಸೃಜನಶೀಲತೆ ಮತ್ತು ವ್ಯಕ್ತಪಡಿಸುವಿಕೆ" : "self-expression, creativity and confidence",
            Virgo: isKannada ? "ವಿಶ್ಲೇಷಣೆ, ಕ್ರಮಬದ್ಧತೆ ಮತ್ತು ವಿವರಗಳ ಗಮನ" : "analysis, organization and attention to detail",
            Libra: isKannada ? "ಸಮತೋಲನ, ಸಹಕಾರ ಮತ್ತು ಸಂಬಂಧಗಳ ಮೇಲಿನ ಗಮನ" : "balance, cooperation and relationship awareness",
            Scorpio: isKannada ? "ಆಳವಾದ ಗಮನ, ಸ್ಥಿರ ಸಂಕಲ್ಪ ಮತ್ತು ಒಳನೋಟ" : "depth, determination and introspection",
            Sagittarius: isKannada ? "ವಿಸ್ತೃತ ದೃಷ್ಟಿಕೋನ, ಜ್ಞಾನ ಮತ್ತು ಅನ್ವೇಷಣೆ" : "broad perspective, knowledge and exploration",
            Capricorn: isKannada ? "ಶಿಸ್ತು, ಜವಾಬ್ದಾರಿ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಗುರಿಗಳು" : "discipline, responsibility and long-term goals",
            Aquarius: isKannada ? "ಹೊಸ ಆಲೋಚನೆ, ಸ್ವತಂತ್ರ ಚಿಂತನೆ ಮತ್ತು ಸಮುದಾಯದ ದೃಷ್ಟಿ" : "original thinking, independence and a wider social outlook",
            Pisces: isKannada ? "ಕಲ್ಪನೆ, ಸಹಾನುಭೂತಿ ಮತ್ತು ಒಳಜ್ಞಾನ" : "imagination, empathy and intuition"
        };
        return themes[sign] || (isKannada ? "ವೈಯಕ್ತಿಕ ಅನುಭವ ಮತ್ತು ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ ಬದಲಾಗುವ ಗುಣಗಳು" : "themes that can vary with personal experience and circumstances");
    };

    const planetTheme = (planetKey) => {
        const themes = {
            Sun: isKannada ? "ಆತ್ಮವಿಶ್ವಾಸ, ಗುರುತು ಮತ್ತು ನಾಯಕತ್ವದ ವಿಷಯಗಳು" : "themes of confidence, identity and leadership",
            Moon: isKannada ? "ಮನಸ್ಸು, ಭಾವನೆಗಳು ಮತ್ತು ಹೊಂದಿಕೊಳ್ಳುವಿಕೆಯ ವಿಷಯಗಳು" : "themes of emotions, mental habits and adaptability",
            Mars: isKannada ? "ಶಕ್ತಿ, ಪ್ರಯತ್ನ ಮತ್ತು ಸ್ಪರ್ಧಾತ್ಮಕ ಮನೋಭಾವದ ವಿಷಯಗಳು" : "themes of drive, effort and assertiveness",
            Mercury: isKannada ? "ಸಂವಹನ, ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಕಲಿಕೆಯ ವಿಷಯಗಳು" : "themes of communication, analysis and learning",
            Jupiter: isKannada ? "ಜ್ಞಾನ, ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ವಿಸ್ತರಣೆಯ ವಿಷಯಗಳು" : "themes of learning, guidance and expansion",
            Venus: isKannada ? "ಸೌಂದರ್ಯ, ಸೃಜನಶೀಲತೆ ಮತ್ತು ಸಂಬಂಧಗಳ ವಿಷಯಗಳು" : "themes of aesthetics, creativity and relationships",
            Saturn: isKannada ? "ಶಿಸ್ತು, ಜವಾಬ್ದಾರಿ ಮತ್ತು ನಿಧಾನವಾದ ಸ್ಥಿರ ಬೆಳವಣಿಗೆಯ ವಿಷಯಗಳು" : "themes of discipline, responsibility and gradual development",
            Rahu: isKannada ? "ಹೊಸ ಅನುಭವ, ಮಹತ್ವಾಕಾಂಕ್ಷೆ ಮತ್ತು ವಿಭಿನ್ನ ದಾರಿಗಳ ವಿಷಯಗಳು" : "themes of new experiences, ambition and unconventional directions",
            Ketu: isKannada ? "ಆಂತರಿಕ ಚಿಂತನೆ, ಸರಳತೆ ಮತ್ತು ಬೇರ್ಪಟ್ಟ ದೃಷ್ಟಿಯ ವಿಷಯಗಳು" : "themes of introspection, simplicity and detachment"
        };
        return themes[planetKey] || "";
    };

    const buildReading = () => {
        const tenthSign = lagnaIndex >= 0 ? zodiacSigns[(lagnaIndex + 9) % 12] : null;
        const secondSign = lagnaIndex >= 0 ? zodiacSigns[(lagnaIndex + 1) % 12] : null;
        const seventhSign = lagnaIndex >= 0 ? zodiacSigns[(lagnaIndex + 6) % 12] : null;
        const fifthSign = lagnaIndex >= 0 ? zodiacSigns[(lagnaIndex + 4) % 12] : null;
        const ninthSign = lagnaIndex >= 0 ? zodiacSigns[(lagnaIndex + 8) % 12] : null;

        const p10 = housePlanetNames(10);
        const p2 = housePlanetNames(2);
        const p7 = housePlanetNames(7);
        const p5 = housePlanetNames(5);
        const p9 = housePlanetNames(9);

        const list = (items) => items.filter(Boolean).join(isKannada ? " " : " ");

        return [
            {
                icon: "✨", title: labels.personality,
                text: list([
                    isKannada ? `ಲಗ್ನವು ${translateSign(ascendantName)} ರಾಶಿಯಲ್ಲಿದೆ. ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯದಲ್ಲಿ ಇದನ್ನು ${signTheme(ascendantName)} ಜೊತೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತದೆ.` : `The Ascendant is in ${translateSign(ascendantName)}. In traditional astrology, this is associated with ${signTheme(ascendantName)}.`,
                    isKannada ? `ಚಂದ್ರನು ${translateSign(moonSign)} ರಾಶಿಯಲ್ಲಿ ಇರುವುದರಿಂದ ಮನಸ್ಸಿನ ವಿಷಯಗಳಲ್ಲಿ ${signTheme(moonSign)} ಎಂಬ ಥೀಮ್ ಅನ್ನು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.` : `The Moon is in ${translateSign(moonSign)}, so traditional readings may consider ${signTheme(moonSign)} as a mental or emotional theme.`
                ])
            },
            {
                icon: "💼", title: labels.career,
                text: list([
                    isKannada ? `10ನೇ ಭವನವು ${translateSign(tenthSign)} ರಾಶಿಗೆ ಬರುತ್ತದೆ. ಇದು ವೃತ್ತಿಯಲ್ಲಿ ${signTheme(tenthSign)} ರೀತಿಯ ಗುಣಗಳನ್ನು ಗಮನಿಸುವ ಪರಂಪರೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ.` : `The 10th house falls in ${translateSign(tenthSign)}. Traditional readings connect this area with ${signTheme(tenthSign)} in work and public responsibilities.`,
                    p10 ? (isKannada ? `10ನೇ ಭವನದಲ್ಲಿರುವ ಗ್ರಹಗಳು: ${p10}. ಇವು ${p10.split(", ").map(planetTheme).join("; ")} ಎಂಬ ವಿಷಯಗಳನ್ನು ಗಮನಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.` : `Planets in the 10th house: ${p10}. These can be read as themes involving ${p10.split(", ").map(planetTheme).join("; ")}.`) : (isKannada ? "10ನೇ ಭವನದಲ್ಲಿ ಗ್ರಹಗಳಿಲ್ಲ; ಆದ್ದರಿಂದ ರಾಶಿ ಮತ್ತು ಅದರ ಅಧಿಪತಿಯ ಸ್ಥಾನವನ್ನು ಜೊತೆಗೆ ನೋಡಲಾಗುತ್ತದೆ." : "There are no planets in the 10th house; traditional interpretation would also consider the sign and its ruling planet.")
                ])
            },
            {
                icon: "💰", title: labels.finance,
                text: list([
                    isKannada ? `2ನೇ ಭವನವು ${translateSign(secondSign)} ರಾಶಿಯಲ್ಲಿದೆ. ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಇದು ${signTheme(secondSign)} ರೀತಿಯ ಸಂಪನ್ಮೂಲ ನಿರ್ವಹಣೆಯ ಥೀಮ್ ಜೊತೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತದೆ.` : `The 2nd house is in ${translateSign(secondSign)}. Traditional astrology associates this area with resource themes such as ${signTheme(secondSign)}.`,
                    p2 ? (isKannada ? `ಈ ಭವನದಲ್ಲಿರುವ ಗ್ರಹಗಳು: ${p2}.` : `Planets placed here: ${p2}.`) : (isKannada ? "ಈ ಭವನದಲ್ಲಿ ಗ್ರಹಗಳಿಲ್ಲ; ಹಣಕಾಸಿನ ವಿಷಯಗಳನ್ನು ಒಂದೇ ಸ್ಥಾನದಿಂದ ನಿರ್ಧರಿಸಲಾಗುವುದಿಲ್ಲ." : "No planets are placed here; financial themes should not be judged from one placement alone.")
                ])
            },
            {
                icon: "❤️", title: labels.relationship,
                text: list([
                    isKannada ? `7ನೇ ಭವನವು ${translateSign(seventhSign)} ರಾಶಿಯಲ್ಲಿದೆ. ಸಂಬಂಧಗಳಲ್ಲಿ ${signTheme(seventhSign)} ರೀತಿಯ ಗುಣಗಳನ್ನು ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.` : `The 7th house is in ${translateSign(seventhSign)}. Traditional readings consider ${signTheme(seventhSign)} as relationship themes here.`,
                    p7 ? (isKannada ? `7ನೇ ಭವನದಲ್ಲಿರುವ ಗ್ರಹಗಳು: ${p7}.` : `Planets placed in the 7th house: ${p7}.`) : (isKannada ? "ಈ ಭವನದಲ್ಲಿ ಗ್ರಹಗಳಿಲ್ಲ; ಸಂಬಂಧಗಳ ಬಗ್ಗೆ ಸಮಗ್ರ ಕುಂಡಲಿಯನ್ನು ನೋಡಬೇಕು." : "No planets are placed here; relationship interpretation should consider the chart as a whole.")
                ])
            },
            {
                icon: "📚", title: labels.learning,
                text: list([
                    isKannada ? `5ನೇ ಭವನವು ${translateSign(fifthSign)} ರಾಶಿಯಲ್ಲಿದೆ. ಇದು ${signTheme(fifthSign)} ರೀತಿಯ ಕಲಿಕೆ ಮತ್ತು ಸೃಜನಶೀಲತೆಯ ಥೀಮ್‌ಗಳಿಗೆ ಸಂಬಂಧಿಸಿದೆ.` : `The 5th house is in ${translateSign(fifthSign)}. Traditional astrology connects this area with learning and creativity through ${signTheme(fifthSign)}.`,
                    p5 ? (isKannada ? `5ನೇ ಭವನದಲ್ಲಿರುವ ಗ್ರಹಗಳು: ${p5}.` : `Planets placed in the 5th house: ${p5}.`) : (isKannada ? "ಈ ಭವನದಲ್ಲಿ ಗ್ರಹಗಳಿಲ್ಲ; ಆಸಕ್ತಿ ಮತ್ತು ಕೌಶಲ್ಯಗಳನ್ನು ಪ್ರಾಯೋಗಿಕ ಅನುಭವದೊಂದಿಗೆ ನೋಡಬೇಕು." : "No planets are placed here; interests and skills are best considered alongside real-world experience.")
                ])
            },
            {
                icon: "🌱", title: labels.growth,
                text: list([
                    isKannada ? `9ನೇ ಭವನವು ${translateSign(ninthSign)} ರಾಶಿಯಲ್ಲಿದೆ. ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಇದು ${signTheme(ninthSign)} ಮೂಲಕ ಜ್ಞಾನ ಮತ್ತು ಜೀವನದ ದಿಕ್ಕನ್ನು ನೋಡುವ ಪ್ರದೇಶವಾಗಿದೆ.` : `The 9th house is in ${translateSign(ninthSign)}. Traditionally, this area is considered through themes of knowledge and direction such as ${signTheme(ninthSign)}.`,
                    p9 ? (isKannada ? `9ನೇ ಭವನದಲ್ಲಿರುವ ಗ್ರಹಗಳು: ${p9}.` : `Planets placed in the 9th house: ${p9}.`) : (isKannada ? "ದೊಡ್ಡ ನಿರ್ಧಾರಗಳಲ್ಲಿ ನಿಮ್ಮ ಸ್ವಂತ ಅನುಭವ, ಮಾಹಿತಿ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಪರಿಸ್ಥಿತಿಗಳನ್ನೂ ಪರಿಗಣಿಸಿ." : "For major decisions, also consider your own experience, evidence and practical circumstances.")
                ])
            }
        ];
    };

    const readingCards = buildReading().map((item) => `
        <article class="reading-card">
            <div class="reading-card-top"><span class="reading-icon">${item.icon}</span><h4>${escapeHtml(item.title)}</h4></div>
            <p>${escapeHtml(item.text)}</p>
        </article>
    `).join("");

    const d9Venus = getD9Planet("Venus");
    const d9Jupiter = getD9Planet("Jupiter");
    const d9Saturn = getD9Planet("Saturn");
    const d9Highlights = [
        { icon: "✨", label: isKannada ? "D9 ಲಗ್ನ" : "D9 Ascendant", value: translateSign(d9ReferenceSign) },
        { icon: "💎", label: isKannada ? "ಶುಕ್ರ" : "Venus", value: translateSign(d9Venus.sign || d9Venus.zodiac_sign_name || "—") },
        { icon: "🟠", label: isKannada ? "ಗುರು" : "Jupiter", value: translateSign(d9Jupiter.sign || d9Jupiter.zodiac_sign_name || "—") },
        { icon: "🪐", label: isKannada ? "ಶನಿ" : "Saturn", value: translateSign(d9Saturn.sign || d9Saturn.zodiac_sign_name || "—") }
    ];
    const d9HighlightHtml = d9Highlights.map(item => `
        <div class="d9-highlight">
            <span class="d9-highlight-icon">${item.icon}</span>
            <div><small>${escapeHtml(item.label)}</small><strong>${escapeHtml(item.value)}</strong></div>
        </div>`).join("");

    const resultSection = document.createElement("section");
    resultSection.id = "chartResult";
    resultSection.className = "chart-result";

    resultSection.innerHTML = `
        <div class="chart-result-container">
            <div class="chart-header">
                <div class="result-kicker">✦ ${labels.birthChart}</div>
                <h2>${labels.welcome}, <span>${escapeHtml(name)}</span></h2>
                <div class="result-place"><span>📍</span><span>${escapeHtml(birthPlace)}</span></div>
            </div>

            <div class="chart-hero-panel">
                <div class="chart-hero-copy">
                    <div class="small-title">✦ ${labels.d1Label}</div>
                    <h3>${labels.d1Title}</h3>
                    <p>${labels.chartCaption}</p>
                    <div class="chart-badges">
                        <span>SIDEREAL</span><span>LAHIRI</span><span>D1 · RĀŚI</span>
                    </div>
                    <div class="birth-meta-grid" aria-label="Birth details">
                        <div><span>${isKannada ? "ಜನ್ಮ ದಿನಾಂಕ" : "Birth date"}</span><strong>${escapeHtml(document.getElementById("birthDate")?.value || `${String(date).padStart(2,"0")}-${String(month).padStart(2,"0")}-${year}`)}</strong></div>
                        <div><span>${isKannada ? "ಜನ್ಮ ಸಮಯ" : "Birth time"}</span><strong>${escapeHtml(formatDisplayTime(birthTime))}</strong></div>
                    </div>
                </div>
                <div class="chart-visual-stack">
                    <div class="kundli-chart-wrapper">
                        ${kundliSvgMarkup || `<div class="kundli-loading">${labels.unavailable}</div>`}
                    </div>
                    <div class="chart-legend" aria-label="Planet abbreviations">
                        <span><b>Su</b> ${isKannada ? "ಸೂರ್ಯ" : "Sun"}</span>
                        <span><b>Mo</b> ${isKannada ? "ಚಂದ್ರ" : "Moon"}</span>
                        <span><b>Ma</b> ${isKannada ? "ಮಂಗಳ" : "Mars"}</span>
                        <span><b>Me</b> ${isKannada ? "ಬುಧ" : "Mercury"}</span>
                        <span><b>Ju</b> ${isKannada ? "ಗುರು" : "Jupiter"}</span>
                        <span><b>Ve</b> ${isKannada ? "ಶುಕ್ರ" : "Venus"}</span>
                        <span><b>Sa</b> ${isKannada ? "ಶನಿ" : "Saturn"}</span>
                        <span><b>Ra</b> ${isKannada ? "ರಾಹು" : "Rahu"}</span>
                        <span><b>Ke</b> ${isKannada ? "ಕೇತು" : "Ketu"}</span>
                    </div>
                </div>
            </div>

            <div class="summary-title-row"><div><div class="small-title">✦ ${isKannada ? "ಮುಖ್ಯ ವಿವರಗಳು" : "KEY DETAILS"}</div><h3>${isKannada ? "ಜನ್ಮ ಕುಂಡಲಿಯ ಮುಖ್ಯ ಅಂಶಗಳು" : "Birth Chart Highlights"}</h3></div></div>
            <div class="chart-summary">
                <div class="chart-item"><div class="chart-icon">🪐</div><span>${labels.lagna}</span><strong>${escapeHtml(translateSign(ascendantName))}</strong></div>
                <div class="chart-item"><div class="chart-icon">🌙</div><span>${labels.janmaRashi}</span><strong>${escapeHtml(translateSign(moonSign))}</strong></div>
                <div class="chart-item"><div class="chart-icon">⭐</div><span>${labels.janmaNakshatra}</span><strong>${escapeHtml(translateNakshatra(moonNakshatra))}</strong></div>
                <div class="chart-item"><div class="chart-icon">✦</div><span>${labels.lagnaDegree}</span><strong>${escapeHtml(ascendantDegree)}°</strong></div>
                <div class="chart-item"><div class="chart-icon">🔭</div><span>${labels.lagnaNakshatra}</span><strong>${escapeHtml(translateNakshatra(lagnaNakshatra))}</strong></div>
                <div class="chart-item"><div class="chart-icon">✨</div><span>${labels.pada}</span><strong>${escapeHtml(lagnaPada)}</strong></div>
            </div>

            <section class="d9-section" id="navamsa">
                <div class="section-heading">
                    <div class="small-title">✦ ${isKannada ? "ನವಾಂಶ" : "NAVAMSA"}</div>
                    <h3>${isKannada ? "D9 ನವಾಂಶ ಕುಂಡಲಿ" : "D9 Navamsa Chart"}</h3>
                    <p>${isKannada ? "ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯದಲ್ಲಿ D9 ಅನ್ನು ಗ್ರಹಗಳ ಆಂತರಿಕ ಬಲ ಮತ್ತು ಸಂಬಂಧಿತ ವಿಷಯಗಳ ಅಧ್ಯಯನಕ್ಕೆ ಬಳಸಲಾಗುತ್ತದೆ." : "In traditional Vedic astrology, D9 is used to explore planetary strength and relationship-related themes."}</p>
                </div>
                ${d9SvgMarkup ? `<div class="d9-chart-card"><div class="d9-chart-wrap">${d9SvgMarkup.replace(/<svg\b([^>]*)>/i,(m,a)=>`<svg${a.replace(/\s(width|height)\s*=\s*["\'][^"\']*["\']/gi,'')} width="400" height="400" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto;max-width:100%;">`)}</div><div class="d9-side-panel"><div class="d9-lagna"><span>${isKannada ? "D9 ಲಗ್ನ" : "D9 Ascendant"}</span><strong>${escapeHtml(translateSign(d9ReferenceSign))}</strong></div><div class="d9-highlight-grid">${d9HighlightHtml}</div></div></div>` : `<div class="d9-unavailable">${isKannada ? "D9 ಚಾರ್ಟ್ ಈಗ ಲಭ್ಯವಿಲ್ಲ." : "D9 chart is currently unavailable."}</div>`}
                <div class="d9-table-wrap">
                    <table class="d9-table"><thead><tr><th>${isKannada ? "ಗ್ರಹ" : "Planet"}</th><th>${isKannada ? "D9 ರಾಶಿ" : "D9 Sign"}</th><th>${isKannada ? "ಅಂಶ" : "Longitude"}</th><th>${isKannada ? "ಭವನ" : "House"}</th></tr></thead>
                    <tbody>${d9Rows.map(r=>`<tr><td>${r.icon} ${isKannada ? r.kannada : r.key}</td><td>${escapeHtml(translateSign(r.sign))}</td><td>${escapeHtml(String(r.degree))}${r.degree !== "—" ? "°" : ""}</td><td>${escapeHtml(String(r.house))}</td></tr>`).join("")}</tbody></table>
                </div>
                <div class="d9-note">ℹ️ ${isKannada ? "ಇದು ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯ ವಿವರಣೆ ಮಾತ್ರ; ಖಚಿತ ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ." : "This is a traditional astrology interpretation framework, not a guaranteed prediction."}</div>
            </section>

            <section class="d1d9-section" id="d1d9-combined">
                <div class="section-heading">
                    <div class="small-title">✦ ${isKannada ? "D1 + D9" : "D1 + D9"}</div>
                    <h3>${isKannada ? "D1 + D9 ಸಂಯೋಜಿತ ಓದು" : "D1 + D9 Combined Reading"}</h3>
                    <p>${isKannada ? "D1 ಮತ್ತು D9 ಸ್ಥಾನಗಳನ್ನು ಹೋಲಿಸಿ, ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯ ಚೌಕಟ್ಟಿನಲ್ಲಿ ಗ್ರಹಗಳ ಸ್ಥಿರತೆ ಮತ್ತು ಸಂಬಂಧಿತ ಥೀಮ್‌ಗಳನ್ನು ನೋಡಬಹುದು." : "A traditional comparison of D1 and D9 placements, focusing on consistency and relationship-related themes."}</p>
                </div>
                <div class="d1d9-grid">
                    <article class="d1d9-card"><span>🪐</span><h4>${isKannada ? "ವರ್ಗೋತ್ತಮ ಗ್ರಹಗಳು" : "Vargottama Planets"}</h4><strong>${vargottamaPlanets.length ? vargottamaPlanets.map(x=>escapeHtml(isKannada?x.kannada:x.key)).join(", ") : (isKannada ? "ಲಭ್ಯವಿರುವ ಡೇಟಾದಲ್ಲಿ ಯಾವುದೂ ಇಲ್ಲ" : "None found in the supplied data")}</strong><p>${isKannada ? "D1 ಮತ್ತು D9 ಎರಡರಲ್ಲೂ ಒಂದೇ ರಾಶಿ ಇದ್ದಾಗ ಆ ಗ್ರಹವನ್ನು ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ವರ್ಗೋತ್ತಮ ಎಂದು ಕರೆಯುತ್ತಾರೆ." : "A planet is traditionally called vargottama when its D1 and D9 signs match exactly."}</p></article>
                    <article class="d1d9-card"><span>💍</span><h4>${isKannada ? "ಸಂಬಂಧದ ಥೀಮ್" : "Relationship Theme"}</h4><strong>${escapeHtml(translateSign(d9ReferenceSign))}</strong><p>${isKannada ? "D9 ಲಗ್ನ ಮತ್ತು ಶುಕ್ರ/ಗುರು ಮುಂತಾದ ಗ್ರಹಗಳ ಸ್ಥಾನಗಳನ್ನು ಸಂಬಂಧಿತ ವಿಷಯಗಳ ಸಾಂಪ್ರದಾಯಿಕ ಅಧ್ಯಯನದಲ್ಲಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಇದನ್ನು ಖಚಿತ ಫಲಿತಾಂಶವೆಂದು ನೋಡಬಾರದು." : "D9 ascendant and planets such as Venus and Jupiter are traditionally considered when studying relationship themes; this is not a guaranteed outcome."}</p></article>
                    <article class="d1d9-card"><span>✨</span><h4>${isKannada ? "ಒಟ್ಟಾರೆ ಓದು" : "Combined View"}</h4><strong>${escapeHtml(translateSign(ascendantName))} → ${escapeHtml(translateSign(d9ReferenceSign))}</strong><p>${isKannada ? "D1 ಜೀವನದ ಮೂಲ ಚಾರ್ಟ್ ಆಗಿದ್ದು, D9 ಅನ್ನು ಅದರೊಂದಿಗೆ ಹೋಲಿಸಿ ಗ್ರಹಗಳ ಬಲ ಮತ್ತು ಆಂತರಿಕ ಥೀಮ್‌ಗಳನ್ನು ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ." : "D1 is the primary birth chart; D9 is traditionally read alongside it to examine planetary strength and deeper themes."}</p></article>
                </div>
                <div class="d1d9-table-wrap"><table class="d1d9-table"><thead><tr><th>${isKannada?"ಗ್ರಹ":"Planet"}</th><th>D1</th><th>D9</th><th>${isKannada?"ಹೋಲಿಕೆ":"Comparison"}</th></tr></thead><tbody>${d1D9PlanetComparison.map(x=>`<tr><td>${x.icon} ${isKannada?x.kannada:x.key}</td><td>${escapeHtml(translateSign(x.d1Sign))}</td><td>${escapeHtml(translateSign(x.d9Sign))}</td><td>${x.vargottama ? (isKannada?"ವರ್ಗೋತ್ತಮ":"Vargottama") : "—"}</td></tr>`).join("")}</tbody></table></div>
                <div class="d1d9-note">ℹ️ ${isKannada ? "ಇದು ಸಾಂಪ್ರದಾಯಿಕ/ಸಾಂಸ್ಕೃತಿಕ ಜ್ಯೋತಿಷ್ಯ ವಿವರಣೆ. ಖಚಿತ ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ." : "This is a traditional/cultural astrology interpretation, not a guaranteed prediction."}</div>
            </section>

            <section class="reading-section" id="detailed-reading">
                <div class="reading-heading">
                    <div>
                        <div class="small-title">✦ ${labels.readingKicker}</div>
                        <h3>${labels.readingTitle}</h3>
                        <p>${labels.readingIntro}</p>
                    </div>
                    <span class="reading-badge">${isKannada ? "D1 ಆಧಾರಿತ" : "D1 BASED"}</span>
                </div>
                <div class="reading-grid">${readingCards}</div>
                <div class="reading-note">ℹ️ ${labels.traditionalNote}</div>
            </section>

            <div class="planet-section">
                <div class="section-heading"><div class="small-title">✦ ${labels.planets}</div><h3>${labels.planetaryDetails}</h3></div>
                <div class="planet-grid">${planetCards}</div>
            </div>

            <div class="house-section">
                <div class="section-heading"><div class="small-title">✦ ${labels.houses}</div><h3>${labels.housesTitle}</h3></div>
                <div class="house-grid">${houseCards}</div>
            </div>

            <p class="chart-note">${labels.note}</p>
        </div>`;

    document.querySelector(".birth-section")?.insertAdjacentElement("afterend", resultSection);
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ========================================
// NUMEROLOGY + COMPATIBILITY + DAILY GUIDE
// ========================================
(function initExtraTools() {
    const reduceNumber = (value) => {
        let n = Math.abs(Number(value) || 0);
        while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
            n = String(n).split('').reduce((sum, digit) => sum + Number(digit), 0);
        }
        return n;
    };

    const lifePath = (dateValue) => {
        const digits = String(dateValue || '').replace(/\D/g, '');
        return reduceNumber(digits.split('').reduce((sum, digit) => sum + Number(digit), 0));
    };

    const letterValues = {
        A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
        J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
        S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8
    };

    const nameNumber = (name) => {
        const clean = String(name || '').toUpperCase().replace(/[^A-Z]/g, '');
        return reduceNumber([...clean].reduce((sum, letter) => sum + (letterValues[letter] || 0), 0));
    };

    const zodiacKannada = {
        Aries: "ಮೇಷ", Taurus: "ವೃಷಭ", Gemini: "ಮಿಥುನ", Cancer: "ಕರ್ಕಾಟಕ",
        Leo: "ಸಿಂಹ", Virgo: "ಕನ್ಯಾ", Libra: "ತುಲಾ", Scorpio: "ವೃಶ್ಚಿಕ",
        Sagittarius: "ಧನು", Capricorn: "ಮಕರ", Aquarius: "ಕುಂಭ", Pisces: "ಮೀನ"
    };

    const nakshatraKannada = {
        Ashwini: "ಅಶ್ವಿನಿ", Bharani: "ಭರಣಿ", Krittika: "ಕೃತ್ತಿಕಾ", Rohini: "ರೋಹಿಣಿ",
        Mrigashira: "ಮೃಗಶಿರ", Ardra: "ಆದ್ರಾ", Punarvasu: "ಪುನರ್ವಸು", Pushya: "ಪುಷ್ಯ",
        Ashlesha: "ಆಶ್ಲೇಷಾ", Magha: "ಮಘಾ", "Purva Phalguni": "ಪೂರ್ವ ಫಲ್ಗುಣಿ",
        "Uttara Phalguni": "ಉತ್ತರ ಫಲ್ಗುಣಿ", Hasta: "ಹಸ್ತ", Chitra: "ಚಿತ್ರಾ", Swati: "ಸ್ವಾತಿ",
        Vishakha: "ವಿಶಾಖಾ", Anuradha: "ಅನುರಾಧಾ", Jyeshtha: "ಜ್ಯೇಷ್ಠಾ", Mula: "ಮೂಲ",
        "Purva Ashadha": "ಪೂರ್ವಾಷಾಢಾ", "Uttara Ashadha": "ಉತ್ತರಾಷಾಢಾ", Shravana: "ಶ್ರವಣ",
        Dhanishta: "ಧನಿಷ್ಠಾ", Shatabhisha: "ಶತಭಿಷಾ", "Purva Bhadrapada": "ಪೂರ್ವ ಭಾದ್ರಪದ",
        "Uttara Bhadrapada": "ಉತ್ತರ ಭಾದ್ರಪದ", Revati: "ರೇವತಿ"
    };

    const getMoon = (chart) => chart?.planets?.Moon || chart?.planets?.moon || {};
    const getAscendant = (chart) => chart?.ascendant || {};
    const getChartSign = (value) => value?.zodiac_sign_name || value?.sign || "—";
    const getChartNakshatra = (value) => value?.nakshatra_name || value?.nakshatra || "—";
    const translateSign = (value) => zodiacKannada[value] || value || "—";
    const translateNakshatra = (value) => nakshatraKannada[value] || value || "—";

    const profileFromChart = (chart) => {
        const moon = getMoon(chart);
        const asc = getAscendant(chart);
        return {
            rashi: getChartSign(moon),
            nakshatra: getChartNakshatra(moon),
            lagna: getChartSign(asc)
        };
    };

    const safeDateParts = (date, time) => {
        const [year, month, day] = String(date || '').split('-').map(Number);
        const [hours, minutes] = String(time || '').split(':').map(Number);
        return { year, month, date: day, hours, minutes };
    };

    const compatibilityForm = document.getElementById('compatibilityForm');
    if (compatibilityForm) {
        compatibilityForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const p1 = {
                name: document.getElementById('personOneName').value.trim(),
                birthDate: dateToIso(document.getElementById('personOneDate').value),
                birthTime: document.getElementById('personOneTime').value,
                birthPlace: document.getElementById('personOnePlace').value.trim()
            };
            const p2 = {
                name: document.getElementById('personTwoName').value.trim(),
                birthDate: dateToIso(document.getElementById('personTwoDate').value),
                birthTime: document.getElementById('personTwoTime').value,
                birthPlace: document.getElementById('personTwoPlace').value.trim()
            };
            const button = compatibilityForm.querySelector('.generate-btn');
            const result = document.getElementById('compatibilityResult');

            const buildPayload = (person) => ({
                ...safeDateParts(person.birthDate, person.birthTime),
                birthPlace: person.birthPlace
            });

            button.disabled = true;
            button.innerHTML = `<span class="button-spinner"></span> ${getSiteLanguage()==='Kannada'?'ಜನ್ಮ ಕುಂಡಲಿಗಳನ್ನು ಹೋಲಿಸಲಾಗುತ್ತಿದೆ...':'Comparing Birth Charts...'}`;

            try {
                const response = await fetch(`${getApiBase()}/api/compatibility`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ personOne: buildPayload(p1), personTwo: buildPayload(p2) })
                });
                const data = await response.json();
                if (!response.ok || !data.success) {
                    throw new Error(data.message || 'Unable to compare the charts.');
                }

                const a = profileFromChart(data.personOne.chart);
                const b = profileFromChart(data.personTwo.chart);
                const sameRashi = a.rashi === b.rashi && a.rashi !== '—';
                const sameNakshatra = a.nakshatra === b.nakshatra && a.nakshatra !== '—';
                const sameLagna = a.lagna === b.lagna && a.lagna !== '—';
                const sharedCount = [sameRashi, sameNakshatra, sameLagna].filter(Boolean).length;

                const isKn = getSiteLanguage() === 'Kannada';
                const themeText = isKn
                    ? (sharedCount >= 2 ? 'ಎರಡು ಕುಂಡಲಿಗಳಲ್ಲೂ ಕೆಲವು ಪ್ರಮುಖ ಸ್ಥಾನಗಳು ಒಂದೇ ರೀತಿಯಲ್ಲಿವೆ. ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯದಲ್ಲಿ ಇದನ್ನು ಸಾಮಾನ್ಯ ಆಸಕ್ತಿಗಳು ಅಥವಾ ಜೀವನದ ಲಯಗಳ ಕುರಿತು ಚರ್ಚಿಸಲು ಒಂದು ಥೀಮ್ ಆಗಿ ಬಳಸಬಹುದು.' : sharedCount === 1 ? 'ಒಂದು ಪ್ರಮುಖ ಸ್ಥಾನ ಒಂದೇ ರೀತಿಯಲ್ಲಿದೆ. ಉಳಿದ ವ್ಯತ್ಯಾಸಗಳನ್ನು ಪರಸ್ಪರ ಪೂರಕ ಗುಣಗಳ ಕುರಿತು ಚರ್ಚಿಸಲು ಆರಂಭಿಕ ಅಂಶವಾಗಿ ನೋಡಬಹುದು.' : 'ಪ್ರಮುಖ ಸ್ಥಾನಗಳಲ್ಲಿ ವ್ಯತ್ಯಾಸವಿದೆ. ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯದಲ್ಲಿ ಇವುಗಳನ್ನು ಸಂವಹನ, ನಿರೀಕ್ಷೆಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಶೈಲಿಗಳ ಕುರಿತು ಆತ್ಮಪರಿಶೀಲನೆಗೆ ಬಳಸಬಹುದು.')
                    : (sharedCount >= 2 ? 'The two charts share multiple headline placements. In traditional astrology, that can be used as a theme for discussing shared preferences or rhythms.' : sharedCount === 1 ? 'The charts share one headline placement. Traditional readers may use the remaining differences as a starting point for discussing complementary patterns.' : 'The headline placements differ. Traditional astrology can use those differences as a reflection framework for communication, expectations and individual styles.');

                result.hidden = false;
                result.innerHTML = `
                    <div class="tool-result-card compatibility-result-card">
                        <div class="comparison-heading">
                            <div><span class="small-title">✦ ${isKn ? 'ಸಾಂಪ್ರದಾಯಿಕ D1 ಹೋಲಿಕೆ' : 'TRADITIONAL D1 COMPARISON'}</span><h3>${escapeHtml(p1.name)} &amp; ${escapeHtml(p2.name)}</h3></div>
                            <span class="comparison-count">${sharedCount}/3 ${isKn ? 'ಒಂದೇ' : 'shared'}</span>
                        </div>
                        <div class="comparison-grid">
                            <div class="comparison-profile"><strong>${escapeHtml(p1.name)}</strong><span>${isKn ? 'ಚಂದ್ರ ರಾಶಿ' : 'Moon Sign'}</span><b>${escapeHtml(isKn ? translateSign(a.rashi) : a.rashi)}</b><span>${isKn ? 'ನಕ್ಷತ್ರ' : 'Nakshatra'}</span><b>${escapeHtml(isKn ? translateNakshatra(a.nakshatra) : a.nakshatra)}</b><span>${isKn ? 'ಲಗ್ನ' : 'Lagna'}</span><b>${escapeHtml(isKn ? translateSign(a.lagna) : a.lagna)}</b></div>
                            <div class="comparison-profile"><strong>${escapeHtml(p2.name)}</strong><span>${isKn ? 'ಚಂದ್ರ ರಾಶಿ' : 'Moon Sign'}</span><b>${escapeHtml(isKn ? translateSign(b.rashi) : b.rashi)}</b><span>${isKn ? 'ನಕ್ಷತ್ರ' : 'Nakshatra'}</span><b>${escapeHtml(isKn ? translateNakshatra(b.nakshatra) : b.nakshatra)}</b><span>${isKn ? 'ಲಗ್ನ' : 'Lagna'}</span><b>${escapeHtml(isKn ? translateSign(b.lagna) : b.lagna)}</b></div>
                        </div>
                        <div class="comparison-themes">
                            <div class="comparison-theme"><span>🌙</span><div><strong>${isKn ? 'ಚಂದ್ರ ರಾಶಿ' : 'Moon Sign'}</strong><p>${isKn ? (sameRashi ? 'ಒಂದೇ ಚಂದ್ರ ರಾಶಿ' : 'ವಿಭಿನ್ನ ಚಂದ್ರ ರಾಶಿಗಳು') : (sameRashi ? 'Same Moon sign' : 'Different Moon signs')} — ${escapeHtml(translateSign(a.rashi))} / ${escapeHtml(translateSign(b.rashi))}</p></div></div>
                            <div class="comparison-theme"><span>⭐</span><div><strong>${isKn ? 'ನಕ್ಷತ್ರ' : 'Nakshatra'}</strong><p>${isKn ? (sameNakshatra ? 'ಒಂದೇ ನಕ್ಷತ್ರ' : 'ವಿಭಿನ್ನ ನಕ್ಷತ್ರಗಳು') : (sameNakshatra ? 'Same Nakshatra' : 'Different Nakshatras')} — ${escapeHtml(translateNakshatra(a.nakshatra))} / ${escapeHtml(translateNakshatra(b.nakshatra))}</p></div></div>
                            <div class="comparison-theme"><span>🪐</span><div><strong>${isKn ? 'ಲಗ್ನ' : 'Lagna'}</strong><p>${isKn ? (sameLagna ? 'ಒಂದೇ ಲಗ್ನ ರಾಶಿ' : 'ವಿಭಿನ್ನ ಲಗ್ನ ರಾಶಿಗಳು') : (sameLagna ? 'Same Ascendant sign' : 'Different Ascendant signs')} — ${escapeHtml(translateSign(a.lagna))} / ${escapeHtml(translateSign(b.lagna))}</p></div></div>
                        </div>
                        <p class="comparison-summary">${themeText}</p>
                        <div class="tool-note">${isKn ? 'ಇದು ಸಾಂಪ್ರದಾಯಿಕ D1 ಹೋಲಿಕೆ ಮಾತ್ರ; ವೈಜ್ಞಾನಿಕ ಹೊಂದಾಣಿಕೆ ಅಂಕ ಅಥವಾ ಸಂಪೂರ್ಣ ಅಷ್ಟಕೂಟ/ಗುಣಮಿಲನ ಲೆಕ್ಕಾಚಾರವಲ್ಲ. ಸಂಬಂಧ ಯಶಸ್ವಿಯಾಗುತ್ತದೆಯೇ ಅಥವಾ ವಿಫಲವಾಗುತ್ತದೆಯೇ ಎಂಬುದನ್ನು ಇದು ನಿರ್ಧರಿಸುವುದಿಲ್ಲ.' : 'This is a traditional D1 comparison, not a scientific compatibility score or a full Ashtakoota/Guna Milan calculation. It does not determine whether a relationship will succeed or fail.'}</div>
                    </div>`;
                result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } catch (error) {
                console.error(error);
                result.hidden = false;
                result.innerHTML = `<div class="tool-result-card error-card"><h3>${getSiteLanguage()==='Kannada'?'ಕುಂಡಲಿಗಳನ್ನು ಹೋಲಿಸಲಾಗಲಿಲ್ಲ':'Could not compare the charts'}</h3><p>${escapeHtml(error.message)}</p></div>`;
            } finally {
                button.disabled = false;
                button.innerHTML = `<span>💫</span> ${getSiteLanguage()==='Kannada'?'ಜನ್ಮ ಕುಂಡಲಿಗಳನ್ನು ಹೋಲಿಸಿ':'Compare Birth Charts'}`;
            }
        });
    }

    const numerologyForm = document.getElementById('numerologyForm');
    if (numerologyForm) {
        numerologyForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('numerologyName').value.trim();
            const date = dateToIso(document.getElementById('numerologyDate').value);
            const lp = lifePath(date);
            const nn = nameNumber(name);
            const result = document.getElementById('numerologyResult');
            const meanings = {
                1:'independence and initiative', 2:'cooperation and sensitivity', 3:'expression and creativity',
                4:'structure and consistency', 5:'curiosity and adaptability', 6:'responsibility and care',
                7:'reflection and analysis', 8:'ambition and organization', 9:'compassion and broad perspective',
                11:'intuition and inspiration', 22:'planning and practical vision', 33:'service and teaching'
            };
            result.hidden = false;
            const isKn = getSiteLanguage() === 'Kannada';
            const meaningsKn = {1:'ಸ್ವತಂತ್ರತೆ ಮತ್ತು ಆರಂಭಿಸುವ ಮನೋಭಾವ',2:'ಸಹಕಾರ ಮತ್ತು ಸಂವೇದನಾಶೀಲತೆ',3:'ಅಭಿವ್ಯಕ್ತಿ ಮತ್ತು ಸೃಜನಶೀಲತೆ',4:'ಕ್ರಮ ಮತ್ತು ಸ್ಥಿರತೆ',5:'ಕುತೂಹಲ ಮತ್ತು ಹೊಂದಿಕೊಳ್ಳುವಿಕೆ',6:'ಜವಾಬ್ದಾರಿ ಮತ್ತು ಕಾಳಜಿ',7:'ಆತ್ಮಪರಿಶೀಲನೆ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ',8:'ಮಹತ್ವಾಕಾಂಕ್ಷೆ ಮತ್ತು ಸಂಘಟನೆ',9:'ಕರುಣೆ ಮತ್ತು ವಿಶಾಲ ದೃಷ್ಟಿಕೋನ',11:'ಅಂತಃಪ್ರಜ್ಞೆ ಮತ್ತು ಪ್ರೇರಣೆ',22:'ಯೋಜನೆ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ದೃಷ್ಟಿ',33:'ಸೇವೆ ಮತ್ತು ಬೋಧನೆ'};
            result.innerHTML = `
                <div class="tool-result-card">
                    <h3>${escapeHtml(name)}</h3>
                    <div class="number-grid">
                        <div class="number-box"><span>${isKn?'Life Path ಸಂಖ್ಯೆ':'Life Path Number'}</span><strong>${lp}</strong><small>${escapeHtml(isKn ? (meaningsKn[lp] || '') : (meanings[lp] || ''))}</small></div>
                        <div class="number-box"><span>${isKn?'ಹೆಸರು ಸಂಖ್ಯೆ':'Name Number'}</span><strong>${nn}</strong><small>${escapeHtml(isKn ? (meaningsKn[nn] || '') : (meanings[nn] || ''))}</small></div>
                    </div>
                    <p>${isKn?'ಈ ಅಂಕಗಳು ಸಾಮಾನ್ಯ Pythagorean ಮಾದರಿಯ ಅಂಕಶಾಸ್ತ್ರದ ಲೆಕ್ಕಾಚಾರವನ್ನು ಬಳಸುತ್ತವೆ.':'These numbers use a common Pythagorean-style numerology calculation.'}</p>
                    <div class="tool-note">${isKn?'ಅಂಕಶಾಸ್ತ್ರವು ಸಾಂಪ್ರದಾಯಿಕ ನಂಬಿಕೆ ಪದ್ಧತಿಯಾಗಿದೆ; ಇದನ್ನು ಸಾಂಸ್ಕೃತಿಕ/ಮನರಂಜನಾ ಮಾರ್ಗದರ್ಶನವಾಗಿ ಮಾತ್ರ ಪರಿಗಣಿಸಿ.':'Numerology is a traditional belief system and should be treated as cultural/entertainment guidance rather than a factual prediction tool.'}</div>
                </div>`;
            result.scrollIntoView({behavior:'smooth', block:'nearest'});
        });
    }

    const dailyCard = document.querySelector('.daily-guide-card');
    if (dailyCard) {
        const themes = [
            ['Clarity & Reflection','Use the day to review priorities, communicate clearly and avoid rushing important decisions.'],
            ['Learning & Curiosity','A good theme for studying, asking questions and turning observations into practical next steps.'],
            ['Relationships & Listening','Focus on patience and clear communication. Let conversations be more important than assumptions.'],
            ['Work & Organization','Break larger tasks into manageable steps and keep expectations realistic.'],
            ['Rest & Renewal','Make space for recovery and reflection alongside your responsibilities.']
        ];
        const dayIndex = new Date().getDate() % themes.length;
        const [title, text] = themes[dayIndex];
        const heading = dailyCard.querySelector('h3');
        const paragraph = dailyCard.querySelector('p');
        if (heading) heading.textContent = title;
        if (paragraph) paragraph.textContent = `${text} This is a general traditional reflection theme, not a prediction.`;
        window.__astroUpdateDaily = (language) => {
            const kn = language === 'Kannada';
            const dailyThemes = kn ? [
                ['ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಆತ್ಮಪರಿಶೀಲನೆ','ಆದ್ಯತೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ ಮತ್ತು ಪ್ರಮುಖ ನಿರ್ಧಾರಗಳಲ್ಲಿ ಆತುರಪಡಬೇಡಿ.'],
                ['ಕಲಿಕೆ ಮತ್ತು ಕುತೂಹಲ','ಓದುವುದು, ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುವುದು ಮತ್ತು ಗಮನಿಸಿದ ವಿಷಯಗಳನ್ನು ಪ್ರಾಯೋಗಿಕ ಹೆಜ್ಜೆಗಳಾಗಿ ಪರಿವರ್ತಿಸುವುದು ಒಳ್ಳೆಯ ಥೀಮ್.'],
                ['ಸಂಬಂಧಗಳು ಮತ್ತು ಆಲಿಸುವಿಕೆ','ತಾಳ್ಮೆ ಮತ್ತು ಸ್ಪಷ್ಟ ಸಂವಹನಕ್ಕೆ ಗಮನ ಕೊಡಿ. ಊಹೆಗಳಿಗಿಂತ ಸಂಭಾಷಣೆಗೆ ಹೆಚ್ಚು ಮಹತ್ವ ನೀಡಿ.'],
                ['ಕೆಲಸ ಮತ್ತು ಕ್ರಮಬದ್ಧತೆ','ದೊಡ್ಡ ಕೆಲಸಗಳನ್ನು ಸಣ್ಣ ಹಂತಗಳಾಗಿ ವಿಭಜಿಸಿ ಮತ್ತು ನಿರೀಕ್ಷೆಗಳನ್ನು ವಾಸ್ತವಿಕವಾಗಿರಿಸಿ.'],
                ['ವಿಶ್ರಾಂತಿ ಮತ್ತು ಪುನಶ್ಚೇತನ','ಜವಾಬ್ದಾರಿಗಳ ಜೊತೆಗೆ ವಿಶ್ರಾಂತಿ ಮತ್ತು ಆತ್ಮಪರಿಶೀಲನೆಗೂ ಸಮಯ ಕೊಡಿ.']
            ] : themes;
            const pair = dailyThemes[new Date().getDate() % dailyThemes.length];
            if (heading) heading.textContent = pair[0];
            if (paragraph) paragraph.textContent = kn ? `${pair[1]} ಇದು ಸಾಮಾನ್ಯ ಸಾಂಪ್ರದಾಯಿಕ ಆತ್ಮಪರಿಶೀಲನಾ ಥೀಮ್, ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ.` : `${pair[1]} This is a general traditional reflection theme, not a prediction.`;
        };
        window.__astroUpdateDaily(getSiteLanguage());
    }
})();



// ========================================
// JATHAKA SHASTHRAM AI CHAT + WHATSAPP
// ========================================
(function initJathakaShasthramAssistant(){
    const launcher = document.getElementById('aiChatLauncher');
    const panel = document.getElementById('aiChatPanel');
    const close = document.getElementById('aiChatClose');
    const messagesEl = document.getElementById('aiChatMessages');
    const form = document.getElementById('aiChatForm');
    const input = document.getElementById('aiChatInput');
    const status = document.getElementById('aiChartStatus');
    const quick = document.getElementById('aiQuickPrompts');
    const whatsapp = document.getElementById('whatsappFloat');
    if (!launcher || !panel || !messagesEl || !form) return;

    let history = [];
    let busy = false;

    const isKn = () => getSiteLanguage() === 'Kannada';
    const welcome = () => isKn()
        ? 'ನಮಸ್ಕಾರ 👋 ನಾನು Jathaka Shasthram AI. ನಿಮ್ಮ Kundli, ರಾಶಿ, ನಕ್ಷತ್ರ, ಗ್ರಹಗಳು ಅಥವಾ ಸಾಮಾನ್ಯ ಜ್ಯೋತಿಷ್ಯ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಬಹುದು. ನಿಮ್ಮ chart generate ಮಾಡಿದ ನಂತರ ಅದರ data ಆಧಾರವಾಗಿ ಇನ್ನಷ್ಟು personalized ಉತ್ತರ ಕೊಡುತ್ತೇನೆ.'
        : 'Namaste 👋 I’m Jathaka Shasthram AI. Ask me about your Kundli, Rashi, Nakshatra, planets, houses, numerology, or general astrology. After you generate your chart, I can use its actual chart data for more personalized answers.';

    function openChat(){
        document.body.classList.add('ai-open');
        panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); launcher.setAttribute('aria-expanded','true');
        updateChartStatus();
        if (!messagesEl.children.length) addMessage('model', welcome());
        setTimeout(()=>input?.focus(), 120);
    }
    function closeChat(){
        document.body.classList.remove('ai-open');
        panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); launcher.setAttribute('aria-expanded','false');
    }
    launcher.addEventListener('click', ()=>panel.classList.contains('open') ? closeChat() : openChat());
    close?.addEventListener('click', closeChat);
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeChat(); });

    function updateChartStatus(){
        if(!status) return;
        status.textContent = buildAiChartContext() ? (isKn() ? 'ನಿಮ್ಮ chart data connected' : 'Your chart data is connected') : (isKn() ? 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಬಹುದು' : 'General questions welcome');
    }

    function renderAiMarkdown(value){
        const source=String(value||'').replace(/\r\n?/g,'\n').trim();
        if(!source) return '';

        const lines=source.split('\n');
        const html=[];
        let listType=null;

        const closeList=()=>{
            if(listType){ html.push(`</${listType}>`); listType=null; }
        };

        const inline=(value)=>{
            let safe=escapeHtml(value);
            // Only render a small, safe subset of Markdown returned by our AI.
            safe=safe.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
            safe=safe.replace(/\*([^*\n]+)\*/g,'<em>$1</em>');
            safe=safe.replace(/`([^`\n]+)`/g,'<code>$1</code>');
            return safe;
        };

        for(const rawLine of lines){
            const line=rawLine.trim();
            if(!line){
                closeList();
                continue;
            }

            const heading=line.match(/^#{1,3}\s+(.+)$/);
            if(heading){
                closeList();
                html.push(`<h4>${inline(heading[1])}</h4>`);
                continue;
            }

            const numbered=line.match(/^\d+[.)]\s+(.+)$/);
            const bullet=line.match(/^(?:[-*•])\s+(.+)$/);
            if(numbered || bullet){
                const wanted=numbered?'ol':'ul';
                if(listType!==wanted){
                    closeList();
                    listType=wanted;
                    html.push(`<${listType}>`);
                }
                html.push(`<li>${inline((numbered||bullet)[1])}</li>`);
                continue;
            }

            closeList();
            html.push(`<p>${inline(line)}</p>`);
        }

        closeList();
        return html.join('');
    }

    function addMessage(role, text){
        const row=document.createElement('div'); row.className=`ai-msg ${role==='user'?'user':'model'}`;
        const bubble=document.createElement('div'); bubble.className='ai-bubble';
        if(role==='model') bubble.innerHTML=renderAiMarkdown(text);
        else bubble.textContent=String(text||'');
        row.appendChild(bubble); messagesEl.appendChild(row); messagesEl.scrollTop=messagesEl.scrollHeight;
    }
    function addTyping(){
        const row=document.createElement('div'); row.className='ai-msg model'; row.id='aiTypingRow';
        row.innerHTML='<div class="ai-bubble"><span class="ai-typing"><i></i><i></i><i></i></span></div>';
        messagesEl.appendChild(row); messagesEl.scrollTop=messagesEl.scrollHeight;
    }
    function removeTyping(){ document.getElementById('aiTypingRow')?.remove(); }

    // Build a compact, explicit chart context for Gemini.
    // Sending the entire Navamsha response makes it harder for the model to
    // reliably identify the actual placements, so we send only the fields
    // needed for personalized Vedic-astrology questions.
    function buildAiChartContext(){
        const last=window.__astroLastChart;
        const chart=last?.chart;
        if(!chart) return null;

        const pick=(obj, keys)=>{
            if(!obj || typeof obj!=='object') return null;
            for(const key of keys){
                if(obj[key] !== undefined && obj[key] !== null && obj[key] !== '') return obj[key];
            }
            return null;
        };

        const asc=chart.ascendant || chart.Ascendant || {};
        const rawPlanets=chart.planets || chart.Planets || {};
        const planetNames=['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'];

        const planets={};
        for(const name of planetNames){
            const key=Object.keys(rawPlanets).find(k=>k.toLowerCase()===name.toLowerCase());
            const p=key ? rawPlanets[key] : {};
            planets[name]={
                sign: pick(p,['zodiac_sign_name','sign','zodiacSign']),
                degree: pick(p,['normDegree','degree','longitude']),
                house: pick(p,['house_number','house','houseNumber']),
                nakshatra: pick(p,['nakshatra_name','nakshatra','nakshatraName']),
                pada: pick(p,['nakshatra_pada','pada','nakshatraPada']),
                retrograde: p.isRetro === true || String(p.isRetro||'').toLowerCase()==='true'
            };
        }

        const houses={};
        for(let i=1;i<=12;i++){
            const names=['house'+i,'House'+i,String(i)];
            let value=null;
            for(const key of names){
                if(chart.houses?.[key] !== undefined){ value=chart.houses[key]; break; }
            }
            houses[i]=value;
        }

        const d9Raw=last?.d9 || null;
        const d9Placements=d9Raw?.placements || {};
        const d9={
            referenceSign:d9Raw?.reference_sign || d9Raw?.referenceSign || null,
            placements:{}
        };
        for(const name of planetNames){
            const key=Object.keys(d9Placements).find(k=>k.toLowerCase()===name.toLowerCase());
            const p=key ? d9Placements[key] : {};
            d9.placements[name]={
                sign:pick(p,['sign','zodiac_sign_name']),
                degree:pick(p,['longitude','normDegree','degree']),
                house:pick(p,['house','house_number','houseNumber'])
            };
        }
        const vargottama=planetNames.filter(name=>planets[name]?.sign && d9.placements[name]?.sign && String(planets[name].sign).toLowerCase()===String(d9.placements[name].sign).toLowerCase());

        return {
            name:last.name || null,
            birthPlace:last.birthPlace || null,
            ascendant:{
                sign:pick(asc,['zodiac_sign_name','sign','zodiacSign']),
                degree:pick(asc,['normDegree','degree','longitude']),
                nakshatra:pick(asc,['nakshatra_name','nakshatra','nakshatraName']),
                pada:pick(asc,['nakshatra_pada','pada','nakshatraPada'])
            },
            planets,
            houses,
            d9,
            vargottama
        };
    }

    async function sendQuestion(question){
        const text=String(question||'').trim(); if(!text || busy) return;
        if(!panel.classList.contains('open')) openChat();
        addMessage('user',text);
        history.push({role:'user',text});
        busy=true; input.disabled=true; form.querySelector('button').disabled=true; addTyping();
        try{
            const requestBody={
                messages:history.slice(-8),
                language:getSiteLanguage(),
                chartContext:buildAiChartContext()
            };
            let response;
            let data;
            for(let attempt=1; attempt<=2; attempt++){
                try{
                    response=await fetch(`${getApiBase()}/api/ai-chat`,{
                        method:'POST', headers:{'Content-Type':'application/json'},
                        body:JSON.stringify(requestBody)
                    });
                    data=await response.json();
                    if(response.ok && data.success) break;
                    if(attempt===1 && [408,425,429,500,502,503,504].includes(response.status)){
                        await new Promise(resolve=>setTimeout(resolve,1100));
                        continue;
                    }
                    throw new Error(data.message || 'AI response unavailable.');
                }catch(fetchError){
                    if(attempt===2) throw fetchError;
                    await new Promise(resolve=>setTimeout(resolve,1100));
                }
            }
            if(!response?.ok || !data?.success) throw new Error(data?.message || 'AI response unavailable.');
            removeTyping(); addMessage('model',data.message); history.push({role:'model',text:data.message});
        }catch(error){
            removeTyping();
            const message=isKn() ? `ಕ್ಷಮಿಸಿ, AI ಉತ್ತರ ಸಿಗಲಿಲ್ಲ. ${error.message}` : `Sorry, I couldn't get an AI answer right now. ${error.message}`;
            addMessage('model',message);
        }finally{
            busy=false; input.disabled=false; form.querySelector('button').disabled=false; input.focus();
        }
    }

    form.addEventListener('submit',e=>{e.preventDefault(); const value=input.value; input.value=''; input.style.height='auto'; sendQuestion(value);});
    input.addEventListener('input',()=>{input.style.height='auto'; input.style.height=Math.min(input.scrollHeight,100)+'px';});
    quick?.addEventListener('click',e=>{const btn=e.target.closest('[data-prompt]'); if(btn) sendQuestion(btn.dataset.prompt);});

    // Keep the launcher text and status in sync with the selected language.
    window.__astroUpdateChatLanguage = () => {
        updateChartStatus();
        if(input) input.placeholder=isKn()?'Jathaka Shasthramಗೆ ಏನು ಬೇಕಾದರೂ ಕೇಳಿ...':'Ask Jathaka Shasthram anything...';
        const labels=quick?.querySelectorAll('button');
        if(labels && labels.length>=4){
            labels[0].textContent=isKn()?'ನನ್ನ chart':'My chart';
            labels[1].textContent=isKn()?'ಚಂದ್ರ & ನಕ್ಷತ್ರ':'Moon & Nakshatra';
            labels[2].textContent=isKn()?'D1 + D9':'D1 + D9';
            labels[3].textContent=isKn()?'Career':'Career';
        }
    };
    window.__astroUpdateChatLanguage();

    // Configure direct WhatsApp business chat when a number exists server-side.
    fetch(`${getApiBase()}/api/site-config`).then(r=>r.json()).then(config=>{
        if(config?.whatsappNumberConfigured && config.whatsappNumber){
            const message=isKn()?'ನಮಸ್ಕಾರ Jathaka Shasthram, ನನಗೆ ಜ್ಯೋತಿಷ್ಯದ ಬಗ್ಗೆ ಒಂದು ಪ್ರಶ್ನೆ ಇದೆ.':'Hello Jathaka Shasthram, I have a question about astrology.';
            whatsapp.href=`https://wa.me/${encodeURIComponent(config.whatsappNumber)}?text=${encodeURIComponent(message)}`;
        }
    }).catch(()=>{});
})();


// Re-sync AI chat whenever the global language selector changes.
document.getElementById('siteLanguage')?.addEventListener('change', () => window.__astroUpdateChatLanguage?.());

// ========================================
// FULL KUNDLI REPORT + PDF EXPORT
// ========================================
(function initFullKundliReport(){
    const getChart = () => window.__astroLastChart?.chart || null;
    const getName = () => window.__astroLastChart?.name || '';
    const getPlace = () => window.__astroLastChart?.birthPlace || '';
    const isKn = () => getSiteLanguage() === 'Kannada';

    const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
    const signKn = {Aries:'ಮೇಷ',Taurus:'ವೃಷಭ',Gemini:'ಮಿಥುನ',Cancer:'ಕರ್ಕಾಟಕ',Leo:'ಸಿಂಹ',Virgo:'ಕನ್ಯಾ',Libra:'ತುಲಾ',Scorpio:'ವೃಶ್ಚಿಕ',Sagittarius:'ಧನು',Capricorn:'ಮಕರ',Aquarius:'ಕುಂಭ',Pisces:'ಮೀನ'};
    const nakKn = {Ashwini:'ಅಶ್ವಿನಿ',Bharani:'ಭರಣಿ',Krittika:'ಕೃತ್ತಿಕಾ',Rohini:'ರೋಹಿಣಿ',Mrigashira:'ಮೃಗಶಿರ',Ardra:'ಆದ್ರಾ',Punarvasu:'ಪುನರ್ವಸು',Pushya:'ಪುಷ್ಯ',Ashlesha:'ಆಶ್ಲೇಷಾ',Magha:'ಮಘಾ','Purva Phalguni':'ಪೂರ್ವ ಫಲ್ಗುಣಿ','Uttara Phalguni':'ಉತ್ತರ ಫಲ್ಗುಣಿ',Hasta:'ಹಸ್ತ',Chitra:'ಚಿತ್ರಾ',Swati:'ಸ್ವಾತಿ',Vishakha:'ವಿಶಾಖಾ',Anuradha:'ಅನುರಾಧಾ',Jyeshtha:'ಜ್ಯೇಷ್ಠಾ',Mula:'ಮೂಲ','Purva Ashadha':'ಪೂರ್ವಾಷಾಢಾ','Uttara Ashadha':'ಉತ್ತರಾಷಾಢಾ',Shravana:'ಶ್ರವಣ',Dhanishta:'ಧನಿಷ್ಠಾ',Shatabhisha:'ಶತಭಿಷಾ','Purva Bhadrapada':'ಪೂರ್ವ ಭಾದ್ರಪದ','Uttara Bhadrapada':'ಉತ್ತರ ಭಾದ್ರಪದ',Revati:'ರೇವತಿ'};
    const planets = [
        ['Sun','☀️','ಸೂರ್ಯ'],['Moon','🌙','ಚಂದ್ರ'],['Mars','🔴','ಮಂಗಳ'],['Mercury','☿️','ಬುಧ'],['Jupiter','🟠','ಗುರು'],['Venus','💎','ಶುಕ್ರ'],['Saturn','🪐','ಶನಿ'],['Rahu','☊','ರಾಹು'],['Ketu','☋','ಕೇತು']
    ];
    const houseKn=['ಲಗ್ನ ಭವನ','ಧನ ಭವನ','ಸಹೋದರ ಭವನ','ಸುಖ ಭವನ','ಪುತ್ರ ಭವನ','ರೋಗ ಭವನ','ವಿವಾಹ ಭವನ','ಆಯು ಭವನ','ಭಾಗ್ಯ ಭವನ','ಕರ್ಮ ಭವನ','ಲಾಭ ಭವನ','ವ್ಯಯ ಭವನ'];
    const houseEn=['Self / Personality','Wealth / Family','Siblings / Courage','Home / Comfort','Children / Creativity','Health / Service','Marriage / Partnership','Transformation','Fortune / Dharma','Career / Karma','Gains / Network','Expenses / Spirituality'];

    const val=(obj, keys, fallback='—')=>{ for(const k of keys){ if(obj?.[k]!==undefined && obj?.[k]!==null && String(obj[k]).trim()!=='') return obj[k]; } return fallback; };
    const sign=(v)=> isKn() ? (signKn[v]||v||'—') : (v||'—');
    const nak=(v)=> isKn() ? (nakKn[v]||v||'—') : (v||'—');
    const planetData=(chart,key)=>chart?.planets?.[key] || chart?.planets?.[key.toLowerCase()] || {};
    const ascData=(chart)=>chart?.ascendant || {};

    function buildReportData(){
        const chart=getChart(); if(!chart) return null;
        const asc=ascData(chart), moon=planetData(chart,'Moon');
        const ascSign=val(asc,['zodiac_sign_name','sign']), moonSign=val(moon,['zodiac_sign_name','sign']);
        const ascIndex=signs.indexOf(ascSign);
        const houses=[];
        for(let h=1;h<=12;h++){
            const hs=ascIndex>=0 ? signs[(ascIndex+h-1)%12] : '—';
            const placed=planets.filter(([key])=>Number(planetData(chart,key).house_number)===h).map(p=>isKn()?p[2]:p[0]);
            houses.push({number:h,sign:hs,planets:placed});
        }
        const rows=planets.map(([key,icon,kn])=>{
            const d=planetData(chart,key);
            return {key,icon,name:isKn()?kn:key,sign:sign(val(d,['zodiac_sign_name','sign'])),degree:val(d,['normDegree','degree'],'—'),house:val(d,['house_number','house'],'—'),nakshatra:nak(val(d,['nakshatra_name','nakshatra'])),pada:val(d,['nakshatra_pada','pada'],'—'),retro:d.isRetro===true || String(d.isRetro||'').toLowerCase()==='true'};
        });
        const d9=window.__astroLastChart?.d9 || null;
        const d9Svg=String(window.__astroLastChart?.d9Svg || '').trim();
        const d9Placements=d9?.placements || {};
        const d1d9=planets.map(([key,icon,kn])=>{
            const d1=planetData(chart,key);
            const d9p=d9Placements[key] || d9Placements[key.toLowerCase()] || {};
            const d1Sign=val(d1,['zodiac_sign_name','sign'],'—');
            const d9Sign=val(d9p,['sign','zodiac_sign_name'],'—');
            return {key,icon,name:isKn()?kn:key,d1Sign:sign(d1Sign),d9Sign:sign(d9Sign),vargottama:d1Sign!=='—'&&d9Sign!=='—'&&String(d1Sign).toLowerCase()===String(d9Sign).toLowerCase()};
        });
        return {chart,asc,moon,ascSign:sign(ascSign),moonSign:sign(moonSign),ascNak:nak(val(asc,['nakshatra_name','nakshatra'])),moonNak:nak(val(moon,['nakshatra_name','nakshatra'])),ascDegree:val(asc,['normDegree','degree'],'—'),ascPada:val(asc,['nakshatra_pada','pada'],'—'),houses,rows,d9,d9Svg,d1d9};
    }

    function formatDegree(value){
        const n=Number(value);
        return Number.isFinite(n) ? `${n.toFixed(2)}°` : '—';
    }

    function reportHtml(data){
        const kn=isKn();
        const title=kn?'ಸಂಪೂರ್ಣ ಜನ್ಮ ಕುಂಡಲಿ ವರದಿ':'FULL KUNDLI REPORT';
        const subtitle=kn?'ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ವರದಿ':'Traditional Vedic Astrology Report';
        const core=[
            [kn?'ಲಗ್ನ':'Ascendant',data.ascSign],
            [kn?'ಜನ್ಮ ರಾಶಿ':'Moon Sign',data.moonSign],
            [kn?'ಜನ್ಮ ನಕ್ಷತ್ರ':'Moon Nakshatra',data.moonNak],
            [kn?'ಲಗ್ನ ಅಂಶ':'Ascendant Degree',formatDegree(data.ascDegree)],
            [kn?'ಲಗ್ನ ನಕ್ಷತ್ರ':'Lagna Nakshatra',data.ascNak],
            [kn?'ನಕ್ಷತ್ರ ಪಾದ':'Nakshatra Pada',data.ascPada]
        ];
        const planetRows=data.rows.map(r=>`<tr><td>${r.icon} ${escapeHtml(r.name)}</td><td>${escapeHtml(r.sign)}</td><td>${escapeHtml(formatDegree(r.degree))}</td><td>${escapeHtml(String(r.house))}</td><td>${escapeHtml(r.nakshatra)}</td><td>${escapeHtml(String(r.pada))}</td><td>${r.retro?(kn?'ವಕ್ರಿ':'Retrograde'):(kn?'ಸಾಮಾನ್ಯ':'Direct')}</td></tr>`).join('');
        const houseRows=data.houses.map(h=>`<tr><td><strong>${h.number}</strong></td><td>${escapeHtml(sign(h.sign))}</td><td>${h.planets.length?escapeHtml(h.planets.join(', ')):(kn?'ಯಾವುದೇ ಗ್ರಹ ಇಲ್ಲ':'No planets')}</td><td>${escapeHtml(kn?houseKn[h.number-1]:houseEn[h.number-1])}</td></tr>`).join('');
        const themes=kn?[
            ['✨','ಸ್ವಭಾವ ಮತ್ತು ಮನೋಭಾವ',`ಲಗ್ನ ${data.ascSign} ರಾಶಿಯಲ್ಲಿದ್ದು, ಚಂದ್ರ ${data.moonSign} ರಾಶಿಯಲ್ಲಿರುವುದು ಸ್ವಭಾವ, ಮನಸ್ಸು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆಗಳ ಕುರಿತು ಸಾಂಪ್ರದಾಯಿಕ ಥೀಮ್‌ಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ.`],
            ['💼','ವೃತ್ತಿ ಮತ್ತು ಕೆಲಸ',`10ನೇ ಭವನವು ${escapeHtml(sign(data.houses[9].sign))} ರಾಶಿಯಲ್ಲಿದೆ. 10ನೇ ಭವನದಲ್ಲಿರುವ ಗ್ರಹಗಳು: ${data.houses[9].planets.length?escapeHtml(data.houses[9].planets.join(', ')):'ಯಾವುದೇ ಗ್ರಹ ಇಲ್ಲ'}. ವೃತ್ತಿ ವಿಷಯಗಳನ್ನು ಸಂಪೂರ್ಣ ಕುಂಡಲಿಯೊಂದಿಗೆ ನೋಡಬೇಕು.`],
            ['💰','ಹಣ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು',`2ನೇ ಭವನವು ${escapeHtml(sign(data.houses[1].sign))} ರಾಶಿಯಲ್ಲಿದೆ. ಸಂಪನ್ಮೂಲ ಮತ್ತು ಹಣಕಾಸಿನ ವಿಷಯಗಳನ್ನು ಒಂದೇ ಸ್ಥಾನದಿಂದ ಖಚಿತಪಡಿಸಲಾಗುವುದಿಲ್ಲ.`],
            ['❤️','ಸಂಬಂಧಗಳು',`7ನೇ ಭವನವು ${escapeHtml(sign(data.houses[6].sign))} ರಾಶಿಯಲ್ಲಿದೆ. ಸಂಬಂಧಗಳ ಬಗ್ಗೆ ಸಮಗ್ರ ಕುಂಡಲಿ ಮತ್ತು ನೈಜ ಜೀವನದ ಸಂವಹನವನ್ನು ಪರಿಗಣಿಸುವುದು ಮುಖ್ಯ.`],
            ['📚','ಶಿಕ್ಷಣ ಮತ್ತು ಸೃಜನಶೀಲತೆ',`5ನೇ ಭವನವು ${escapeHtml(sign(data.houses[4].sign))} ರಾಶಿಯಲ್ಲಿದೆ. ಕಲಿಕೆ ಮತ್ತು ಸೃಜನಶೀಲತೆಯ ವಿಷಯಗಳನ್ನು ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಈ ಭವನದ ಮೂಲಕ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.`],
            ['🌱','ಬೆಳವಣಿಗೆ ಮತ್ತು ದಿಕ್ಕು',`9ನೇ ಭವನವು ${escapeHtml(sign(data.houses[8].sign))} ರಾಶಿಯಲ್ಲಿದೆ. ಜೀವನದ ದಿಕ್ಕಿನ ಕುರಿತು ಜ್ಯೋತಿಷ್ಯ ಥೀಮ್‌ಗಳ ಜೊತೆಗೆ ನಿಮ್ಮ ಅನುಭವ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಮಾಹಿತಿಯನ್ನೂ ಪರಿಗಣಿಸಿ.`]
        ]:[
            ['✨','Personality & Temperament',`The Ascendant is ${data.ascSign} and the Moon is ${data.moonSign}. Traditional astrology uses these placements as themes for temperament, habits and emotional responses.`],
            ['💼','Career & Work',`The 10th house falls in ${escapeHtml(sign(data.houses[9].sign))}. Planets in the 10th house: ${data.houses[9].planets.length?escapeHtml(data.houses[9].planets.join(', ')):'none'}. Career should be read from the whole chart.`],
            ['💰','Money & Resources',`The 2nd house falls in ${escapeHtml(sign(data.houses[1].sign))}. Financial themes should not be decided from one placement alone.`],
            ['❤️','Relationships',`The 7th house falls in ${escapeHtml(sign(data.houses[6].sign))}. Relationship interpretation is best considered with the whole chart and real-world communication.`],
            ['📚','Learning & Creativity',`The 5th house falls in ${escapeHtml(sign(data.houses[4].sign))}. Traditional astrology connects this area with learning, creativity and expression.`],
            ['🌱','Growth & Direction',`The 9th house falls in ${escapeHtml(sign(data.houses[8].sign))}. Use astrology as a reflection framework alongside your own experience and practical information.`]
        ];
        let svgMarkup = String(window.__astroLastChart?.kundliSvg || '').trim();
        // Keep the API SVG's native 400x400 coordinate system intact.
        // Replacing width/height with percentages without a viewBox can clip
        // South-Indian chart labels at the right/bottom edges in print/PDF.
        if (svgMarkup) svgMarkup = svgMarkup.replace(/<svg\b([^>]*)>/i,(m,a)=>{
            const clean = a
                .replace(/\sstyle\s*=\s*["\'][^"\']*["\']/gi,'')
                .replace(/\swidth\s*=\s*["\'][^"\']*["\']/gi,'')
                .replace(/\sheight\s*=\s*["\'][^"\']*["\']/gi,'');
            return `<svg${clean} width="400" height="400" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto;max-width:100%;">`;
        });
        return `<div class="report-page" id="fullKundliReport">
            <div class="report-actions no-print"><button type="button" class="report-close" id="closeKundliReport">×</button><button type="button" class="report-pdf-btn" id="downloadKundliPdf">📥 ${kn?'PDF ಆಗಿ ಉಳಿಸಿ':'Save / Download PDF'}</button></div>
            <div class="report-cover"><div class="report-kicker">✦ JATHAKA SHASTHRAM</div><h1>${title}</h1><p>${subtitle}</p><div class="report-person">${escapeHtml(getName())}</div><div class="report-place">📍 ${escapeHtml(getPlace())}</div><div class="report-date">${new Date().toLocaleDateString(kn?'kn-IN':'en-IN',{year:'numeric',month:'long',day:'numeric'})}</div>${svgMarkup?`<div class="report-chart">${svgMarkup}</div>`:''}</div>
            <section class="report-section"><div class="report-section-title"><span>✦</span><div><small>${kn?'ಮುಖ್ಯ ವಿವರಗಳು':'CORE DETAILS'}</small><h2>${kn?'ಜನ್ಮ ಕುಂಡಲಿಯ ಸಾರಾಂಶ':'Birth Chart Summary'}</h2></div></div><div class="report-core">${core.map(([a,b])=>`<div><span>${a}</span><strong>${escapeHtml(String(b))}</strong></div>`).join('')}</div></section>
            <section class="report-section d9-report-section"><div class="report-section-title"><span>✦</span><div><small>${kn?'ನವಾಂಶ':'NAVAMSA'}</small><h2>${kn?'D9 ನವಾಂಶ ಕುಂಡಲಿ':'D9 Navamsa Chart'}</h2></div></div>${data.d9Svg?`<div class="report-d9-chart">${data.d9Svg.replace(/<svg\b([^>]*)>/i,(m,a)=>`<svg${a.replace(/\s(width|height)\s*=\s*["\'][^"\']*["\']/gi,'')} width="400" height="400" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto;max-width:100%;">`)}</div>`:''}<div class="report-d9-meta"><div><span>${kn?'D9 ಲಗ್ನ':'D9 Ascendant'}</span><strong>${escapeHtml(data.d9?.reference_sign ? sign(data.d9.reference_sign) : '—')}</strong></div></div><div class="report-table-wrap"><table class="report-table"><thead><tr><th>${kn?'ಗ್ರಹ':'Planet'}</th><th>${kn?'D9 ರಾಶಿ':'D9 Sign'}</th><th>${kn?'ಅಂಶ':'Longitude'}</th><th>${kn?'ಭವನ':'House'}</th></tr></thead><tbody>${planets.map(([key,icon,knName])=>{const d=data.d9?.placements?.[key]||data.d9?.placements?.[key.toLowerCase()]||{};const sg=val(d,['sign','zodiac_sign_name'],'—');const deg=val(d,['longitude','normDegree'],'—');const hs=val(d,['house','house_number'],'—');return `<tr><td>${icon} ${escapeHtml(isKn()?knName:key)}</td><td>${escapeHtml(sign(sg))}</td><td>${escapeHtml(formatDegree(deg))}</td><td>${escapeHtml(String(hs))}</td></tr>`}).join('')}</tbody></table></div><div class="d9-note">ℹ️ ${kn?'D9 ವಿವರಣೆ ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯ ಚೌಕಟ್ಟಿನ ಆಧಾರಿತವಾಗಿದೆ; ಇದು ಖಚಿತ ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ.':'D9 interpretation is a traditional astrology framework, not a guaranteed prediction.'}</div></section>
            <section class="report-section d1d9-report-section"><div class="report-section-title"><span>✦</span><div><small>${kn?'D1 + D9':'D1 + D9'}</small><h2>${kn?'D1 + D9 ಸಂಯೋಜಿತ ಓದು':'D1 + D9 Combined Reading'}</h2></div></div><div class="report-theme-grid">${data.d1d9.filter(x=>x.vargottama).length?`<article><div>🪐</div><h3>${kn?'ವರ್ಗೋತ್ತಮ ಗ್ರಹಗಳು':'Vargottama Planets'}</h3><p>${escapeHtml(data.d1d9.filter(x=>x.vargottama).map(x=>x.name).join(', '))}</p></article>`:`<article><div>🪐</div><h3>${kn?'ವರ್ಗೋತ್ತಮ ಗ್ರಹಗಳು':'Vargottama Planets'}</h3><p>${kn?'ಒದಗಿಸಿದ D1/D9 ಡೇಟಾದಲ್ಲಿ ಒಂದೇ ರಾಶಿಯ ಗ್ರಹ ಕಂಡುಬಂದಿಲ್ಲ.':'No planet has matching D1 and D9 signs in the supplied data.'}</p></article>`}<article><div>💍</div><h3>${kn?'D9 ಸಂಬಂಧಿತ ಥೀಮ್':'D9 Relationship Theme'}</h3><p>${kn?'D9 ಅನ್ನು ಸಂಬಂಧಗಳು ಮತ್ತು ಗ್ರಹಬಲದ ಸಾಂಪ್ರದಾಯಿಕ ಅಧ್ಯಯನದಲ್ಲಿ D1 ಜೊತೆಗೆ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.':'D9 is traditionally considered alongside D1 for relationship themes and planetary strength.'}</p></article></div><div class="report-table-wrap"><table class="report-table"><thead><tr><th>${kn?'ಗ್ರಹ':'Planet'}</th><th>D1</th><th>D9</th><th>${kn?'ಹೋಲಿಕೆ':'Comparison'}</th></tr></thead><tbody>${data.d1d9.map(x=>`<tr><td>${x.icon} ${escapeHtml(x.name)}</td><td>${escapeHtml(x.d1Sign)}</td><td>${escapeHtml(x.d9Sign)}</td><td>${x.vargottama?(kn?'ವರ್ಗೋತ್ತಮ':'Vargottama'):'—'}</td></tr>`).join('')}</tbody></table></div></section>
            <section class="report-section"><div class="report-section-title"><span>🪐</span><div><small>${kn?'ಗ್ರಹಗಳ ವಿವರ':'PLANETARY POSITIONS'}</small><h2>${kn?'ನವಗ್ರಹಗಳ ಸ್ಥಾನ':'Nine Planetary Positions'}</h2></div></div><div class="report-table-wrap"><table class="report-table"><thead><tr><th>${kn?'ಗ್ರಹ':'Planet'}</th><th>${kn?'ರಾಶಿ':'Sign'}</th><th>${kn?'ಅಂಶ':'Degree'}</th><th>${kn?'ಭವನ':'House'}</th><th>${kn?'ನಕ್ಷತ್ರ':'Nakshatra'}</th><th>${kn?'ಪಾದ':'Pada'}</th><th>${kn?'ಸ್ಥಿತಿ':'Status'}</th></tr></thead><tbody>${planetRows}</tbody></table></div></section>
            <section class="report-section"><div class="report-section-title"><span>🏠</span><div><small>${kn?'ಭವನಗಳ ವಿವರ':'HOUSE POSITIONS'}</small><h2>${kn?'12 ಭವನಗಳು':'12 Bhavas / Houses'}</h2></div></div><div class="report-table-wrap"><table class="report-table"><thead><tr><th>#</th><th>${kn?'ರಾಶಿ':'Sign'}</th><th>${kn?'ಗ್ರಹಗಳು':'Planets'}</th><th>${kn?'ಅರ್ಥ':'Theme'}</th></tr></thead><tbody>${houseRows}</tbody></table></div></section>
            <section class="report-section"><div class="report-section-title"><span>✨</span><div><small>${kn?'ಸಾಂಪ್ರದಾಯಿಕ ವಿವರಣೆ':'TRADITIONAL INTERPRETATION'}</small><h2>${kn?'ವೈಯಕ್ತಿಕ ಜೀವನದ ಥೀಮ್‌ಗಳು':'Personal Life Themes'}</h2></div></div><div class="report-theme-grid">${themes.map(([i,t,x])=>`<article><div>${i}</div><h3>${t}</h3><p>${x}</p></article>`).join('')}</div></section>
            <section class="report-disclaimer"><strong>ℹ️ ${kn?'ಗಮನಿಸಿ':'Important note'}</strong><p>${kn?'ಈ ವರದಿ ಸಾಂಪ್ರದಾಯಿಕ/ಸಾಂಸ್ಕೃತಿಕ ಜ್ಯೋತಿಷ್ಯ ವಿವರಣೆಗಾಗಿ ಮಾತ್ರ. ಇದು ಖಚಿತ ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ ಮತ್ತು ವೈದ್ಯಕೀಯ, ಕಾನೂನು ಅಥವಾ ಹಣಕಾಸು ಸಲಹೆಗೆ ಬದಲಿಯಾಗುವುದಿಲ್ಲ.':'This report is for traditional/cultural astrology interpretation only. It is not a guaranteed prediction and does not replace professional medical, legal or financial advice.'}</p></section>
            <div class="report-footer">Jathaka Shasthram · Traditional Vedic Astrology Experience</div>
        </div>`;
    }

    function openReport(){
        const data=buildReportData();
        if(!data){ alert(isKn()?'ಮೊದಲು ನಿಮ್ಮ Kundli generate ಮಾಡಿ.':'Generate your Kundli first.'); return; }
        document.getElementById('fullKundliReport')?.remove();
        document.body.insertAdjacentHTML('beforeend',reportHtml(data));
        document.body.classList.add('report-open');
        document.getElementById('closeKundliReport')?.addEventListener('click',closeReport);
        document.getElementById('downloadKundliPdf')?.addEventListener('click',()=>window.print());
        document.getElementById('fullKundliReport')?.scrollTo({top:0,behavior:'instant'});
    }
    function closeReport(){ document.body.classList.remove('report-open'); document.getElementById('fullKundliReport')?.remove(); }

    document.addEventListener('click',e=>{
        const reportBtn=e.target.closest('[data-open-kundli-report]');
        if(reportBtn){ e.preventDefault(); openReport(); }
    });

    window.__astroOpenFullKundliReport=openReport;
    window.__astroCloseFullKundliReport=closeReport;

    const originalShow=window.showBirthChartResult;
    if(typeof originalShow==='function'){
        window.showBirthChartResult=originalShow;
    }

    // Inject the report button into every freshly rendered chart result.
    const observer=new MutationObserver(()=>{
        const result=document.getElementById('chartResult');
        if(!result || result.querySelector('[data-open-kundli-report]')) return;
        const note=result.querySelector('.chart-note');
        if(!note) return;
        const wrap=document.createElement('div');
        wrap.className='report-cta-wrap';
        wrap.innerHTML=`<button type="button" class="report-cta" data-open-kundli-report>📄 ${isKn()?'ಸಂಪೂರ್ಣ Kundli Report ರಚಿಸಿ':'Generate Full Kundli Report'}</button>`;
        note.insertAdjacentElement('beforebegin',wrap);
    });
    observer.observe(document.body,{childList:true,subtree:true});
})();

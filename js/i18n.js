const translations = {
  de: {
    // Menu
    title: "Radioaktivität & Kernenergie",
    subtitle: "Ein interaktives Lernspiel",
    ch1_title: "1. Atombau & Isotope",
    ch1_desc: "Baue ein Atom und lerne, was Isotope sind.",
    ch2_title: "2. Strahlung",
    ch2_desc: "Entdecke Alpha-, Beta- und Gammastrahlung.",
    ch3_title: "3. Halbwertszeit",
    ch3_desc: "Beobachte, wie Atome zerfallen.",
    ch4_title: "4. Kernspaltung",
    ch4_desc: "Steuere einen Mini-Reaktor.",
    ch5_title: "5. Anwendungen & Risiken",
    ch5_desc: "Medizin, Energie und Gefahren.",
    achievements: "Erfolge",
    points: "Punkte:",
    start: "Start",
    back_to_menu: "Zurück zum Menü",

    // UI General
    lang_de: "Deutsch",
    lang_en: "English",
    lang_uk: "Українська",
    next: "Weiter",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Falsch, versuche es noch einmal.",
    quiz_title: "Quiz",
    quiz_complete: "Quiz beendet!",

    // Chapter 1
    protons: "Protonen",
    neutrons: "Neutronen",
    electrons: "Elektronen",
    element: "Element:",
    isotope: "Isotop:",
    stable: "Stabil",
    unstable: "Instabil (Radioaktiv)",
    add: "Hinzufügen",
    remove: "Entfernen",
    ch1_instruction: "Baue ein Atom! Klicke auf die Buttons, um Protonen und Neutronen hinzuzufügen. Beobachte, wann der Kern stabil ist und wann er radioaktiv wird.",

    // Chapter 2
    ch2_instruction: "Welche Abschirmung stoppt welche Strahlung? Wähle eine Strahlenart und teste verschiedene Materialien.",
    alpha: "Alpha (α)",
    beta: "Beta (β)",
    gamma: "Gamma (γ)",
    paper: "Papier",
    aluminum: "Aluminium",
    lead: "Blei",
    alpha_desc: "Alphastrahlung ist gefährlich beim Einatmen, aber hat eine sehr kurze Reichweite. Sie wird schon durch Papier gestoppt.",
    beta_desc: "Betastrahlung reicht etwas weiter. Sie kann die Haut verbrennen. Aluminium stoppt sie.",
    gamma_desc: "Gammastrahlung ist sehr energiereich und reicht sehr weit. Nur dickes Blei oder Beton kann sie abschwächen.",

    // Chapter 3
    ch3_instruction: "Hier siehst du radioaktive Atome. Klicke auf 'Start', um die Zeit vergehen zu lassen. Die Kurve zeigt, wie viele Atome noch übrig sind.",
    start_decay: "Zerfall starten",
    reset: "Zurücksetzen",
    time: "Zeit:",
    remaining: "Übrige Atome:",
    halflife: "Halbwertszeit:",
    curve_desc: "Die Halbwertszeit ist die Zeit, in der genau die Hälfte der Atome zerfallen ist.",

    // Chapter 4
    ch4_instruction: "Bewege die Steuerstäbe in den Reaktor, um die Kettenreaktion zu kontrollieren! Ziehst du sie heraus, wird es heißer. Schiebst du sie hinein, kühlt es ab.",
    temperature: "Temperatur:",
    rods_in: "Stäbe rein (Kühlen)",
    rods_out: "Stäbe raus (Erhitzen)",
    danger_hot: "Gefahr! Zu heiß!",
    danger_cold: "Reaktion gestoppt.",
    optimal: "Optimaler Betrieb",

    // Chapter 5
    ch5_instruction: "Klicke auf die verschiedenen Bereiche, um mehr über Anwendungen und Risiken zu lernen.",
    hospital: "Krankenhaus (Röntgen)",
    npp: "Kernkraftwerk",
    waste: "Atommüll-Endlager",
    close: "Schließen",
    hospital_desc: "Strahlung hilft in der Medizin, z.B. beim Röntgen, um Knochenbrüche zu sehen, oder um Krebs zu behandeln.",
    npp_desc: "Kernkraftwerke erzeugen viel Strom ohne CO2, aber ein Unfall kann weite Gebiete radioaktiv verseuchen.",
    waste_desc: "Radioaktiver Müll strahlt noch tausende Jahre und muss extrem sicher gelagert werden."
  },
  en: {
    // Menu
    title: "Radioactivity & Nuclear Energy",
    subtitle: "An interactive learning game",
    ch1_title: "1. Atomic Structure & Isotopes",
    ch1_desc: "Build an atom and learn about isotopes.",
    ch2_title: "2. Radiation",
    ch2_desc: "Discover Alpha, Beta, and Gamma radiation.",
    ch3_title: "3. Half-life",
    ch3_desc: "Watch atoms decay over time.",
    ch4_title: "4. Nuclear Fission",
    ch4_desc: "Control a mini-reactor.",
    ch5_title: "5. Applications & Risks",
    ch5_desc: "Medicine, energy, and dangers.",
    achievements: "Achievements",
    points: "Points:",
    start: "Start",
    back_to_menu: "Back to Menu",

    // UI General
    lang_de: "Deutsch",
    lang_en: "English",
    lang_uk: "Українська",
    next: "Next",
    check: "Check",
    correct: "Correct!",
    wrong: "Wrong, try again.",
    quiz_title: "Quiz",
    quiz_complete: "Quiz completed!",

    // Chapter 1
    protons: "Protons",
    neutrons: "Neutrons",
    electrons: "Electrons",
    element: "Element:",
    isotope: "Isotope:",
    stable: "Stable",
    unstable: "Unstable (Radioactive)",
    add: "Add",
    remove: "Remove",
    ch1_instruction: "Build an atom! Click the buttons to add protons and neutrons. See when the nucleus is stable and when it becomes radioactive.",

    // Chapter 2
    ch2_instruction: "Which shield stops which radiation? Select a radiation type and test different materials.",
    alpha: "Alpha (α)",
    beta: "Beta (β)",
    gamma: "Gamma (γ)",
    paper: "Paper",
    aluminum: "Aluminum",
    lead: "Lead",
    alpha_desc: "Alpha radiation is dangerous if inhaled, but has a very short range. It is stopped by paper.",
    beta_desc: "Beta radiation goes a bit further. It can burn the skin. Aluminum stops it.",
    gamma_desc: "Gamma radiation is highly energetic and has a long range. Only thick lead or concrete can weaken it.",

    // Chapter 3
    ch3_instruction: "Here you see radioactive atoms. Click 'Start' to let time pass. The curve shows how many atoms are left.",
    start_decay: "Start Decay",
    reset: "Reset",
    time: "Time:",
    remaining: "Remaining Atoms:",
    halflife: "Half-life:",
    curve_desc: "Half-life is the time it takes for exactly half of the atoms to decay.",

    // Chapter 4
    ch4_instruction: "Move the control rods into the reactor to control the chain reaction! Pull them out to heat up, push them in to cool down.",
    temperature: "Temperature:",
    rods_in: "Rods In (Cool)",
    rods_out: "Rods Out (Heat)",
    danger_hot: "Danger! Too hot!",
    danger_cold: "Reaction stopped.",
    optimal: "Optimal Operation",

    // Chapter 5
    ch5_instruction: "Click on the different areas to learn more about applications and risks.",
    hospital: "Hospital (X-Ray)",
    npp: "Nuclear Power Plant",
    waste: "Nuclear Waste Storage",
    close: "Close",
    hospital_desc: "Radiation helps in medicine, e.g., X-rays to see broken bones or to treat cancer.",
    npp_desc: "Nuclear power plants generate electricity without CO2, but an accident can contaminate large areas.",
    waste_desc: "Radioactive waste emits radiation for thousands of years and must be stored extremely safely."
  },
  uk: {
    // Menu
    title: "Радіоактивність та ядерна енергія",
    subtitle: "Інтерактивна навчальна гра",
    ch1_title: "1. Будова атома та ізотопи",
    ch1_desc: "Побудуй атом і дізнайся, що таке ізотопи.",
    ch2_title: "2. Випромінювання",
    ch2_desc: "Відкрий альфа-, бета- та гамма-випромінювання.",
    ch3_title: "3. Період напіврозпаду",
    ch3_desc: "Спостерігай, як розпадаються атоми.",
    ch4_title: "4. Ядерне розщеплення",
    ch4_desc: "Керуй міні-реактором.",
    ch5_title: "5. Застосування та ризики",
    ch5_desc: "Медицина, енергія та небезпеки.",
    achievements: "Досягнення",
    points: "Очки:",
    start: "Почати",
    back_to_menu: "Повернутися до меню",

    // UI General
    lang_de: "Deutsch",
    lang_en: "English",
    lang_uk: "Українська",
    next: "Далі",
    check: "Перевірити",
    correct: "Правильно!",
    wrong: "Неправильно, спробуй ще раз.",
    quiz_title: "Вікторина",
    quiz_complete: "Вікторину завершено!",

    // Chapter 1
    protons: "Протони",
    neutrons: "Нейтрони",
    electrons: "Електрони",
    element: "Елемент:",
    isotope: "Ізотоп:",
    stable: "Стабільний",
    unstable: "Нестабільний (Радіоактивний)",
    add: "Додати",
    remove: "Видалити",
    ch1_instruction: "Побудуй атом! Натискай кнопки, щоб додавати протони та нейтрони. Спостерігай, коли ядро стабільне, а коли стає радіоактивним.",

    // Chapter 2
    ch2_instruction: "Який щит зупиняє яке випромінювання? Вибери тип випромінювання та перевір різні матеріали.",
    alpha: "Альфа (α)",
    beta: "Бета (β)",
    gamma: "Гамма (γ)",
    paper: "Папір",
    aluminum: "Алюміній",
    lead: "Свинець",
    alpha_desc: "Альфа-випромінювання небезпечне при вдиханні, але має дуже малу дальність. Його зупиняє папір.",
    beta_desc: "Бета-випромінювання проходить трохи далі. Може обпекти шкіру. Його зупиняє алюміній.",
    gamma_desc: "Гамма-випромінювання дуже енергійне і має велику дальність. Тільки товстий свинець або бетон можуть його послабити.",

    // Chapter 3
    ch3_instruction: "Тут ти бачиш радіоактивні атоми. Натисни 'Почати', щоб час пішов. Крива показує, скільки атомів залишилося.",
    start_decay: "Почати розпад",
    reset: "Скинути",
    time: "Час:",
    remaining: "Атомів залишилось:",
    halflife: "Період напіврозпаду:",
    curve_desc: "Період напіврозпаду - це час, за який розпадається рівно половина атомів.",

    // Chapter 4
    ch4_instruction: "Рухай регулюючі стрижні в реакторі, щоб керувати ланцюговою реакцією! Витягни їх, щоб нагріти, встав, щоб охолодити.",
    temperature: "Температура:",
    rods_in: "Вставити стрижні (Охолодити)",
    rods_out: "Витягти стрижні (Нагріти)",
    danger_hot: "Небезпека! Надто гаряче!",
    danger_cold: "Реакцію зупинено.",
    optimal: "Оптимальна робота",

    // Chapter 5
    ch5_instruction: "Натискай на різні зони, щоб дізнатися більше про застосування та ризики.",
    hospital: "Лікарня (Рентген)",
    npp: "Атомна електростанція",
    waste: "Сховище ядерних відходів",
    close: "Закрити",
    hospital_desc: "Випромінювання допомагає в медицині, наприклад, рентген, щоб побачити переломи або лікувати рак.",
    npp_desc: "АЕС виробляють електроенергію без CO2, але аварія може забруднити великі території.",
    waste_desc: "Радіоактивні відходи випромінюють тисячі років і повинні зберігатися дуже надійно."
  }
};

let currentLang = localStorage.getItem('app_lang') || 'de';

function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('app_lang', lang);
    updateTexts();
  }
}

function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key]; // Using innerHTML to allow simple formatting like (α)
    }
  });
}

function t(key) {
    return translations[currentLang][key] || key;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', updateTexts);

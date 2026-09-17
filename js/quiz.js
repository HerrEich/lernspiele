// A simple quiz engine
const quizzes = {
    ch1: [
        {
            q: {
                de: "Was bestimmt das Element eines Atoms?",
                en: "What determines the element of an atom?",
                uk: "Що визначає елемент атома?"
            },
            options: {
                de: ["Anzahl der Protonen", "Anzahl der Neutronen", "Anzahl der Elektronen"],
                en: ["Number of protons", "Number of neutrons", "Number of electrons"],
                uk: ["Кількість протонів", "Кількість нейтронів", "Кількість електронів"]
            },
            correct: 0
        },
        {
            q: {
                de: "Isotope eines Elements haben eine unterschiedliche Anzahl von...",
                en: "Isotopes of an element have a different number of...",
                uk: "Ізотопи елемента мають різну кількість..."
            },
            options: {
                de: ["Protonen", "Neutronen", "Elektronen"],
                en: ["Protons", "Neutrons", "Electrons"],
                uk: ["Протонів", "Нейтронів", "Електронів"]
            },
            correct: 1
        }
    ],
    ch2: [
        {
            q: {
                de: "Welche Strahlung wird bereits durch ein Blatt Papier gestoppt?",
                en: "Which radiation is stopped by a sheet of paper?",
                uk: "Яке випромінювання зупиняється аркушем паперу?"
            },
            options: {
                de: ["Alpha-Strahlung", "Beta-Strahlung", "Gamma-Strahlung"],
                en: ["Alpha radiation", "Beta radiation", "Gamma radiation"],
                uk: ["Альфа-випромінювання", "Бета-випромінювання", "Гамма-випромінювання"]
            },
            correct: 0
        },
        {
            q: {
                de: "Welches Material braucht man, um Gamma-Strahlung abzuschwächen?",
                en: "Which material is needed to attenuate gamma radiation?",
                uk: "Який матеріал потрібен для послаблення гамма-випромінювання?"
            },
            options: {
                de: ["Papier", "Aluminium", "Blei"],
                en: ["Paper", "Aluminum", "Lead"],
                uk: ["Папір", "Алюміній", "Свинець"]
            },
            correct: 2
        }
    ],
    ch3: [
        {
            q: {
                de: "Was besagt die Halbwertszeit?",
                en: "What does the half-life mean?",
                uk: "Що означає період напіврозпаду?"
            },
            options: {
                de: ["Die Zeit, bis das Atom komplett verschwindet.", "Die Zeit, in der die Hälfte der Atome zerfallen ist.", "Die Zeit, bis es aufhört zu strahlen."],
                en: ["The time until the atom completely disappears.", "The time in which half of the atoms have decayed.", "The time until it stops radiating."],
                uk: ["Час, поки атом повністю не зникне.", "Час, за який розпадається половина атомів.", "Час, поки воно не перестане випромінювати."]
            },
            correct: 1
        }
    ],
    ch4: [
        {
            q: {
                de: "Was passiert, wenn man die Steuerstäbe in den Reaktor einfährt?",
                en: "What happens when you insert the control rods into the reactor?",
                uk: "Що відбувається, коли ви вставляєте регулюючі стрижні в реактор?"
            },
            options: {
                de: ["Die Temperatur steigt.", "Die Temperatur sinkt.", "Nichts passiert."],
                en: ["The temperature rises.", "The temperature drops.", "Nothing happens."],
                uk: ["Температура підвищується.", "Температура знижується.", "Нічого не відбувається."]
            },
            correct: 1
        }
    ],
    ch5: [
        {
            q: {
                de: "Wofür wird Strahlung in der Medizin genutzt?",
                en: "What is radiation used for in medicine?",
                uk: "Для чого використовується випромінювання в медицині?"
            },
            options: {
                de: ["Nur zum Röntgen von Knochenbrüchen.", "Zum Röntgen und zur Krebstherapie.", "Um das Blut zu reinigen."],
                en: ["Only for X-raying broken bones.", "For X-rays and cancer therapy.", "To clean the blood."],
                uk: ["Тільки для рентгену переломів кісток.", "Для рентгену та терапії раку.", "Для очищення крові."]
            },
            correct: 1
        }
    ]
};

let currentQuizId = null;
let currentQuestionIndex = 0;

function startQuiz(quizId) {
    currentQuizId = quizId;
    currentQuestionIndex = 0;

    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    quizContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const quizData = quizzes[currentQuizId];
    if (currentQuestionIndex >= quizData.length) {
        endQuiz();
        return;
    }

    const qInfo = quizData[currentQuestionIndex];

    let html = `<h3>${t('quiz_title')} - ${currentQuestionIndex + 1}/${quizData.length}</h3>`;
    html += `<p>${qInfo.q[currentLang]}</p>`;

    qInfo.options[currentLang].forEach((opt, idx) => {
        html += `<button class="btn quiz-opt" onclick="checkAnswer(${idx})">${opt}</button><br><br>`;
    });

    document.getElementById('quiz-content').innerHTML = html;
}

function checkAnswer(selectedIndex) {
    const qInfo = quizzes[currentQuizId][currentQuestionIndex];
    if (selectedIndex === qInfo.correct) {
        alert(t('correct'));
        addPoints(10);
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert(t('wrong'));
    }
}

function endQuiz() {
    document.getElementById('quiz-content').innerHTML = `<h3>${t('quiz_complete')}</h3>`;
    setTimeout(() => {
        document.getElementById('quiz-container').style.display = 'none';
        markChapterComplete(currentQuizId);
        unlockAchievement(currentQuizId + '_done');
    }, 2000);
}

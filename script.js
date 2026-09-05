const translations = {
    kk: {
        title: "Арманыңа жол аш!",
        desc: "Ауыл балаларына арналған НЗМ-ге тегін дайындық платформасы.",
        btn: "Дайындықты бастау",
        matTitle: "Оқу материалдары",
        math: "Логика мен сандар әлеміне саяхат.",
        lang: "Қазақ, орыс және ағылшын тілдері.",
        test: "Біліміңді тексер және нәтижеңді көр."
    },
    ru: {
        title: "Открой путь к мечте!",
        desc: "Бесплатная платформа подготовки в НИШ для сельских детей.",
        btn: "Начать подготовку",
        matTitle: "Учебные материалы",
        math: "Путешествие в мир логики и чисел.",
        lang: "Казахский, русский и английский языки.",
        test: "Проверь свои знания и увидишь результат."
    }
};

function changeLang(lang) {
    document.getElementById('hero-title').innerText = translations[lang].title;
    document.getElementById('hero-desc').innerText = translations[lang].desc;
    document.getElementById('hero-btn').innerText = translations[lang].btn;
    document.getElementById('mat-title').innerText = translations[lang].matTitle;
    document.getElementById('mat-math').innerText = translations[lang].math;
    document.getElementById('mat-lang').innerText = translations[lang].lang;
    document.getElementById('mat-test').innerText = translations[lang].test;

    // Переключение активной кнопки
    document.getElementById('btn-kk').classList.toggle('active', lang === 'kk');
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
}
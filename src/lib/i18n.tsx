import { createContext, useContext, useEffect, type ReactNode } from "react";

import { useParams } from "@tanstack/react-router";
import { LANGS, isLang, type Lang } from "./locale";

export { LANGS, type Lang };

export const PHONE = "+998900991155";
export const PHONE_LABEL = "90 099 11 55";
export const TELEGRAM = "https://t.me/Khushnud_Rustamovich_IELTS";
export const TELEGRAM_HANDLE = "@Khushnud_Rustamovich_IELTS";

const en = {
  nav: { home: "Home", courses: "Courses", rewards: "Rewards", method: "Method", teacher: "Mentor", contact: "Contact" },
  cta: { enroll: "Enroll now", call: "Call us", telegram: "Telegram", explore: "Explore courses", rewards: "See the rewards" },
  slogan: "Your result is my reputation",
  since: "Since 2016",
  hero: {
    eyebrow: "Premium English Academy",
    title1: "Where ambition",
    title2: "meets its score.",
    sub: "Expert mentors. Real exam simulations. Results that arrive faster than you expect.",
  },
  stats: [
    { v: 70, s: "%", l: "of graduates earn a cash reward" },
    { v: 8, s: ".0", l: "the highest band we reward" },
    { v: 300, s: "$", l: "for a perfect IELTS 9", pre: true },
    { v: 2016, s: "", l: "building reputations since" },
  ],
  why: {
    eyebrow: "Why Imperia",
    title: "Built for those who refuse average.",
    items: [
      { t: "Real exam, every week", d: "Computer-based mock tests cloned from real IELTS papers. Exam day feels like practice." },
      { t: "Lessons that ignite", d: "Interactive, energetic, never dull. Students stay curious — and improve faster." },
      { t: "Expert mentors", d: "Seasoned, high-scoring professionals who know exactly what examiners want." },
      { t: "Uzbek or Russian", d: "Learn in the language you think in. Clarity first, fluency follows." },
      { t: "Premium campus", d: "A fully equipped, modern space designed for focus and performance." },
      { t: "Paid for results", d: "Score high — and we pay you. That's how sure we are." },
    ],
  },
  courses: {
    eyebrow: "Programs",
    title: "One goal. Six paths to it.",
    sub: "Choose the program that fits your ambition. Every path ends in confidence.",
    items: [
      { t: "IELTS", tag: "Core", d: "Complete preparation across all four skills, with weekly computer-based mocks." },
      { t: "Individual IELTS", tag: "1-on-1", d: "A private mentor, a personal plan, and the fastest route to your target band." },
      { t: "IELTS 8+", tag: "Elite", d: "For the ambitious. Advanced strategy and precision to break through Band 8." },
      { t: "Kids English", tag: "Age 8+", d: "Children speak English as naturally as their own language — joyfully, without struggle." },
      { t: "SAT", tag: "Admissions", d: "Focused preparation for top university admissions, built on real test formats." },
      { t: "Grammar", tag: "Foundation", d: "Rock-solid grammar, trained in IELTS-format computer tests until it's automatic." },
    ],
  },
  rewards: {
    eyebrow: "The Imperia Reward",
    title: "Earn your score. Then earn your prize.",
    sub: "Not a game — a rule. Prepare with us under contract, get certified, and receive a cash reward.",
    tiers: [
      { b: "7.5", p: 50 },
      { b: "8.0", p: 100 },
      { b: "8.5", p: 150 },
      { b: "9.0", p: 300 },
    ],
    band: "IELTS band",
    proof: "of students who complete the full course bring home a cash reward.",
    proofPre: "At least",
    note: "Rewards apply to students who prepare under contract and receive an official certificate.",
  },
  method: {
    eyebrow: "The Method",
    title: "Practice like it's real. Perform like it's easy.",
    steps: [
      { t: "Diagnose", d: "We measure your exact level and set a clear target band." },
      { t: "Ignite", d: "Interactive lessons that make English click — and stick." },
      { t: "Simulate", d: "Real IELTS-format mocks on computers, exactly like exam day." },
      { t: "Triumph", d: "You walk in calm, prepared, and walk out with your score." },
    ],
    computerTitle: "The exam room — before the exam.",
    computerText: "Our computer lab runs cloned versions of real IELTS tests, plus grammar drills in the same format. By exam day, nothing is new.",
    langTitle: "Taught in Uzbek or Russian",
    langText: "Complex ideas, explained simply — in the language you understand best.",
  },
  teacher: {
    eyebrow: "The Mentor",
    title: "Khushnud Rustamovich",
    role: "Founder & Head Teacher",
    quote: "Your result is my reputation. I don't teach English — I build results.",
    bio: "Since 2016, Khushnud Rustamovich has guided hundreds of students to life-changing scores. His team of expert teachers shares one standard: excellence, every lesson.",
    points: ["Since 2016", "Hundreds of certified students", "Expert team of mentors", "Results guaranteed by contract"],
  },
  contact: {
    eyebrow: "Contact",
    title: "Your score starts with one message.",
    sub: "Call or write to us. We'll find the right program and your first step today.",
    name: "Your name",
    phone: "Phone number",
    course: "Course",
    send: "Send via Telegram",
    phoneLabel: "Phone",
    tgLabel: "Telegram channel",
  },
  final: { title: "Ready to rise?", sub: "Seats are limited. Ambition isn't." },
  footer: { rights: "All rights reserved." },
};

type Dict = typeof en;

const ru: Dict = {
  nav: { home: "Главная", courses: "Курсы", rewards: "Награды", method: "Метод", teacher: "Ментор", contact: "Контакты" },
  cta: { enroll: "Записаться", call: "Позвонить", telegram: "Telegram", explore: "Смотреть курсы", rewards: "Узнать о наградах" },
  slogan: "Your result is my reputation",
  since: "С 2016 года",
  hero: {
    eyebrow: "Премиальная академия английского",
    title1: "Здесь амбиции",
    title2: "становятся баллами.",
    sub: "Эксперты-преподаватели. Реальные симуляции экзамена. Результат приходит быстрее, чем вы ждёте.",
  },
  stats: [
    { v: 70, s: "%", l: "выпускников получают денежную награду" },
    { v: 8, s: ".0", l: "высший балл, который мы награждаем" },
    { v: 300, s: "$", l: "за идеальный IELTS 9", pre: true },
    { v: 2016, s: "", l: "строим репутацию с" },
  ],
  why: {
    eyebrow: "Почему Imperia",
    title: "Для тех, кто не согласен на среднее.",
    items: [
      { t: "Реальный экзамен каждую неделю", d: "Компьютерные mock-тесты — копии настоящих IELTS. Экзамен ощущается как тренировка." },
      { t: "Уроки, которые зажигают", d: "Интерактивно, энергично, никогда не скучно. Интерес — и быстрый рост." },
      { t: "Эксперты-менторы", d: "Опытные профессионалы с высокими баллами, знающие, чего ждёт экзаменатор." },
      { t: "На узбекском или русском", d: "Учитесь на языке, на котором думаете. Сначала ясность — потом свобода." },
      { t: "Премиальный центр", d: "Полностью оснащённое современное пространство для фокуса и результата." },
      { t: "Платим за результат", d: "Высокий балл — и мы платим вам. Настолько мы уверены." },
    ],
  },
  courses: {
    eyebrow: "Программы",
    title: "Одна цель. Шесть путей к ней.",
    sub: "Выберите программу под свою амбицию. Каждый путь ведёт к уверенности.",
    items: [
      { t: "IELTS", tag: "Основа", d: "Полная подготовка по всем четырём навыкам с еженедельными компьютерными mock-тестами." },
      { t: "Индивидуальный IELTS", tag: "1-на-1", d: "Личный ментор, персональный план и самый быстрый путь к целевому баллу." },
      { t: "IELTS 8+", tag: "Элита", d: "Для амбициозных. Продвинутая стратегия и точность, чтобы пробить Band 8." },
      { t: "Kids English", tag: "От 8 лет", d: "Дети говорят по-английски так же легко, как на родном языке — с радостью." },
      { t: "SAT", tag: "Поступление", d: "Целевая подготовка к топ-университетам на реальных форматах теста." },
      { t: "Грамматика", tag: "Фундамент", d: "Железная грамматика, отточенная в компьютерных тестах формата IELTS." },
    ],
  },
  rewards: {
    eyebrow: "Награда Imperia",
    title: "Заработайте балл. Затем — награду.",
    sub: "Это не игра — это правило. Готовьтесь у нас по договору, получите сертификат и денежную премию.",
    tiers: [
      { b: "7.5", p: 50 },
      { b: "8.0", p: 100 },
      { b: "8.5", p: 150 },
      { b: "9.0", p: 300 },
    ],
    band: "Балл IELTS",
    proof: "студентов, завершивших полный курс, получают денежную награду.",
    proofPre: "Не менее",
    note: "Награда действует для студентов, обучающихся по договору и получивших официальный сертификат.",
  },
  method: {
    eyebrow: "Метод",
    title: "Тренируйтесь как на экзамене. Сдавайте как на тренировке.",
    steps: [
      { t: "Диагностика", d: "Определяем точный уровень и ставим чёткую цель." },
      { t: "Вдохновение", d: "Интерактивные уроки, после которых английский становится понятным." },
      { t: "Симуляция", d: "Реальные mock-тесты IELTS на компьютерах — как в день экзамена." },
      { t: "Триумф", d: "Вы входите спокойным и выходите со своим баллом." },
    ],
    computerTitle: "Экзаменационный зал — ещё до экзамена.",
    computerText: "В нашем компьютерном классе — копии настоящих тестов IELTS и грамматические тесты в том же формате. В день экзамена ничего нового.",
    langTitle: "Обучение на узбекском или русском",
    langText: "Сложное — просто, на языке, который вы понимаете лучше всего.",
  },
  teacher: {
    eyebrow: "Ментор",
    title: "Хушнуд Рустамович",
    role: "Основатель и главный преподаватель",
    quote: "Ваш результат — моя репутация. Я не учу английскому — я создаю результат.",
    bio: "С 2016 года Хушнуд Рустамович привёл сотни студентов к баллам, меняющим жизнь. Его команда экспертов живёт одним стандартом: совершенство на каждом уроке.",
    points: ["С 2016 года", "Сотни сертифицированных студентов", "Команда экспертов", "Результат закреплён договором"],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Ваш балл начинается с одного сообщения.",
    sub: "Позвоните или напишите. Подберём программу и первый шаг уже сегодня.",
    name: "Ваше имя",
    phone: "Номер телефона",
    course: "Курс",
    send: "Отправить в Telegram",
    phoneLabel: "Телефон",
    tgLabel: "Telegram-канал",
  },
  final: { title: "Готовы взлететь?", sub: "Мест мало. Амбиций — нет предела." },
  footer: { rights: "Все права защищены." },
};

const uz: Dict = {
  nav: { home: "Bosh sahifa", courses: "Kurslar", rewards: "Mukofotlar", method: "Metodika", teacher: "Ustoz", contact: "Aloqa" },
  cta: { enroll: "Ro'yxatdan o'tish", call: "Qo'ng'iroq", telegram: "Telegram", explore: "Kurslarni ko'rish", rewards: "Mukofotlarni ko'rish" },
  slogan: "Your result is my reputation",
  since: "2016-yildan beri",
  hero: {
    eyebrow: "Premium ingliz tili akademiyasi",
    title1: "Orzular bu yerda",
    title2: "natijaga aylanadi.",
    sub: "Ekspert ustozlar. Haqiqiy imtihon simulyatsiyasi. Natija siz kutgandan ham tezroq keladi.",
  },
  stats: [
    { v: 70, s: "%", l: "bitiruvchilar pul mukofoti oladi" },
    { v: 8, s: ".0", l: "biz mukofotlaydigan eng yuqori ball" },
    { v: 300, s: "$", l: "mukammal IELTS 9 uchun", pre: true },
    { v: 2016, s: "", l: "yildan beri obro' yaratamiz" },
  ],
  why: {
    eyebrow: "Nega Imperia",
    title: "O'rtachaga rozi bo'lmaganlar uchun.",
    items: [
      { t: "Har hafta haqiqiy imtihon", d: "Haqiqiy IELTS testlaridan nusxa olingan kompyuter mock testlari. Imtihon kuni — oddiy mashg'ulotdek." },
      { t: "Ilhom beruvchi darslar", d: "Interaktiv, jo'shqin, hech qachon zerikarli emas. Qiziqish — tez o'sish." },
      { t: "Ekspert ustozlar", d: "Imtihonchi nimani kutishini aniq biladigan, yuqori ballli professionallar." },
      { t: "O'zbek yoki rus tilida", d: "O'zingiz o'ylaydigan tilda o'rganing. Avval tushunish — keyin erkinlik." },
      { t: "Premium o'quv markaz", d: "Diqqat va natija uchun to'liq jihozlangan zamonaviy makon." },
      { t: "Natija uchun mukofot", d: "Yuqori ball oling — biz sizga pul to'laymiz. Shunchalik ishonamiz." },
    ],
  },
  courses: {
    eyebrow: "Dasturlar",
    title: "Bitta maqsad. Unga olti yo'l.",
    sub: "Orzuingizga mos dasturni tanlang. Har bir yo'l ishonch bilan tugaydi.",
    items: [
      { t: "IELTS", tag: "Asosiy", d: "To'rtta ko'nikma bo'yicha to'liq tayyorgarlik va haftalik kompyuter mock testlari." },
      { t: "Individual IELTS", tag: "1-ga-1", d: "Shaxsiy ustoz, shaxsiy reja va maqsadli ballga eng tez yo'l." },
      { t: "IELTS 8+", tag: "Elita", d: "Katta maqsadlilar uchun. 8 balldan oshish uchun ilg'or strategiya." },
      { t: "Kids English", tag: "8 yoshdan", d: "Bolalar ingliz tilida o'z ona tilidagidek erkin va quvonch bilan gapiradi." },
      { t: "SAT", tag: "Qabul", d: "Nufuzli universitetlarga qabul uchun haqiqiy test formatida tayyorgarlik." },
      { t: "Grammatika", tag: "Poydevor", d: "IELTS formatidagi kompyuter testlarida mustahkamlangan grammatika." },
    ],
  },
  rewards: {
    eyebrow: "Imperia mukofoti",
    title: "Ballingizni oling. Keyin mukofotingizni.",
    sub: "Bu o'yin emas — qoida. Shartnoma asosida tayyorlaning, sertifikat oling va pul mukofotiga ega bo'ling.",
    tiers: [
      { b: "7.5", p: 50 },
      { b: "8.0", p: 100 },
      { b: "8.5", p: 150 },
      { b: "9.0", p: 300 },
    ],
    band: "IELTS bali",
    proof: "kursni to'liq tugatgan o'quvchilar pul mukofotini olib ketmoqda.",
    proofPre: "Kamida",
    note: "Mukofot shartnoma asosida tayyorlangan va rasmiy sertifikat olgan o'quvchilarga beriladi.",
  },
  method: {
    eyebrow: "Metodika",
    title: "Haqiqiydek mashq qiling. Osondek topshiring.",
    steps: [
      { t: "Tashxis", d: "Aniq darajangizni o'lchaymiz va aniq maqsad qo'yamiz." },
      { t: "Ilhom", d: "Ingliz tilini tushunarli va esda qoladigan qiluvchi interaktiv darslar." },
      { t: "Simulyatsiya", d: "Kompyuterlarda haqiqiy IELTS formatidagi mock testlar." },
      { t: "G'alaba", d: "Imtihonga xotirjam kirasiz — natija bilan chiqasiz." },
    ],
    computerTitle: "Imtihon xonasi — imtihondan oldin.",
    computerText: "Kompyuter xonamizda haqiqiy IELTS testlarining nusxalari va xuddi shu formatdagi grammatika testlari. Imtihon kuni hech narsa yangi emas.",
    langTitle: "O'zbek yoki rus tilida",
    langText: "Murakkab narsalar — sodda, o'zingiz eng yaxshi tushunadigan tilda.",
  },
  teacher: {
    eyebrow: "Ustoz",
    title: "Khushnud Rustamovich",
    role: "Asoschi va bosh ustoz",
    quote: "Sizning natijangiz — mening obro'yim. Men ingliz tilini o'rgatmayman — natija yarataman.",
    bio: "2016-yildan beri Khushnud Rustamovich yuzlab o'quvchilarni hayotini o'zgartiruvchi natijalarga olib chiqdi. Uning ekspert jamoasi bitta standart bilan yashaydi: har darsda mukammallik.",
    points: ["2016-yildan beri", "Yuzlab sertifikatli o'quvchilar", "Ekspert ustozlar jamoasi", "Natija shartnoma bilan kafolatlangan"],
  },
  contact: {
    eyebrow: "Aloqa",
    title: "Ballingiz bitta xabardan boshlanadi.",
    sub: "Qo'ng'iroq qiling yoki yozing. Bugunoq mos dastur va birinchi qadamni topamiz.",
    name: "Ismingiz",
    phone: "Telefon raqam",
    course: "Kurs",
    send: "Telegram orqali yuborish",
    phoneLabel: "Telefon",
    tgLabel: "Telegram kanal",
  },
  final: { title: "Yuksalishga tayyormisiz?", sub: "O'rinlar cheklangan. Orzular esa yo'q." },
  footer: { rights: "Barcha huquqlar himoyalangan." },
};

export const DICTS: Record<Lang, Dict> = { en, ru, uz };

const Ctx = createContext<{ lang: Lang; t: Dict }>({ lang: "en", t: en });

export function useLang(): Lang {
  const { locale } = useParams({ strict: false }) as { locale?: string };
  return isLang(locale) ? locale : "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useLang();
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <Ctx.Provider value={{ lang, t: DICTS[lang] }}>{children}</Ctx.Provider>;
}

export const useT = () => useContext(Ctx);

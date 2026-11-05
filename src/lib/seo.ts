import { ADDRESS, GEO, LANGS, MAPS_URL, pathFor, type Lang } from "./locale";

export const SITE_URL = "https://ieltsimperia.uz";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export type PageKey = "home" | "courses" | "rewards" | "method" | "mentor" | "contact";

export const PAGE_PATH: Record<PageKey, string> = {
  home: "/",
  courses: "/courses",
  rewards: "/rewards",
  method: "/method",
  mentor: "/mentor",
  contact: "/contact",
};

const OG_LOCALE: Record<Lang, string> = { en: "en_US", ru: "ru_RU", uz: "uz_UZ" };

type PageMeta = { title: string; description: string; crumb: string };

const PAGES: Record<Lang, Record<PageKey, PageMeta>> = {
  en: {
    home: {
      title: "IELTS Imperia — IELTS & English Courses in Urgench",
      description:
        "Premium IELTS and English academy in Urgench, Uzbekistan, led by Khushnud Rustamovich since 2016. Real computer mock tests, IELTS 8+ prep and cash rewards up to $300.",
      crumb: "Home",
    },
    courses: {
      title: "IELTS & Kids English Courses in Urgench | IELTS Imperia",
      description:
        "IELTS, Individual IELTS, IELTS 8+, Kids English (from 8 years) and Grammar courses in Urgench. Lessons in Uzbek or Russian with real computer-based mock tests.",
      crumb: "Courses",
    },
    rewards: {
      title: "IELTS Cash Rewards up to $300 | IELTS Imperia Urgench",
      description:
        "Score IELTS 7.5 to 9.0 and earn $50 to $300 by contract. At least 70% of IELTS Imperia graduates in Urgench bring home a cash reward.",
      crumb: "Cash Rewards",
    },
    method: {
      title: "Our Method — Computer IELTS Mock Tests | IELTS Imperia",
      description:
        "Interactive lessons, real computer-based IELTS mock tests and IELTS-format grammar drills at IELTS Imperia, taught in Uzbek or Russian.",
      crumb: "Our Method",
    },
    mentor: {
      title: "Khushnud Rustamovich — Head IELTS Teacher | IELTS Imperia",
      description:
        "Meet Khushnud Rustamovich, founder and head IELTS teacher of IELTS Imperia in Urgench, teaching since 2016. Your result is my reputation.",
      crumb: "Khushnud Rustamovich",
    },
    contact: {
      title: "Contact & Enroll — IELTS Imperia Urgench",
      description:
        "Call +998 90 099 11 55 or write on Telegram @Khushnud_Rustamovich_IELTS to enroll. Find IELTS Imperia learning center on the map in Urgench.",
      crumb: "Contact",
    },
  },
  ru: {
    home: {
      title: "IELTS Imperia — курсы IELTS и английского в Ургенче",
      description:
        "Премиальная академия IELTS и английского в Ургенче, Узбекистан. Хушнуд Рустамович с 2016 года. Компьютерные пробные тесты, подготовка к IELTS 8+ и денежные призы до $300.",
      crumb: "Главная",
    },
    courses: {
      title: "Курсы IELTS и английского для детей в Ургенче | IELTS Imperia",
      description:
        "IELTS, индивидуальный IELTS, IELTS 8+, английский для детей (с 8 лет) и грамматика в Ургенче. Занятия на узбекском или русском с реальными компьютерными тестами.",
      crumb: "Курсы",
    },
    rewards: {
      title: "Денежные призы за IELTS до $300 | IELTS Imperia Ургенч",
      description:
        "Получите IELTS 7.5–9.0 и заработайте от $50 до $300 по договору. Не менее 70% выпускников IELTS Imperia в Ургенче получают денежный приз.",
      crumb: "Призы",
    },
    method: {
      title: "Наш метод — компьютерные тесты IELTS | IELTS Imperia",
      description:
        "Интерактивные уроки, реальные компьютерные пробные тесты IELTS и грамматические тесты в формате IELTS. Занятия на узбекском или русском.",
      crumb: "Метод",
    },
    mentor: {
      title: "Хушнуд Рустамович — преподаватель IELTS | IELTS Imperia",
      description:
        "Хушнуд Рустамович — основатель и главный преподаватель IELTS Imperia в Ургенче, преподаёт с 2016 года. Ваш результат — моя репутация.",
      crumb: "Хушнуд Рустамович",
    },
    contact: {
      title: "Контакты и запись — IELTS Imperia Ургенч",
      description:
        "Позвоните +998 90 099 11 55 или напишите в Telegram @Khushnud_Rustamovich_IELTS. Учебный центр IELTS Imperia на карте Ургенча.",
      crumb: "Контакты",
    },
  },
  uz: {
    home: {
      title: "IELTS Imperia — Urganchda IELTS va ingliz tili kurslari",
      description:
        "Urganchdagi premium IELTS va ingliz tili o'quv markazi. Xushnud Rustamovich 2016-yildan beri o'qitadi. Kompyuterda real mock testlar, IELTS 8+ tayyorgarlik va $300 gacha pul mukofoti.",
      crumb: "Bosh sahifa",
    },
    courses: {
      title: "Urganchda IELTS va bolalar uchun ingliz tili kurslari | IELTS Imperia",
      description:
        "Urganchda IELTS, individual IELTS, IELTS 8+, bolalar uchun ingliz tili (8 yoshdan) va grammatika kurslari. Darslar o'zbek yoki rus tilida, kompyuterda real testlar bilan.",
      crumb: "Kurslar",
    },
    rewards: {
      title: "IELTS uchun $300 gacha pul mukofoti | IELTS Imperia Urganch",
      description:
        "IELTS 7.5 dan 9.0 gacha natija oling va shartnoma asosida $50 dan $300 gacha mukofot yutib oling. IELTS Imperia bitiruvchilarining kamida 70% mukofot olmoqda.",
      crumb: "Mukofotlar",
    },
    method: {
      title: "Metodikamiz — kompyuterda IELTS mock testlar | IELTS Imperia",
      description:
        "Interaktiv darslar, kompyuterda real IELTS mock testlar va IELTS formatidagi grammatika testlari. Darslar o'zbek yoki rus tilida o'tiladi.",
      crumb: "Metodika",
    },
    mentor: {
      title: "Xushnud Rustamovich — IELTS ustozi | IELTS Imperia",
      description:
        "Xushnud Rustamovich — Urganchdagi IELTS Imperia asoschisi va bosh ustozi, 2016-yildan beri dars beradi. Sizning natijangiz — mening obro'im.",
      crumb: "Xushnud Rustamovich",
    },
    contact: {
      title: "Aloqa va yozilish — IELTS Imperia Urganch",
      description:
        "+998 90 099 11 55 raqamiga qo'ng'iroq qiling yoki Telegramda @Khushnud_Rustamovich_IELTS ga yozing. IELTS Imperia o'quv markazi Urganch xaritasida.",
      crumb: "Aloqa",
    },
  },
};

type JsonLd = Record<string, unknown>;

const abs = (lang: Lang, path: string) => `${SITE_URL}${pathFor(lang, path)}`.replace(/(.)\/$/, "$1");

const breadcrumbJsonLd = (lang: Lang, key: PageKey): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "IELTS Imperia", item: abs(lang, "/") },
    { "@type": "ListItem", position: 2, name: PAGES[lang][key].crumb, item: abs(lang, PAGE_PATH[key]) },
  ],
});

const ldScript = (data: JsonLd) => ({ type: "application/ld+json", children: JSON.stringify(data) });

export const pageSeo = (key: PageKey, lang: Lang = "en", extraJsonLd: JsonLd[] = []) => {
  const { title, description } = PAGES[lang][key];
  const path = PAGE_PATH[key];
  const url = abs(lang, path);
  const graph = [...(key !== "home" ? [breadcrumbJsonLd(lang, key)] : []), ...extraJsonLd];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "IELTS Imperia" },
      { property: "og:locale", content: OG_LOCALE[lang] },
      ...LANGS.filter((l) => l !== lang).map((l) => ({ property: "og:locale:alternate", content: OG_LOCALE[l] })),
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "IELTS Imperia — Your result is my reputation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: url },
      ...LANGS.map((l) => ({ rel: "alternate", hreflang: l, href: abs(l, path) })),
      { rel: "alternate", hreflang: "x-default", href: abs("en", path) },
    ],
    scripts: graph.map(ldScript),
  };
};

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${SITE_URL}/#org`,
  name: "IELTS Imperia",
  alternateName: ["IELTS Imperia learning center", "IELTS Imperia Urgench"],
  slogan: "Your result is my reputation",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: OG_IMAGE,
  foundingDate: "2016",
  founder: { "@id": `${SITE_URL}/#founder` },
  telephone: "+998900991155",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Urgench",
    addressRegion: "Xorazm Region",
    addressCountry: "UZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
  hasMap: MAPS_URL,
  areaServed: [
    { "@type": "City", name: "Urgench" },
    { "@type": "AdministrativeArea", name: "Xorazm Region" },
    { "@type": "Country", name: "Uzbekistan" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+998900991155",
    contactType: "customer service",
    areaServed: "UZ",
    availableLanguage: ["Uzbek", "Russian", "English"],
  },
  availableLanguage: ["English", "Russian", "Uzbek"],
  sameAs: ["https://t.me/Khushnud_Rustamovich_IELTS"],
  description: `Premium IELTS and English academy in ${ADDRESS.en} led by Khushnud Rustamovich since 2016. Real computer-based IELTS mock tests, IELTS 8+ preparation, and cash rewards for high band scores.`,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "IELTS Imperia",
  inLanguage: ["en", "ru", "uz"],
  publisher: { "@id": `${SITE_URL}/#org` },
};

export const coursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IELTS Imperia courses",
  itemListElement: [
    ["IELTS", "Computer-based IELTS preparation with real mock tests."],
    ["Individual IELTS", "One-to-one IELTS preparation with a personal plan."],
    ["IELTS 8+ Preparation", "High-band preparation for students targeting IELTS 8.0 and above."],
    ["Kids English (8+ years)", "Interactive English lessons for children from 8 years old."],
    ["English Grammar", "Grammar courses with computer-based IELTS-format tests."],
  ].map(([name, description], i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name,
      description,
      provider: { "@type": "EducationalOrganization", "@id": `${SITE_URL}/#org`, name: "IELTS Imperia", url: SITE_URL },
    },
  })),
};

export const mentorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: "Khushnud Rustamovich",
  jobTitle: "Founder & Head IELTS Teacher",
  worksFor: { "@id": `${SITE_URL}/#org` },
  url: `${SITE_URL}/mentor`,
  sameAs: ["https://t.me/Khushnud_Rustamovich_IELTS"],
};

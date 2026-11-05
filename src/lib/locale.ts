export type Lang = "en" | "ru" | "uz";
export const LANGS: Lang[] = ["en", "ru", "uz"];
export const DEFAULT_LANG: Lang = "en";

export const isLang = (v: unknown): v is Lang => typeof v === "string" && (LANGS as string[]).includes(v);

/** `en` lives at the site root; `ru` and `uz` live under /ru and /uz. */
export const localePrefix = (lang: Lang) => (lang === DEFAULT_LANG ? "" : `/${lang}`);

/** Path (starting with "/") for a given language, e.g. pathFor("uz", "/courses") -> "/uz/courses". */
export const pathFor = (lang: Lang, path: string) => {
  const p = path === "/" ? "" : path;
  return `${localePrefix(lang)}${p}` || "/";
};

/** Strip a leading /ru or /uz from a pathname. */
export const stripLocale = (pathname: string) => {
  const m = /^\/(ru|uz)(?=\/|$)/.exec(pathname);
  return m ? pathname.slice(m[0].length) || "/" : pathname;
};

export const ADDRESS: Record<Lang, string> = {
  en: "Urgench, Xorazm Region, Uzbekistan",
  ru: "Ургенч, Хорезмская область, Узбекистан",
  uz: "Urganch shahri, Xorazm viloyati, O'zbekiston",
};

export const MAPS_URL = "https://maps.app.goo.gl/wvnQDFY8L9GzC57v6";
export const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.726445109217!2d60.6263514!3d41.5535199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc98567b6c0cf%3A0xae5b34fc2f13cb5d!2sIELTS%20Imperia%20learning%20center!5e0!3m2!1suz!2s!4v1793875385772!5m2!1suz!2s";
export const GEO = { lat: 41.5535199, lng: 60.6263514 };

/** Resolve a (possibly missing or unknown) route param into a Lang. */
export const toLang = (v: unknown): Lang => (isLang(v) ? v : DEFAULT_LANG);

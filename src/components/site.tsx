import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Crown, MapPin, Menu, Phone, Send, X } from "lucide-react";
import logo from "@/assets/logo-dark.png";
import classroom from "@/assets/classroom.jpg";
import { LANGS, PHONE, PHONE_LABEL, TELEGRAM, TELEGRAM_HANDLE, useT } from "@/lib/i18n";
import { ADDRESS, MAPS_URL, pathFor, stripLocale } from "@/lib/locale";

/** Locale-aware internal link: "/courses" -> "/uz/courses" on the Uzbek site. */
export function LLink({ to, ...props }: Omit<React.ComponentProps<typeof Link>, "to" | "params"> & { to: string }) {
  const { lang } = useT();
  const route = `/{-$locale}${to === "/" ? "/" : to}`;
  return <Link {...props} to={route as never} params={{ locale: lang === "en" ? undefined : lang } as never} />;
}

const NAV = [
  { to: "/", k: "home" },
  { to: "/courses", k: "courses" },
  { to: "/rewards", k: "rewards" },
  { to: "/method", k: "method" },
  { to: "/mentor", k: "teacher" },
  { to: "/contact", k: "contact" },
] as const;

export function Embers({ count = 28 }: { count?: number }) {
  const [items, setItems] = useState<{ l: number; s: number; d: number; dl: number; dr: number }[]>([]);
  useEffect(() => {
    setItems(Array.from({ length: count }, () => ({
      l: Math.random() * 100, s: 2 + Math.random() * 4, d: 7 + Math.random() * 9,
      dl: Math.random() * 10, dr: (Math.random() - 0.5) * 200,
    })));
  }, [count]);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((e, i) => (
        <span key={i} className="ember" style={{
          left: `${e.l}%`, width: e.s, height: e.s, animationDuration: `${e.d}s`,
          animationDelay: `${e.dl}s`, ["--drift" as string]: `${e.dr}px`,
        }} />
      ))}
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function Counter({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (n: number) => {
      const p = Math.min(1, (n - start) / (duration * 1000));
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{v}</span>;
}

export function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block"
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.35); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.div>
  );
}

export function FireButton({ children, href, to, variant = "fire" }: { children: ReactNode; href?: string; to?: string; variant?: "fire" | "ghost" }) {
  const cls = variant === "fire"
    ? "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fire px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-fire transition-transform hover:scale-[1.03]"
    : "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold";
  const inner = <>{variant === "fire" && <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />}<span className="relative flex items-center gap-2">{children}</span></>;
  return <Magnetic>{to ? <LLink to={to} className={cls}>{inner}</LLink> : <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>{inner}</a>}</Magnetic>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold"><span className="h-px w-8 bg-gold" />{children}</div>;
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string | undefined }) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 md:pb-16 md:pt-48">
      <div className="flame-glow absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
      <Embers count={18} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.1}><h1 className="text-[2.6rem] font-semibold leading-[1.05] sm:text-5xl md:text-7xl"><span className="text-fire">{title}</span></h1></Reveal>
        {sub && <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{sub}</p></Reveal>}
      </div>
    </section>
  );
}

function LangSwitch() {
  const { lang } = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = stripLocale(pathname);
  return (
    <nav aria-label="Language" className="flex rounded-full border border-border p-0.5 text-xs font-semibold">
      {LANGS.map((l) => (
        <a key={l} href={pathFor(l, base)} hrefLang={l} lang={l} aria-current={lang === l ? "true" : undefined} className={`relative rounded-full px-2.5 py-1 uppercase transition-colors ${lang === l ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
          {lang === l && <motion.span layoutId="lang" className="absolute inset-0 rounded-full bg-primary" />}
          <span className="relative">{l}</span>
        </a>
      ))}
    </nav>
  );
}

export function Header() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass py-2" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <LLink to="/" className="shrink-0"><img src={logo} alt="IELTS Imperia" className="h-10 w-auto md:h-12" /></LLink>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <LLink key={n.to} to={n.to} activeOptions={{ exact: true }} className="relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              activeProps={{ className: "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-fire" }}>
              {t.nav[n.k]}
            </LLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <a href={`tel:${PHONE}`} className="hidden rounded-full bg-fire px-5 py-2.5 text-sm font-semibold text-primary-foreground md:inline-flex">{t.cta.enroll}</a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="glass mx-4 mt-3 flex max-h-[75vh] flex-col overflow-y-auto rounded-2xl p-3 lg:hidden">
          {NAV.map((n) => <LLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-foreground hover:bg-accent">{t.nav[n.k]}</LLink>)}
        </motion.nav>
      )}
    </header>
  );
}

export function Footer() {
  const { t, lang } = useT();
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <img src={logo} alt="IELTS Imperia" className="h-14 w-auto" />
          <p className="mt-5 font-script text-3xl text-gold">{t.slogan}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {NAV.map((n) => <LLink key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground">{t.nav[n.k]}</LLink>)}
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-foreground hover:text-gold"><Phone className="h-4 w-4 text-primary" />{PHONE_LABEL}</a>
          <a href={TELEGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-gold"><Send className="h-4 w-4 text-primary" />{TELEGRAM_HANDLE}</a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-gold"><MapPin className="h-4 w-4 text-primary" />{ADDRESS[lang]}</a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} IELTS Imperia · {t.since}. {t.footer.rights}</p>
        <p className="mt-2 tracking-[0.2em] uppercase">Created by <span className="text-gold">TriCorp</span> agence</p>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6 flex flex-col gap-3">
      <a href={TELEGRAM} target="_blank" rel="noreferrer" aria-label="Telegram" className="grid h-13 w-13 place-items-center rounded-full bg-secondary p-3.5 text-foreground shadow-lg ring-1 ring-border transition hover:scale-110"><Send className="h-5 w-5" /></a>
      <a href={`tel:${PHONE}`} aria-label="Call" className="relative grid place-items-center rounded-full bg-fire p-3.5 text-primary-foreground glow-fire transition hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" /><Phone className="relative h-5 w-5" />
      </a>
    </div>
  );
}

export function FinalCta() {
  const { t } = useT();
  return (
    <section className="final-cta relative isolate overflow-hidden border-y border-border">
      <img src={classroom} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="final-cta-shade absolute inset-0 -z-10" />
      <Embers count={12} />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase text-gold"><Crown className="h-5 w-5" /><span>IELTS IMPERIA</span><span className="ml-3 h-px w-16 bg-gold/40" /></div>
          <h2 className="max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">{t.final.title}</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">{t.final.sub}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <FireButton to="/contact">{t.cta.enroll}<ArrowRight className="h-4 w-4" /></FireButton>
            <FireButton href={TELEGRAM} variant="ghost"><Send className="h-4 w-4" />{t.cta.telegram}</FireButton>
          </div>
          <div className="mt-14 flex flex-col gap-5 border-t border-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-script text-3xl text-gold">{t.slogan}</p>
            <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-gold"><Phone className="h-4 w-4 text-ember" />{PHONE_LABEL}<ArrowRight className="h-4 w-4" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function useSeo() { return useMemo(() => null, []); }

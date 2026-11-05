import { motion } from "framer-motion";
import { Award, ArrowUpRight, Crown, Flame, Languages, Monitor, Sparkles, Trophy, Users, Star } from "lucide-react";
import methodLab from "@/assets/method-lab.jpg";
import hero from "@/assets/hero.jpg";
import courseIelts from "@/assets/course-ielts.jpg";
import courseIndividual from "@/assets/course-individual.jpg";
import courseAdvanced from "@/assets/course-advanced.jpg";
import courseKids from "@/assets/course-kids.jpg";
import courseSat from "@/assets/course-sat.jpg";
import courseGrammar from "@/assets/course-grammar.jpg";
import { useT } from "@/lib/i18n";
import { Counter, Eyebrow, LLink, Reveal } from "./site";

const courseImages = [courseIelts, courseIndividual, courseAdvanced, courseKids, courseSat, courseGrammar];
const whyIcons = [Monitor, Flame, Users, Languages, Sparkles, Trophy];

function Glow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 ${className}`}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`); }}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(300px circle at var(--mx) var(--my), color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)" }} />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Stats() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {t.stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.08} className="bg-background p-5 text-center sm:p-8">
            <div className="font-display text-4xl font-semibold text-fire sm:text-5xl md:text-6xl">{"pre" in s && s.pre ? s.s : ""}<Counter to={s.v} />{"pre" in s && s.pre ? "" : s.s}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Why() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <Reveal><Eyebrow>{t.why.eyebrow}</Eyebrow><h2 className="max-w-3xl text-[2.25rem] leading-tight font-semibold md:text-6xl">{t.why.title}</h2></Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.why.items.map((it, i) => { const I = whyIcons[i] ?? Flame; return (
          <Reveal key={i} delay={i * 0.06}><Glow className="h-full">
            <I className="h-8 w-8 text-ember" /><h3 className="mt-5 text-2xl font-semibold">{it.t}</h3><p className="mt-2 text-muted-foreground">{it.d}</p>
          </Glow></Reveal>); })}
      </div>
    </section>
  );
}

export function Courses({ heading = true }: { heading?: boolean }) {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {heading && <Reveal><Eyebrow>{t.courses.eyebrow}</Eyebrow><h2 className="text-[2.25rem] leading-tight font-semibold md:text-6xl">{t.courses.title}</h2><p className="mt-4 max-w-xl text-muted-foreground">{t.courses.sub}</p></Reveal>}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.courses.items.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.06} className="h-full">
            <LLink to="/contact" className={`course-card group relative flex h-full flex-col overflow-hidden rounded-lg border border-border transition-all duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-gold ${i === 2 ? "course-card-elite" : ""}`}>
              <div className="relative aspect-[3/2] overflow-hidden border-b border-border">
                <img src={courseImages[i]} alt={c.t} width={1200} height={800} loading="lazy" className="course-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 bg-background/85 px-2 py-1 font-sans text-xs text-foreground">0{i + 1} /</span>
                {i === 2 && <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center bg-background/85"><Crown className="h-5 w-5 text-gold" /></span>}
                <span className="absolute bottom-4 right-4 bg-background/85 px-3 py-1.5 text-xs uppercase text-gold">{c.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-3xl font-semibold leading-tight">{c.t}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{c.d}</p>
                <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-xs font-semibold text-foreground transition-colors group-hover:text-gold">{t.cta.enroll}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border text-ember transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </div>
            </LLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Rewards({ heading = true }: { heading?: boolean }) {
  const { t } = useT();
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      {heading && <Reveal className="text-center"><Eyebrow>{t.rewards.eyebrow}</Eyebrow><h2 className="mx-auto max-w-3xl text-[2.25rem] leading-tight font-semibold md:text-6xl">{t.rewards.title}</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t.rewards.sub}</p></Reveal>}
      <div className="mt-12 grid grid-cols-2 items-end gap-3 sm:gap-4 md:mt-16 md:grid-cols-4">
        {t.rewards.tiers.map((tier, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 sm:p-6 ${["h-40 md:h-[220px]","h-48 md:h-[290px]","h-40 md:h-[360px]","h-48 md:h-[430px]"][i]} ${i === 3 ? "border-gold bg-fire glow-fire" : "border-border bg-card"}`}>
            {i === 3 && <Crown className="absolute right-4 top-4 h-6 w-6 sm:h-7 sm:w-7 text-gold" />}
            <div><p className={`text-xs uppercase tracking-widest ${i === 3 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.rewards.band}</p>
              <p className="font-display text-4xl font-semibold sm:text-5xl">{tier.b}</p></div>
            <p className={`font-display text-4xl font-bold sm:text-6xl ${i === 3 ? "text-primary-foreground" : "text-fire"}`}>$<Counter to={tier.p} /></p>
          </motion.div>
        ))}
      </div>
      <Reveal delay={0.3}><div className="mt-10 flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/50 p-8 text-center md:flex-row md:justify-center md:gap-6 md:text-left">
        <Award className="h-10 w-10 shrink-0 text-gold" />
        <p className="text-lg">{t.rewards.proofPre} <span className="font-display text-4xl font-semibold text-fire"><Counter to={70} />%</span> {t.rewards.proof}</p>
      </div><p className="mt-4 text-center text-xs text-muted-foreground">{t.rewards.note}</p></Reveal>
    </section>
  );
}

export function Method() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative grid gap-6 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary to-transparent md:block" />
        {t.method.steps.map((s, i) => (
          <Reveal key={i} delay={i * 0.12} className="relative">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-primary bg-background font-display text-2xl text-fire">0{i + 1}</div>
            <h3 className="mt-6 text-3xl font-semibold">{s.t}</h3><p className="mt-2 text-muted-foreground">{s.d}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-16 grid items-center md:mt-24 gap-12 md:grid-cols-2">
        <Reveal><div className="overflow-hidden rounded-3xl border border-border"><motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={methodLab} alt="IELTS reading test on a computer screen" width={1200} height={912} className="aspect-[4/3] w-full object-cover" loading="lazy" /></div></Reveal>
        <Reveal delay={0.1}>
          <Monitor className="h-9 w-9 text-ember" /><h3 className="mt-4 text-4xl font-semibold">{t.method.computerTitle}</h3><p className="mt-4 text-lg text-muted-foreground">{t.method.computerText}</p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6"><Languages className="h-7 w-7 text-gold" /><h4 className="mt-3 font-display text-2xl font-semibold">{t.method.langTitle}</h4><p className="mt-1 text-muted-foreground">{t.method.langText}</p></div>
        </Reveal>
      </div>
    </section>
  );
}

export function Mentor() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal><div className="relative overflow-hidden rounded-3xl border border-border">
          <img src={hero} alt="Khushnud Rustamovich" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-6 left-6"><p className="font-script text-4xl text-gold">Khushnud Rustamovich</p><p className="text-sm text-muted-foreground">{t.teacher.role}</p></div>
        </div></Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>{t.teacher.eyebrow}</Eyebrow>
          <h2 className="text-4xl font-semibold md:text-6xl">{t.teacher.title}</h2>
          <blockquote className="mt-8 border-l-2 border-primary pl-6 font-display text-2xl italic sm:text-3xl leading-snug text-fire">“{t.teacher.quote}”</blockquote>
          <p className="mt-6 text-lg text-muted-foreground">{t.teacher.bio}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.teacher.points.map((p) => <li key={p} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"><Star className="h-4 w-4 shrink-0 text-gold" />{p}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

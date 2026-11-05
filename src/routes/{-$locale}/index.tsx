import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { pageSeo } from "@/lib/seo";
import { toLang } from "@/lib/locale";
import { useT } from "@/lib/i18n";
import { Embers, FinalCta, FireButton } from "@/components/site";
import { Courses, Mentor, Rewards, Stats, Why } from "@/components/sections";

export const Route = createFileRoute("/{-$locale}/")({
  head: ({ params }) => pageSeo("home", toLang(params.locale)),
  component: Index,
});

function Index() {
  const { t } = useT();
  const words = t.courses.items.map((c) => c.t);
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
        <motion.img src={hero} alt="" initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 0.35 }} transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="flame-glow absolute -bottom-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/35 blur-[140px]" />
        <Embers count={40} />
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] sm:px-4 sm:text-xs sm:tracking-[0.25em] text-gold backdrop-blur">
            <Crown className="h-4 w-4" />{t.hero.eyebrow} · {t.since}
          </motion.div>
          <h1 className="text-[2.75rem] font-semibold leading-[1.02] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            {[t.hero.title1, t.hero.title2].map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1 sm:pb-2">
                <motion.span className={`block ${i === 1 ? "text-fire italic" : ""}`} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}>{line}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-6 max-w-xl text-base sm:mt-8 sm:text-lg text-muted-foreground md:text-xl">{t.hero.sub}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-10 flex flex-wrap gap-4">
            <FireButton to="/contact">{t.cta.enroll}<ArrowRight className="h-4 w-4" /></FireButton>
            <FireButton to="/rewards" variant="ghost">{t.cta.rewards}</FireButton>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-12 font-script text-3xl sm:mt-16 sm:text-4xl text-gold md:text-5xl">{t.slogan}</motion.p>
        </div>
      </section>
      <div className="overflow-hidden border-y border-border py-6">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl text-muted-foreground sm:text-3xl">
          {[...words, ...words, ...words, ...words].map((w, i) => <span key={i} className="flex items-center gap-12">{w}<Crown className="h-5 w-5 text-primary" /></span>)}
        </div>
      </div>
      <div className="pt-20"><Stats /></div>
      <Why />
      <Courses />
      <Rewards />
      <Mentor />
      <div className="pt-10"><FinalCta /></div>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import { pageSeo } from "@/lib/seo";
import { toLang } from "@/lib/locale";
import { PHONE, PHONE_LABEL, TELEGRAM, TELEGRAM_HANDLE, useT } from "@/lib/i18n";
import { PageHero, Reveal } from "@/components/site";
import { ADDRESS, MAPS_EMBED, MAPS_URL } from "@/lib/locale";
import { useServerFn } from "@tanstack/react-start";
import { sendLead } from "@/lib/lead.functions";

export const Route = createFileRoute("/{-$locale}/contact")({
  head: ({ params }) => pageSeo("contact", toLang(params.locale)),
  component: Contact,
});

function Contact() {
  const { t, lang } = useT();
  const send = useServerFn(sendLead);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(0);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await send({ data: { name, phone, course: t.courses.items[course]?.t ?? "", lang } });
      setStatus("ok"); setName(""); setPhone("");
    } catch { setStatus("err"); }
  };
  const msgs = {
    en: { ok: "Thank you! We'll call you shortly.", err: "Something went wrong. Please call us." },
    ru: { ok: "Спасибо! Мы скоро вам перезвоним.", err: "Что-то пошло не так. Позвоните нам." },
    uz: { ok: "Rahmat! Tez orada siz bilan bog'lanamiz.", err: "Xatolik yuz berdi. Iltimos, qo'ng'iroq qiling." },
  }[lang];
  const mapText = {
    en: { addr: "Address", title: "IELTS Imperia learning center on Google Maps", open: "Open in Google Maps" },
    ru: { addr: "Адрес", title: "Учебный центр IELTS Imperia на Google Maps", open: "Открыть в Google Maps" },
    uz: { addr: "Manzil", title: "IELTS Imperia o'quv markazi Google Maps'da", open: "Google Maps'da ochish" },
  }[lang];
  const input = "w-full rounded-xl border border-input bg-background/60 px-4 py-3.5 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";
  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} sub={t.contact.sub} />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-5">
        <Reveal className="flex flex-col gap-4 md:col-span-2">
          <a href={`tel:${PHONE}`} className="group rounded-2xl border border-border bg-card p-7 transition hover:border-primary">
            <Phone className="h-7 w-7 text-ember" /><p className="mt-4 text-sm text-muted-foreground">{t.contact.phoneLabel}</p>
            <p className="font-display text-4xl font-semibold group-hover:text-fire">{PHONE_LABEL}</p>
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-7 transition hover:border-primary">
            <MapPin className="h-7 w-7 text-ember" /><p className="mt-4 text-sm text-muted-foreground">{mapText.addr}</p>
            <address className="font-display text-2xl font-semibold not-italic group-hover:text-fire">{ADDRESS[lang]}</address>
          </a>
          <a href={TELEGRAM} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-7 transition hover:border-primary">
            <Send className="h-7 w-7 text-ember" /><p className="mt-4 text-sm text-muted-foreground">{t.contact.tgLabel}</p>
            <p className="break-all font-display text-2xl font-semibold group-hover:text-fire">{TELEGRAM_HANDLE}</p>
          </a>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={submit} className="glass flex h-full flex-col gap-4 rounded-2xl p-8">
            <input required className={input} placeholder={t.contact.name} value={name} onChange={(e) => setName(e.target.value)} />
            <input required type="tel" className={input} placeholder={t.contact.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
            <select className={input} value={course} onChange={(e) => setCourse(Number(e.target.value))} aria-label={t.contact.course}>
              {t.courses.items.map((c, i) => <option key={i} value={i}>{c.t}</option>)}
            </select>
            <button disabled={status === "sending"} className="mt-auto disabled:opacity-60 inline-flex items-center justify-center gap-2 rounded-full bg-fire px-7 py-4 font-semibold text-primary-foreground glow-fire transition hover:scale-[1.02]"><Send className="h-4 w-4" />{status === "sending" ? "..." : t.contact.send}</button>
            {status === "ok" && <p role="status" className="text-center text-sm text-gold">{msgs.ok}</p>}
            {status === "err" && <p role="alert" className="text-center text-sm text-destructive">{msgs.err}</p>}
          </form>
        </Reveal>
      </section>
      <section className="mx-auto mt-6 max-w-6xl px-6" aria-label={mapText.title}>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src={MAPS_EMBED}
              title={mapText.title}
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="block h-[360px] w-full border-0 md:h-[460px]"
            />
          </div>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:text-foreground"><MapPin className="h-4 w-4" />{mapText.open}</a>
        </Reveal>
      </section>
    </>
  );
}

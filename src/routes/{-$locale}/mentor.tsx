import { createFileRoute } from "@tanstack/react-router";
import { pageSeo, mentorJsonLd } from "@/lib/seo";
import { toLang } from "@/lib/locale";
import { useT } from "@/lib/i18n";
import { FinalCta, PageHero } from "@/components/site";
import { Mentor } from "@/components/sections";

export const Route = createFileRoute("/{-$locale}/mentor")({
  head: ({ params }) => pageSeo("mentor", toLang(params.locale), [mentorJsonLd]),
  component: Page,
});

function Page() {
  const { t } = useT();
  return (
    <>
      <PageHero eyebrow={t.teacher.eyebrow} title={t.teacher.role} sub={t.slogan} />
      <Mentor />
      <FinalCta />
    </>
  );
}

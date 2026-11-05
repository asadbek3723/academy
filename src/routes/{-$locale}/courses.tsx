import { createFileRoute } from "@tanstack/react-router";
import { pageSeo, coursesJsonLd } from "@/lib/seo";
import { toLang } from "@/lib/locale";
import { useT } from "@/lib/i18n";
import { FinalCta, PageHero } from "@/components/site";
import { Courses } from "@/components/sections";

export const Route = createFileRoute("/{-$locale}/courses")({
  head: ({ params }) => pageSeo("courses", toLang(params.locale), [coursesJsonLd]),
  component: Page,
});

function Page() {
  const { t } = useT();
  return (
    <>
      <PageHero eyebrow={t.courses.eyebrow} title={t.courses.title} sub={t.courses.sub} />
      <Courses heading={false} />
      <FinalCta />
    </>
  );
}

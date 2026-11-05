import { createFileRoute } from "@tanstack/react-router";
import { pageSeo } from "@/lib/seo";
import { toLang } from "@/lib/locale";
import { useT } from "@/lib/i18n";
import { FinalCta, PageHero } from "@/components/site";
import { Method } from "@/components/sections";

export const Route = createFileRoute("/{-$locale}/method")({
  head: ({ params }) => pageSeo("method", toLang(params.locale)),
  component: Page,
});

function Page() {
  const { t } = useT();
  return (
    <>
      <PageHero eyebrow={t.method.eyebrow} title={t.method.title} />
      <Method  />
      <FinalCta />
    </>
  );
}

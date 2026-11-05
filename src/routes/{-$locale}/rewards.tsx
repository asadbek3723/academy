import { createFileRoute } from "@tanstack/react-router";
import { pageSeo } from "@/lib/seo";
import { toLang } from "@/lib/locale";
import { useT } from "@/lib/i18n";
import { FinalCta, PageHero } from "@/components/site";
import { Rewards } from "@/components/sections";

export const Route = createFileRoute("/{-$locale}/rewards")({
  head: ({ params }) => pageSeo("rewards", toLang(params.locale)),
  component: Page,
});

function Page() {
  const { t } = useT();
  return (
    <>
      <PageHero eyebrow={t.rewards.eyebrow} title={t.rewards.title} sub={t.rewards.sub} />
      <Rewards heading={false} />
      <FinalCta />
    </>
  );
}

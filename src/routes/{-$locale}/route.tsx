import { Outlet, createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { isLang } from "@/lib/locale";

// English lives at the root; only /ru and /uz are valid locale prefixes.
export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params, location }) => {
    const locale = (params as { locale?: string }).locale;
    if (locale === undefined) return;
    if (locale === "en") {
      throw redirect({ href: location.pathname.replace(/^\/en/, "") || "/", statusCode: 301 });
    }
    if (!isLang(locale)) throw notFound();
  },
  component: Outlet,
});

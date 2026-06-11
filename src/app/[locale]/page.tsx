import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Hero } from "@/components/home/Hero";
import { FeaturedGame } from "@/components/home/FeaturedGame";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <Hero locale={locale} content={dict.home} />
      <FeaturedGame content={dict.home.featured} />
    </main>
  );
}

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { PageIntro } from "@/components/ui/PageIntro";
import { Catalog } from "@/components/games/Catalog";

export default async function GamesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <PageIntro kicker={dict.games.kicker} title={dict.games.title} />
      <Catalog games={dict.games} />
    </main>
  );
}

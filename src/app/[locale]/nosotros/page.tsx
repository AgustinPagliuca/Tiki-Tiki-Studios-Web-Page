import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { PageIntro } from "@/components/ui/PageIntro";
import { Values } from "@/components/about/Values";
import { Team } from "@/components/about/Team";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about;

  return (
    <main>
      <PageIntro kicker={about.kicker} title={about.title} lead={about.lead} />
      <Values title={about.valuesTitle} values={about.values} />
      <Team title={about.teamTitle} team={about.team} />
    </main>
  );
}

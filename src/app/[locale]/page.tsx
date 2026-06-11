import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main style={{ padding: "2rem" }}>
      <p>{dict.common.siteName} — esqueleto en construcción ({locale})</p>
    </main>
  );
}

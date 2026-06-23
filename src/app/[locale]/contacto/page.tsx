import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import styles from "./page.module.css";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const contact = dict.contact;

  return (
    <main>
      <PageIntro
        kicker={contact.kicker}
        title={contact.title}
        lead={contact.lead}
      />
      <section className={styles.board}>
        <ContactForm labels={contact.form} />
        <ContactInfo other={contact.other} />
      </section>
    </main>
  );
}

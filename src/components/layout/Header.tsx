import { Logo } from "./Logo";
import { NavLinks, type NavLink } from "./NavLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { InstagramIcon, XIcon, DiscordIcon, MailIcon } from "@/components/icons";
import { EXTERNAL_LINKS, NAV_ITEMS, STUDIO } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Header.module.css";

function localizedHref(locale: Locale, segment: string) {
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items: NavLink[] = NAV_ITEMS.map((item) => ({
    href: localizedHref(locale, item.segment),
    label: dict.nav[item.key],
  }));

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <p className={styles.status}>
          {dict.header.status}{" "}
          <span className={styles.tag}>
            <span>{dict.header.statusTag}</span>
          </span>
        </p>
        <div className={styles.social}>
          <a href={EXTERNAL_LINKS.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href={EXTERNAL_LINKS.x} aria-label="X" target="_blank" rel="noreferrer">
            <XIcon />
          </a>
          <a href={EXTERNAL_LINKS.discord} aria-label="Discord" target="_blank" rel="noreferrer">
            <DiscordIcon />
          </a>
          <a href={`mailto:${STUDIO.email}`} className={styles.mail}>
            <MailIcon />
            {STUDIO.email}
          </a>
        </div>
      </div>
      <div className={styles.nav}>
        <Logo />
        <NavLinks items={items} />
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}

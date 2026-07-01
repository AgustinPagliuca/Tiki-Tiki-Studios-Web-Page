import { Logo } from "./Logo";
import { InstagramIcon, DiscordIcon, GamepadIcon } from "@/components/icons";
import { EXTERNAL_LINKS } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Footer.module.css";

export function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <footer className={styles.footer}>
      <Logo size="sm" href={`/${locale}`} />
      <div className={styles.social}>
        <a href={EXTERNAL_LINKS.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href={EXTERNAL_LINKS.discord} aria-label="Discord" target="_blank" rel="noreferrer">
          <DiscordIcon />
        </a>
        <a href={EXTERNAL_LINKS.vetusRexItch} aria-label="itch.io" target="_blank" rel="noreferrer">
          <GamepadIcon />
        </a>
      </div>
      <p className={styles.madeIn}>{dict.footer.madeIn}</p>
    </footer>
  );
}

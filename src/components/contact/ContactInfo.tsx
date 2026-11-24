import {
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  DiscordLogoIcon,
} from "@phosphor-icons/react/ssr";
import { EXTERNAL_LINKS, STUDIO } from "@/lib/constants";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./ContactInfo.module.css";

export function ContactInfo({
  other,
}: {
  other: Dictionary["contact"]["other"];
}) {
  return (
    <aside className={styles.info}>
      <h2 className={styles.heading}>{other.title}</h2>
      <ul className={styles.list}>
        <li>
          <EnvelopeSimpleIcon className={styles.icon} />
          <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
        </li>
        <li>
          <InstagramLogoIcon className={styles.icon} />
          <a href={EXTERNAL_LINKS.instagram} target="_blank" rel="noreferrer">
            {STUDIO.instagramHandle}
          </a>
        </li>
        <li>
          <DiscordLogoIcon className={styles.icon} />
          <a href={EXTERNAL_LINKS.discord} target="_blank" rel="noreferrer">
            {other.discord}
          </a>
        </li>
      </ul>
    </aside>
  );
}

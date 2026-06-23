import {
  MailIcon,
  InstagramIcon,
  DiscordIcon,
  MapPinIcon,
} from "@/components/icons";
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
          <MailIcon className={styles.icon} />
          <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
        </li>
        <li>
          <InstagramIcon className={styles.icon} />
          <a href={EXTERNAL_LINKS.instagram} target="_blank" rel="noreferrer">
            {STUDIO.instagramHandle}
          </a>
        </li>
        <li>
          <DiscordIcon className={styles.icon} />
          <a href={EXTERNAL_LINKS.discord} target="_blank" rel="noreferrer">
            {other.discord}
          </a>
        </li>
      </ul>
      <div className={styles.eva}>
        <MapPinIcon /> {other.eva}
      </div>
    </aside>
  );
}

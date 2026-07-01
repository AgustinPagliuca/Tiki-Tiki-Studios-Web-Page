import type { Dictionary } from "@/i18n/dictionaries";
import { LinkedInIcon, InstagramIcon } from "@/components/icons";
import styles from "./Team.module.css";

export function Team({
  title,
  team,
}: {
  title: string;
  team: Dictionary["about"]["team"];
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.row}>
        {team.members.map((member) => (
          <div className={styles.member} key={member.name}>
            <img src={member.avatar} alt="" className={styles.avatar} />
            <div>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </div>
            <div className={styles.social}>
              <a href={member.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
              <a href={member.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

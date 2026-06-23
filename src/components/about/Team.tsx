import type { Dictionary } from "@/i18n/dictionaries";
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
        <div className={styles.member}>
          <span className={styles.avatar}>AP</span>
          <div>
            <p className={styles.name}>{team.founderTitle}</p>
            <p className={styles.role}>{team.founderRole}</p>
          </div>
        </div>
        <div className={styles.member}>
          <span className={`${styles.avatar} ${styles.placeholder}`}>+</span>
          <div>
            <p className={styles.name}>{team.growingTitle}</p>
            <p className={styles.role}>{team.growingRole}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

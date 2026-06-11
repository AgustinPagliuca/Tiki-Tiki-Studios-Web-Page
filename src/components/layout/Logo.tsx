import styles from "./Logo.module.css";

// Logo provisorio en texto (mano alzada emulada): "TIKI·TIKI" + "studios".
// TODO: reemplazar por el SVG/PNG oficial cuando el usuario lo entregue
// (dejar este componente como único punto de cambio).
export function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <span
      className={`${styles.logo} ${size === "sm" ? styles.sm : ""}`}
      aria-label="Tiki-Tiki Studios"
    >
      <span className={styles.top} aria-hidden="true">
        TIKI·TIKI
      </span>
      <span className={styles.script} aria-hidden="true">
        studios
      </span>
    </span>
  );
}

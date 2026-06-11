import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
};

// Botón en parelelogramo (skew) con feedback de press. Renderiza <Link>
// para rutas internas o <a> para enlaces externos.
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const className = `${styles.btn} ${styles[variant]}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

// Logo oficial (logo-largo-blanco.png, 1920×1080). Dimensiones por tamaño
// manteniendo la proporción 16:9 para no deformarlo.
const SIZES = {
  md: { width: 100, height: 56 },
  sm: { width: 78, height: 44 },
} as const;

export function Logo({
  size = "md",
  href,
}: {
  size?: "md" | "sm";
  href?: string;
}) {
  const { width, height } = SIZES[size];

  const image = (
    <Image
      src="/logo-largo-blanco.png"
      alt="Tiki-Tiki Studios"
      width={width}
      height={height}
      className={styles.logo}
      priority={size === "md"}
    />
  );

  if (href) {
    return (
      <Link href={href} className={styles.link}>
        {image}
      </Link>
    );
  }

  return image;
}

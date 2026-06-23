"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import styles from "./PageIntro.module.css";

// Encabezado de página reutilizable: kicker + título + bajada opcional.
export function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <motion.div
      className={styles.intro}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p className={styles.kicker} variants={item}>
        {kicker}
      </motion.p>
      <motion.h1 className={styles.title} variants={item}>
        {title}
      </motion.h1>
      {lead ? (
        <motion.p className={styles.lead} variants={item}>
          {lead}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

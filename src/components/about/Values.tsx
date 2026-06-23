"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { BookIcon, MapIcon, BrushIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Values.module.css";

const ICONS = [BookIcon, MapIcon, BrushIcon];

export function Values({
  title,
  values,
}: {
  title: string;
  values: Dictionary["about"]["values"];
}) {
  const reduce = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
      >
        {values.map((value, index) => {
          const Icon = ICONS[index] ?? BookIcon;
          return (
            <motion.article key={value.title} className={styles.card} variants={item}>
              <Icon className={styles.icon} />
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardText}>{value.text}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

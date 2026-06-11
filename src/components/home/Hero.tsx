"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/Button";
import { SwordIcon, ArrowRightIcon } from "@/components/icons";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Hero.module.css";

export function Hero({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary["home"];
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.copy}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className={styles.kicker} variants={item}>
          {content.kicker}
        </motion.p>
        <motion.h1 className={styles.title} variants={item}>
          {content.titleLead}{" "}
          <em className={styles.highlight}>{content.titleHighlight}</em>{" "}
          {content.titleTail}
        </motion.h1>
        <motion.p className={styles.subtitle} variants={item}>
          {content.subtitle}
        </motion.p>
        <motion.div className={styles.actions} variants={item}>
          <Button href={`/${locale}/juegos`}>
            {content.ctaGames}
            <ArrowRightIcon />
          </Button>
          <Button href={`/${locale}/nosotros`} variant="ghost">
            {content.ctaStudio}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.art}
        initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
      >
        <SwordIcon className={styles.artIcon} />
        <span className={styles.artLabel}>{content.featured.artLabel}</span>
      </motion.div>
    </section>
  );
}

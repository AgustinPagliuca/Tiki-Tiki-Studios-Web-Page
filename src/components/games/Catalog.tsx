"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRightIcon, PlusIcon } from "@/components/icons";
import { EXTERNAL_LINKS } from "@/lib/constants";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Catalog.module.css";
import Image from "next/image";



export function Catalog({ games }: { games: Dictionary["games"] }) {
  const reduce = useReducedMotion();

  const reveal: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
    },
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
    <section className={styles.section}>
      <motion.article
        className={styles.featured}
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className={styles.cover} aria-hidden="true">
          <Image
            src="/vetus-rex/vetus-rex-cover.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className={styles.artImg}
            priority
            />
        </div>
        <div className={styles.body}>
          <span className={styles.tag}>★ {games.featured.tag}</span>
          <h2 className={styles.title}>{games.featured.title}</h2>
          <p className={styles.description}>{games.featured.description}</p>
          <div className={styles.actions}>
            <Button href={EXTERNAL_LINKS.vetusRexSite} external>
              {games.featured.ctaSite}
              <ArrowUpRightIcon />
            </Button>
            <Button href={EXTERNAL_LINKS.vetusRexItch} variant="ghost" external>
              {games.featured.ctaItch}
            </Button>
          </div>
        </div>
      </motion.article>
    </section>
  );
}

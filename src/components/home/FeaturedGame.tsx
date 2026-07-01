"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRightIcon } from "@/components/icons";
import { EXTERNAL_LINKS } from "@/lib/constants";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./FeaturedGame.module.css";

export function FeaturedGame({
  content,
}: {
  content: Dictionary["home"]["featured"];
}) {
  const reduce = useReducedMotion();

  return (
    <section className={styles.wrap}>
      <motion.div
        className={styles.panel}
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className={styles.body}>
          <span className={styles.tag}>★ {content.tag}</span>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.description}>{content.description}</p>
          <div className={styles.actions}>
            <Button href={EXTERNAL_LINKS.vetusRexSite} external>
              {content.ctaSite}
              <ArrowUpRightIcon />
            </Button>
            <Button href={EXTERNAL_LINKS.vetusRexItch} variant="ghost" external>
              {content.ctaItch}
            </Button>
          </div>
        </div>
        <div className={styles.thumb}>
          <Image
            src="/vetus-rex-cover.png"
            alt={content.title}
            fill
            sizes="120px"
            className={styles.thumbImg}
          />
        </div>
      </motion.div>
    </section>
  );
}

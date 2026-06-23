"use client";

import { useState, type FormEvent } from "react";
import { LockIcon, SendIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./ContactForm.module.css";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ labels }: { labels: Dictionary["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const configured = Boolean(FORM_ID);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configured) return;

    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">{labels.name}</label>
        <input id="name" name="name" type="text" required disabled={!configured} />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">{labels.email}</label>
        <input id="email" name="email" type="email" required disabled={!configured} />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">{labels.message}</label>
        <textarea id="message" name="message" rows={4} required disabled={!configured} />
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={!configured || status === "sending"}
      >
        <span>
          {status === "sending" ? labels.sending : labels.submit}
          <SendIcon />
        </span>
      </button>

      {configured ? (
        <p className={styles.note}>
          <LockIcon /> {labels.secure}
        </p>
      ) : (
        <p className={styles.note}>{labels.notConfigured}</p>
      )}
      {status === "success" ? (
        <p className={styles.success} role="status">
          {labels.success}
        </p>
      ) : null}
      {status === "error" ? (
        <p className={styles.error} role="alert">
          {labels.error}
        </p>
      ) : null}
    </form>
  );
}

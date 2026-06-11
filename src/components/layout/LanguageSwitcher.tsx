"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { ChevronDownIcon } from "@/components/icons";
import styles from "./LanguageSwitcher.module.css";

const FLAG: Record<Locale, string> = { es: styles.ar, en: styles.us };
const LABEL: Record<Locale, string> = { es: "Español", en: "English" };

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function switchTo(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    const segments = pathname.split("/");
    segments[1] = next;
    // Navegación completa: refresca el lang del <html> y el contenido del idioma.
    window.location.assign(segments.join("/") || `/${next}`);
  }

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={LABEL[locale]}
      >
        <span className={`${styles.flag} ${FLAG[locale]}`} />
        <ChevronDownIcon
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
        />
      </button>
      {open && (
        <ul className={styles.drop} role="listbox">
          {locales.map((value) => (
            <li key={value}>
              <button
                type="button"
                className={`${styles.item} ${value === locale ? styles.active : ""}`}
                onClick={() => switchTo(value)}
                role="option"
                aria-selected={value === locale}
              >
                <span className={`${styles.flag} ${FLAG[value]}`} />
                {LABEL[value]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

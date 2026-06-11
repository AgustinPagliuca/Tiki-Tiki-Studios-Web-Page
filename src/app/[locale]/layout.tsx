import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Oxanium, Saira, Caveat } from "next/font/google";
import { isLocale, locales } from "@/i18n/config";
import "../globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["500", "600", "700", "800"],
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Tiki-Tiki Studios",
  description:
    "Estudio de videojuegos independiente argentino. Rol, aventura y mundos abiertos con identidad propia.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${oxanium.variable} ${saira.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

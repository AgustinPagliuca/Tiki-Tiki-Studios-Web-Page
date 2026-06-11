import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Oxanium, Saira, Caveat } from "next/font/google";
import { defaultLocale } from "@/i18n/config";
import "./globals.css";

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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = (await headers()).get("x-locale") ?? defaultLocale;

  return (
    <html
      lang={locale}
      className={`${oxanium.variable} ${saira.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

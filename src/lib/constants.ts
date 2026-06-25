// Enlaces externos y datos del estudio.
// Los marcados con TODO son placeholders hasta que el usuario los provea
// (ver memoria "pendientes-usuario"): no son definitivos.

export const EXTERNAL_LINKS = {
  vetusRexSite: "https://vetusrex.online",
  vetusRexItch: "https://itch.io", // TODO: URL real del juego en itch.io
  instagram: "https://instagram.com", // TODO: handle real
  discord: "https://discord.com", // TODO: invite real
} as const;

export const STUDIO = {
  email: "hola@tiki-tiki.studio", // TODO: email real del estudio
  instagramHandle: "@tikitikistudios", // TODO: handle real
} as const;

// Estructura de navegación. `segment` vacío = home.
// Los segmentos se mantienen iguales en todos los idiomas (la etiqueta
// visible cambia vía diccionario); solo el prefijo /es | /en varía.
export const NAV_ITEMS = [
  { key: "inicio", segment: "" },
  { key: "nosotros", segment: "nosotros" },
  { key: "juegos", segment: "juegos" },
  { key: "contacto", segment: "contacto" },
] as const;

export type NavKey = (typeof NAV_ITEMS)[number]["key"];

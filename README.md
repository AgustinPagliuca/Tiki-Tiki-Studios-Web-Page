# Tiki-Tiki Studios — Sitio web

Sitio de presentación del estudio de videojuegos **Tiki-Tiki Studios**. Presenta el estudio y su juego destacado, **Vetus Rex — The Origin** (RPG de mundo abierto, dark fantasy), que tiene su propio sitio en [vetusrex.online](https://vetusrex.online).

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **pnpm** como gestor de paquetes
- Estilos con **CSS Modules** + tokens en `globals.css`
- Animaciones con **motion** (Framer Motion)
- i18n propio (español / inglés) con diccionarios JSON
- Hosting en **Vercel**

## Requisitos

- **Node.js 20.9 o superior** (Next 16 no soporta Node 18). Recomendado: Node 20 LTS o 22.
- **pnpm** (no usar npm ni yarn). La forma recomendada de tenerlo:
  ```bash
  corepack enable
  ```
  (viene con Node). Alternativa: `npm i -g pnpm`.
- **Git** para clonar.

## Cómo correrlo localmente

```bash
git clone https://github.com/AgustinPagliuca/Tiki-Tiki-Studios-Web-Page.git
cd Tiki-Tiki-Studios-Web-Page
pnpm install
pnpm dev
```

Abrí **http://localhost:3000**. La raíz redirige automáticamente a `/es` o `/en` según el idioma del navegador.

## Variables de entorno

El sitio **arranca sin configurar nada**: el formulario de contacto se muestra deshabilitado con un aviso hasta que exista el ID de Formspree.

Para activar el formulario, copiá `.env.example` a `.env.local` y completá:

```
NEXT_PUBLIC_FORMSPREE_FORM_ID=tu_id_de_formspree
```

`.env.local` está en `.gitignore` (no se sube al repo).

## Scripts

| Comando | Qué hace |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo (http://localhost:3000) |
| `pnpm build` | Build de producción |
| `pnpm start` | Sirve el build de producción |
| `pnpm lint` | ESLint |

## Estructura

```
src/
  app/
    layout.tsx            # layout raíz (<html>/<body>, fuentes, lang)
    [locale]/             # rutas por idioma (/es, /en)
      layout.tsx          # Header + Footer + diccionario
      page.tsx            # Inicio
      nosotros/           # Nosotros
      juegos/             # Juegos
      contacto/           # Contacto
  components/
    layout/               # Header, Footer, NavLinks, Logo, LanguageSwitcher
    ui/                   # Button, PageIntro
    home/ about/ games/ contact/   # secciones por página
    icons.tsx             # íconos SVG inline
  dictionaries/           # es.json, en.json (todos los textos)
  i18n/                   # config y loader de diccionarios
  lib/constants.ts        # URLs externas y datos del estudio
  proxy.ts                # negociación de idioma y redirección (ex "middleware")
public/                   # imágenes (logo, etc.)
```

Los textos viven en `src/dictionaries/*.json` (no incrustados en el código). Los colores/estilos usan tokens definidos en `src/app/globals.css`.

## Solución de problemas

**Errores raros de módulos (`Cannot find module 'scheduler'`, o similares de React/Next):**
Casi siempre es por **no usar pnpm** (o mezclar gestores) o por una instalación incompleta. Solución:

1. Verificá la versión de Node: `node -v` debe ser **20.9+**.
2. Asegurate de usar **pnpm** (no `npm install`). Habilitá con `corepack enable`.
3. Limpiá e instalá de nuevo:
   ```bash
   # borrá node_modules y cualquier lockfile de otro gestor
   rm -rf node_modules package-lock.json yarn.lock
   pnpm install
   ```
   En Windows (PowerShell): `Remove-Item -Recurse -Force node_modules, package-lock.json, yarn.lock -ErrorAction SilentlyContinue`
4. Volvé a correr `pnpm dev`.

> `scheduler` es una dependencia interna de React; el error aparece cuando el árbol de `node_modules` quedó incompleto o mal armado por un gestor distinto a pnpm.

## Deploy (Vercel)

Conectá el repo en [vercel.com](https://vercel.com) (New Project → importar el repo). Vercel detecta Next.js y pnpm automáticamente. Cargá `NEXT_PUBLIC_FORMSPREE_FORM_ID` en *Settings → Environment Variables* cuando tengas el ID. Producción se despliega desde la rama `main`.

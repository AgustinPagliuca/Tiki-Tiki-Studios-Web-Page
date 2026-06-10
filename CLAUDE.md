# Instrucciones de trabajo — Tiki-Tiki Studios

Sitio de presentación del estudio de videojuegos Tiki-Tiki Studios, para presentarse en la EVA Argentina.

## Contexto del proyecto
- **Stack:** Next.js (App Router). No introducir otro framework.
- **Gestor de paquetes:** pnpm. No usar npm ni yarn.
- **Hosting:** Vercel.
- **Páginas:** Inicio, Nosotros, Juegos, Contacto.
- **Idioma:** arranca en español, pero la estructura debe dejarse preparada para inglés (i18n) desde el principio. Textos en archivos de traducción, no incrustados en el código.
- **Juego destacado:** Vetus Rex – The Origin (RPG de mundo abierto, dark fantasy, "Próximamente" en itch.io). Tiene su propio sitio en vetusrex.online: la web del estudio lo presenta y enlaza, NO lo replica.
- **Contacto:** formulario funcional vía Formspree. El form ID va como variable de entorno (se completa cuando exista el mail). No hardcodear el ID.

## Antes de codificar
- Expón tus suposiciones explícitamente antes de escribir código.
- Si algo es ambiguo, pregunta. Nunca adivines ni rellenes huecos en silencio.
- Convierte cada instrucción vaga en criterios de éxito verificables y confírmalos antes de empezar.

## Al codificar
- Escribe el código mínimo que resuelva el problema. Nada de abstracciones que nadie pidió.
- Cambios quirúrgicos: no toques código ajeno a la solicitud. Cada línea modificada debe rastrearse a algo que se pidió.
- Buenas prácticas siempre: nombres claros, sin valores hardcodeados (usa constantes/config/variables de entorno), sin código "por hacer".
- Respeta el stack y las convenciones ya existentes en el proyecto. No agregues librerías nuevas sin justificarlo y consultarlo primero.
- Mantén la separación entre páginas y componentes reutilizables. Componentes pequeños y con una sola responsabilidad.

## Diseño
- Personalidad: base sobria con toques juguetones (acorde al logo a mano alzada).
- Paleta: fondo blanco `#FFFFFF`, verde `#7ED957`, violeta `#B257D9`.
- Verde para acciones principales; violeta como acento. No usar violeta en bloques de fondo grandes (vibra).
- Definir los colores como tokens/variables, nunca repetir el hex suelto en cada archivo.
- Nota pendiente: el logo tiene texto blanco, hay que resolver su versión sobre fondo blanco.

## Al terminar
- Resume qué cambiaste y por qué, en una o dos líneas.
- Señala cualquier suposición que tuviste que hacer pese a todo.
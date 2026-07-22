# Frank Alayza — Web personal

Sitio web personal y profesional de **Frank Alayza** (frankalayza.me): administrador
de negocios de tecnologia y builder AI Native. Rediseño premium construido con
**Astro 5**, tema oscuro puro (negro + dorado, acentos neon cian/morado), identidad
de marca propia e iconografia 100% vectorial (cero emojis, cero iconos genericos).

El sitio se sirve como HTML estatico en **GitHub Pages** con dominio custom
`frankalayza.me`.

## Stack

- **Astro 5** — build estatico. `build.format: 'file'` conserva las URLs actuales
  1:1 (`servicios.html`, `contenido-mvp-4-semanas.html`, etc.), sin redirects.
- **@astrojs/sitemap** — `sitemap-index.xml` automatico.
- **sharp** — optimizacion de imagenes (`astro:assets`: webp/avif + srcset + width/height).
- **GSAP** (npm) — animaciones cinematograficas por scroll.
- **@fontsource** — fuentes self-hosted (sin Google Fonts externo): Space Grotesk
  (titulares), Chakra Petch (cifras/eyebrows), Inter (cuerpo).
- **CSS propio con design tokens** (no Tailwind): `src/styles/{tokens,base,global}.css`
  + estilos scoped por componente.

Requisitos: Node 20+ (probado con Node 26 / npm 11).

## Comandos

```bash
npm install     # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:4321)
npm run build    # build de produccion -> dist/
npm run preview  # previsualizar el build de dist/ en local
```

## Estructura de carpetas (resumen)

```
public/                     # se copia tal cual al build (NO se procesa)
  CNAME                      # dominio custom: frankalayza.me
  .nojekyll                  # evita que GitHub Pages aplique Jekyll
  robots.txt
  favicon.svg
  assets/certificados/*.pdf  # 12 PDFs de certificados
  assets/cv/cv-frank-alayza.pdf
  assets/og/share.jpg        # imagen Open Graph por defecto (ver Higgsfield: og-base)
src/
  assets/
    fotos/                   # fotos reales (optimizadas por astro:assets)
    marca/                   # logos (gold/blue/mix) + logo-icon.svg + monograma FA
    higgsfield/              # ENCHUFE de assets Higgsfield (ver mas abajo)
  components/
    global/                  # Header, Footer, NeuralBackground, Reveal/Motion scripts
    ui/                      # Icon, Logo, MediaSlot, Button, Card, Toast, Modal, ...
    sections/                # secciones por pagina (home, about, servicios, ...)
    forms/                   # ContactForm, NewsletterForm (FormSubmit AJAX)
    seo/                     # JsonLd.astro (Person / BlogPosting)
  content/blog/              # 12 articulos en Markdown (coleccion "blog")
  data/                      # fuente unica de verdad (site, services, projects, ...)
  layouts/                   # BaseLayout, ArticleLayout, LegalLayout
  pages/                     # rutas (index, sobre-mi, servicios, [post], 404, ...)
  styles/                    # tokens.css, base.css, global.css
astro.config.mjs
.github/workflows/deploy.yml # CI de despliegue a GitHub Pages
```

Los datos viven en `src/data/*.ts` (site, nav, services, packages, guarantees, faq,
projects, values, process, timeline, skills, resources, certificates, blog,
higgsfield). Editar contenido = editar datos, sin tocar el markup.

## Sistema de iconos y marca

- **`src/components/ui/Icon.astro`** — set propio de ~35 iconos vectoriales
  (viewBox 24, stroke 1.5 redondeado): una linea en `currentColor` mas UN acento de
  color (nodo/segmento de circuito, eco del logo). Props: `name`, `size`, `accent`,
  `chip`, `label`. Reemplaza por completo cualquier emoji o icono de terceros.
- **`src/components/ui/Logo.astro`** — logo de marca (cabeza de perfil fusionada con
  una red de nodos) vectorizado a SVG, animable con `stroke-dashoffset`. Variantes
  gold / cyan / mix. Tambien alimenta `public/favicon.svg`.
- **`src/components/global/NeuralBackground.astro`** — canvas de nodos que se conectan
  (fondo ambiental); pausado con `visibilitychange` y estatico bajo `prefers-reduced-motion`.
- **Regla de marca**: cero emojis nativos en cualquier superficie del sitio. Todo
  simbolo se dibuja con `Icon.astro` o `Logo.astro`.

## Slots de Higgsfield (enchufe de assets sin tocar codigo)

El sitio **se ve completo sin ningun asset generado**: cada slot tiene un fallback
propio animado (canvas, gradientes o foto real optimizada). Cuando Frank genera un
asset en Higgsfield, basta con **soltar el archivo con el nombre EXACTO** en
`src/assets/higgsfield/` y volver a hacer `npm run build`. El componente
`MediaSlot.astro` (`import.meta.glob`) detecta el archivo y lo enchufa; si no existe,
renderiza el fallback.

Nombres exactos de archivo (carpeta `src/assets/higgsfield/`):

| Archivo | Uso |
|---|---|
| `hero-loop.mp4` | Loop de fondo del hero (home). Poster opcional: `hero-loop-poster.jpg` |
| `logo-reveal.mp4` | Reveal del logo de marca (cabeza-nodos) |
| `retrato-frank.png` | Retrato principal (sobre-mi / home) |
| `retrato-secundario.jpg` | Retrato secundario / b-roll |
| `fondo-neural.jpg` | Fondo abstracto neural (banda CTA / secciones) |
| `proyecto-clevun.jpg` | Cover del negocio Clevun (proyectos) |
| `proyecto-iceguin.jpg` | Cover del negocio Iceguin (proyectos) |
| `article-cover-<categoria>.jpg` | Cover por categoria del blog (5, ver abajo) |

Las 5 categorias de `article-cover-<categoria>.jpg`:
`ia-vida-real`, `data-negocio`, `construyendo-productos`, `modelos-fundacionales`,
`escalada-disciplina`.

**Excepcion — imagen Open Graph (`og-base.jpg`)**: esta NO pasa por el enchufe de
`MediaSlot`. El sitio la lee desde `public/assets/og/share.jpg`. Para enchufarla,
exporta la imagen a 1200x630 y guardala en `public/assets/og/share.jpg`.

Reglas de los videos: audio SIEMPRE off, duracion maxima 8 s, MP4.

Documento de encargos para generar estos assets (prompts listos, modelo recomendado
y specs por cada slot): `~/Downloads/ENCARGOS-HIGGSFIELD-frankalayza.md` (y su version
`.html` imprimible).

## Formularios (FormSubmit)

Los formularios de contacto (`ContactForm.astro`) y newsletter (`NewsletterForm.astro`)
envian via **FormSubmit AJAX** (`fetch` a `formsubmit.co/ajax/...`) con validacion
inline y feedback mediante toasts propios accesibles. Nada de `mailto:` ni
`alert/confirm/prompt`. Incluyen honeypot (`_honey`) y `_captcha=false`.

- **Activacion (una sola vez)**: el primer envio real dispara un email de
  confirmacion de FormSubmit a `frankalayzah@gmail.com`. Hay que abrir ese correo y
  confirmar para que empiecen a llegar los mensajes.
- **Cambio a token (recomendado)**: tras activar, FormSubmit entrega un token
  aleatorio. Conviene sustituir `frankalayzah@gmail.com` por ese token en el codigo
  para no exponer el correo publicamente. Los puntos a cambiar estan marcados con
  `CONFIRMAR FRANK` en `ContactForm.astro` y `NewsletterForm.astro` (el `action` del
  `<form>` y la URL del `fetch`).

## DEPLOY (GitHub Pages)

El despliegue esta automatizado en `.github/workflows/deploy.yml`: en cada push a
`master` (o manualmente con "Run workflow"), `withastro/action` construye el sitio y
`actions/deploy-pages` lo publica. El `CNAME` y el `.nojekyll` viajan en `public/`, asi
que el dominio custom se conserva.

### Secuencia critica (primer paso de vanilla a Astro)

Hoy la web en vivo se sirve con **"Deploy from a branch" (master / root)**. Si se
pushea el codigo Astro con esa configuracion, **la web en vivo se rompe** porque ya
no hay `index.html` en la raiz de `master` (todo se genera en `dist/`). Por eso el
orden importa:

1. **Merge local** de `redesign-astro` a `master` y borrar la rama temporal.
   **Sin push todavia.**
2. En GitHub, ve a **Settings -> Pages -> Build and deployment -> Source: "GitHub Actions"**.
   Cambiar ESTO **ANTES** de pushear. Mientras tanto, Pages sigue sirviendo la ultima
   version ya desplegada, asi que el sitio no se cae.
3. **Push a `master`**: el workflow construye y despliega automaticamente.
4. **Verificar** `https://frankalayza.me` en vivo (navegacion, HTTPS, imagenes).

> Si por error se pushea antes del paso 2, restaurar el Source a "GitHub Actions"
> de inmediato y relanzar el workflow desde la pestana Actions.

### Post-deploy

- Activar FormSubmit con el primer envio (ver seccion anterior).
- Confirmar que `dist/` contiene los mismos nombres `.html` que las URLs actuales
  (paridad 1:1) y el `404.html` propio.

## Licencia

Uso personal.

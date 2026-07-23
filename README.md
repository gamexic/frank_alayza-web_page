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

## Guía de estilo de prompts (marca Frank Alayza)

Receta para que CUALQUIER imagen o video que se genere en el futuro (Higgsfield u otro
modelo) salga en marca. Los prompts van en **inglés** (los modelos responden mejor); las
notas de proceso, en español. Regla de oro: negro profundo + dorado de firma, líneas
finas neurales, cabeza de perfil fusionada con nodos, premium — nunca gamer ni cartoon.

### Paleta de marca (hex completos)

| Rol | Hex |
|---|---|
| Fondo negro profundo | `#06060a` |
| Dorado — color de firma | `#fbbf24` |
| Dorado profundo (sombra / degradado) | `#d99a00` |
| Cian — acento neón | `#00d4ff` |
| Morado — acento neón | `#a855f7` |
| Verde WhatsApp (solo Clevun) | `#3DDC84` |

### Bloque de estilo BASE (reutilizable — copiar y pegar en cada prompt)

```
deep black background (#06060a), gold (#fbbf24) as the signature color, with subtle
cyan (#00d4ff) and purple (#a855f7) neon accents, extremely thin-line neural/circuit
aesthetic with softly glowing connected nodes, the brand motif is a human head seen in
profile fused with a network of connected nodes (human intelligence + technology),
cinematic lighting, soft bokeh glows, generous negative space, premium and
sophisticated, never gamer, never cartoon. No text, no logos (unless explicitly asked).
```

### Plantillas por tipo (bloque BASE + variables)

**Retrato de marca (Frank)** — vertical, editorial.
```
Cinematic vertical portrait of a young Latin American man (late 20s), short dark hair,
calm confident expression, smart dark outfit, warm gold (#fbbf24) rim light, faint
out-of-focus neural/circuit glow behind him. + [BLOQUE BASE]. Shallow depth of field,
high skin detail, sharp eyes, authentic and modern, not corporate stock.
```
> Crea un `soul_id` (subiendo varias fotos reales de Frank) y reutilízalo en TODOS los
> retratos para que el rostro sea consistente.

**Fondo abstracto tech** — mucho negro para poner texto encima.
```
Ultra-wide abstract background: a vast neural/circuit network. + [BLOQUE BASE]. Plenty
of darkness and negative space so text can sit on top. Calm, minimal, no focal subject.
```

**Cover editorial por categoría** — un solo acento por portada.
```
Abstract editorial cover. + [BLOQUE BASE], but the single signature accent color is
{ACENTO}. Motif: {MOTIVO}. Minimal, plenty of negative space, no text.
```
Acentos del blog: `ia-vida-real` → cian `#00d4ff` · `data-negocio` → dorado `#fbbf24` ·
`construyendo-productos` → dorado `#fbbf24` · `modelos-fundacionales` → cian `#00d4ff` ·
`escalada-disciplina` → morado `#a855f7`.

**Showcase de producto** — cover de negocio propio.
```
Abstract product cover for {PRODUCTO}. + [BLOQUE BASE]. Visual metaphor: {METAFORA}.
A single extra accent {ACENTO-PRODUCTO} blended into the brand palette. High-tech,
reliable, premium. No readable text, no logos.
```
> Ej. Clevun → burbujas de chat como nodos, acento verde `#3DDC84`. Iceguin → red de
> sensores/termómetros, acentos cian/hielo `#00d4ff`, silueta sutil de pingüino opcional.

**Video loop de fondo (8 s)** — para heros.
```
Abstract cinematic seamless loop. + [BLOQUE BASE]. Slow, hypnotic motion, subtle particle
drift, shallow depth of field. Nodes slowly coalesce toward the silhouette of a human
head in profile, then gently dissolve back into the network. 8 seconds, no audio.
```
> **Loop sin salto**: usa la MISMA imagen como `start_image` y `end_image`.
> **Audio SIEMPRE off** (ahorra créditos; en la web va en mute).

**Logo reveal (8 s, desde imagen)** — animación de marca.
```
Cinematic reveal on deep black (#06060a): dozens of small glowing gold fragments and
circuit nodes float and precisely assemble, piece by piece, into a single continuous-line
logo of a human head in profile fused with a network of connected nodes. Thin gold
(#fbbf24) lines light up as each connection locks into place, with faint cyan (#00d4ff)
and purple (#a855f7) sparks. Ends on the finished, centered, glowing logo. 8 s, no audio.
```
> Parte de una imagen del logo dorado (`src/assets/marca/gold-icon.png` o `gold-full.png`).
> Es un reveal: termina y se queda en el último frame (no loop).

### Parámetros recomendados por tipo

| Asset | Modelo Higgsfield | Aspect / Resolución | Notas |
|---|---|---|---|
| Video hero loop | `seedance1_5` (alt `cinematic_studio_3_0`) | 16:9 (21:9 opc.), 1080p / 4K, 8 s | audio OFF; mismo frame inicio/fin |
| Logo reveal | `higgsfield_preset` preset ANDROID ASSEMBLE (alt `veo3_1` i2v) | 8 s | imagen de partida = logo dorado; audio OFF |
| Retrato de marca | `soul_2` / `soul_cinematic` + `soul_id` | vertical 3:4 o 4:5, alta res | aquí se crea el `soul_id` |
| Retrato secundario | `soul_2` / `soul_cinematic` + MISMO `soul_id` | 16:9 o 4:5 | look documental / b-roll |
| Fondo neural | `nano_banana_pro` (alt `recraft_v4_1`) | 21:9, 4K | `recraft` fija los hex exactos |
| Cover de producto | `nano_banana_pro` (alt `recraft_v4_1`) | 16:9, 4K | — |
| Cover de artículo | `nano_banana_pro` (alt `recraft_v4_1`) | 16:9 (1200×675), 4K | 1 acento por categoría |
| Open Graph | `nano_banana_pro` | 1200×630 exacto, JPG | dejar espacio a la derecha para texto |

> **Ultra-wide 21:9**: Veo y Kling NO lo hacen (solo 16:9 / 9:16 / 1:1). Para 21:9 usa
> `seedance` o `cinematic_studio_3_0`.
> **Videos**: MP4, máximo 8 s, audio OFF, idealmente < 4 MB. Comprimir con ffmpeg:
> `ffmpeg -i in.mp4 -an -c:v libx264 -crf 25 -pix_fmt yuv420p -movflags +faststart out.mp4`
> (los assets actuales se comprimieron así: hero-loop 15 MB → 2.6 MB, logo-reveal 7.6 MB → 1.3 MB).

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

# Slots de assets Higgsfield

Esta carpeta es el "enchufe" para los assets (imagenes y videos) que Frank genera
manualmente en la web de Higgsfield. El componente `MediaSlot.astro` (fase F2) usa
`import.meta.glob('/src/assets/higgsfield/*')`: si el archivo con el nombre exacto
existe, lo muestra; si no existe, renderiza un fallback propio animado.

Para enchufar un asset basta con soltar el archivo aqui con el nombre exacto de la
lista. No hay que tocar codigo. El sitio se ve completo sin ninguno de estos archivos.

## Nombres exactos de archivo

| Archivo | Uso | Specs |
|---|---|---|
| `hero-loop.mp4` | Loop de fondo del hero (home) | 8s, 16:9, sin audio, mismo frame inicio/fin (loop seamless) |
| `logo-reveal.mp4` | Reveal del logo (cabeza-nodos) | 8s, sin audio |
| `retrato-frank.png` | Retrato principal (sobre-mi / home) | Vertical, identidad consistente (soul_id) |
| `retrato-secundario.jpg` | Retrato secundario / b-roll | Libre |
| `fondo-neural.jpg` | Fondo abstracto neural | 4K, 21:9 |
| `proyecto-clevun.jpg` | Cover del proyecto Clevun | 16:9, 4K |
| `proyecto-iceguin.jpg` | Cover del proyecto Iceguin | 16:9, 4K |
| `og-base.jpg` | Imagen Open Graph por defecto | 1200x630 |
| `article-cover-<categoria>.jpg` | Cover por categoria del blog (5) | 1200x675, una por cada categoria |

Todos los videos: audio OFF. Tope de duracion de video: 8 segundos.

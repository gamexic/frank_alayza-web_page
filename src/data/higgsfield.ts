// Manifiesto de los slots de assets Higgsfield (documentación viva).
// Frank genera estos assets manualmente en la web de Higgsfield y los suelta en
// src/assets/higgsfield/ con el nombre EXACTO. MediaSlot.astro los enchufa por
// convención de archivos: si el archivo existe lo usa; si no, muestra un fallback
// propio animado. El sitio se ve completo sin ninguno de estos assets.
//
// ready se mantiene en false hasta que el archivo real esté en la carpeta.
// Videos: audio SIEMPRE off, tope de duración 8 s.

export type HiggsfieldType = 'video' | 'image';

export interface HiggsfieldSlot {
  id: string;
  /** Nombre EXACTO del archivo a soltar en src/assets/higgsfield/. */
  file: string;
  type: HiggsfieldType;
  /** Especificaciones técnicas en texto. */
  specs: string;
  /** Página donde se usa. */
  page: string;
  /** Sección concreta dentro de la página. */
  section: string;
  /** true cuando el asset real ya está enchufado. */
  ready: boolean;
  /** Para slots con varias variantes (p. ej. covers por categoría). */
  variants?: string[];
}

export const higgsfieldSlots: HiggsfieldSlot[] = [
  {
    id: 'hero-loop',
    file: 'hero-loop.mp4',
    type: 'video',
    specs: '8 s, 16:9, sin audio, mismo frame de inicio y fin (loop seamless).',
    page: 'index',
    section: 'Hero — fondo en loop',
    ready: false,
  },
  {
    id: 'logo-reveal',
    file: 'logo-reveal.mp4',
    type: 'video',
    specs: '8 s, sin audio. Reveal del logo (cabeza fusionada con red de nodos).',
    page: 'global',
    section: 'Intro de marca / hero',
    ready: false,
  },
  {
    id: 'retrato-frank',
    file: 'retrato-frank.png',
    type: 'image',
    specs: 'Vertical, identidad consistente entre tomas (soul_id).',
    page: 'sobre-mi / index',
    section: 'Retrato principal',
    ready: false,
  },
  {
    id: 'retrato-secundario',
    file: 'retrato-secundario.jpg',
    type: 'image',
    specs: 'Formato libre. Retrato secundario o b-roll.',
    page: 'sobre-mi',
    section: 'Retrato secundario / apoyo',
    ready: false,
  },
  {
    id: 'fondo-neural',
    file: 'fondo-neural.jpg',
    type: 'image',
    specs: '4K, 21:9. Fondo abstracto neural (estilo circuit/neural de marca).',
    page: 'global',
    section: 'Fondo abstracto de secciones',
    ready: false,
  },
  {
    id: 'proyecto-clevun',
    file: 'proyecto-clevun.jpg',
    type: 'image',
    specs: '16:9, 4K. Cover del negocio propio Clevun.',
    page: 'proyectos',
    section: 'Tarjeta destacada — Clevun',
    ready: false,
  },
  {
    id: 'proyecto-iceguin',
    file: 'proyecto-iceguin.jpg',
    type: 'image',
    specs: '16:9, 4K. Cover del negocio propio Iceguin.',
    page: 'proyectos',
    section: 'Tarjeta destacada — Iceguin',
    ready: false,
  },
  {
    id: 'og-base',
    file: 'og-base.jpg',
    type: 'image',
    specs: '1200x630. Imagen Open Graph por defecto (compartir en redes).',
    page: 'global',
    section: 'SEO — Open Graph / Twitter Card',
    ready: false,
  },
  {
    id: 'article-cover',
    file: 'article-cover-<categoria>.jpg',
    type: 'image',
    specs:
      '1200x675, una por cada categoría del blog (5). Reemplaza <categoria> por el slug.',
    page: 'contenido / artículos',
    section: 'Cover por categoría',
    ready: false,
    variants: [
      'article-cover-ia-vida-real.jpg',
      'article-cover-data-negocio.jpg',
      'article-cover-construyendo-productos.jpg',
      'article-cover-modelos-fundacionales.jpg',
      'article-cover-escalada-disciplina.jpg',
    ],
  },
];

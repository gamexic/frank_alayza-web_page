// Recursos gratuitos. Fuente: recursos.html (4 grupos).
// Los 9 items descargables están "Próximamente" (available:false).
// El canal de YouTube es real y está disponible (available:true).
// Iconos del set propio (Icon.astro), reutilizando nombres confirmados.

export interface ResourceItem {
  id: string;
  /** Nombre del icono en el set propio (Icon.astro). */
  icon: string;
  title: string;
  description: string;
  /** Formato/etiqueta del recurso (p. ej. "PDF", "GitHub Template"). */
  format: string;
  /** true = disponible; false = "Próximamente" (botón deshabilitado). */
  available: boolean;
  /** URL destino cuando available es true. */
  url?: string;
  /** Texto del botón. */
  ctaLabel: string;
}

export interface ResourceGroup {
  id: string;
  title: string;
  subtitle: string;
  items: ResourceItem[];
}

export const resources: ResourceGroup[] = [
  {
    id: 'checklists',
    title: 'Checklists descargables',
    subtitle: 'Guías paso a paso para tareas comunes de datos e IA',
    items: [
      {
        id: 'checklist-antes-ml',
        icon: 'check',
        title: 'Checklist: antes de empezar un proyecto de ML',
        description:
          '10 preguntas que debes responder antes de escribir una línea de código en un proyecto de machine learning.',
        format: 'PDF',
        available: false,
        ctaLabel: 'Descargar',
      },
      {
        id: 'checklist-calidad-datos',
        icon: 'check',
        title: 'Checklist: calidad de datos',
        description:
          'Validaciones esenciales para asegurar que tus datos están listos para análisis o modelado.',
        format: 'PDF',
        available: false,
        ctaLabel: 'Descargar',
      },
      {
        id: 'checklist-deploy-modelo',
        icon: 'check',
        title: 'Checklist: deploy de modelo a producción',
        description:
          'Todo lo que necesitas verificar antes de poner tu modelo de ML en producción.',
        format: 'PDF',
        available: false,
        ctaLabel: 'Descargar',
      },
    ],
  },
  {
    id: 'plantillas',
    title: 'Plantillas',
    subtitle: 'Templates listos para usar en tus proyectos',
    items: [
      {
        id: 'template-estructura-ds',
        icon: 'app-web-ai',
        title: 'Template: estructura de proyecto de Data Science',
        description:
          'Estructura de carpetas y archivos base para proyectos de ciencia de datos reproducibles.',
        format: 'GitHub Template',
        available: false,
        ctaLabel: 'Ver template',
      },
      {
        id: 'template-dashboard-ejecutivo',
        icon: 'ciencia-datos',
        title: 'Template: dashboard ejecutivo',
        description:
          'Plantilla de dashboard con los KPIs más comunes para reportar a stakeholders.',
        format: 'Power BI / Notion',
        available: false,
        ctaLabel: 'Descargar',
      },
      {
        id: 'template-propuesta-datos',
        icon: 'consultoria-ia',
        title: 'Template: propuesta de proyecto de datos',
        description:
          'Documento tipo para presentar un proyecto de datos o IA a stakeholders no técnicos.',
        format: 'Notion / Google Docs',
        available: false,
        ctaLabel: 'Copiar template',
      },
    ],
  },
  {
    id: 'repos-snippets',
    title: 'Repos & Snippets',
    subtitle: 'Código abierto y snippets útiles',
    items: [
      {
        id: 'data-utils-py',
        icon: 'github',
        title: 'data-utils-py',
        description:
          'Colección de utilidades Python para validación de datos, logging y configuración de pipelines.',
        format: 'Python / PyPI',
        available: false,
        ctaLabel: 'Ver en GitHub',
      },
      {
        id: 'sql-snippets',
        icon: 'automatizacion',
        title: 'SQL Snippets Collection',
        description:
          'Queries SQL comunes para análisis: cohortes, funnels, métricas de retención y más.',
        format: 'SQL / Gist',
        available: false,
        ctaLabel: 'Ver snippets',
      },
      {
        id: 'llm-prompts-library',
        icon: 'llm-agentes',
        title: 'LLM Prompts Library',
        description:
          'Prompts efectivos para diferentes casos de uso con LLMs: análisis, código y documentación.',
        format: 'Markdown / Notion',
        available: false,
        ctaLabel: 'Ver librería',
      },
    ],
  },
  {
    id: 'video',
    title: 'Contenido en video',
    subtitle: 'Tutoriales y explicaciones en formato video',
    items: [
      {
        id: 'youtube-canal',
        icon: 'youtube',
        title: 'Canal de YouTube',
        description:
          'Tutoriales y explicaciones sobre IA aplicada, Python y data science. Suscríbete para ver los nuevos videos.',
        format: 'YouTube',
        available: true,
        url: 'https://www.youtube.com/@FrankAlayza44',
        ctaLabel: 'Visitar canal',
      },
    ],
  },
];

// Servicios que ofrece Frank. Fuente: servicios.html (7 servicios con features).
// Ángulo: builder de negocios de tecnología — cada servicio se enmarca en el
// impacto de negocio, con lo técnico AI Native como fortaleza.
// Iconos del set propio (Icon.astro). Nombres exactos definidos en el plan.

export interface Service {
  id: string;
  /** Nombre del icono en el set propio (Icon.astro). */
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const servicesIntro =
  'Construyo y hago crecer negocios de tecnología con IA. Estas son las áreas en las que puedo ayudarte a convertir una idea en un resultado medible.';

export const services: Service[] = [
  {
    id: 'consultoria-ia',
    icon: 'consultoria-ia',
    title: 'Consultoría de IA aplicada a negocio',
    description:
      'Te ayudo a identificar dónde la IA puede generar impacto real en tu negocio. Evaluamos casos de uso, viabilidad técnica y retorno esperado antes de invertir en desarrollo.',
    features: [
      'Auditoría de procesos automatizables',
      'Evaluación de madurez de datos',
      'Roadmap de implementación de IA',
      'Selección de tecnologías y proveedores',
    ],
  },
  {
    id: 'llm-agentes',
    icon: 'llm-agentes',
    title: 'Soluciones con LLMs y agentes',
    description:
      'Diseño y construyo soluciones basadas en modelos de lenguaje y agentes inteligentes: chatbots, asistentes, automatización de documentos y flujos que trabajan solos.',
    features: [
      'Chatbots y asistentes con LLMs',
      'Agentes autónomos para tareas específicas',
      'RAG (Retrieval Augmented Generation)',
      'Integración con APIs y sistemas existentes',
    ],
  },
  {
    id: 'app-web-ai',
    icon: 'app-web-ai',
    title: 'Aplicaciones web a medida',
    description:
      'Construyo aplicaciones web que conectan lógica de negocio, datos e IA para digitalizar procesos y escalar operaciones sobre una base técnica sólida.',
    features: [
      'Aplicaciones web personalizadas (frontend + backend)',
      'Integración con APIs, bases de datos y servicios cloud',
      'Módulos de autenticación, paneles y flujos internos',
      'Arquitectura limpia, mantenible y orientada a crecimiento',
    ],
  },
  {
    id: 'web-profesional',
    icon: 'web-profesional',
    title: 'Páginas web profesionales',
    description:
      'Diseño páginas web enfocadas en posicionar tu marca, comunicar con claridad tu propuesta de valor y convertir visitas en oportunidades reales.',
    features: [
      'Landing pages y sitios corporativos de alto impacto',
      'Portafolios personales con enfoque en marca profesional',
      'Diseño responsive y optimización de rendimiento',
      'Estructura SEO base y analítica para mejora continua',
    ],
  },
  {
    id: 'ciencia-datos',
    icon: 'ciencia-datos',
    title: 'Ciencia de datos para decisiones',
    description:
      'Convierto tus datos en información accionable. Desde análisis exploratorio hasta modelos predictivos que informan decisiones estratégicas.',
    features: [
      'Análisis exploratorio y estadístico',
      'Modelos de predicción y clasificación',
      'Segmentación y clustering',
      'Dashboards y visualización de datos',
    ],
  },
  {
    id: 'automatizacion',
    icon: 'automatizacion',
    title: 'Automatización y pipelines de datos',
    description:
      'Elimino trabajo manual y errores con pipelines automatizados. ETLs, integraciones, scraping y procesos que funcionan solos.',
    features: [
      'Diseño de pipelines ETL/ELT',
      'Automatización de reportes',
      'Web scraping y extracción de datos',
      'Orquestación y monitoreo',
    ],
  },
  {
    id: 'auditoria-kpis',
    icon: 'auditoria-kpis',
    title: 'Auditoría de datos, dashboards y KPIs',
    description:
      'Reviso tus dashboards, métricas y procesos de datos actuales. Identifico problemas, oportunidades de mejora y te entrego un plan de acción.',
    features: [
      'Revisión de calidad de datos',
      'Evaluación de KPIs y métricas',
      'Optimización de dashboards existentes',
      'Documentación y mejores prácticas',
    ],
  },
];

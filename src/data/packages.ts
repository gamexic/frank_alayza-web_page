// Paquetes de trabajo. Fuente: servicios.html (4 paquetes sin precios).
// El paquete "Aplicación Web AI Native" es el destacado (featured).
// Iconos reutilizan el set de servicios (Icon.astro), semánticamente afines.

export interface PackageCta {
  label: string;
  href: string;
}

export interface Package {
  id: string;
  /** Nombre del icono en el set propio (Icon.astro). */
  icon: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  idealFor: string;
  cta: PackageCta;
  /** Paquete resaltado con glow dorado en la UI. */
  featured: boolean;
  /** Etiqueta mostrada solo cuando featured es true. */
  badge?: string;
}

export const packagesIntro =
  'Planes pensados para convertir ideas en resultados medibles: estrategia, implementación y crecimiento continuo.';

export const packages: Package[] = [
  {
    id: 'sprint-estrategico-ai',
    icon: 'consultoria-ia',
    name: 'Sprint Estratégico AI',
    tagline: 'Claridad, enfoque y roadmap accionable',
    description:
      'Diagnóstico intensivo para definir dónde la IA, la automatización y los datos pueden generar mayor impacto en tu negocio desde el primer mes.',
    features: [
      'Workshop estratégico 1:1 (90-120 min)',
      'Auditoría de procesos y madurez de datos',
      'Priorización de casos de uso por impacto/viabilidad',
      'Roadmap 30/60/90 días con entregables claros',
      'Recomendación de stack tecnológico inicial',
    ],
    idealFor:
      'Equipos que quieren empezar bien, evitar improvisación y decidir con criterios técnicos y de negocio.',
    cta: { label: 'Reservar sprint', href: '/contacto' },
    featured: false,
  },
  {
    id: 'web-presencia-conversion',
    icon: 'web-profesional',
    name: 'Web Presencia & Conversión',
    tagline: 'Tu página web lista para vender',
    description:
      'Diseño y desarrollo de landing page o sitio corporativo profesional, optimizado para posicionar tu marca y captar oportunidades reales.',
    features: [
      'Diseño UX/UI responsive alineado a tu marca',
      'Copy estructurado para comunicar tu propuesta de valor',
      'Integración de formularios, analítica y SEO base',
      'Optimización de rendimiento y buenas prácticas web',
      'Entrega con guía de edición y soporte inicial',
    ],
    idealFor:
      'Profesionales y negocios que necesitan una presencia digital sólida, moderna y orientada a conversión.',
    cta: { label: 'Lanzar mi web', href: '/contacto' },
    featured: false,
  },
  {
    id: 'aplicacion-web-ai-native',
    icon: 'app-web-ai',
    name: 'Aplicación Web AI Native',
    tagline: 'Automatiza procesos y escala operación',
    description:
      'Construcción de una aplicación web a medida que integra software, datos e IA para resolver un proceso clave de tu negocio con impacto real.',
    features: [
      'Definición de alcance, objetivos y KPIs de éxito',
      'Desarrollo frontend + backend + base de datos',
      'Integración con APIs, LLMs/agentes y automatizaciones',
      'Dashboard de seguimiento y documentación técnica',
      'Handoff y capacitación del equipo',
    ],
    idealFor:
      'Equipos que quieren dejar atrás procesos manuales y operar con una solución digital inteligente.',
    cta: { label: 'Construir mi aplicación', href: '/contacto' },
    featured: true,
    badge: 'Más solicitado',
  },
  {
    id: 'partner-tecnico-mensual',
    icon: 'automatizacion',
    name: 'Partner Técnico Mensual',
    tagline: 'Evolución continua con foco en negocio',
    description:
      'Acompañamiento recurrente para mantener, optimizar y escalar tus soluciones web, de IA y de datos con prioridad y visión estratégica.',
    features: [
      'Bolsa de horas mensual dedicada',
      'Mejoras evolutivas y nuevas funcionalidades',
      'Mantenimiento, monitoreo y optimización continua',
      'Reuniones de estrategia y priorización',
      'Soporte técnico prioritario para tu equipo',
    ],
    idealFor:
      'Empresas que buscan un partner técnico confiable para crecer de forma sostenida.',
    cta: { label: 'Quiero acompañamiento', href: '/contacto' },
    featured: false,
  },
];

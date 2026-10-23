// Proyectos. Dos niveles:
//  - businesses: negocios propios estrella (Clevun, Iceguin) con nombre y enlace.
//  - cases: 3 casos anónimos existentes (Problema / Enfoque / Resultado).
// Fuente: proyectos.html (casos) + posicionamiento del plan (negocios propios).

export interface Business {
  id: string;
  /** Nombre del icono temático del set propio (Icon.astro). */
  icon: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  /** Acento de marca para el glow/borde de la tarjeta. */
  accent: 'cyan' | 'gold' | 'magenta';
  /** Etiqueta de contexto (p. ej. "Negocio propio"). */
  badge: string;
  featured: boolean;
}

export interface Case {
  id: string;
  /** Etiqueta de tipo de trabajo (se muestra como badge). */
  badge: string;
  /** Slug de categoría para la FilterBar. */
  category: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  /** Métrica destacada (contador). Solo cuando existe un dato real. */
  metric?: string;
  /** Etiqueta corta de la métrica. */
  metricLabel?: string;
  /** Demostración pública independiente con información sintética. */
  demoUrl?: string;
}

// Categorías para la FilterBar de la página de proyectos (casos anónimos).
export interface CaseCategory {
  id: string;
  label: string;
}

export const caseCategories: CaseCategory[] = [
  { id: 'all', label: 'Todos' },
  { id: 'analitica-predictiva', label: 'Analítica predictiva' },
  { id: 'optimizacion-operativa', label: 'Optimización operativa' },
  { id: 'transformacion-digital', label: 'Transformación digital' },
];

export const businesses: Business[] = [
  {
    id: 'clevun',
    icon: 'whatsapp',
    name: 'Clevun',
    // CONFIRMAR FRANK: descripción comercial de Clevun (redactada, no citada del sitio).
    tagline: 'CRM con agente de IA por WhatsApp',
    description:
      'Plataforma que atiende, agenda y cobra por WhatsApp con un agente de IA. Los negocios de servicios centralizan a sus clientes, automatizan recordatorios y responden 24/7 sin perder el trato humano.',
    url: 'https://clevun.com',
    accent: 'cyan',
    badge: 'Negocio propio',
    featured: true,
  },
  {
    id: 'iceguin',
    icon: 'termometro',
    name: 'Iceguin',
    // CONFIRMAR FRANK: descripción comercial de Iceguin (redactada, no citada del sitio).
    tagline: 'Monitoreo de temperatura para refrigeración comercial',
    description:
      'Sistema de monitoreo de temperatura con alertas en tiempo real para refrigeración comercial. Cuida la cadena de frío del sector alimentario y avisa antes de que una falla se convierta en pérdida.',
    url: 'https://iceguin.com',
    accent: 'cyan',
    badge: 'Negocio propio',
    featured: true,
  },
];

export const cases: Case[] = [
  {
    id: 'simulador-escenarios-consultora',
    badge: 'Analítica predictiva',
    category: 'analitica-predictiva',
    title: 'Simulador CPM de equipos y escenarios competitivos',
    problem:
      'Evaluar equipos para concursos de auditoría exige combinar cargos, experiencia, horas y disponibilidad. La cantidad de alternativas dificulta comparar sociedades y planificar varias entidades.',
    approach:
      'Desarrollo de un simulador que compara puntajes ponderados, busca equipos para una meta de PPP y considera los recursos comprometidos en otros escenarios.',
    result:
      'Una demo interactiva permite explorar el modelo con sociedades, perfiles y entidades ficticias. Muestra equipos viables, puntajes y reservas sin exponer información de trabajo ni estimar probabilidades de ganar.',
    demoUrl: '/demos/cpm/index.html',
  },
  {
    id: 'digitalizacion-administrativa',
    badge: 'Optimización operativa',
    category: 'optimizacion-operativa',
    title: 'Digitalización administrativa para negocio particular',
    problem:
      'El negocio tenía procesos administrativos y gestión de datos mayormente manuales, con baja trazabilidad y poca velocidad operativa.',
    approach:
      'Implementación de plantillas de Excel con fórmulas, digitalización de procesos clave y automatización de flujos entre aplicaciones según cada necesidad.',
    result:
      'Operación más ordenada y ágil, mejor adopción tecnológica y menor dependencia de tareas repetitivas gracias a automatizaciones.',
  },
  {
    id: 'negocio-orientado-datos',
    badge: 'Transformación digital',
    category: 'transformacion-digital',
    title: 'Negocio independiente orientado por datos',
    problem:
      'El negocio operaba con registros en hojas físicas, sin visibilidad del desempeño ni información confiable para tomar decisiones.',
    approach:
      'Digitalización integral del negocio, estructuración de datos y automatización de campañas de marketing para medir resultados y decidir en base a evidencia.',
    result:
      'Aumento sostenido de clientes e incremento de ingresos superior al 120%.',
    // CONFIRMAR FRANK: cifra "+120%" migrada tal cual del sitio actual.
    metric: '+120%',
    metricLabel: 'ingresos',
  },
];

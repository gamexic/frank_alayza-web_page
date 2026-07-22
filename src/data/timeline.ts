// Trayectoria (línea de tiempo) + estadísticas. Fuente: sobre-mi.html.
// Orden: más reciente primero. Cifras reales, con redacción honesta.

export interface TimelineEntry {
  id: string;
  /** Año mostrado en el badge. */
  year: string;
  /** Periodo textual (p. ej. "2024-2 – Actualidad"). */
  period: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  /** Aclaración honesta bajo la cifra (opcional). */
  note?: string;
}

export const timeline: TimelineEntry[] = [
  {
    id: 'ai-engineer',
    year: '2026',
    period: '2026-1 – Actualidad',
    title: 'AI Engineer / AI Native',
    description:
      'Construyo agentes de IA, flujos RAG y automatizaciones end-to-end. Fortalezco mi stack con LangChain, LangGraph, Azure AI, GCP y FastAPI, trabajando con IDEs asistidos por IA para acelerar entregables.',
  },
  {
    id: 'universidad-de-lima',
    year: '2024',
    period: '2024-2 – Actualidad',
    title: 'Universidad de Lima — Administración',
    description:
      'Inicié la carrera en 2024-2, reforzando estrategia, finanzas, operaciones y gestión para construir y liderar negocios de tecnología con enfoque de negocio.',
  },
  {
    id: 'cs50',
    year: '2024',
    period: '2024',
    title: 'Fundamentos sólidos en CS y programación',
    description:
      'Completé HarvardX CS50x y CS50P, consolidando lógica, algoritmos y desarrollo en Python como base para construir soluciones técnicas más robustas.',
  },
  {
    id: 'data-ia-datacamp',
    year: '2024',
    period: '2024',
    title: 'Data + IA aplicada',
    description:
      'Fortalecí SQL, análisis de datos y uso de la API de OpenAI con rutas de DataCamp, integrando capacidades de IA en flujos prácticos de análisis y automatización.',
  },
  {
    id: 'ingles-icpna',
    year: '2023',
    period: '2023',
    title: 'Inglés avanzado profesional',
    description:
      'Completé el Advanced Program of English en ICPNA Perú, fortaleciendo la comunicación técnica y el acceso a formación global en IA y software.',
  },
];

// Estadísticas. Cifras reales; la nota aclara el conteo de "años programando".
// CONFIRMAR FRANK: redacción honesta de la cifra de años (autodidacta + cursos,
// aplicado profesionalmente desde 2024).
export const stats: Stat[] = [
  { value: 15, suffix: '+', label: 'Proyectos completados' },
  {
    value: 6,
    suffix: '+',
    label: 'Años programando',
    note: 'Autodidacta y cursos; aplicado profesionalmente desde 2024',
  },
  { value: 110, suffix: '+', label: 'Certificaciones' },
];

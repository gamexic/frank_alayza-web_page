// Garantías de trabajo. Fuente: servicios.html (4 garantías).
// Iconos del set propio (Icon.astro): se reutilizan nombres del set de valores
// y servicios, semánticamente afines a cada compromiso.

export interface Guarantee {
  id: string;
  /** Nombre del icono en el set propio (Icon.astro). */
  icon: string;
  title: string;
  description: string;
}

export const guaranteesIntro =
  'Compromisos concretos para que tu inversión en tecnología avance con control, calidad y resultados.';

export const guarantees: Guarantee[] = [
  {
    id: 'alcance-presupuesto',
    icon: 'claridad',
    title: 'Alcance y presupuesto claros',
    description:
      'Antes de iniciar definimos alcance, entregables, cronograma y costos. Si aparece un cambio, lo documentamos y lo aprobamos contigo.',
  },
  {
    id: 'calidad-tecnica',
    icon: 'auditoria-kpis',
    title: 'Calidad técnica verificable',
    description:
      'Construyo con buenas prácticas, documentación y handoff ordenado para que tu equipo pueda mantener y escalar la solución sin dependencia.',
  },
  {
    id: 'comunicacion-seguimiento',
    icon: 'consultoria-ia',
    title: 'Comunicación y seguimiento',
    description:
      'Recibes avances frecuentes, próximos pasos y riesgos identificados en lenguaje claro, para mantener visibilidad total del proyecto.',
  },
  {
    id: 'confidencialidad-soporte',
    icon: 'etica',
    title: 'Confidencialidad y soporte post-lanzamiento',
    description:
      'Trabajo con confidencialidad profesional (NDA cuando aplica) y acompaño la estabilización inicial para asegurar una implementación confiable.',
  },
];

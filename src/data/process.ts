// Proceso de trabajo (4 pasos). Fuente: servicios.html ("Mi proceso de trabajo").
// Iconos del set propio (Icon.astro), nombres exactos del plan.

export interface ProcessStep {
  id: string;
  /** Nombre del icono en el set propio (Icon.astro). */
  icon: string;
  /** Número de paso (1-4). */
  step: number;
  title: string;
  description: string;
}

export const processIntro = 'Metodología clara para entregar resultados.';

export const process: ProcessStep[] = [
  {
    id: 'descubrimiento',
    icon: 'descubrimiento',
    step: 1,
    title: 'Descubrimiento',
    description:
      'Entiendo tu negocio, objetivos y datos disponibles, y definimos juntos las métricas de éxito.',
  },
  {
    id: 'propuesta',
    icon: 'propuesta',
    step: 2,
    title: 'Propuesta',
    description:
      'Te presento un plan detallado con alcance, entregables, timeline y presupuesto transparente.',
  },
  {
    id: 'desarrollo',
    icon: 'desarrollo',
    step: 3,
    title: 'Desarrollo',
    description:
      'Construyo la solución con entregas incrementales, comunicación constante y ajustes según tu feedback.',
  },
  {
    id: 'entrega',
    icon: 'entrega',
    step: 4,
    title: 'Entrega',
    description:
      'Handoff completo con documentación, capacitación y soporte post-entrega incluido.',
  },
];

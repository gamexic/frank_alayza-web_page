// Valores que guían el trabajo (4) + Misión y Visión.
// Fuente: sobre-mi.html. Iconos del set propio (Icon.astro), nombres del plan.

export interface Value {
  id: string;
  /** Nombre del icono en el set propio (Icon.astro). */
  icon: string;
  title: string;
  description: string;
}

export interface MissionVisionItem {
  id: string;
  /** Nombre del icono en el set propio (Icon.astro). */
  icon: string;
  title: string;
  description: string;
}

// Misión y Visión (dos tarjetas superiores en la sección de valores).
// CONFIRMAR FRANK: misión y visión reformuladas al posicionamiento "builder de
// negocios de tecnología" (el sitio actual hablaba de "democratizar el acceso a
// la IA" y "referente en la aplicación práctica de IA").
export const missionVision: MissionVisionItem[] = [
  {
    id: 'mision',
    icon: 'builder',
    title: 'Misión',
    description:
      'Construir negocios de tecnología que hagan la IA y los datos accesibles, ayudando a empresas y profesionales a tomar mejores decisiones basadas en evidencia.',
  },
  {
    id: 'vision',
    icon: 'growth',
    title: 'Visión',
    description:
      'Ser un referente en la creación de negocios de tecnología con IA en Latinoamérica, combinando excelencia técnica con visión de negocio.',
  },
];

export const values: Value[] = [
  {
    id: 'disciplina',
    icon: 'disciplina',
    title: 'Disciplina',
    description:
      'Los resultados vienen del trabajo constante y metódico, no de atajos.',
  },
  {
    id: 'claridad',
    icon: 'claridad',
    title: 'Claridad',
    description:
      'Comunicación directa, sin jerga innecesaria. Que entiendas cada paso.',
  },
  {
    id: 'impacto',
    icon: 'impacto',
    title: 'Impacto',
    description:
      'Me enfoco en resultados medibles que generen valor real, no en tecnología por la tecnología.',
  },
  {
    id: 'etica',
    icon: 'etica',
    title: 'Ética',
    description:
      'IA responsable, respeto por la privacidad de datos y transparencia en todo lo que hago.',
  },
];

// Habilidades técnicas (5 grupos con nivel por tag). Fuente: sobre-mi.html.
// Iconos de grupo del set propio (Icon.astro), semánticamente afines.

export type SkillLevel = 'advanced' | 'intermediate';

export interface SkillTag {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  /** Nombre del icono en el set propio (Icon.astro). */
  icon: string;
  title: string;
  tags: SkillTag[];
}

export const skillsIntro = 'Herramientas y tecnologías con las que trabajo.';

export const skills: SkillGroup[] = [
  {
    id: 'lenguajes',
    icon: 'app-web-ai',
    title: 'Lenguajes',
    tags: [
      { name: 'Python', level: 'advanced' },
      { name: 'SQL', level: 'advanced' },
      { name: 'JavaScript', level: 'intermediate' },
      { name: 'HTML/CSS', level: 'intermediate' },
    ],
  },
  {
    id: 'ia-generativa',
    icon: 'llm-agentes',
    title: 'IA Generativa',
    tags: [
      { name: 'LLMs', level: 'advanced' },
      { name: 'Prompt Engineering', level: 'advanced' },
      { name: 'LangChain', level: 'intermediate' },
      { name: 'LangGraph', level: 'intermediate' },
    ],
  },
  {
    id: 'data',
    icon: 'ciencia-datos',
    title: 'Data',
    tags: [
      { name: 'Ingeniería de Datos', level: 'advanced' },
      { name: 'SQL Analytics', level: 'advanced' },
      { name: 'Pandas/NumPy', level: 'intermediate' },
      { name: 'Estadística aplicada', level: 'intermediate' },
    ],
  },
  {
    id: 'cloud-backend',
    icon: 'automatizacion',
    title: 'Cloud / Backend',
    tags: [
      { name: 'Google Cloud Platform', level: 'advanced' },
      { name: 'Azure AI (RAG)', level: 'advanced' },
      { name: 'FastAPI', level: 'intermediate' },
      { name: 'OpenAI API', level: 'intermediate' },
    ],
  },
  {
    id: 'negocio-comunicacion',
    icon: 'consultoria-ia',
    title: 'Negocio / Comunicación',
    tags: [
      { name: 'Análisis de negocio', level: 'advanced' },
      { name: 'Liderazgo en proyectos AI', level: 'advanced' },
      { name: 'Comunicación de datos', level: 'advanced' },
      { name: 'Inglés avanzado (ICPNA)', level: 'intermediate' },
    ],
  },
];

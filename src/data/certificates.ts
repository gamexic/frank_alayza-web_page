// Certificados destacados (12). Fuente: certificados.html.
// Los PDFs viven en public/assets/certificados/ (nombres verificados en disco).
// category se usa para la FilterBar.

export type CertCategory =
  | 'ia-generativa'
  | 'data-ingenieria'
  | 'cloud-ml'
  | 'desarrollo'
  | 'idiomas';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: CertCategory;
  /** Ruta pública al PDF (public/assets/certificados/*). */
  pdf: string;
}

export interface CertFilter {
  id: 'all' | CertCategory;
  label: string;
}

// Filtros de la FilterBar (orden de aparición).
export const certFilters: CertFilter[] = [
  { id: 'all', label: 'Todas' },
  { id: 'ia-generativa', label: 'IA Generativa' },
  { id: 'data-ingenieria', label: 'Data e Ingeniería' },
  { id: 'cloud-ml', label: 'Cloud / ML' },
  { id: 'desarrollo', label: 'Desarrollo' },
  { id: 'idiomas', label: 'Idiomas' },
];

// Total y plataformas para el resumen de "formación continua".
export const certificatesTotal = '110+';
export const certificatesPlatforms = ['Platzi', 'DataCamp', 'HarvardX', 'ICPNA'];

export const certificates: Certificate[] = [
  {
    id: 'cs50x',
    title: 'CS50 Introduction to Computer Science',
    issuer: 'HarvardX / edX',
    year: '2024',
    category: 'desarrollo',
    pdf: '/assets/certificados/cs50-introduction-to-computer-science-harvardx.pdf',
  },
  {
    id: 'cs50p',
    title: 'CS50 Introduction to Programming with Python',
    issuer: 'HarvardX / edX',
    year: '2024',
    category: 'desarrollo',
    pdf: '/assets/certificados/cs50-introduction-to-programming-with-python-harvardx.pdf',
  },
  {
    id: 'fastapi',
    title: 'Curso de FastAPI',
    issuer: 'Platzi',
    year: '2026',
    category: 'desarrollo',
    pdf: '/assets/certificados/fastapi-platzi.pdf',
  },
  {
    id: 'fundamentos-ingenieria-datos',
    title: 'Curso de Fundamentos de Ingeniería de Datos',
    issuer: 'Platzi',
    year: '2026',
    category: 'data-ingenieria',
    pdf: '/assets/certificados/fundamentos-ingenieria-datos-platzi.pdf',
  },
  {
    id: 'intermediate-sql',
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    year: '2024',
    category: 'data-ingenieria',
    pdf: '/assets/certificados/intermediate-sql-datacamp.pdf',
  },
  {
    id: 'big-data-ml-gcp',
    title: 'Curso de Big Data y Machine Learning con Google Cloud Platform',
    issuer: 'Platzi',
    year: '2026',
    category: 'cloud-ml',
    pdf: '/assets/certificados/big-data-machine-learning-gcp-platzi.pdf',
  },
  {
    id: 'rag-azure',
    title: 'Curso de RAG con Microsoft Azure',
    issuer: 'Platzi',
    year: '2026',
    category: 'cloud-ml',
    pdf: '/assets/certificados/rag-microsoft-azure-platzi.pdf',
  },
  {
    id: 'fundamentos-llms',
    title: 'Curso de Fundamentos de LLMs',
    issuer: 'Platzi',
    year: '2026',
    category: 'ia-generativa',
    pdf: '/assets/certificados/fundamentos-llms-platzi.pdf',
  },
  {
    id: 'langchain',
    title: 'Curso de LangChain',
    issuer: 'Platzi',
    year: '2026',
    category: 'ia-generativa',
    pdf: '/assets/certificados/langchain-platzi.pdf',
  },
  {
    id: 'agentes-langgraph',
    title: 'Curso para Crear Agentes de AI con LangGraph',
    issuer: 'Platzi',
    year: '2026',
    category: 'ia-generativa',
    pdf: '/assets/certificados/agentes-ai-langgraph-platzi.pdf',
  },
  {
    id: 'openai-api',
    title: 'Working with the OpenAI API',
    issuer: 'DataCamp',
    year: '2024',
    category: 'ia-generativa',
    pdf: '/assets/certificados/working-openai-api-datacamp.pdf',
  },
  {
    id: 'ingles-icpna',
    title: 'Advanced Program of English',
    issuer: 'ICPNA Perú',
    year: '2023',
    category: 'idiomas',
    pdf: '/assets/certificados/advanced-program-english-icpna.pdf',
  },
];

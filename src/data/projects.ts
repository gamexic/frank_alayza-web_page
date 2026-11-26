// Proyectos. Dos niveles:
//  - businesses: negocios propios estrella (Clevun, Iceguin) con nombre y enlace.
//  - games: juegos 3D propios (se juegan en el navegador).
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

export interface Game {
  id: string;
  name: string;
  tagline: string;
  genre: string;
  description: string;
  url: string;
  /** Acento de marca para el glow/borde de la tarjeta. */
  accent: 'cyan' | 'gold' | 'magenta';
  /** Chips "qué incluye" (derivados de lo que el juego realmente ofrece). */
  features: string[];
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

// Juegos 3D que Frank desarrolló. Se juegan en el navegador (GitHub Pages).
export const games: Game[] = [
  {
    id: 'prismate',
    name: 'PRISMATE',
    tagline: 'Jaque mate en todos los colores.',
    genre: 'Ajedrez 3D',
    description:
      'Un reino de cristal contra un ejército de obsidiana. Tablero 3D que puedes girar, piezas originales reconocibles por su forma y una computadora a tu medida.',
    url: 'https://gamexic.github.io/prismate/',
    accent: 'cyan',
    features: ['5 niveles de dificultad', 'Tutorial desde cero', 'Dos jugadores'],
  },
  {
    id: 'kabumba',
    name: 'KABUMBA',
    tagline: 'Cava, piensa… ¡KABUM!',
    genre: 'Buscaminas 3D',
    description:
      'Buscaminas en relieve con práctica guiada, pistas razonadas y niveles hasta experto. Los récords se guardan en tu navegador.',
    url: 'https://gamexic.github.io/kabumba/',
    accent: 'gold',
    features: ['Práctica guiada', 'Pistas', 'Hasta nivel experto'],
  },
  {
    id: 'billonaria',
    name: 'BILLONARIA',
    tagline: 'Compra el mundo, quiebra a tus amigos.',
    genre: 'Juego de propiedades 3D',
    description:
      'Juego de mesa de propiedades con cuatro ediciones temáticas de tablero, fichas 3D, subastas y partidas de 2 a 6 jugadores, con bots y música ambiental propia de cada edición.',
    url: 'https://gamexic.github.io/billonaria/',
    accent: 'magenta',
    features: ['4 ediciones temáticas', '2 a 6 jugadores', 'Subastas y bots'],
  },
  {
    id: 'flipazo',
    name: 'FLIPAZO',
    tagline: 'Mira. Memoriza. ¡Flipa!',
    genre: 'Memoria de cartas 3D',
    description:
      'Juego de memoria con cartas 3D y parejas disparatadas, como un gato astronauta o un queso al teléfono. Las cartas se muestran unos segundos, se voltean y tienes tres vidas para encontrar todos los pares.',
    url: 'https://gamexic.github.io/flipazo/',
    accent: 'cyan',
    features: ['8 niveles', '7 ediciones de cartas', '3 vidas'],
  },
  {
    id: 'reventon',
    name: 'REVENTÓN',
    tagline: 'Revienta. Voltea. Repite.',
    genre: 'Pop-it antiestrés 3D',
    description:
      'Pop-it de silicona en 3D para reventar burbujas una a una o arrastrando el dedo, con sonidos suaves que cambian según el material. Voltea la placa y vuelve a empezar, tantas veces como quieras.',
    url: 'https://gamexic.github.io/reventon/',
    accent: 'magenta',
    features: ['9 formas de placa', '8 mundos de color', '7 materiales y 6 sonidos'],
  },
  {
    id: 'congelazo',
    name: 'CONGELAZO',
    tagline: 'No te muevas. No parpadees.',
    genre: 'Terror 3D de congelados',
    description:
      'Versión de terror de congelados: avanzas mientras el vigilante mira la pared y te quedas inmóvil cuando se voltea. Juega como participante o como vigilante, con cuatro personajes y tres escenarios con sonido envolvente.',
    url: 'https://gamexic.github.io/congelazo/',
    accent: 'magenta',
    features: ['2 roles', '3 escenarios', '4 personajes'],
  },
  {
    id: 'squishazo',
    name: 'SQUISHAZO',
    tagline: 'Aprieta y respira.',
    genre: 'Squishies antiestrés 3D',
    description:
      'Squishies 3D blandos y realistas para apretar, arrastrar y soltar mientras se deforman y vuelven despacio a su forma. Cambia la forma, la textura, el color, la carita, el sonido y los efectos, y relájate.',
    url: 'https://gamexic.github.io/squishazo/',
    accent: 'gold',
    features: ['26 formas', '22 texturas', '18 caritas y 12 sonidos'],
  },
  {
    id: 'turbazo',
    name: 'TURBAZO',
    tagline: 'Derrapa. Salta. ¡Gana!',
    genre: 'Carreras 3D',
    description:
      'Carreras 3D contra cinco rivales en cuatro pistas distintas. Da vueltas, salta rampas rectas y diagonales, derrapa para cargar el turbo y llega primero a la meta, con joystick en pantalla o con el teclado.',
    url: 'https://gamexic.github.io/turbazo/',
    accent: 'magenta',
    features: ['6 corredores', '4 pistas', 'Rampas y turbo'],
  },
  {
    id: 'chiton',
    name: 'CHITÓN',
    tagline: 'Escóndete. Aguanta el estornudo.',
    genre: 'Escondite 3D',
    description:
      'Escondite 3D contra un cazador que aparece al azar. Eliges escenario, tu número y tu escondite; los demás jugadores se esconden también, hacen ruido y lanzan piedras mientras el cazador escucha y busca. Todo con humor, sin sangre.',
    url: 'https://gamexic.github.io/chiton/',
    accent: 'gold',
    features: ['4 escenarios', '5 cazadores', 'Hasta 8 jugadores'],
  },
];

export const cases: Case[] = [
  {
    id: 'simulador-escenarios-consultora',
    badge: 'Analítica predictiva',
    category: 'analitica-predictiva',
    title: 'Simulador de equipos y escenarios competitivos',
    problem:
      'Evaluar equipos para concursos de auditoría exige combinar cargos, experiencia, horas y disponibilidad. La cantidad de alternativas dificulta comparar sociedades y planificar varias entidades.',
    approach:
      'Desarrollo de un simulador que compara puntajes ponderados, busca equipos para una meta de PPP y considera los recursos comprometidos en otros escenarios.',
    result:
      'Una demo interactiva permite explorar el modelo con sociedades, perfiles y entidades ficticias. Muestra equipos viables, puntajes y reservas sin exponer información de trabajo ni estimar probabilidades de ganar.',
    demoUrl: '/demos/escenarios/index.html',
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

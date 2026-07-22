// Preguntas frecuentes. Fuente: servicios.html (6 FAQ).
// Se respetan los tiempos declarados: web 2-4 semanas, aplicación 4-10 semanas.

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqIntro =
  'Respuestas claras para ayudarte a decidir con seguridad el mejor camino para tu proyecto.';

export const faq: FaqItem[] = [
  {
    id: 'que-proyectos-que-paquete',
    question: '¿Qué tipo de proyectos tomas y cómo sé qué paquete elegir?',
    answer:
      'Trabajo con startups, pymes y equipos de empresas consolidadas. Si necesitas claridad, empieza con Sprint Estratégico AI; si buscas presencia digital, Web Presencia & Conversión; si quieres digitalizar y automatizar un proceso clave, Aplicación Web AI Native; y si ya tienes base tecnológica, Partner Técnico Mensual.',
  },
  {
    id: 'que-necesito-para-iniciar',
    question: '¿Qué necesito para iniciar y cómo es el proceso de arranque?',
    answer:
      'Con una llamada estratégica es suficiente para comenzar. Allí definimos objetivos, alcance, entregables, tiempos y prioridades. Si tus datos aún no están ordenados, incluyo un plan de estructuración para avanzar sin fricciones.',
  },
  {
    id: 'en-cuanto-tiempo-resultados',
    question: '¿En cuánto tiempo se ven resultados y entregables?',
    answer:
      'El tiempo depende del alcance. Una web profesional suele tomar de 2 a 4 semanas y una aplicación web AI Native de 4 a 10 semanas. Trabajo con entregas parciales para que veas avance real desde etapas tempranas.',
  },
  {
    id: 'codigo-documentacion-propiedad',
    question: '¿El código, la documentación y la propiedad intelectual son míos?',
    answer:
      'Sí. Entrego documentación y handoff completo para que tu equipo tenga control operativo. La propiedad intelectual y los accesos finales se definen desde el inicio de forma transparente.',
  },
  {
    id: 'trabajar-con-mi-equipo-nda',
    question: '¿Puedes trabajar con mi equipo actual y firmar NDA?',
    answer:
      'Sí, me integro sin problema con equipos internos o proveedores externos y trabajo de forma remota con clientes de distintos países. También firmo acuerdos de confidencialidad (NDA) cuando el proyecto lo requiere.',
  },
  {
    id: 'soporte-post-lanzamiento',
    question: '¿Qué soporte recibo después del lanzamiento?',
    answer:
      'Incluyo una fase inicial de estabilización y soporte para asegurar una salida segura a producción. Si necesitas evolución continua, el paquete Partner Técnico Mensual te da prioridad, mejoras y acompañamiento estratégico recurrente.',
  },
];

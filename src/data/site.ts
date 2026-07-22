// Datos globales del sitio. Fuente unica de verdad para marca, contacto y redes.

export interface SocialLink {
  id: string;
  label: string;
  handle: string;
  url: string;
}

export interface SiteData {
  name: string;
  role: string;
  tagline: string;
  description: string;
  email: string;
  domain: string;
  url: string;
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  cvPath: string;
  socials: SocialLink[];
}

// Tagline provisional: pendiente de confirmar con Frank (posicionamiento
// "builder de negocios de tecnologia"). Ver plan, "Pendientes de confirmacion".
export const site: SiteData = {
  name: 'Frank Alayza',
  role: 'Builder de negocios de tecnologia con IA',
  tagline: 'Transformo datos en decisiones y codigo en soluciones con impacto real.',
  description:
    'Administrador de negocios de tecnologia y builder AI Native. Construyo y administro negocios con inteligencia artificial: agentes, automatizaciones y software con impacto real.',
  email: 'frankalayzah@gmail.com',
  domain: 'frankalayza.me',
  url: 'https://frankalayza.me',
  location: {
    city: 'Lima',
    country: 'Peru',
    timezone: 'GMT-5',
  },
  cvPath: '/assets/cv/cv-frank-alayza.pdf',
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'frank-alayza-herrera',
      url: 'https://www.linkedin.com/in/frank-alayza-herrera-0a79152b1',
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'gamexic',
      url: 'https://github.com/gamexic',
    },
    {
      id: 'x',
      label: 'X',
      handle: 'gamexiic',
      url: 'https://x.com/gamexiic',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: 'frank_alayza',
      url: 'https://www.instagram.com/frank_alayza',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      handle: 'FrankAlayza44',
      url: 'https://www.youtube.com/@FrankAlayza44',
    },
  ],
};

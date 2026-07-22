// Navegacion principal. 8 items + enlace al CV.
// URLs sin barra final (astro.config: trailingSlash 'never', build.format 'file').

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Contenido', href: '/contenido' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Certificados', href: '/certificados' },
  { label: 'Contacto', href: '/contacto' },
];

export const cvLink: NavItem = {
  label: 'Descargar CV',
  href: '/assets/cv/cv-frank-alayza.pdf',
};

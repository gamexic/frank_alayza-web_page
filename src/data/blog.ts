// Metadatos de las categorías del blog. Fuente única de verdad para etiqueta
// y acento de marca por categoría. Los valores coinciden 1:1 con el enum de
// `category` en src/content.config.ts.

export type BlogCategory =
  | 'ia-vida-real'
  | 'data-negocio'
  | 'construyendo-productos'
  | 'modelos-fundacionales'
  | 'escalada-disciplina';

export type BlogAccent = 'gold' | 'cyan' | 'purple';

export interface BlogCategoryMeta {
  label: string;
  accent: BlogAccent;
}

export const blogCategories: Record<BlogCategory, BlogCategoryMeta> = {
  'ia-vida-real': { label: 'IA para la vida real', accent: 'cyan' },
  'data-negocio': { label: 'Data para negocio', accent: 'gold' },
  'construyendo-productos': { label: 'Construyendo productos', accent: 'gold' },
  'modelos-fundacionales': { label: 'Modelos fundacionales', accent: 'cyan' },
  'escalada-disciplina': { label: 'Escalada y disciplina', accent: 'purple' },
};

// Icono decorativo propio (Icon.astro) por categoría — eco del logo (nodo/red)
// y motivos temáticos. Usado en las portadas CSS de las tarjetas y el hero.
export const blogCategoryIcon: Record<BlogCategory, string> = {
  'ia-vida-real': 'nodo-red',
  'data-negocio': 'growth',
  'construyendo-productos': 'builder',
  'modelos-fundacionales': 'nodo-red',
  'escalada-disciplina': 'escalada',
};

// Filtros para FilterBar. NO incluye "Todos": FilterBar lo antepone solo
// (contrato de FilterBar.astro), de modo que en la barra renderizada "Todos"
// queda primero. Orden estable = orden de declaración de blogCategories.
export const blogFilters: { value: string; label: string }[] = (
  Object.keys(blogCategories) as BlogCategory[]
).map((value) => ({ value, label: blogCategories[value].label }));

// Helper defensivo: devuelve la meta de una categoría con fallback seguro
// (por si un artículo llegara con una categoría fuera del set).
export function categoryMeta(category: string): BlogCategoryMeta {
  return (
    blogCategories[category as BlogCategory] ?? { label: category, accent: 'gold' }
  );
}

export function categoryIcon(category: string): string {
  return blogCategoryIcon[category as BlogCategory] ?? 'nodo-red';
}

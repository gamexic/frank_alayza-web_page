# Frank Alayza – Página web personal

Página web profesional para tu marca personal: emprendedor, científico de datos y programador, amante de la tecnologia y de la Inteligencia Artifical. Inspirada en el estilo limpio y elegante.

## Contenido

- **Hero**: presentación con tu nombre y propuesta de valor
- **Enfoque**: mensaje central (datos, código, emprendimiento)
- **Áreas**: Emprendimiento, Ciencia de datos, Programación
- **Sobre mí**: credenciales y experiencia con viñetas
- **Certificados**: tarjetas para mostrar tus certificaciones (puedes añadir imágenes y enlaces)
- **Contacto**: email, LinkedIn, GitHub

## Cómo ver la página

Abre `index.html` en el navegador o sirve la carpeta con un servidor local:

```bash
# Con Python
python3 -m http.server 8000

# Con Node (npx)
npx serve .
```

Luego visita `http://localhost:8000`.

## Personalización

1. **Contacto** (en `index.html`): sustituye `tu@email.com`, la URL de LinkedIn y la de GitHub por tus datos reales.
2. **Certificados**: reemplaza las tarjetas de ejemplo por tus certificados. Puedes usar `<img src="ruta/certificado.jpg">` dentro de `.cert-placeholder` y poner el título e institución en cada `.cert-card`.
3. **Foto**: en la sección “Sobre mí” hay un placeholder con “FA”. Puedes sustituir `.about-placeholder` por una imagen tuya si lo deseas.

## Estructura de archivos

- `index.html` – estructura y contenido
- `styles.css` – estilos (tipografía Cormorant Garamond + Inter, paleta sobria)
- `main.js` – menú móvil y año en el footer

---

## Sistema de Temas

La página incluye un toggle de tema (sol/luna) en el header que permite alternar entre modo claro y oscuro. La preferencia se guarda en `localStorage` y se aplica un script anti-flash para evitar parpadeos al cargar.

### Modo Oscuro (Predeterminado)

Estética neón profesional con fondos oscuros y acentos brillantes.

**Paleta:**

| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo principal | Negro profundo | `#0a0a0f` |
| Fondo secundario | Negro azulado | `#12121a` |
| Fondo cards | Gris oscuro | `#1a1a24` |
| Texto principal | Blanco hueso | `#f0f0f5` |
| Texto secundario | Gris claro | `#a0a0b0` |
| Neón Azul | Cian eléctrico | `#00d4ff` |
| Neón Morado | Violeta brillante | `#a855f7` |
| Neón Dorado | Ámbar | `#fbbf24` |
| Neón Verde | Esmeralda | `#22c55e` |

**Efectos visuales:**
- Gradientes neón en timeline, botones y bordes
- Glow pulsante en marcadores del timeline
- Sombras con tinte de colores neón
- Hover con efectos de brillo

### Modo Claro

Estética limpia y vibrante con fondos cálidos y acentos coloridos.

**Paleta:**

| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo principal | Crema cálido | `#faf9f7` |
| Fondo secundario | Beige suave | `#f0ede8` |
| Fondo cards | Blanco puro | `#ffffff` |
| Texto principal | Casi negro | `#1a1a1a` |
| Texto secundario | Gris medio | `#5c5c5c` |
| Azul Eléctrico | Acento principal | `#0066ff` |
| Violeta | Acento secundario | `#7c3aed` |
| Ámbar | Acento cálido | `#f59e0b` |
| Esmeralda | Acento success | `#10b981` |

**Efectos visuales:**
- Hero con gradiente radial sutil azul/violeta
- Botones con gradiente azul → violeta
- Cards con borde colorido al hover
- Timeline con línea azul brillante
- Links con underline gradiente

### Toggle de Tema

- Botón con íconos sol/luna en el header
- Transiciones suaves de 0.4s entre temas
- Preferencia guardada en `localStorage`
- Script anti-flash en `<head>` para carga instantánea

---

## Licencia

Uso personal. Puedes modificar y publicar como quieras.

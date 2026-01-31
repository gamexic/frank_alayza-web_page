# Frank Alayza – Página web personal

Página web profesional para tu marca personal: emprendedor, científico de datos y programador. Inspirada en el estilo limpio y elegante de [adriasolapastor.com](https://adriasolapastor.com).

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

## Licencia

Uso personal. Puedes modificar y publicar como quieras.

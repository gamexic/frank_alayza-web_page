# Frank Alayza - Web Personal

Sitio web estatico personal/profesional de Frank Alayza.

## Stack

- HTML (`*.html`)
- CSS (`styles.css`)
- JavaScript vanilla (`main.js`)
- Assets locales (`assets/`)

## Ejecutar en local

```bash
# Opcion 1
python3 -m http.server 8000

# Opcion 2
npx serve .
```

Abrir: `http://localhost:8000`

## Estructura principal

- `index.html`: landing principal
- `sobre-mi.html`, `servicios.html`, `proyectos.html`, `contenido.html`, `recursos.html`, `certificados.html`, `contacto.html`
- `privacidad.html`, `terminos.html`
- `styles.css`: estilos globales y responsive
- `main.js`: tema, menu movil, animaciones e interacciones
- `assets/`: imagenes, CV y certificados
- `CNAME`: dominio custom de GitHub Pages (`frankalayza.me`)

---

## Publicacion oficial (GitHub Pages + dominio custom)

Estado objetivo:

- Hosting: **GitHub Pages**
- Dominio: **`frankalayza.me`**
- SSL: **GitHub Pages (HTTPS automatico)**
- Despliegue: **`git push` a `master`**

> En esta etapa **NO** se usa el VPS para publicar este sitio.

### 1) Configuracion inicial (solo una vez)

#### 1.1 GitHub Pages

En tu repo de GitHub:

1. Ir a `Settings > Pages`.
2. En `Source`, elegir `Deploy from a branch`.
3. Branch: `master`.
4. Folder: `/ (root)`.
5. Guardar.

#### 1.2 Dominio custom

1. En la misma pantalla (`Settings > Pages`), en `Custom domain`, escribir:
   - `frankalayza.me`
2. Guardar.

#### 1.3 DNS del dominio

En tu proveedor DNS, dejar asi:

- Registros A para el apex (`@`):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `www` como CNAME a:
  - `frankalayza.me`
  - (alternativa valida: `gamexic.github.io`)

#### 1.4 HTTPS

1. Esperar validacion de dominio en GitHub Pages.
2. Activar `Enforce HTTPS`.

---

## Flujo para volver a subir cambios (cada vez)

1. Hacer cambios en archivos del proyecto.
2. Probar localmente (`python3 -m http.server 8000`).
3. Commit y push:

```bash
git add .
git commit -m "feat: actualiza contenido/estilos"
git push origin master
```

4. Esperar despliegue automatico de GitHub Pages (normalmente 1-3 min).
5. Validar en:
   - `https://frankalayza.me`
   - `https://www.frankalayza.me` (si lo usas)

---

## Checklist de validacion post-deploy

1. Carga `https://frankalayza.me` sin errores.
2. No hay 404 de CSS/JS/imagenes.
3. Navegacion completa entre paginas funciona.
4. Modo claro/oscuro funciona.
5. Responsive correcto en movil y desktop.
6. Candado HTTPS visible en navegador.

---

## Troubleshooting

### A) El dominio no abre o no actualiza

- Revisar `Settings > Pages` y estado del deploy.
- Verificar DNS (propagacion puede tardar).
- Confirmar que `CNAME` exista en el root con `frankalayza.me`.

Verificacion rapida DNS:

```bash
dig +short frankalayza.me A
dig +short www.frankalayza.me CNAME
```

### B) HTTPS no se puede activar

- Esperar a que GitHub termine validacion del dominio.
- Revisar que no haya registros DNS conflictivos.

### C) Se despliega una version vieja

- Confirmar que el push fue a `master`.
- Revisar que Pages este leyendo `master` + `/ (root)`.
- Hacer hard refresh del navegador.

---

## Notas importantes

1. El archivo `CNAME` debe mantenerse en el root del repo.
2. Si cambias de branch de publicacion, actualizar `Settings > Pages`.
3. El SSL comprado no es necesario en esta arquitectura (GitHub ya provee TLS).
4. Por seguridad, si compartiste credenciales de servidores en algun canal, cambia claves y usa SSH keys.

## Licencia

Uso personal. Puedes modificar y publicar segun tus necesidades.

// scripts/og.mjs
// Genera los assets sociales de marca con sharp (compositado one-off, reutilizable):
//   1. public/assets/og/share.jpg   → 1200x630 JPEG q85 (Open Graph / Twitter card)
//   2. public/apple-touch-icon.png  → 180x180 PNG opaco (icono iOS al agregar a inicio)
//
// Fuentes: src/assets/marca/gold-full.png (logo completo) y gold-icon.png (icono).
// Paleta de marca (src/styles/tokens.css): bg #06060a, gold #fbbf24, gold-deep #d99a00.
//
// Uso:  node scripts/og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const p = (rel) => resolve(root, rel);

const BG = { r: 0x06, g: 0x06, b: 0x0a }; // #06060a

// ---------------------------------------------------------------------------
// 1) OG image — 1200x630
// ---------------------------------------------------------------------------
async function buildOg() {
  const W = 1200;
  const H = 630;

  // Fondo negro + degradado radial dorado sutil (SVG rasterizado por sharp).
  const gradientSvg = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="50%" cy="44%" r="62%">
          <stop offset="0%"  stop-color="#fbbf24" stop-opacity="0.20"/>
          <stop offset="42%" stop-color="#d99a00" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#06060a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="#06060a"/>
      <rect width="${W}" height="${H}" fill="url(#glow)"/>
    </svg>
  `);

  // Logo completo centrado. gold-full es ~1280x1024 (ratio 1.25). Lo escalamos
  // a una altura cómoda para dejar aire alrededor en el lienzo 1200x630.
  const logoTargetH = 430;
  const logo = await sharp(p('src/assets/marca/gold-full.png'))
    .resize({ height: logoTargetH, fit: 'inside', withoutEnlargement: false })
    .png()
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();

  const left = Math.round((W - logoMeta.width) / 2);
  const top = Math.round((H - logoMeta.height) / 2);

  await sharp({
    create: { width: W, height: H, channels: 3, background: BG },
  })
    .composite([
      { input: gradientSvg, top: 0, left: 0 },
      { input: logo, top, left },
    ])
    .jpeg({ quality: 85, chromaSubsampling: '4:4:4' })
    .toFile(p('public/assets/og/share.jpg'));

  const out = await sharp(p('public/assets/og/share.jpg')).metadata();
  console.log(`OG  → public/assets/og/share.jpg  ${out.width}x${out.height} (${out.format})`);
}

// ---------------------------------------------------------------------------
// 2) apple-touch-icon — 180x180, opaco, icono con padding ~18%
// ---------------------------------------------------------------------------
async function buildAppleTouchIcon() {
  const S = 180;
  const pad = Math.round(S * 0.18); // padding ~18% por lado
  const inner = S - pad * 2;

  // gold-icon.png trae mucho margen transparente; lo recortamos primero para
  // que el padding ~18% se mida sobre el icono real y llene bien el lienzo.
  const icon = await sharp(p('src/assets/marca/gold-icon.png'))
    .trim({ threshold: 10 })
    .resize({ width: inner, height: inner, fit: 'inside' })
    .png()
    .toBuffer();
  const iconMeta = await sharp(icon).metadata();

  const left = Math.round((S - iconMeta.width) / 2);
  const top = Math.round((S - iconMeta.height) / 2);

  // Composite a buffer y, en un segundo pase, aplanar el alpha. En sharp el
  // flatten interno corre ANTES del composite; separar en dos pases garantiza
  // que el PNG final quede 100% opaco (los apple-touch-icon no llevan alpha).
  const composited = await sharp({
    create: { width: S, height: S, channels: 3, background: BG },
  })
    .composite([{ input: icon, top, left }])
    .png()
    .toBuffer();

  await sharp(composited)
    .flatten({ background: BG })
    .removeAlpha()
    .png()
    .toFile(p('public/apple-touch-icon.png'));

  const out = await sharp(p('public/apple-touch-icon.png')).metadata();
  console.log(
    `ATI → public/apple-touch-icon.png  ${out.width}x${out.height} (${out.format}, alpha=${out.hasAlpha})`
  );
}

await buildOg();
await buildAppleTouchIcon();
console.log('Listo.');

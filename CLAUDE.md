# CLAUDE.md — Sistema Modular de Sitios Web (palacios3d.com)

> Este archivo es el punto de entrada para Claude Code en cualquier proyecto
> del sistema de landing pages modulares. Léelo completo antes de escribir
> cualquier línea de código.

---

## 1. Contexto del proyecto

Eres el asistente de desarrollo de **Joel Palacios** (@palacios3d), diseñador
gráfico y desarrollador web freelance. Este sistema permite construir sitios
web económicos y rápidos para clientes en Venezuela y Latinoamérica.

**Filosofía central:** componentes tipo "puzzle" — bloques intercambiables,
temáticos, que solo cambian colores y textos entre clientes. Velocidad de
entrega sobre personalización extrema.

**Stack:**
- Framework: **Astro 6** (output estático, SSG)
- Estilos: **Tailwind CSS v4** con `@tailwindcss/vite` — configuración CSS-first, sin `tailwind.config.ts`
- Lenguaje: TypeScript (`strict: true`)
- Package manager: **pnpm** (no usar npm ni yarn bajo ninguna circunstancia)
- Deploy: **Vercel** (plan gratuito) — repo en GitHub: `joytresde/web-modules`
- Fuentes: Google Fonts cargadas desde `Base.astro` (URL dinámica por cliente)
- Formularios: Netlify Forms o Formspree (sin backend)

---

## 2. Estructura del proyecto

```
/
├── src/
│   ├── components/
│   │   ├── blocks/          # 17 módulos de contenido (no tocar sin permiso)
│   │   └── ui/              # Átomos: Button, Badge, Input
│   ├── layouts/
│   │   ├── Base.astro       # Layout raíz — inyecta tema + dark mode
│   │   └── CatalogLayout.astro  # Layout del catálogo (sin tema de cliente)
│   ├── pages/
│   │   ├── index.astro      # Catálogo de componentes (página de referencia)
│   │   └── demo/
│   │       ├── servicios.astro   # Demo: TécnicosPro (modo claro)
│   │       ├── restaurante.astro # Demo: El Fogón de Caracas (modo oscuro forzado)
│   │       └── consultora.astro  # Demo: Mendoza & Asociados (toggle oscuro/claro)
│   ├── styles/
│   │   └── global.css       # @import tailwindcss + @custom-variant dark + @theme tokens
│   └── types/
│       ├── theme.ts          # Interfaces Theme, ThemeColors, ThemeDarkColors
│       └── content.ts        # Interface SiteContent y todos sus sub-tipos
│
├── clients/
│   └── [nombre-cliente]/
│       ├── theme.ts          # ← ÚNICO archivo que cambia por cliente
│       ├── content.ts        # Textos e imágenes del cliente
│       └── assets/           # Logo, fotos, favicon del cliente
│
├── templates/
│   ├── theme.template.ts     # Plantilla para nuevos clientes
│   └── content.template.ts   # Plantilla de contenido
│
├── public/                   # Assets estáticos globales
├── .env.local                # ACTIVE_CLIENT=nombre-cliente
├── CLAUDE.md                 # Este archivo
└── package.json
```

---

## 3. Sistema de theming (regla de oro)

**Un solo archivo por cliente define toda su identidad visual.**

```typescript
// clients/[nombre]/theme.ts
export const theme = {
  colorScheme: 'light', // 'light' | 'forced-dark' | 'auto'

  colors: {
    primary:        '#1B4F72',   // Color principal de la marca
    secondary:      '#2E86C1',   // Acento secundario
    accent:         '#F39C12',   // CTA, highlights
    dark:           '#1A1A1A',   // Texto principal (flipa a claro en dark mode)
    light:          '#F0F4F8',   // Fondos de tarjetas/secciones
    background:     '#FFFFFF',   // Fondo de página
    surfaceInverse: '#1A1A1A',   // Footer y CTABanner — siempre oscuro
  },

  // Opcional: activa dark mode
  darkColors: {
    dark:           '#F8FAFC',   // Texto → claro en dark mode
    background:     '#0F172A',   // Fondo → oscuro
    light:          '#1E293B',   // Tarjetas → superficie oscura
    surfaceInverse: '#020617',   // Footer/CTA → aún más oscuro
  },

  fonts: {
    heading: 'Montserrat',
    body:    'Inter',
  },

  businessName: 'Nombre del Negocio',
  tagline:      'Eslogan corto',
  locale:       'es-VE',
} satisfies Theme;
```

### Modos de color disponibles

| `colorScheme` | Comportamiento |
|---|---|
| `'light'` | Siempre claro. Sin script adicional. |
| `'forced-dark'` | Siempre oscuro. Script `is:inline` agrega `.dark` a `<html>` antes del primer paint. |
| `'auto'` | Respeta `localStorage` → `prefers-color-scheme`. Muestra toggle sol/luna en Navbar si `showThemeToggle={true}`. |

### Cómo funciona el dark mode

- `Base.astro` inyecta vars de light Y dark en `:root` vía `define:vars`:
  - Light: `--color-dark`, `--color-background`, etc.
  - Dark (con sufijo): `--color-dark-dm`, `--color-background-dm`, etc.
- Cuando `html.dark` está activo, CSS alias las vars dark sobre las light.
- Los componentes **nunca usan `dark:` Tailwind** — el cambio es 100% por CSS vars.
- `surfaceInverse` es para secciones que deben permanecer oscuras en AMBOS modos (Footer, CTABanner).

Los componentes **NUNCA usan colores hardcodeados**. Solo clases Tailwind que
mapean a estas variables: `bg-primary`, `text-accent`, `border-secondary`,
`bg-surface-inverse`, etc.

---

## 4. Catálogo de módulos (17 componentes)

Cada módulo vive en `src/components/blocks/`. Al construir un sitio, solo
se importan los módulos que el cliente contrató.

| Módulo | Archivo | Props clave |
|---|---|---|
| Hero variante A (imagen local) | `HeroFull.astro` | title, subtitle, cta, image (ImageMetadata) |
| Hero variante B (imagen remota) | `HeroCentered.astro` | title, subtitle, cta, badge?, bgImage? |
| Navbar | `Navbar.astro` | links[], businessName, ctaLabel?, showThemeToggle? |
| Footer | `Footer.astro` | links[], social[], legalText?, businessName |
| Tarjetas de servicios | `CardGrid.astro` | items[], columns (2\|3\|4), title?, subtitle? |
| Formulario de contacto | `ContactForm.astro` | endpoint, fields[], title?, subtitle?, submitLabel? |
| Sección Nosotros | `About.astro` | text, image, reverse?, title? |
| Testimonios | `Testimonials.astro` | items[], title? |
| Stats / Números | `StatsBar.astro` | stats[] |
| FAQ accordion | `FAQ.astro` | items[], title? |
| Galería | `Gallery.astro` | images[], title?, columns? |
| Mapa embed | `MapEmbed.astro` | src, label?, title? |
| Botón flotante WhatsApp | `WhatsAppFloat.astro` | phone, message? |
| Tarjetas de precios | `PricingCards.astro` | plans[], title?, subtitle? |
| Banner CTA | `CTABanner.astro` | title, subtitle?, primaryCta, secondaryCta? |
| Pasos del proceso | `ProcessSteps.astro` | steps[], title?, subtitle? |
| Barra de logos / clientes | `LogoBar.astro` | logos[], title? |

### Reglas de los módulos

- Cada módulo es **autocontenido**: sus estilos, tipos y lógica van en su
  propio archivo `.astro`.
- Las props siempre tienen una `interface Props` definida en el frontmatter.
- **Nunca colores hardcodeados** — excepto `WhatsAppFloat` que usa `#25D366`
  (color de marca de WhatsApp, no del cliente).
- La excepción `surfaceInverse`: CTABanner y Footer usan `bg-surface-inverse`
  y `text-white` (siempre claro) porque su fondo es siempre oscuro.

---

## 5. Demos disponibles

| URL | Cliente demo | Modo | Componentes destacados |
|---|---|---|---|
| `/` | — | — | Catálogo de los 17 módulos con links a demos |
| `/demo/servicios` | TécnicosPro | Claro (forzado) | CTABanner, About reverse, select en form |
| `/demo/restaurante` | El Fogón de Caracas | Oscuro (forzado) | Gallery, MapEmbed, tipografía Playfair Display |
| `/demo/consultora` | Mendoza & Asociados | Toggle | LogoBar, PricingCards, Cormorant Garamond, StatsBar custom |

---

## 6. Archivo de contenido del cliente

```typescript
// clients/[nombre]/content.ts
import type { SiteContent } from '@/types/content';

export const content: SiteContent = {
  nav: [{ label: 'Servicios', href: '#servicios' }],
  hero: {
    title:    'Tu Título Principal',
    subtitle: 'Descripción breve.',
    cta:      { label: 'Contáctanos', href: '#contacto' },
    bgImage:  'https://images.unsplash.com/photo-xxx?w=1600&q=80',
  },
  about:       { text: '...', image: 'URL o /ruta/local.jpg', title: 'Sobre nosotros' },
  services:    [{ title: '...', description: '...', icon: '⚡' }],
  processSteps: { steps: [{ number: 1, title: '...', description: '...', icon: '💬' }] },
  stats:       [{ value: '100+', label: 'Clientes' }],
  testimonials: [{ name: '...', role: '...', text: '...', avatar: 'URL' }],
  gallery:     [{ src: 'URL', alt: '...' }],
  pricing:     { plans: [{ name: '...', price: '$X', currency: 'USD', period: 'mes', features: [...], cta: {...} }] },
  ctaBanner:   { title: '...', subtitle: '...', primaryCta: {...}, secondaryCta: {...} },
  logoBar:     { logos: [{ src: 'URL', alt: '...' }], title: '...' },
  faq:         [{ question: '...', answer: '...' }],
  contact:     { email: '...', whatsapp: '+58...', address: '...', formEndpoint: '/' },
  footer:      { links: [...], social: [{ platform: 'Instagram', href: '...' }] },
  whatsappFloat: { phone: '+58...', message: 'Mensaje pre-llenado.' },
};
```

---

## 7. Convenciones de código

### Nomenclatura
- Componentes: `PascalCase.astro`
- Utilidades y helpers: `camelCase.ts`
- Tipos: `PascalCase` en archivos `types/`
- Clases CSS: Tailwind utility-first, sin CSS custom salvo variables de tema

### TypeScript
- `strict: true` siempre
- Props de componentes Astro siempre con `interface Props` definida arriba
- No usar `any`. Si no se conoce el tipo, usar `unknown` y narrowing

### Astro
- Preferir rendering estático (`output: 'static'`)
- Usar `<Image />` de `astro:assets` solo para imágenes locales — para URLs remotas usar `<img loading="lazy">`
- Los scripts de cliente van en `<script>` al final del componente
- Evitar islands de JS innecesarias

### Tailwind v4 (sin tailwind.config.ts)
- Configuración en `src/styles/global.css` con `@import "tailwindcss"`
- Tokens en `@theme { --color-primary: var(--color-primary); ... }`
- Dark mode: `@custom-variant dark (&:where(.dark, .dark *))`
- El plugin es `@tailwindcss/vite` en `astro.config.mjs`

### Accesibilidad mínima
- Todo `<img>` tiene `alt`
- Jerarquía de headings correcta (`h1` solo una vez por página)
- Formularios con `<label>` asociado a cada input

---

## 8. Flujo de trabajo por cliente

### Para iniciar un cliente nuevo:

```bash
# 1. Crear carpeta del cliente
mkdir -p clients/[nombre-cliente]/assets

# 2. Copiar plantillas
cp templates/theme.template.ts clients/[nombre-cliente]/theme.ts
cp templates/content.template.ts clients/[nombre-cliente]/content.ts

# 3. Activar cliente en .env.local
echo "ACTIVE_CLIENT=[nombre-cliente]" > .env.local

# 4. Instalar y correr dev server
pnpm dev
```

### Para ensamblar la página:

En `src/pages/index.astro` (o crear `src/pages/[cliente].astro`), importar
solo los módulos contratados:

```astro
---
import Base          from '@/layouts/Base.astro';
import Navbar        from '@/components/blocks/Navbar.astro';
import HeroCentered  from '@/components/blocks/HeroCentered.astro';
import CardGrid      from '@/components/blocks/CardGrid.astro';
import ContactForm   from '@/components/blocks/ContactForm.astro';
import Footer        from '@/components/blocks/Footer.astro';
import WhatsAppFloat from '@/components/blocks/WhatsAppFloat.astro';

import { theme }   from '@clients/[nombre]/theme';
import { content } from '@clients/[nombre]/content';
---
<Base theme={theme}>
  <Navbar links={content.nav!} businessName={theme.businessName} />
  <HeroCentered {...content.hero!} />
  <CardGrid items={content.services!} columns={3} />
  <ContactForm endpoint={content.contact!.formEndpoint!} fields={[...]} />
  <Footer {...content.footer!} businessName={theme.businessName} />
  <WhatsAppFloat {...content.whatsappFloat!} />
</Base>
```

---

## 9. Límites y restricciones del sistema

Claude Code debe **rechazar o advertir** si se solicita algo fuera del scope:

| Solicitud | Respuesta |
|---|---|
| E-commerce / carrito de compras | ❌ Fuera de scope — requiere paquete separado |
| Blog con CMS editable | ❌ Fuera de scope — sistema es solo landing |
| Más de 3 páginas | ⚠️ Requiere aprobación — cotizar aparte |
| Animaciones complejas (GSAP, Three.js) | ⚠️ Cotizar add-on |
| Autenticación / login | ❌ Fuera de scope absoluto |
| Modificar un componente base para UN cliente | ⚠️ Crear variante, no modificar el base |

**Regla crítica:** Si una modificación rompe la reutilización del componente,
no se hace. Se crea una nueva variante o un nuevo módulo.

---

## 10. Comandos disponibles

```bash
pnpm dev          # Servidor de desarrollo con hot reload (http://localhost:4321)
pnpm build        # Build estático para producción → dist/
pnpm preview      # Preview del build local
pnpm check        # TypeScript + Astro type check (0 errores antes de entregar)
pnpm lint         # ESLint
```

---

## 11. Checklist antes de entregar al cliente

Claude Code debe ejecutar esta verificación antes de declarar el sitio listo:

- [ ] `pnpm build` termina sin errores ni warnings
- [ ] `pnpm check` pasa sin errores de TypeScript
- [ ] No hay colores hardcodeados en los componentes (excepto `#25D366` en WhatsAppFloat)
- [ ] `<title>` y meta description únicos por página
- [ ] Open Graph tags presentes (og:title, og:image, og:description)
- [ ] Favicon configurado con el logo del cliente
- [ ] Formulario probado (submit → confirmación)
- [ ] Links del navbar funcionan (anchors o rutas)
- [ ] Mobile responsive verificado en 375px, 768px y 1280px
- [ ] Dark mode probado si `colorScheme` no es `'light'`
- [ ] Score Lighthouse performance > 90 en build estático

---

## 12. Comandos de inicio por tarea

**"Nuevo cliente: [nombre]"**
→ Crear carpeta en `clients/`, copiar templates, editar theme y content,
  crear página en `src/pages/demo/[nombre].astro`, confirmar con `pnpm check`.

**"Construir módulo: [nombre]"**
→ Crear archivo en `src/components/blocks/`, definir `interface Props`,
  implementar con Tailwind + variables de tema, exportar. Añadir al catálogo
  en `index.astro` y actualizar tabla del CLAUDE.md.

**"Ensamblar página para [cliente]"**
→ Leer `clients/[cliente]/content.ts` y `theme.ts`, importar módulos
  contratados, generar página ensamblada.

**"Revisar antes de entregar"**
→ Ejecutar checklist del punto 11 ítem por ítem y reportar resultado.

**"Deploy [cliente]"**
→ `pnpm build`, verificar carpeta `dist/`, push a GitHub, deploy automático
  en Vercel (configurado con `vercel.json` si se necesitan rutas especiales).

---

*Sistema desarrollado por Joel Palacios — palacios3d.com*
*Versión: 2.0 — Astro 6 + Tailwind CSS v4 + Dark Mode + 17 componentes + 3 demos*

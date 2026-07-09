---
name: AutomatizaFacil.org
version: 1.0.0
owner: EmprendePyme.cl
status: active
platforms:
  - web (Next.js App Router)
sources:
  - brand/tokens.css
date: 2026-07-09
---

## Overview

Sistema de diseño de AutomatizaFácil.org, división de IA aplicada, automatización
y mini SaaS de EmprendePyme.cl. Estética SaaS premium sobre azul medianoche con
acentos cian neón, verde-cian y naranja corporativo. Glassmorphism controlado,
tarjetas flotantes, mockups tipo dashboard y elementos visuales de nube, local,
VPS, agentes y asistentes IA.

## Interface Intent

- **User:** Dueños de pymes, profesionales independientes, consultores, abogados,
  contadores, equipos comerciales y administrativos de Chile y LATAM que ya tienen
  operación activa y necesitan automatizar tareas, mejorar atención y captar más.
- **Task verb:** Automatizar, optimizar, agendar, explorar, comparar, contactar.
- **Desired feel:** Tecnología premium accesible, confianza técnica sin frialdad,
  autoridad sin arrogancia, cercanía comercial con respaldo real. Cian como energia
  de accion, naranja como conversion.
- **Domain concepts:** IA aplicada, automatización, asistentes IA, agentes IA,
  mini SaaS, IA en nube, IA local, VPS, WhatsApp, leads, procesos, diagnóstico.
- **Visual signature:** Azul medianoche (#040815) como canvas. Glassmorphism con
  bordes cian sutiles. Brillos cian neón (#22d3ee) en CTAs y acentos. Verde-cian
  (#14f5c6) para estados positivos y secondary actions. Naranja (#f97316) reservado
  para conversion critica y acento de contraste. Tarjetas translucidas tipo panel
  de software. Mockups de dashboard flotantes.
- **Rejected defaults:** Sombras pesadas, gradientes arcoiris, glassmorphism excesivo,
  colores pastel, bordes gruesos, tipografias decorativas, animaciones largas,
  stock photos genericos, iconos inconsistentes, cards decorativas sin contenido.

## Interface Memory

- **Depth strategy:** 4 niveles: canvas (azul medianoche), glass-surface (translucido
  cian sutil), glass-raised (mayor opacidad para hover/modales), glow (bordes cian
  brillantes para elementos activos). Profundidad por contraste de glassmorphism y
  glow, no por sombras negras.
- **Spacing base:** 4px grid. Padding de cards: 24px. Gap entre elementos: 8px
  compacto, 16px normal, 24px secciones, 48px+ entre bloques verticales.
- **Surface levels:**
  - `canvas` (#040815): fondo de pagina.
  - `glass-surface` (rgba(34,211,238,0.04) + border cian 0.1): cards, paneles.
  - `glass-raised` (rgba(34,211,238,0.08) + border cian 0.2): hover, dropdowns.
  - `glow` (border #22d3ee + box-shadow cian): focus, activo, CTA hover.
- **Text hierarchy:**
  - Page title (H1): Inter 700, 48px desktop / 36px mobile, white.
  - Section title (H2): Inter 600, 32px desktop / 28px mobile, white.
  - Card title (H3): Inter 600, 20px, white.
  - Body: Inter 400, 16px, gris claro (#cbd5e1), line-height 1.7.
  - Metadata/caption: Inter 400, 14px, gris (#94a3b8).
- **Reusable patterns:** glass card con border cian sutil + padding 24px; CTA
  primario cian con glow hover; badge pill con fondo glass + border cian; status
  indicator dot verde-cian; mockup navegador con barra de URL; timeline vertical
  con nodos cian; grid de cards responsive 1/2/3 columnas.
- **Deprecated patterns:** (ninguno aun)

## Colors

### Palette

| Token | Hex | Role |
|-------|-----|------|
| `midnight` | `#040815` | canvas background |
| `cyan` | `#22d3ee` | **primary** brand accent |
| `cyan-soft` | `#67e8f9` | primary lighter |
| `greencyan` | `#14f5c6` | secondary accent |
| `orange` | `#f97316` | contrast / conversion |
| `white` | `#ffffff` | foreground strong |
| `text` | `#cbd5e1` | foreground body |
| `text-muted` | `#94a3b8` | muted text |

### Semantic Roles

| Role | Resolves to | Hex |
|------|------------|-----|
| `colors.primary` | `cyan` | `#22d3ee` |
| `colors.secondary` | `greencyan` | `#14f5c6` |
| `colors.accent` | `orange` | `#f97316` |
| `colors.background` | `midnight` | `#040815` |
| `colors.foreground` | `text` | `#cbd5e1` |
| `colors.success` | `greencyan` | `#14f5c6` |
| `colors.warning` | (literal) | `#fbbf24` |
| `colors.danger` | (literal) | `#ef4444` |

### Glass Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `glass-bg` | `rgba(34, 211, 238, 0.04)` | card base |
| `glass-border` | `rgba(34, 211, 238, 0.12)` | card border |
| `glass-raised-bg` | `rgba(34, 211, 238, 0.08)` | hover/raised |
| `glass-raised-border` | `rgba(34, 211, 238, 0.25)` | hover border |
| `glow-cyan` | `0 0 20px rgba(34, 211, 238, 0.3)` | focus/active glow |

## Typography

| Token | Value |
|-------|-------|
| `font-base` | Inter, system-ui, sans-serif |
| `font-mono` | JetBrains Mono, monospace |
| `font-weight-page-title` | 700 |
| `font-weight-section-title` | 600 |
| `font-weight-card-title` | 600 |
| `font-weight-body` | 400 |
| `line-height-base` | 1.7 |
| `font-size-page-title` | 3rem (48px) |
| `font-size-section-title` | 2rem (32px) |
| `font-size-card-title` | 1.25rem (20px) |
| `font-size-body` | 1rem (16px) |
| `font-size-metadata` | 0.875rem (14px) |

## Layout

- **Max width:** 1200px contenido principal, full-width para franjas de autoridad.
- **Grid:** CSS Grid 12 columnas para layouts de secciones. Flexbox para componentes.
- **Header:** 72px altura, fixed, backdrop-blur, border-bottom glass.
- **Content padding:** 24px horizontal mobile, 48px horizontal desktop. 96px vertical
  entre secciones.
- **Responsive breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px).

## Elevation & Depth

Sin sombras negras. Profundidad por glassmorphism y glow cian:

| Level | Surface | Uso |
|-------|---------|-----|
| 0 (canvas) | `#040815` | fondo de pagina |
| 1 (glass) | `rgba(34,211,238,0.04)` + border 0.12 | cards, paneles |
| 2 (glass-raised) | `rgba(34,211,238,0.08)` + border 0.25 | hover, dropdowns, modales |
| 3 (glow) | border cian + `box-shadow 0 0 20px rgba(34,211,238,0.3)` | focus, CTA hover, activo |

## Shapes

| Token | Value | Usage |
|-------|-------|-------|
| `radius-pill` | `9999px` | botones, badges, inputs, tags |
| `radius-card` | `16px` | cards, paneles |
| `radius-panel` | `20px` | modales, secciones destacadas |
| `radius-none` | `0` | separadores |

## Components

### Button / CTA
- **Primary:** bg cyan, text midnight, radius-pill, font-weight 600, hover glow-cyan
  + bg cyan-soft, focus visible glow. Padding 14px 28px. Height 48px.
- **Secondary:** bg glass-bg, border glass-border, text white, hover glass-raised.
- **Accent (conversion):** bg orange, text white, radius-pill, hover brightness 110%.
- **Ghost:** bg transparent, text text-muted, hover text white.

### Glass Card
- bg glass-bg, backdrop-blur-sm, border glass-border, radius-card, padding 24px.
- Hover: border glass-raised-border, bg glass-raised-bg.
- Usar para: soluciones, mini SaaS, proceso, formas de avanzar.

### Badge / Pill
- bg glass-bg, border glass-border, radius-pill, padding 6px 14px, font-size 14px,
  text cyan. Usar para labels de seccion y status.

### Status Dot
- w-2 h-2 rounded-full. greencyan para operativo, cyan para demo/beta,
  orange para en desarrollo.

### Mockup Browser
- radius-card overflow-hidden. Barra superior con 3 dots (rojo, amarillo, verde)
  + URL bar glass. Contenido: placeholder dashboard con grid de elementos cian.

### Timeline Node
- Circulo 40px, border 2px cyan, bg midnight. Linea conectora vertical con
  gradiente cian. Numero del paso centrado en cyan.

### Form Input
- bg glass-bg, border glass-border, radius-pill, height 48px, padding 0 20px.
- Focus: border cyan + glow-cyan. Placeholder: text-muted.

## Do's and Don'ts

### Do
- Usar glassmorphism controlado (sutil, no excesivo).
- Cian como energia principal de accion y marca.
- Naranja solo para conversion critica y contraste puntual.
- Verde-cian para estados positivos y secondary actions.
- Animaciones sutiles (200-300ms) con cubic-bezier ease-out.
- Mockups SVG en codigo para todos los visuales.
- Responsive mobile-first real, no adaptado despues.
- Texto blanco/gris claro sobre azul medianoche para contraste AA.
- `prefers-reduced-motion` respetado en todas las animaciones.
- Iconos Lucide consistentes en todo el sitio.

### Don't
- No sombras negras pesadas.
- No glassmorphism en toda la pantalla (fatiga visual).
- No naranja como color base (solo acento de conversion).
- No stock photos genericos.
- No animaciones de entrada largas (> 400ms).
- No texto cian sobre fondos cian (bajo contraste).
- No usar mas de 2 acentos de color simultaneamente en una card.
- No bordes gruesos ni contornos pesados.
- No tipografias decorativas o display (solo Inter).

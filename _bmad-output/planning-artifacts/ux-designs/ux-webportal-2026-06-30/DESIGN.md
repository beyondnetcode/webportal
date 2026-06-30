---
name: BeyondNet / Evolith Web Portal
description: Identidad visual del portal de BeyondNet sobre Material Design 3 (Expressive). Tema platform-grade, técnico y bilingüe, con Evolith al frente.
status: draft
created: 2026-06-30
updated: 2026-06-30
system: Material Design 3 (Expressive)
# Paleta de marca BeyondNet: negro, blanco, DORADO (acento), plata y gris. Estética premium/lujo.
# Tema MD3 re-tematizado: primary = dorado, neutrales = negro/blanco/gris, secondary = plata.
colors:
  # --- Metales de marca (mode-stable) ---
  gold: '#C2A35A'
  gold-bright: '#E7CE86'
  gold-deep: '#9C7C36'
  silver: '#C2C6CC'
  silver-bright: '#E8EAEE'
  graphite: '#0E0E10'
  pearl: '#FFFFFF'
  # --- Light scheme ---
  primary: '#7C6320'
  on-primary: '#FFFFFF'
  primary-container: '#F6E9C4'
  on-primary-container: '#3A2D00'
  secondary: '#6E6E72'
  on-secondary: '#FFFFFF'
  secondary-container: '#E3E3E6'
  on-secondary-container: '#1B1B1E'
  tertiary: '#8A6D2F'
  on-tertiary: '#FFFFFF'
  tertiary-container: '#F3E7C6'
  on-tertiary-container: '#2A2100'
  error: '#BA1A1A'
  on-error: '#FFFFFF'
  error-container: '#FFDAD6'
  on-error-container: '#410002'
  surface: '#FFFFFF'
  on-surface: '#141414'
  surface-variant: '#E8E6E0'
  on-surface-variant: '#49473F'
  surface-container-lowest: '#FFFFFF'
  surface-container-low: '#FAF9F5'
  surface-container: '#F5F3EE'
  surface-container-high: '#EFEDE6'
  surface-container-highest: '#E9E6DE'
  outline: '#7A7870'
  outline-variant: '#CBC8BE'
  inverse-surface: '#0E0E10'
  inverse-on-surface: '#F4F2EC'
  inverse-primary: '#E2C878'
  # --- Dark scheme (negro de marca) ---
  primary-dark: '#E2C878'
  on-primary-dark: '#3A2D00'
  primary-container-dark: '#5A4A12'
  on-primary-container-dark: '#F6E9C4'
  secondary-dark: '#C7C6C9'
  on-secondary-dark: '#2E2E31'
  secondary-container-dark: '#444447'
  on-secondary-container-dark: '#E3E3E6'
  tertiary-dark: '#E0C786'
  on-tertiary-dark: '#2A2100'
  tertiary-container-dark: '#5C4E1F'
  on-tertiary-container-dark: '#F3E7C6'
  error-dark: '#FFB4AB'
  on-error-dark: '#690005'
  surface-dark: '#0E0E10'
  on-surface-dark: '#E8E6E0'
  surface-variant-dark: '#49473F'
  on-surface-variant-dark: '#CBC8BE'
  surface-container-lowest-dark: '#070708'
  surface-container-low-dark: '#161618'
  surface-container-dark: '#1B1B1D'
  surface-container-high-dark: '#242427'
  surface-container-highest-dark: '#2E2E31'
  outline-dark: '#928F86'
  outline-variant-dark: '#49473F'
typography:
  # Familia base: Inter (UI/body). Display puede usar una face expresiva. [ASSUMPTION]
  display-large:   { fontFamily: 'Inter', fontSize: '57px', lineHeight: '64px', fontWeight: 400, letterSpacing: '-0.25px' }
  display-medium:  { fontFamily: 'Inter', fontSize: '45px', lineHeight: '52px', fontWeight: 400 }
  display-small:   { fontFamily: 'Inter', fontSize: '36px', lineHeight: '44px', fontWeight: 400 }
  headline-large:  { fontFamily: 'Inter', fontSize: '32px', lineHeight: '40px', fontWeight: 400 }
  headline-medium: { fontFamily: 'Inter', fontSize: '28px', lineHeight: '36px', fontWeight: 400 }
  headline-small:  { fontFamily: 'Inter', fontSize: '24px', lineHeight: '32px', fontWeight: 400 }
  title-large:     { fontFamily: 'Inter', fontSize: '22px', lineHeight: '28px', fontWeight: 400 }
  title-medium:    { fontFamily: 'Inter', fontSize: '16px', lineHeight: '24px', fontWeight: 500, letterSpacing: '0.15px' }
  title-small:     { fontFamily: 'Inter', fontSize: '14px', lineHeight: '20px', fontWeight: 500, letterSpacing: '0.1px' }
  body-large:      { fontFamily: 'Inter', fontSize: '16px', lineHeight: '24px', fontWeight: 400, letterSpacing: '0.5px' }
  body-medium:     { fontFamily: 'Inter', fontSize: '14px', lineHeight: '20px', fontWeight: 400, letterSpacing: '0.25px' }
  body-small:      { fontFamily: 'Inter', fontSize: '12px', lineHeight: '16px', fontWeight: 400, letterSpacing: '0.4px' }
  label-large:     { fontFamily: 'Inter', fontSize: '14px', lineHeight: '20px', fontWeight: 500, letterSpacing: '0.1px' }
  label-medium:    { fontFamily: 'Inter', fontSize: '12px', lineHeight: '16px', fontWeight: 500, letterSpacing: '0.5px' }
  label-small:     { fontFamily: 'Inter', fontSize: '11px', lineHeight: '16px', fontWeight: 500, letterSpacing: '0.5px' }
  # Emphasized (M3 Expressive): mismos roles con fontWeight +100/200 para énfasis selectivo.
rounded:
  none: '0px'
  xs: '4px'
  sm: '8px'
  md: '12px'
  lg: '16px'
  xl: '28px'
  full: '9999px'
  DEFAULT: '12px'
spacing:
  '1': '4px'
  '2': '8px'
  '3': '12px'
  '4': '16px'
  '5': '20px'
  '6': '24px'
  '8': '32px'
  '10': '40px'
  '12': '48px'
  '16': '64px'
  '24': '96px'
  gutter: '24px'
  margin-mobile: '16px'
  section-gap: '96px'
components:
  button-filled:
    background: '{colors.primary}'
    color: '{colors.on-primary}'
    radius: '{rounded.full}'
    padding: '10px 24px'
    typography: '{typography.label-large}'
  button-tonal:
    background: '{colors.secondary-container}'
    color: '{colors.on-secondary-container}'
    radius: '{rounded.full}'
    padding: '10px 24px'
  button-outlined:
    background: 'transparent'
    color: '{colors.primary}'
    border: '1px solid {colors.outline}'
    radius: '{rounded.full}'
  button-text:
    background: 'transparent'
    color: '{colors.primary}'
    padding: '10px 12px'
  fab:
    background: '{colors.primary-container}'
    color: '{colors.on-primary-container}'
    radius: '{rounded.lg}'
    size: '56px'
  card-elevated:
    background: '{colors.surface-container-low}'
    color: '{colors.on-surface}'
    radius: '{rounded.md}'
    padding: '{spacing.6}'
    elevation: 'level1'
  card-outlined:
    background: '{colors.surface}'
    border: '1px solid {colors.outline-variant}'
    radius: '{rounded.md}'
    padding: '{spacing.6}'
  top-app-bar:
    background: '{colors.surface}'
    color: '{colors.on-surface}'
    height: '64px'
    scrolled-background: '{colors.surface-container}'
  chip-filter:
    background: '{colors.surface-container-low}'
    color: '{colors.on-surface-variant}'
    selected-background: '{colors.secondary-container}'
    selected-color: '{colors.on-secondary-container}'
    radius: '{rounded.sm}'
    border: '1px solid {colors.outline-variant}'
  text-field-outlined:
    background: 'transparent'
    color: '{colors.on-surface}'
    border: '1px solid {colors.outline}'
    focus-border: '2px solid {colors.primary}'
    radius: '{rounded.xs}'
  badge:
    background: '{colors.tertiary-container}'
    color: '{colors.on-tertiary-container}'
    radius: '{rounded.full}'
    typography: '{typography.label-small}'
---

# DESIGN.md — BeyondNet / Evolith Web Portal

> Sistema base: **Material Design 3 (Expressive)**. Este documento fija el *tema* (seed, roles, tipografía, formas, componentes) que extiende MD3 para la marca. Donde MD3 ya define comportamiento/anatomía, lo heredamos; aquí van los **deltas de marca**. El spine gana sobre cualquier mock.

## Brand & Style

Plataforma seria y técnica con calidez. El portal vende **arquitectura limpia y AI-DD**, así que la estética debe leerse *platform-grade*: ordenada, con jerarquía clara, densidad de información media-alta y cero "look de plantilla de agencia". MD3 aporta el rigor sistémico (tokens, accesibilidad por construcción, tonal elevation); el toque **Expressive** se usa con moderación —pesos *emphasized*, shape morphing y motion springs— para dar carácter sin restar credibilidad. La paleta de marca es **premium/lujo: negro y blanco como base, dorado como acento, plata y gris de apoyo** — el dorado se reserva para lo que importa (CTAs, números clave, highlights) y nunca se generaliza. Bilingüe ES/EN nativo.

## Colors

Paleta de marca **BeyondNet: negro, blanco, dorado, plata y gris**. Tema MD3 re-tematizado con el dorado como color primario y los neutrales (negro/blanco/gris) como base; la plata como secundario metálico.

- **Metales de marca** (`{colors.gold}`, `{colors.gold-bright}`, `{colors.gold-deep}`, `{colors.silver}`) — el **dorado** se usa idealmente en **degradado metálico** (`gold-bright → gold → gold-deep`) para CTAs primarios, highlight del hero, números clave e iconos de acento. La **plata** aporta brillo metálico sutil en bordes, divisores y marcos (p. ej. el frame de la captura de producto).
- **Primary** (`{colors.primary}`) — dorado profundo para acciones de alta énfasis y acentos. Para texto/iconos sobre claro usa `{colors.primary}` (pasa contraste); para fondos sólidos dorados, el texto va oscuro.
- **Secondary / secondary-container** (plata/gris) — componentes de menor énfasis: chips, botones tonales, badges.
- **Tertiary** — bronce cálido como acento puntual; contrapunto al dorado, nunca dominante.
- **Surface + surface-container (-lowest…-highest)** — jerarquía de fondos: blanco y grises cálidos en claro, **negro** (`#0E0E10`) y grafitos en oscuro. Las secciones de impacto (hero, stats, cierre) usan **negro** con dorado.
- **Error** — solo validación y estados destructivos.
- **Dark scheme** — tokens `*-dark` sobre **negro de marca**; modo claro/oscuro soportado.
- **Contraste:** mantener pares `on-*` ≥ 4.5:1. Cuidado con texto blanco sobre dorado claro (usar texto oscuro sobre dorado).

## Typography

Escala de tipos MD3 con cinco roles (**display · headline · title · body · label**), cada uno en large/medium/small. Familia base **Inter** (UI/body) `[ASSUMPTION: confirmar; opción de face expresiva para display]`.

- **Display / Headline** — hero y títulos de sección (Evolith al frente).
- **Title** — encabezados de tarjeta y de bloque.
- **Body** — contenido y artículos del Blog (`body-large` para lectura de Post).
- **Label** — botones, chips, badges, navegación.
- **Emphasized (Expressive):** subir peso en titulares clave del hero y CTAs; uso selectivo, no generalizado.

## Layout & Spacing

Rejilla de **4dp** (`{spacing.1}` = 4px). Márgenes: `{spacing.margin-mobile}` en móvil, `{spacing.gutter}` de gutter, `{spacing.section-gap}` entre secciones grandes de la home. Contenedor de contenido máx. ~1200px; el Blog usa columna de lectura más angosta (~720px) para legibilidad. Layout responsive con breakpoints MD3 (compact <600, medium 600–839, expanded ≥840).

## Elevation & Depth

**Tonal elevation** MD3 (preferida sobre sombras duras): la profundidad se expresa con `surface-container-*` + tinte de primario. Sombras suaves solo en `level1` (cards elevadas), `level2` (menús/diálogos), `level3` (FAB/hover). Nada de sombras dramáticas.

## Shapes

Escala de esquinas MD3: `{rounded.xs}`…`{rounded.xl}` + `{rounded.full}`. Convención: botones/chips/badges = `full`; tarjetas = `md`; contenedores grandes/hero = `lg`/`xl`; campos de texto = `xs`. *Shape morphing* (Expressive) reservado para micro-interacciones (FAB, selección de chip).

## Components

Sobre componentes MD3 (heredados); aquí los del portal con sus tokens (ver frontmatter `components`):

- **Botones:** `button-filled` (CTA primario), `button-tonal` (secundario), `button-outlined` (terciario), `button-text` (enlaces de acción).
- **FAB:** acción persistente de conversión en móvil (p. ej. "Contáctanos").
- **Cards:** `card-elevated` (productos, casos, posts), `card-outlined` (recursos, listados densos).
- **Top App Bar:** navegación principal; cambia a `surface-container` al hacer scroll.
- **Filter chips:** filtros del Hub de Recursos (producto × tipo) y del Catálogo.
- **Text fields outlined:** formularios de contacto/lead y comentarios.
- **Badge:** tipo de producto (oss/saas/enterprise/library) y tipo de recurso.

## Do's and Don'ts

- ✅ Usa la jerarquía de `surface-container-*` para separar planos; evita sombras pesadas.
- ✅ Reserva `{colors.primary}` para 1 acción dominante por vista.
- ✅ Cumple contraste con los pares `on-*` de MD3; no inventes colores fuera del tema.
- ✅ *Emphasized*/morphing/springs con moderación — acento, no norma.
- ❌ No mezcles radios arbitrarios; usa la escala `rounded`.
- ❌ No uses el color de error como acento decorativo.
- ❌ No satures el hero con múltiples CTAs primarios (uno manda; los caminos son tonales/outlined).

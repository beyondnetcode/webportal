---
name: BeyondNet Web Portal — Experience
description: IA, comportamiento, estados, interacciones, accesibilidad y flujos del portal de BeyondNet (Fase 1) sobre Material Design 3.
status: draft
created: 2026-06-30
updated: 2026-06-30
design: ./DESIGN.md
sources:
  - ../../prds/prd-webportal-2026-06-30/prd.md
  - ../../architecture/architecture-webportal-2026-06-30/ARCHITECTURE-SPINE.md
---

# EXPERIENCE.md — BeyondNet Web Portal

> Cómo *funciona* el portal. La identidad visual vive en [DESIGN.md](./DESIGN.md); aquí se referencian tokens por nombre, p. ej. `{components.button-filled}`, `{colors.primary}`, `{typography.body-large}`. Ambos spines ganan sobre cualquier mock.

## Foundation

- **Form-factor:** **Web responsive** (compact <600 · medium 600–839 · expanded ≥840), mobile-first.
- **UI system:** **Material Design 3 (Expressive)** — comportamiento de componentes heredado de MD3; aquí solo el *delta* de comportamiento del portal.
- **Modo claro/oscuro:** soportado (tokens `*-dark` en DESIGN.md); respeta `prefers-color-scheme` + toggle manual.
- **Idioma:** bilingüe ES/EN con selector persistente; ES por defecto, fallback ES (AD-7).

## Information Architecture

Navegación principal (Top App Bar) → 7 superficies + Contacto como CTA persistente:

```
Home
├─ Productos ───────── /productos → /productos/{slug}   (Catálogo → Ficha)
├─ Servicios ───────── /servicios
├─ Portafolio ──────── /portafolio → /portafolio/{slug}
├─ Recursos ────────── /recursos      (hub filtrable producto × tipo)
├─ Blog ───────────── /blog → /blog/{slug}  (+ comentarios)
├─ Comunidad ───────── enlace externo (NestJS LATAM)
└─ [Contáctanos] ──── CTA persistente → /contacto (form por intención)
Persistentes: selector idioma · toggle tema · enlaces sociales (footer) · login (solo en Blog para comentar)
```

**Cierre de superficies:** cada necesidad declarada en el PRD tiene una superficie y cada superficie un flujo que aterriza en ella (ver Key Flows). El admin de Payload (`/admin`) es superficie interna, fuera de la IA pública.

## Voice and Tone

- **Microcopy** directo y técnico-creíble; sin humo ni superlativos vacíos. Bilingüe nativo (no traducción literal).
- CTAs en verbo + valor: "Evalúa Evolith", "Empieza a construir", "Cuéntanos tu proyecto", "Agenda una conversación".
- Errores: específicos y accionables ("Ese correo ya tiene una cuenta — inicia sesión"), nunca culpabilizadores.
- Estados vacíos: orientan a la acción ("Aún no hay recursos para este filtro — prueba otro tipo").

## Component Patterns (comportamiento)

- **Top App Bar:** fija; al hacer scroll cambia a `{components.top-app-bar}` scrolled. En compact colapsa a menú (drawer modal MD3).
- **Camino (card de audiencia):** `{components.card-elevated}` clicable; hover/focus eleva a `level2`; toda la card es target (no solo el texto).
- **Product/Case/Post card:** card clicable con `{components.badge}` de tipo; imagen/eyebrow/título/resumen/acción.
- **Filter chips (Recursos/Catálogo):** selección múltiple; combinan producto × tipo; reflejan estado en URL (querystring) para compartir/volver.
- **Formularios (contacto, comentario):** `{components.text-field-outlined}`; validación inline en blur; botón `{components.button-filled}` deshabilitado hasta validez; Turnstile + honeypot invisibles.
- **FAB (compact):** acción de conversión persistente ("Contáctanos").

## State Patterns

Cada superficie de datos define: **loading · empty · error · success · partial**.

- **Loading:** skeletons MD3 (no spinners de página completa) para listados (productos, recursos, posts).
- **Empty:** mensaje + acción (ver Voice). Filtros sin resultados ofrecen "limpiar filtros".
- **Error:** banner inline con reintento; nunca pantalla en blanco. Errores de envío conservan lo escrito.
- **Success:** confirmación visible (form enviado → estado de éxito en el mismo lugar; comentario → "pendiente de moderación").
- **Auth:** estados `anónimo` (puede leer) vs `member` (puede comentar) vs `pendiente de verificación de email`.

## Interaction Primitives

- **Motion:** *motion springs* MD3 Expressive para transiciones (cards, selección de chip, apertura de drawer); duraciones cortas (~200–400ms); respeta `prefers-reduced-motion`.
- **Navegación:** transiciones de página suaves; preserva scroll al volver del detalle al listado.
- **Filtrado:** actualización optimista de la lista sin recargar (AD-6, lectura server-first + refinamiento cliente).
- **Hover/focus/press:** estados MD3 (state layers) consistentes en todo elemento interactivo.

## Accessibility Floor (comportamiento)

Objetivo **WCAG 2.1 AA** (NFR-2):

- **Teclado:** todo lo interactivo es focusable y operable; orden de foco lógico; foco visible (state layer + outline).
- **Lectores de pantalla:** landmarks (header/nav/main/footer), encabezados jerárquicos, labels en campos, `alt` en imágenes de contenido.
- **Contraste:** garantizado por los pares `on-*` de MD3 (≥4.5:1 texto).
- **Targets táctiles:** mínimo 48×48dp (MD3).
- **Idioma:** atributo `lang` correcto por contenido ES/EN.
- **Movimiento:** respeta `prefers-reduced-motion`.
- **Formularios:** errores asociados por `aria-describedby`; no depender solo del color.

## Key Flows

Protagonistas del PRD (UJ-1..UJ-5). Cada flujo nombra su **clímax**.

**KF-1 · Carla (CTO) evalúa Evolith.** Home → lee hero (`{typography.display-small}` + CTA `{components.button-filled}`) → toca camino "Evalúa Evolith" → /productos/evolith (qué es, casos, diferenciadores, demo) → **clímax: "Agenda una conversación"** → /contacto (intención=demo) → éxito. *Micro-conversión alterna:* estrella en GitHub.

**KF-2 · Diego (dev) llega por Shell.** /productos/shell-ddd → quickstart + enlaces NuGet/GitHub → descubre Evolith y Comunidad → **clímax: instala el paquete / entra a NestJS LATAM**.

**KF-3 · Marina (cliente) busca desarrollo a medida.** Home → Servicios → Portafolio (ve bTm Music) → confía → **clímax: "Cuéntanos tu proyecto"** → /contacto (intención=cotización) → éxito.

**KF-4 · Pablo (lector) comenta.** /blog/{post} (lee sin login) → "Comentar" → inicia sesión (GitHub/Google/email) → escribe → **clímax: comentario enviado** → ve "pendiente de moderación". Moderador aprueba → aparece.

**KF-5 · Sofía (marketing) publica.** /admin → crea Post bilingüe + adjunta Recurso ligado a producto → publica → **clímax: contenido vivo en el portal sin tocar código**.

## Wireframes (baja fidelidad)

### Home (compact / móvil)
```
┌───────────────────────────────┐
│ ☰  BeyondNet            🌐 ◐  │  Top App Bar
├───────────────────────────────┤
│  Gobernanza arquitectónica    │  display-small (emphasized)
│  ejecutable para AI-DD        │
│  [ Evalúa Evolith ]  ← filled │  CTA primario
│  Evolith · UMS · Shell        │  eyebrow
├───────────────────────────────┤
│  Elige tu camino              │  title-large
│  ┌─────────┐ ┌─────────┐      │
│  │Evaluar  │ │Construir│ …    │  cards (Caminos)
│  └─────────┘ └─────────┘      │
├───────────────────────────────┤
│  Productos destacados         │
│  [card][card]                 │  prueba social
│  Caso: bTm Music  · Comunidad │
├───────────────────────────────┤
│                       (FAB ✉) │  Contáctanos
└───────────────────────────────┘
```

### Ficha de Producto (Evolith)
```
[badge: OSS]  Evolith                      headline-medium
Subtítulo / promesa                        body-large
[ GitHub ★ ] [ Docs ] [ Demo ]             tonal/outlined
── Qué es ──────────────────────────────
── Diferenciadores ─────────────────────
── Casos / Recursos relacionados ───────
[ Agenda una conversación ]  ← filled
```

### Hub de Recursos
```
Recursos                                   headline-small
Filtros:  [Producto ▾]  (chips tipo)  doc·manual·video·…
┌──────┐ ┌──────┐ ┌──────┐
│card  │ │card  │ │card  │   ← card-outlined, badge=tipo
└──────┘ └──────┘ └──────┘
(estado vacío: "Sin recursos para este filtro — limpia filtros")
```

### Detalle de Post (Blog)
```
Título del artículo                        headline-large
autor · fecha · ES|EN
[ contenido rich text · columna ~720px ]   body-large
── Comentarios (aprobados) ──────────────
 • autor · fecha · texto
[ Inicia sesión para comentar ]  (si anónimo)
[ caja de comentario ]           (si member) → "pendiente"
```

## Responsive & Platform

- **Compact (<600):** 1 columna; nav en drawer; FAB de contacto; cards a ancho completo.
- **Medium (600–839):** 2 columnas en listados; nav visible parcial.
- **Expanded (≥840):** nav completa en Top App Bar; grids de 3–4 cards; hero a dos columnas (texto + visual).
- **Blog:** columna de lectura angosta en todos los breakpoints para legibilidad.

## Open Questions / Notes

- `[ASSUMPTION]` Seed de color y familia tipográfica por confirmar (ver DESIGN.md).
- `[NOTE FOR UX]` Activos visuales reales (capturas de productos, logo, imágenes de casos) pendientes; los wireframes usan placeholders.
- `[NOTE FOR UX]` Mocks HTML de alta fidelidad de Home y Ficha de Producto recomendados antes de construir (Finalize del workflow UX).

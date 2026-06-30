---
stepsCompleted: [step-01, step-02, step-03, step-04]
inputDocuments:
  - prds/prd-webportal-2026-06-30/prd.md
  - prds/prd-webportal-2026-06-30/addendum.md
  - architecture/architecture-webportal-2026-06-30/ARCHITECTURE-SPINE.md
  - briefs/brief-webportal-2026-06-30/brief.md
---

# webportal - Epic Breakdown

## Overview

Descomposición de los requisitos del **PRD** y las decisiones de la **Arquitectura** (ARCHITECTURE-SPINE) en épicos e historias accionables para el agente Dev. Alcance: **Fase 1** del portal de BeyondNet, entregable en 3 rebanadas (🟢 Vitrina núcleo · 🟡 Recursos · 🔵 Blog+auth). Brownfield: Payload 3.85 + Postgres + Next 16.1.6 ya embebidos.

> UX: aún no existe un contrato de UX (bmad-ux). El diseño base se cubre como historia (1.6) y se recomienda generar UX antes de pulir la UI.

## Requirements Inventory

### Functional Requirements

- **FR-1**: Hero con propuesta de valor y CTA primario (above-the-fold, editable en CMS).
- **FR-2**: Caminos por audiencia ("elige tu camino").
- **FR-3**: Prueba social resumida en home (productos destacados, ≥1 caso, comunidad).
- **FR-4**: Listado de Productos (Catálogo) con tarjeta por producto.
- **FR-5**: Ficha de Producto (detalle, enlaces, demo/quickstart si aplica).
- **FR-6**: Página de Servicios (consultoría/assessment + desarrollo a medida) con CTA.
- **FR-7**: Listado y detalle de Casos (Portafolio).
- **FR-8**: Sección de Comunidad (enlace a NestJS LATAM).
- **FR-9**: Listado filtrable de Recursos (por producto y tipo).
- **FR-10**: Acceso a un Recurso (abrir/descargar/reproducir según tipo).
- **FR-11**: Listado de Posts (Blog).
- **FR-12**: Detalle de Post (lectura pública, rich text).
- **FR-13**: Crear comentario (usuario autenticado; nace pendiente).
- **FR-14**: Moderación de comentarios (aprobar/rechazar).
- **FR-15**: Visualización de comentarios aprobados.
- **FR-16**: Inicio de sesión multi-proveedor (GitHub, Google, email/contraseña).
- **FR-17**: Sesión y cierre de sesión.
- **FR-18**: Panel de administración (CRUD de todas las colecciones, role-gated).
- **FR-19**: Borradores y publicación (draft/published).
- **FR-20**: Contenido y UI bilingües ES/EN.
- **FR-21**: SEO técnico y Open Graph (sitemap/robots; admin/api noindex).
- **FR-22**: Formularios de contacto por intención (leads).
- **FR-23**: Enlaces sociales oficiales (YouTube, GitHub, LinkedIn).

### NonFunctional Requirements

- **NFR-1 (Rendimiento)**: Core Web Vitals; objetivo LCP < 2.5 s en 4G, Lighthouse ≥ 90 (perf/SEO). `[ASSUMPTION]`
- **NFR-2 (Accesibilidad)**: WCAG 2.1 AA en superficies públicas. `[ASSUMPTION]`
- **NFR-3 (Seguridad)**: OWASP Top 10; secretos por env; rate-limit en login y comentarios; sanitización de rich text.
- **NFR-4 (Privacidad)**: consentimiento de cookies/analítica; trato cuidadoso de datos de leads.
- **NFR-5 (Observabilidad)**: analítica de conversión (Plausible) + logging de errores.
- **NFR-6 (Responsive)**: experiencia íntegra móvil/tablet/desktop.
- **NFR-7 (Mantenibilidad)**: un solo stack; contenido editable sin despliegues.

### Additional Requirements

*(De la Arquitectura — ADs y correcciones brownfield.)*

- **Stack [ADOPTED]**: un solo deployable Next.js + Payload embebido + 1 Postgres (AD-1).
- **Contenido como colecciones/globals** (AD-2): migrar el mock del viejo `beyondnet-portal` a la colección `products`.
- **Authz** por funciones de acceso, default-deny en escritura (AD-3).
- **Dos identidades** (AD-4): `users` (staff: admin/author/moderator, auth email) vs `members` (comentaristas: GitHub+Google+email vía **Auth.js / `payload-authjs`**).
- **Integridad de comentarios** (AD-5): corregir `comments.create:()=>true` + `authorName` libre → autor = relación a `member`, `status=pending`.
- **Acceso a datos** (AD-6): lectura server-first vía Local API; escrituras por route handlers validados + rate-limit.
- **i18n** (AD-7): localización Payload es(default)/en, fallback es.
- **Enums** (AD-8): `value` en inglés estable + label localizado (alinear `comments`, `users`).
- **Leads + anti-spam** (AD-9): colección `leads` + email vía **Resend** + **Cloudflare Turnstile** + honeypot.
- **SEO** (AD-10): metadata + OG + sitemap/robots; admin/api noindex; analítica **Plausible**.
- **Config** (AD-11): `PAYLOAD_SECRET`, `DATABASE_URI`, credenciales OAuth/email por env.
- **Deploy** (AD-12): un servicio Node + Postgres en **Hostinger VPS** (Node 20+). `[ASSUMPTION]`
- **Next.js**: construir en 16.1.6; **upgrade a 16.2.x LTS post-v1**.

### UX Design Requirements

- **UX-DR (pendiente)**: no hay contrato de UX (bmad-ux) todavía. Generar UX (IA, wireframes, tokens, estados, accesibilidad) y reextraer requisitos antes del pulido de UI. Cubierto provisionalmente por la historia **1.6 (design system base)**.

### FR Coverage Map

| FR | Épico.Historia |
|---|---|
| FR-1 | 2.1 |
| FR-2 | 2.2 |
| FR-3 | 2.3 |
| FR-4 | 3.1 |
| FR-5 | 3.2 |
| FR-6 | 3.3 |
| FR-7 | 3.4 |
| FR-8 | 3.5 |
| FR-9 | 4.1, 4.2 |
| FR-10 | 4.3 |
| FR-11 | 5.2 |
| FR-12 | 5.3 |
| FR-13 | 6.3 |
| FR-14 | 6.4 |
| FR-15 | 6.5 |
| FR-16 | 6.1 |
| FR-17 | 6.2 |
| FR-18 | 1.4 (+ admin inherente a cada colección) |
| FR-19 | 1.4, 5.1 |
| FR-20 | 1.3 |
| FR-21 | 1.5, 5.3 |
| FR-22 | 2.5 |
| FR-23 | 2.4 |

## Epic List

| Épico | Título | Rebanada |
|---|---|---|
| 1 | Cimientos del portal y CMS | 🟢 R1 (habilitador) |
| 2 | Vitrina pública: Home y conversión | 🟢 R1 |
| 3 | Exhibición: Productos, Servicios, Portafolio, Comunidad | 🟢 R1 |
| 4 | Hub de Recursos | 🟡 R2 |
| 5 | Blog | 🔵 R3 |
| 6 | Identidad y comentarios | 🔵 R3 |

---

## Epic 1: Cimientos del portal y CMS

**Goal:** Dejar la base brownfield lista: convenciones de datos, i18n, colecciones/globals de negocio, infraestructura SEO y design system base, para que las demás rebanadas construyan sobre terreno firme.

### Story 1.1: Ratificar setup brownfield y entorno

As a desarrollador,
I want confirmar que la app Next.js + Payload + Postgres corre con su configuración de entorno,
So that el equipo construye sobre una base verificada.

**Acceptance Criteria:**

**Given** el repo con Payload 3.85 + Next 16.1.6 + Postgres
**When** se levanta el proyecto con `PAYLOAD_SECRET` y `DATABASE_URI` definidos
**Then** el sitio público y el admin de Payload (`/admin`) cargan
**And** la conexión a Postgres funciona y se ejecutan migraciones iniciales.

### Story 1.2: Convención de enums y roles de staff (AD-8)

As a mantenedor,
I want valores de enumeración en inglés estable con labels localizados,
So that el dato sea consistente entre colecciones.

**Acceptance Criteria:**

**Given** la colección `users` con roles `autor/moderador`
**When** se aplica la convención AD-8
**Then** los valores almacenados son `admin|author|moderator`
**And** los labels mostrados en el admin están localizados (ES/EN)
**And** los tipos generados (`payload-types.ts`) reflejan los nuevos valores.

### Story 1.3: i18n base bilingüe (FR-20, AD-7)

As a visitante,
I want alternar entre español e inglés,
So that consumo el portal en mi idioma.

**Acceptance Criteria:**

**Given** la localización de Payload habilitada con locales `es` (default) y `en`
**When** un visitante cambia el idioma con el selector persistente
**Then** la UI y el contenido localizado se muestran en el idioma elegido
**And** si falta la traducción `en`, se hace fallback a `es` sin error.

### Story 1.4: Colecciones de negocio y globals + admin (FR-18, FR-19, AD-2)

As a editor,
I want gestionar productos, servicios, casos, leads y la configuración del sitio sin código,
So that el portal se mantiene vivo desde el CMS.

**Acceptance Criteria:**

**Given** el panel de Payload
**When** se crean las colecciones `products`, `services`, `cases`, `leads` y los globals `home`, `nav`, `socialLinks`, `siteSettings`
**Then** un editor con rol autorizado puede hacer CRUD y guardar borradores/publicar (draft/published)
**And** la lectura pública aplica solo a lo intencional (AD-3)
**And** los campos siguen el modelo del addendum técnico.

### Story 1.5: Infraestructura SEO (FR-21, AD-10)

As a responsable de marketing,
I want que el portal sea indexable y compartible,
So that el canal cumpla su función de distribución.

**Acceptance Criteria:**

**Given** una ruta pública
**When** se renderiza
**Then** expone `title`, `meta description`, URL canónica y etiquetas Open Graph/Twitter
**And** existen `sitemap.xml` y `robots.txt`
**And** `app/(payload)` y `/api` están marcadas `noindex`.

### Story 1.6: Design system base y migración desde beyondnet-portal

As a desarrollador frontend,
I want tokens, layout responsive y componentes base,
So that todas las páginas compartan una UI coherente.

**Acceptance Criteria:**

**Given** los componentes reutilizables del viejo `beyondnet-portal` (Navbar, Hero, Footer, Catalog, Contact)
**When** se migran al portal Next.js
**Then** existen tokens de diseño y un layout responsive (móvil/tablet/desktop)
**And** los componentes base se renderizan con la identidad estándar
**And** el `productsMock.ts` se reemplaza por datos de la colección `products`.

---

## Epic 2: Vitrina pública: Home y conversión

**Goal:** Entregar la home que posiciona a BeyondNet (Evolith flagship), enruta a las audiencias y convierte — el corazón de la Rebanada 1.

### Story 2.1: Hero con propuesta de valor (FR-1)

As a visitante,
I want entender en 30 segundos qué es BeyondNet/Evolith,
So that decido si me interesa seguir.

**Acceptance Criteria:**

**Given** la home
**When** un visitante la abre en desktop o móvil
**Then** ve, sin scroll, titular, subtítulo y un CTA primario
**And** el CTA navega a la superficie de conversión correspondiente
**And** el contenido del hero es editable desde el global `home`.

### Story 2.2: Caminos por audiencia (FR-2)

As a visitante,
I want elegir el camino que corresponde a mi perfil,
So that llego rápido a lo que busco.

**Acceptance Criteria:**

**Given** la home
**When** se renderizan los Caminos
**Then** se muestran ≥3 (Evaluar Evolith · Dev/Construir · Consultoría · Desarrollo a medida)
**And** cada Camino enlaza a su superficie destino con título y descripción corta.

### Story 2.3: Prueba social resumida (FR-3)

As a visitante,
I want ver señales de credibilidad en la home,
So that confío en BeyondNet.

**Acceptance Criteria:**

**Given** la home
**When** carga
**Then** muestra ≥2 productos destacados (desde `products`) y ≥1 caso (desde `cases`)
**And** incluye un bloque de Comunidad que enlaza a NestJS LATAM.

### Story 2.4: Enlaces sociales oficiales (FR-23)

As a visitante,
I want acceder a los canales oficiales,
So that sigo a BeyondNet donde prefiera.

**Acceptance Criteria:**

**Given** el header y el footer
**When** se renderizan desde el global `socialLinks`
**Then** muestran enlaces a YouTube, GitHub org y LinkedIn empresa
**And** abren en pestaña nueva con `rel` seguro.

### Story 2.5: Formularios de contacto por intención + leads (FR-22, AD-9)

As a prospecto,
I want enviar una solicitud (demo/consultoría/cotización),
So that inicio una conversación con BeyondNet.

**Acceptance Criteria:**

**Given** un formulario de contacto con una intención
**When** un visitante lo envía con datos válidos
**Then** el lead se guarda en la colección `leads` con su `intent` y se notifica por email vía Resend
**And** se valida con Cloudflare Turnstile + honeypot y rate-limit
**And** el visitante ve confirmación de envío.

### Story 2.6: Retiro de beyondnet-portal (cutover)

As a dueño del producto,
I want una sola vitrina pública,
So that no haya dos portales compitiendo.

**Acceptance Criteria:**

**Given** el nuevo portal en producción
**When** se hace el cutover
**Then** `beyondnet-portal` se despublica
**And** las URLs valiosas previas redirigen a su equivalente en el nuevo portal.

---

## Epic 3: Exhibición — Productos, Servicios, Portafolio, Comunidad

**Goal:** Mostrar el portafolio real de BeyondNet de forma clara y convertible.

### Story 3.1: Catálogo de Productos (FR-4)

As a visitante,
I want ver los productos con un mensaje claro por cada uno,
So that entiendo la oferta sin leer 12 repos.

**Acceptance Criteria:**

**Given** la página de Productos
**When** carga desde la colección `products`
**Then** cada tarjeta muestra nombre, descripción corta, tipo (oss/saas/enterprise/library) y ≥1 enlace (repo/NuGet/docs)
**And** el orden y los destacados son configurables desde el CMS.

### Story 3.2: Ficha de Producto (FR-5)

As a visitante,
I want el detalle de un producto,
So that evalúo si me sirve.

**Acceptance Criteria:**

**Given** una ficha de producto
**When** se abre
**Then** muestra descripción, enlaces (GitHub/NuGet/docs/demo) y CTA contextual
**And** los productos sin demo ocultan ese bloque sin error.

### Story 3.3: Página de Servicios (FR-6)

As a prospecto,
I want ver los servicios y cómo contratarlos,
So that decido contactar.

**Acceptance Criteria:**

**Given** la página de Servicios desde la colección `services`
**When** carga
**Then** lista ≥2 servicios (consultoría/assessment y desarrollo a medida)
**And** cada uno enlaza al formulario de Contacto con la intención preseleccionada.

### Story 3.4: Portafolio / Casos (FR-7)

As a prospecto de desarrollo a medida,
I want ver trabajos entregados,
So that confío en la capacidad de BeyondNet.

**Acceptance Criteria:**

**Given** el Portafolio desde la colección `cases`
**When** carga
**Then** cada caso muestra título, cliente/rubro, resumen y enlace externo (p. ej. btm-music.me)
**And** los casos son gestionables desde el CMS.

### Story 3.5: Sección de Comunidad (FR-8)

As a developer,
I want descubrir la comunidad de BeyondNet,
So that me uno y aprendo.

**Acceptance Criteria:**

**Given** la sección de Comunidad
**When** carga
**Then** muestra descripción y enlace externo a nestjslatam.dev
**And** no aloja ni replica el contenido de la comunidad.

---

## Epic 4: Hub de Recursos

**Goal:** Centralizar la habilitación de producto (docs, manuales, videos, canales) en un hub filtrable — Rebanada 2.

### Story 4.1: Modelo de Recurso (AD-2, AD-7)

As a editor,
I want modelar recursos ligados a productos,
So that puedo publicarlos sin código.

**Acceptance Criteria:**

**Given** la colección `resources`
**When** se define
**Then** tiene `title`(localizado), `type` (documentation|manual|video|download|external|social), relación a `products`, `locale`, `url|file`, `thumbnail`, `featured`
**And** un editor puede crear y publicar recursos desde el admin.

### Story 4.2: Hub filtrable de Recursos (FR-9)

As a visitante,
I want filtrar recursos por producto y tipo,
So that encuentro lo que necesito rápido.

**Acceptance Criteria:**

**Given** el Hub de Recursos
**When** un visitante aplica filtros de producto y/o tipo
**Then** la lista se actualiza sin recargar toda la página
**And** cada recurso muestra título, tipo, producto e idioma.

### Story 4.3: Acceso a un Recurso (FR-10)

As a visitante,
I want abrir/descargar/reproducir un recurso,
So that consumo el material.

**Acceptance Criteria:**

**Given** un recurso de tipo video
**When** se abre
**Then** embebe el reproductor (p. ej. YouTube)
**And** los tipos enlace/descarga abren/descargan el destino
**And** en v1 ningún recurso requiere autenticación.

---

## Epic 5: Blog

**Goal:** Publicar artículos bilingües con lectura pública y diseño estándar — base de la Rebanada 3.

### Story 5.1: Modelo de Posts alineado (FR-19, AD-7, AD-8)

As a autor,
I want un modelo de post bilingüe con estados,
So that gestiono el contenido editorial.

**Acceptance Criteria:**

**Given** la colección `posts` sembrada
**When** se alinea a las convenciones
**Then** `title` y `content` son localizables (ES/EN)
**And** `status` usa `draft|published` con labels localizados
**And** el post referencia a un `author` (staff).

### Story 5.2: Listado de Posts (FR-11)

As a visitante,
I want ver los artículos publicados,
So that elijo qué leer.

**Acceptance Criteria:**

**Given** la página del Blog
**When** carga
**Then** muestra los posts publicados (más recientes primero) con título, resumen, fecha y autor
**And** solo aparecen posts en estado `published`
**And** la lista pagina o carga incrementalmente.

### Story 5.3: Detalle de Post (FR-12, FR-21)

As a visitante,
I want leer un artículo completo,
So that consumo el contenido.

**Acceptance Criteria:**

**Given** un post publicado
**When** un visitante lo abre
**Then** lo lee sin autenticarse, con rich text (encabezados, código, imágenes) y diseño estándar
**And** la página expone metadatos Open Graph para compartir.

---

## Epic 6: Identidad y comentarios

**Goal:** Habilitar login de comentaristas (3 proveedores) y comentarios con moderación, corrigiendo las divergencias del código sembrado — cierre de la Rebanada 3.

### Story 6.1: Colección `members` + Auth.js (FR-16, AD-4)

As a visitante,
I want iniciar sesión con GitHub, Google o email,
So that puedo participar comentando.

**Acceptance Criteria:**

**Given** Auth.js (`payload-authjs`) configurado y la colección `members`
**When** un visitante inicia sesión con GitHub, Google o email/contraseña
**Then** se crea/identifica una cuenta de `member`
**And** los `members` no tienen acceso al admin de Payload
**And** el registro por email exige verificación de correo. `[ASSUMPTION v1]`

### Story 6.2: Sesión y cierre de sesión (FR-17)

As a member,
I want mantener y cerrar mi sesión,
So that controlo mi acceso.

**Acceptance Criteria:**

**Given** un member autenticado
**When** navega por el portal
**Then** su sesión persiste entre navegaciones
**And** "cerrar sesión" la termina
**And** tras login vuelve al post desde donde inició sesión.

### Story 6.3: Crear comentario autenticado (FR-13, AD-5)

As a member,
I want comentar en un artículo,
So that aporto a la conversación.

**Acceptance Criteria:**

**Given** la colección `comments` corregida
**When** un member envía un comentario
**Then** el comentario referencia su cuenta (relación a `member`), no texto libre
**And** nace con `status=pending` y no es visible públicamente
**And** un visitante anónimo no puede enviar comentarios (se le invita a iniciar sesión).

### Story 6.4: Moderación de comentarios (FR-14, AD-8)

As a moderador,
I want aprobar o rechazar comentarios,
So that controlo la calidad de la conversación.

**Acceptance Criteria:**

**Given** la cola de comentarios pendientes en el admin
**When** un moderador/admin cambia el estado
**Then** los valores son `pending|approved` (labels localizados)
**And** solo los `approved` se muestran en el post
**And** un member no puede aprobar comentarios.

### Story 6.5: Visualización de comentarios aprobados (FR-15)

As a visitante,
I want leer los comentarios de un artículo,
So that veo la conversación.

**Acceptance Criteria:**

**Given** un post con comentarios aprobados
**When** un visitante lo abre
**Then** ve los comentarios `approved` en orden cronológico con autor y fecha
**And** la lectura de comentarios no requiere autenticación.

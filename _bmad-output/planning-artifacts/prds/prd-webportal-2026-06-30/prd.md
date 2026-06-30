---
title: BeyondNet Web Portal
status: draft
created: 2026-06-30
updated: 2026-06-30
author: Jhon (PO) · BeyondNet E.I.R.L.
scope: Fase 1 (rebanadas 1–3)
language: es
---

# PRD: BeyondNet Web Portal — Fase 1
*Working title — confirmar.*

## 0. Propósito del documento

Este PRD es para el PO/PM (Jhon), stakeholders de BeyondNet E.I.R.L. y los workflows BMAD aguas abajo (UX, Arquitectura, Épicos e Historias). Construye sobre el **Product Brief** ([brief.md](../../briefs/brief-webportal-2026-06-30/brief.md)) y **no lo duplica**. El **cómo técnico** (stack, modelo de datos, hosting, alternativas descartadas) vive en [addendum.md](./addendum.md).

Estructura: vocabulario anclado al Glosario (§3); features agrupadas con FRs anidados y numerados globalmente (FR-N, estables aunque se reordenen); supuestos etiquetados inline `[ASSUMPTION]` e indexados en §13. **Alcance = Fase 1**, entregable en 3 rebanadas (§10).

## 1. Visión

`webportal` es la **única puerta de entrada pública de BeyondNet** — el estudio de software de Lima que construye productos (Evolith como *flagship*, UMS, librerías Shell.\*), presta servicios (consultoría de arquitectura/AI-DD y desarrollo a medida) y cultiva comunidad (NestJS LATAM). Hoy ese activo es de nivel plataforma pero **invisible y fragmentado**; el portal lo unifica en una sola vitrina bilingüe que cualquiera entiende en 30 segundos.

No es un producto: es un **canal de distribución y conversión**. Su éxito se mide en *claridad del mensaje* y *conversión* (estrellas/descargas, demos, leads de consultoría y de desarrollo a medida), no en features. El hero posiciona a BeyondNet con Evolith al frente; servicios y comunidad funcionan como **prueba de credibilidad** (producto + entrega + comunidad bajo una marca: una triple prueba difícil de fingir).

Si esta pieza funciona, desaparece el problema #1 del negocio: un gran trabajo de ingeniería que nadie encuentra ni entiende. Reemplaza y retira a `beyondnet-portal`.

## 2. Usuario objetivo

### 2.1 Jobs To Be Done

- **Como CTO/Arquitecto** evaluando tecnología, necesito entender rápido *qué es Evolith*, *por qué confiar* y *cómo adoptarlo o contratarlo*, para decidir si lo llevo a mi empresa sin perder una tarde leyendo 12 repos.
- **Como Developer**, necesito un *quickstart*, docs y paquetes (NuGet/GitHub) y una comunidad donde aprender, para empezar a construir con Shell/Evolith hoy.
- **Como prospecto de consultoría**, necesito ver *qué problema resuelven* y *prueba de capacidad* (Assessment, casos), para iniciar una conversación comercial con confianza.
- **Como prospecto de desarrollo a medida**, necesito ver *portafolio y casos reales*, para saber si BeyondNet puede construir lo que necesito y pedir una cotización.
- **Como editor/marketing de BeyondNet**, necesito gestionar contenido (productos, posts, recursos, comentarios) sin tocar código, para mantener el portal vivo.
- **Como lector que quiere participar**, necesito comentar un artículo con un login simple, para sumar a la conversación.

### 2.2 No-usuarios (v1)

- Clientes que esperan **comprar/contratar en línea** (no hay e-commerce ni checkout en v1).
- Usuarios que esperan un **portal de cuenta/cliente** (la auth de v1 es solo para comentar).
- Usuarios finales de las **apps de producto** (Tracker/UMS) — el portal enlaza/demuestra, no las opera.

### 2.3 User Journeys clave

- **UJ-1. Carla, CTO de una fintech, evalúa Evolith en 3 minutos.**
  - **Persona + contexto:** Carla lidera plataforma; su equipo adopta IA para desarrollar y teme perder control de calidad. Llega desde LinkedIn.
  - **Entry state:** anónima, desktop, primera visita.
  - **Path:** lee el hero ("gobernanza arquitectónica ejecutable para AI-DD") → toca el camino "Evalúa Evolith" → ve qué es + casos + diferenciadores → abre la demo/quickstart → toca "Agenda una conversación".
  - **Climax:** entiende el valor y deja sus datos para una demo/contacto.
  - **Resolution:** lead de evaluación capturado; recibe confirmación. Realiza UJ de conversión.
  - **Edge case:** si no está lista para hablar, da una estrella en GitHub / guarda un recurso → micro-conversión.

- **UJ-2. Diego, dev backend, llega por las librerías Shell.**
  - **Persona + contexto:** Diego buscaba una librería DDD para .NET y encontró `Shell.ddd` en NuGet; quiere ver "qué más hay".
  - **Path:** entra a la ficha de producto Shell → ve quickstart + enlace NuGet/GitHub → descubre Evolith y la comunidad NestJS LATAM → se une a la comunidad.
  - **Climax:** instala el paquete y/o entra a la comunidad.
  - **Resolution:** adopción + miembro de comunidad. **Edge case:** busca docs profundas → el portal lo enlaza al repo, no lo retiene a la fuerza.

- **UJ-3. Marina, gerente de una empresa, busca quién le construya un portal.**
  - **Path:** llega buscando "desarrollo de portales a medida Perú" → ve Servicios + Portafolio (bTm Music) → confía al ver entregas reales → toca "Cuéntanos tu proyecto" y envía el formulario.
  - **Climax:** lead de desarrollo a medida capturado.
  - **Resolution:** BeyondNet recibe la solicitud con contexto. **Edge case:** rubro no-tech (música, retail) → el portafolio diverso le da confianza igual.

- **UJ-4. Pablo, lector técnico, comenta un artículo del Blog.**
  - **Entry state:** anónimo, leyendo un post (lectura **no** requiere login; diseño estándar).
  - **Path:** termina el artículo → quiere comentar → inicia sesión con GitHub → escribe el comentario → ve aviso "pendiente de moderación".
  - **Climax:** comentario enviado.
  - **Resolution:** el editor lo aprueba y aparece públicamente. **Edge case:** spam → queda en cola, nunca se publica sin aprobación.

- **UJ-5. Sofía, marketing de BeyondNet, publica un artículo y un recurso.**
  - **Path:** entra al panel de Payload → crea un Post bilingüe → adjunta un Recurso (manual PDF) ligado a un producto → publica.
  - **Climax:** contenido visible en el portal sin intervención de un dev.
  - **Resolution:** portal vivo; opcionalmente dispara el flywheel a LinkedIn (Fase 2).

## 3. Glosario

*Los workflows aguas abajo deben usar estos términos exactamente; no introducir sinónimos en el resto del PRD.*

- **BeyondNet** — La empresa/estudio (BeyondNet E.I.R.L., Lima). Marca paraguas.
- **Evolith** — Producto *flagship* (framework de gobernanza arquitectónica ejecutable). Una de las entradas del **Catálogo**.
- **Producto** — Activo que se vende o adopta (Evolith, UMS, Shell.\*). Gestionado como entrada de **Catálogo**.
- **Catálogo** — Colección de Productos exhibida en el portal, editable desde el **CMS**.
- **Servicio** — Oferta de trabajo de BeyondNet: *Consultoría* (arquitectura/AI-DD) o *Desarrollo a medida*.
- **Caso** — Proyecto/cliente entregado, mostrado como prueba (p. ej. bTm Music). Compone el **Portafolio**.
- **Portafolio** — Colección de Casos.
- **Comunidad** — Propiedad externa que BeyondNet cultiva (NestJS LATAM); el portal la **enlaza**, no la aloja.
- **Recurso** — Pieza de habilitación de producto: documentación, manual, video, descarga, enlace o canal social. Compone el **Hub de Recursos**.
- **Post** — Artículo del **Blog**.
- **Blog** — Sección de Posts con comentarios.
- **Comentario** — Aporte de un **Usuario** sobre un Post; nace en estado *pendiente* y requiere **Moderación**.
- **Moderación** — Flujo de aprobación/rechazo de Comentarios por un **Editor**.
- **Visitante** — Usuario anónimo (puede leer todo el contenido público).
- **Usuario** — Persona autenticada (Comentarista); en v1 su único privilegio es comentar. *(Arquitectura: colección `members`, login GitHub/Google/email vía Auth.js.)*
- **Editor** — Personal de BeyondNet que gestiona contenido y modera vía CMS. *(Arquitectura: colección `users`, roles `author`/`moderator`/`admin`.)*
- **Lead** — Solicitud capturada por el portal (demo / consultoría / cotización de desarrollo). *(Arquitectura: colección `leads`.)*
- **CMS** — El gestor de contenido con panel de administración propio (modela Catálogo, Posts, Recursos, Casos, Comentarios, Usuarios/staff).
- **Camino** — Ruta guiada por audiencia en la home ("elige tu camino").
- **CTA** — Llamado a la acción de conversión (GitHub/NuGet, demo, contacto, cotización).

## 4. Arquitectura de Información (IA)

Superficies de nivel superior (navegación principal), bilingües ES/EN:

1. **Home** — hero + posicionamiento + Caminos + prueba social resumida.
2. **Productos** — Catálogo (Evolith flagship, UMS, Shell.\*) → ficha por producto.
3. **Servicios** — Consultoría (arquitectura/AI-DD, Assessment) + Desarrollo a medida.
4. **Portafolio** — Casos (bTm Music, …).
5. **Recursos** — Hub filtrable por producto y tipo.
6. **Blog** — listado + detalle de Post (con comentarios).
7. **Comunidad** — enlace/promoción de NestJS LATAM.
8. **Contacto** — formularios por intención (demo / consultoría / cotización).
9. **Persistentes:** selector de idioma, enlaces sociales (YouTube/GitHub/LinkedIn), CTA primario.

`[ASSUMPTION: el menú principal agrupa Productos · Servicios · Portafolio · Recursos · Blog · Comunidad; Contacto vive como CTA persistente. Confirmar etiquetas y orden.]`

## 5. Features

### 5.1 Home / Vitrina

**Description:** Primera superficie. Comunica en ≤30 s quién es BeyondNet (estudio) con Evolith al frente, y enruta a cada audiencia por su Camino. Incluye prueba social resumida (productos destacados, un Caso, la Comunidad). Realiza UJ-1, UJ-2, UJ-3.

#### FR-1: Hero con propuesta de valor y CTA primario
Un Visitante ve, sin scroll, la promesa central + un CTA primario. Realiza UJ-1.
**Consequences (testable):**
- El hero renderiza titular, subtítulo y al menos un CTA above-the-fold en desktop y móvil.
- El CTA primario navega a la superficie de conversión correspondiente.
- El contenido del hero es editable desde el CMS sin desplegar código.

#### FR-2: Caminos por audiencia ("elige tu camino")
Un Visitante elige entre Caminos diferenciados (Evaluar Evolith · Construir/Dev · Consultoría · Desarrollo a medida). Realiza UJ-1, UJ-2, UJ-3.
**Consequences (testable):**
- Se muestran ≥3 Caminos; cada uno enlaza a su superficie destino.
- Cada Camino es identificable por título y descripción corta.

#### FR-3: Prueba social resumida
Un Visitante ve, en home, productos destacados, ≥1 Caso y la Comunidad.
**Consequences (testable):**
- Home lista ≥2 Productos destacados (desde Catálogo) y ≥1 Caso (desde Portafolio).
- Bloque de Comunidad enlaza a NestJS LATAM.

### 5.2 Catálogo de Productos

**Description:** Lista los Productos reales con un mensaje por cada uno y rutas a su repo/docs/paquete. Evita la lista cruda de repos. Gestionado en el CMS. Realiza UJ-1, UJ-2.

#### FR-4: Listado de Productos
Un Visitante ve el Catálogo con tarjeta por Producto (nombre, una línea, tipo, enlaces).
**Consequences (testable):**
- Cada tarjeta muestra nombre, descripción corta, tipo (producto OSS / SaaS / enterprise / librería) y ≥1 enlace (repo/NuGet/docs).
- El orden y los destacados son configurables desde el CMS.

#### FR-5: Ficha de Producto
Un Visitante abre el detalle de un Producto con su narrativa, enlaces y, si aplica, quickstart/demo.
**Consequences (testable):**
- La ficha muestra descripción, enlaces (GitHub/NuGet/docs/demo) y CTA contextual.
- Productos sin demo ocultan el bloque de demo sin error.

### 5.3 Servicios

**Description:** Presenta Consultoría (arquitectura/AI-DD, Assessment de madurez) y Desarrollo a medida, cada uno con CTA de contacto. Realiza UJ-3. El mensaje de "a medida" se presenta como prueba de entrega, sin diluir el premium de Evolith.

#### FR-6: Página de Servicios
Un Visitante ve los Servicios con su descripción y CTA de contacto/cotización.
**Consequences (testable):**
- Se listan ≥2 Servicios (Consultoría/Assessment y Desarrollo a medida).
- Cada Servicio enlaza al formulario de Contacto con la intención preseleccionada.

### 5.4 Portafolio / Casos

**Description:** Muestra Casos entregados como prueba. Realiza UJ-3.

#### FR-7: Listado y detalle de Casos
Un Visitante ve el Portafolio y abre un Caso (cliente, rubro, qué se hizo, enlace al sitio).
**Consequences (testable):**
- Cada Caso muestra título, cliente/rubro, resumen y enlace externo (p. ej. btm-music.me).
- Casos gestionables desde el CMS.

### 5.5 Comunidad

#### FR-8: Sección de Comunidad
Un Visitante ve la Comunidad (NestJS LATAM) y navega hacia ella.
**Consequences (testable):**
- Se muestra descripción + enlace externo a nestjslatam.dev.
- No se aloja ni se replica el contenido de la comunidad (solo se enlaza).

### 5.6 Hub de Recursos

**Description:** Biblioteca de Recursos de habilitación, filtrable por producto y tipo. Público en v1. Realiza UJ-2, UJ-5.

#### FR-9: Listado filtrable de Recursos
Un Visitante filtra Recursos por Producto y por tipo (documentación · manual · video · descarga · enlace · canal social).
**Consequences (testable):**
- El filtro combina Producto × tipo y actualiza la lista sin recargar toda la página.
- Cada Recurso muestra título, tipo, producto asociado e idioma.

#### FR-10: Acceso a un Recurso
Un Visitante abre/descarga/reproduce un Recurso según su tipo.
**Consequences (testable):**
- Recursos de tipo video embeben el reproductor (p. ej. YouTube); tipo enlace/descarga abren/descargan el destino.
- En v1 ningún Recurso requiere autenticación (sin gating).

### 5.7 Blog

**Description:** Posts (thought leadership) con listado y detalle, bilingües. Lectura pública (diseño estándar, sin login). Realiza UJ-4, UJ-5.

#### FR-11: Listado de Posts
Un Visitante ve los Posts (más recientes primero) con título, resumen, fecha y autor.
**Consequences (testable):**
- El listado pagina o carga incrementalmente.
- Solo aparecen Posts en estado publicado.

#### FR-12: Detalle de Post
Un Visitante lee un Post completo sin necesidad de autenticarse.
**Consequences (testable):**
- El Post renderiza contenido enriquecido (encabezados, código, imágenes) con el diseño estándar del portal.
- Incluye metadatos para compartir (Open Graph) — ver FR-21.

### 5.8 Comentarios y Moderación

**Description:** Comentarios por Post, con Moderación previa. Realiza UJ-4.

#### FR-13: Crear comentario (autenticado)
Un Usuario autenticado publica un Comentario en un Post; nace *pendiente*. Realiza UJ-4.
**Consequences (testable):**
- Un Visitante anónimo no puede enviar comentarios (se le invita a iniciar sesión).
- Un Comentario recién creado no es visible públicamente hasta su aprobación.

#### FR-14: Moderación de comentarios
Un Editor aprueba o rechaza Comentarios desde el CMS.
**Consequences (testable):**
- Solo Comentarios aprobados se muestran en el Post.
- El Editor puede ver la cola de pendientes y cambiar su estado.

#### FR-15: Visualización de comentarios aprobados
Un Visitante ve los Comentarios aprobados bajo el Post.
**Consequences (testable):**
- Se listan en orden cronológico con autor y fecha.
- La lectura de comentarios no requiere autenticación.

### 5.9 Autenticación (solo para comentar)

**Description:** Login para habilitar comentarios. Leer es siempre público. Tres mecanismos. Realiza UJ-4.

#### FR-16: Inicio de sesión multi-proveedor
Un Visitante inicia sesión con **GitHub, Google o email/contraseña** para convertirse en Usuario.
**Consequences (testable):**
- Los tres mecanismos crean/identifican una cuenta de Usuario.
- Tras login, el Usuario retorna al Post desde donde inició sesión.
- Registro por email exige verificación de correo. `[ASSUMPTION: verificación por email en v1.]`

#### FR-17: Sesión y cierre de sesión
Un Usuario mantiene su sesión y puede cerrarla.
**Consequences (testable):**
- La sesión persiste entre navegaciones; "cerrar sesión" la termina.
- El alcance de la cuenta v1 se limita a comentar (sin panel de cuenta — ver §9).

### 5.10 Gestión de contenido (CMS / Admin)

**Description:** Panel de administración para que Editores gestionen todo el contenido sin código. Realiza UJ-5.

#### FR-18: Panel de administración
Un Editor gestiona Catálogo, Posts, Recursos, Casos, Comentarios y Usuarios desde un panel.
**Consequences (testable):**
- CRUD sobre cada colección con control de acceso por rol.
- Cambios publicados se reflejan en el portal sin desplegar código.

#### FR-19: Borradores y publicación
Un Editor guarda contenido como borrador y lo publica cuando está listo.
**Consequences (testable):**
- Contenido en borrador no es visible al público.
- Existe una acción explícita de publicar/despublicar.

### 5.11 Internacionalización (bilingüe ES/EN)

#### FR-20: Contenido y UI bilingües
Un Visitante alterna entre español e inglés en UI y contenido.
**Consequences (testable):**
- Existe un selector de idioma persistente.
- El contenido editorial (Posts, Recursos, Productos, Casos) admite versión ES y EN; si falta una, hay fallback definido. `[ASSUMPTION: idioma por defecto ES, con EN disponible; fallback a ES si falta traducción.]`

### 5.12 SEO y compartibilidad

#### FR-21: SEO técnico y Open Graph
Cada página pública expone metadatos para buscadores y para compartir en redes.
**Consequences (testable):**
- Cada superficie pública tiene `title`, `meta description`, URL canónica y etiquetas Open Graph/Twitter.
- Existe `sitemap.xml` y `robots.txt`; las páginas públicas son indexables (admin y rutas privadas, no).

### 5.13 Conversión y Contacto

**Description:** Captura de leads por intención. Realiza UJ-1, UJ-3.

#### FR-22: Formularios de contacto por intención
Un Visitante envía una solicitud (demo / consultoría / cotización de desarrollo) desde un formulario.
**Consequences (testable):**
- Cada formulario captura intención + datos mínimos y confirma el envío al Visitante.
- Las solicitudes llegan a BeyondNet (email y/o registro en CMS). `[ASSUMPTION: notificación por email + registro de lead en CMS.]`
- Protección anti-spam (p. ej. captcha/honeypot) activa.

#### FR-23: Enlaces sociales oficiales
Un Visitante accede a los canales oficiales desde el portal.
**Consequences (testable):**
- Header/footer muestran enlaces a YouTube, GitHub org y LinkedIn empresa.
- Los destinos abren en pestaña nueva con `rel` seguro.

## 6. NFRs transversales

- **Rendimiento:** home y páginas de contenido con buen Core Web Vitals; `[ASSUMPTION: LCP < 2.5 s en 4G, objetivo Lighthouse ≥ 90 en performance/SEO.]`
- **Accesibilidad:** objetivo **WCAG 2.1 AA** en superficies públicas. `[ASSUMPTION]`
- **Seguridad:** OWASP Top 10 en formularios y auth; secretos fuera del repo; rate-limiting en login y comentarios; sanitización de contenido enriquecido.
- **Privacidad:** consentimiento de cookies/analítica conforme a buenas prácticas; datos de leads tratados con cuidado.
- **Observabilidad:** analítica de conversión + logging de errores.
- **Responsive:** experiencia íntegra en móvil, tablet y desktop.
- **Mantenibilidad:** un solo stack; contenido editable sin despliegues.

## 7. Integraciones y dependencias

- **Auth:** proveedores OAuth GitHub y Google + credenciales email/contraseña.
- **Externos enlazados:** GitHub (org/repos), NuGet (paquetes Shell), YouTube (videos), LinkedIn (perfil), NestJS LATAM (comunidad), btm-music.me (Caso).
- **Flywheel (Fase 2):** `linkedin-publisher` (Blog → LinkedIn). En v1 solo enlaces; la automatización es posterior.
- **Analítica/anti-spam/email:** herramientas a definir en addendum. `[ASSUMPTION]`

## 8. Estética y tono

- **Tono:** técnico-creíble, directo, sin humo; bilingüe nativo (no traducción robótica).
- **Posicionamiento visual:** serio y "platform-grade" — coherente con vender arquitectura limpia. Evolith al frente.
- **Anti-referencia:** evitar el look "plantilla genérica de agencia" que rebaje el premium.
- `[ASSUMPTION: branding/identidad visual a confirmar; ver Preguntas abiertas.]`

## 9. No-Goals (explícitos)

- **No** es e-commerce ni checkout; no se cobra en línea.
- **No** es portal de cuenta/cliente; la auth solo habilita comentar.
- **No** aloja la app de Tracker/UMS ni la operación de productos (solo enlaza/demuestra).
- **No** absorbe NestJS LATAM ni bTm Music (se enlazan; siguen en su propio stack).
- **No** duplica las docs canónicas de cada repo (Recursos agrega y enlaza).
- **No** incluye blog multi-tenant ni newsletter en v1.
- **No** es una sub-marca separada para "desarrollo a medida" en v1. `[ASSUMPTION — ver Preguntas abiertas]`

## 10. Alcance MVP (Fase 1 en 3 rebanadas)

### 10.1 En alcance
- **🟢 Rebanada 1 — Vitrina núcleo:** FR-1..FR-8, FR-20, FR-21, FR-22, FR-23 + retiro de `beyondnet-portal`. (Home, Productos, Servicios, Portafolio, Comunidad, i18n, SEO, Contacto, sociales.)
- **🟡 Rebanada 2 — Hub de Recursos:** FR-9, FR-10 (+ modelado `Resource` y filtros). Sin auth.
- **🔵 Rebanada 3 — Blog + comentarios + auth:** FR-11..FR-17 (+ FR-18/FR-19 de CMS que habilitan publicación).

> Nota: FR-18/FR-19 (CMS/admin) son transversales; su base se levanta en R1 (para Catálogo/Casos) y se amplía en R2/R3 (Recursos, Posts, Comentarios).

### 10.2 Fuera de alcance (MVP) — diferido
- Descargas *gated* / captura de leads por Recurso → **Fase 2** (reutiliza la auth ya construida).
- Auto-importación de videos de YouTube y feeds de redes → **Fase 2**.
- Automatización del flywheel Blog → LinkedIn (`linkedin-publisher`) → **Fase 2**.
- Demos embebidas (sandbox de Tracker), marketplace de rulesets, certificación → **Visión** (post-Fase 1).
- Dogfooding de UMS como proveedor de identidad → **Visión**. `[NOTE FOR PM: estratégicamente potente; revisar tras v1.]`

## 11. Métricas de éxito

*Cada SM referencia los FR que valida. Targets `[ASSUMPTION]` — confirmar en finalize.*

**Primarias**
- **SM-1 (Claridad):** % de visitantes que identifican correctamente "qué es Evolith/BeyondNet" en test de 5 s. Target `[ASSUMPTION: ≥70%]`. Valida FR-1, FR-2.
- **SM-2 (Conversión a lead):** nº de solicitudes (demo/consultoría/cotización) por mes. Target `[ASSUMPTION: ≥10/mes a los 3 meses]`. Valida FR-22.
- **SM-3 (Adopción):** estrellas GitHub + descargas NuGet atribuibles al portal. Target `[ASSUMPTION]`. Valida FR-4, FR-5, FR-23.

**Secundarias**
- **SM-4 (Contenido vivo):** cadencia de publicación de Posts/Recursos. Target `[ASSUMPTION: ≥2 posts/mes]`. Valida FR-11, FR-9.
- **SM-5 (Comunidad):** clics salientes a NestJS LATAM. Valida FR-8.
- **SM-6 (Engagement):** comentarios aprobados por post. Valida FR-13..FR-15.

**Contra-métricas (no optimizar)**
- **SM-C1:** volumen de leads **sin calidad** (spam/no-ICP). Contrapesa SM-2 — más formularios no es mejor si no son ICP.
- **SM-C2:** comentarios aprobados a costa de moderación laxa (spam publicado). Contrapesa SM-6.
- **SM-C3:** tráfico que rebota sin entender el mensaje. Contrapesa SM-1 (no perseguir vanity traffic).

## 12. Preguntas abiertas

1. **Encuadre BeyondNet-empresa + Evolith flagship** — confirmar (todo el PRD lo asume). `[RECOMENDADO]`
2. **¿Marca única o sub-marca** para "desarrollo a medida"? (FR-6, No-Goal).
3. **Idioma por defecto / política i18n** y fallback (FR-20).
4. **Targets numéricos** de SM-1..SM-4.
5. **Handles sociales** oficiales (YouTube/GitHub/LinkedIn) para FR-23.
6. **`transport-track-trace`** — publicar o quitar antes de exhibir en Catálogo (FR-4).
7. **Herramientas** de analítica, email y anti-spam (FR-22, NFRs).
8. **Verificación de email** en registro: ¿v1 o Fase 2? (FR-16).

## 13. Índice de supuestos

- §4 IA — agrupación/orden del menú y Contacto como CTA.
- §5.9 FR-16 — verificación por email en v1.
- §5.11 FR-20 — ES por defecto, EN disponible, fallback a ES.
- §5.13 FR-22 — leads vía email + registro en CMS; anti-spam activo.
- §6 — targets de performance (LCP/Lighthouse) y accesibilidad WCAG 2.1 AA.
- §7 — herramientas de analítica/email/anti-spam por definir.
- §8 — branding/identidad visual por confirmar.
- §9 — sin sub-marca para "a medida" en v1.
- §11 — todos los targets de métricas.

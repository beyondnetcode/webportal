---
title: "Product Brief — BeyondNet Web Portal (Puerta de entrada de BeyondNet: productos, servicios y comunidad)"
status: draft
created: 2026-06-30
updated: 2026-06-30
author: Jhon (PO) · BeyondNet E.I.R.L.
language: es
---

# Product Brief: BeyondNet Web Portal

> **Nota de encuadre:** `webportal` **no es un producto** — es un **canal/vitrina**. Su trabajo no es *ser* algo, sino **exhibir el portafolio completo de BeyondNet (productos, servicios y comunidad) y convertir visitas en evaluación, adopción y leads.**
>
> **Arquitectura de marca:** **BeyondNet** (la empresa/estudio) → **Evolith** (producto *flagship*) + **Shell.\*** y **UMS** (productos) + **Servicios** (consultoría AI-DD y desarrollo a medida) + **Comunidad** (NestJS LATAM). Evolith manda el mensaje principal; servicios y comunidad son **prueba de credibilidad**, no ruido.

## Resumen Ejecutivo

BeyondNet es un **estudio de software** con tres patas: **productos** de nivel plataforma (Evolith Core/Tracker, UMS, librerías Shell.* — código real en TypeScript, OPA, MCP, NuGet, .NET 10), **servicios** (consultoría de arquitectura/AI-DD y desarrollo de portales a medida, con clientes reales como bTm Music) y una **comunidad** que cultiva (NestJS LATAM). Pero hoy todo eso tiene **distribución cero y está fragmentado**: 0 estrellas, narrativa dispersa entre 12 repos, dos portales solapados, y ningún punto de entrada que explique *qué es BeyondNet*, *qué ofrece* y *por dónde empezar*.

`webportal` resuelve eso siendo **la única puerta de entrada pública** del ecosistema. Unifica la historia en una sola vitrina bilingüe (ES/EN) que presenta los productos reales, guía a tres audiencias por su camino, y convierte: estrellas y adopción en GitHub/NuGet, demos solicitadas y leads de consultoría. Además incorpora un **Blog** (con comentarios moderados) y un **hub de Recursos** de producto (docs, manuales, videos, canales), todo gestionado desde un único CMS. **Absorbe y reemplaza a `beyondnet-portal`.**

Se construye sobre **Next.js + Payload CMS** (un solo stack TypeScript, coherente con lo que la empresa vende). Si esta pieza funciona, deja de existir el problema #1 del negocio (un gran producto que nadie encuentra ni entiende).

## El Problema

- **Gran build, cero distribución.** El activo técnico es sólido pero invisible. Un visitante no logra responder "¿qué es Evolith?" ni "¿por dónde empiezo?".
- **Narrativa dispersa.** 12 repos, READMEs heterogéneos, una lista de 9 "productos" que abruma a cualquier comprador.
- **Estudio invisible.** No hay un solo lugar que muestre que BeyondNet es un estudio creíble: que **entrega a clientes reales** (bTm Music) y **corre una comunidad activa** (NestJS LATAM). Esa prueba social hoy se pierde.
- **Dos vitrinas compitiendo** (`webportal` + `beyondnet-portal`) → duplicación de esfuerzo y mensaje incoherente.
- **Sin conversión.** No hay CTAs ni rutas claras hacia adoptar (dev), evaluar (arquitecto), contratar consultoría o **encargar un desarrollo a medida**.
- **Costo del status quo:** el trabajo de ingeniería, los clientes y la comunidad no se traducen en leads ni ingresos.

## La Solución

Una sola landing/vitrina pública, bilingüe, que:

1. **Comunica la promesa central** en un hero que cualquiera entiende en 30 segundos (BeyondNet como estudio, con Evolith al frente).
2. **Exhibe los productos reales** (Evolith Core, Tracker, UMS, Shell.*) con un mensaje por cada uno — no la lista cruda de repos.
3. **Presenta los Servicios:** consultoría (arquitectura/AI-DD) y **desarrollo de portales/software a medida**.
4. **Muestra portafolio/casos** de clientes (p. ej. bTm Music) como **prueba de entrega**.
5. **Conecta con la Comunidad** (NestJS LATAM) como **prueba de autoridad y alcance** (enlace, no se absorbe).
6. **Ofrece caminos guiados** ("elige tu camino") según la audiencia.
7. **Aporta prueba** (demos, quickstart, casos).
8. **Publica un Blog** con artículos (thought leadership), comentarios con **login y moderación**.
9. **Centraliza Recursos de producto** (documentación, manuales, videos, canales) en un hub filtrable por producto y tipo.
10. **Convierte** con CTAs claros: GitHub/NuGet, solicitar demo, contactar para consultoría/assessment, **cotizar un desarrollo**.
11. **Reemplaza a `beyondnet-portal`** — una sola fuente de verdad de cara al mundo.

**Arquitectura de contenido:** **Next.js + Payload CMS** (un solo stack TypeScript, on-brand). Payload es la columna de contenido y modela **Productos, Posts (Blog), Recursos, Comentarios y Usuarios**, con su propio panel de administración. Esto permite que marketing gestione todo sin tocar código.

**Presencia social y flywheel de distribución:** el portal se conecta con los canales oficiales — **YouTube** (videos → alimentan Recursos), **GitHub** (perfil de org → adopción de productos) y **LinkedIn** (perfil empresarial). El círculo de distribución que cierra el problema #1: *artículo del Blog → herramienta interna `linkedin-publisher` → post en LinkedIn → tráfico de vuelta al portal*. En v1 son enlaces visibles; la automatización del pipeline y los feeds embebidos son Fase 2.

## Qué lo hace diferente

El diferenciador del **portal** es **claridad y un único lugar**: traduce un ecosistema sofisticado (27 MCP tools, Ports & Adapters, rulesets/OPA) en un mensaje simple y accionable.

El diferenciador del **ecosistema que exhibe** (la promesa a comunicar): *gobernanza arquitectónica ejecutable para la era del AI-DD* — Spec-Driven + AI-Driven Development + production harnesses, bilingüe, con código real. Honestamente, el "moat" hoy es **narrativa + ejecución**, no tecnología propietaria; el portal es justo lo que convierte ejecución en posicionamiento.

Y un diferenciador que pocos consultores/estudios pueden mostrar junto: **producto + entrega + comunidad bajo una misma marca**. BeyondNet no solo escribe sobre arquitectura — **publica librerías en NuGet, entrega productos a clientes reales y cultiva una comunidad de desarrolladores (NestJS LATAM)**. Esa triple prueba es difícil de fingir y muy creíble para un CTO.

## A quién sirve — 1 hero, varios caminos

| Audiencia | Qué busca | Camino / CTA |
|---|---|---|
| **CTO / Arquitecto** evaluando Evolith para su empresa | ¿Qué es? ¿Por qué confiar? Casos, madurez, cómo adoptar o contratar | "Evalúa Evolith" → overview + casos + demo + contacto |
| **Developer** (llegó por Shell o por NestJS LATAM) | Quickstart, docs, NuGet, comunidad, cómo Shell conecta con Evolith | "Empieza a construir" → quickstart + GitHub + NuGet + comunidad |
| **Prospecto de consultoría** (arquitectura/AI-DD) | Qué problema resuelven, Assessment de madurez, contacto | "Trabaja con nosotros" → servicios + assessment + agenda |
| **Cliente de desarrollo a medida** | ¿Construyen lo que necesito? Portafolio, casos, contacto | "Cuéntanos tu proyecto" → portafolio + servicios + cotización |

> **Recomendación del PO:** son audiencias distintas; **no** se sirven con un hero genérico. El **hero posiciona a BeyondNet con Evolith al frente** (audiencia de mayor valor) y enruta al resto por **secciones de intención** (Productos · Servicios · Comunidad). ⚠️ Cuidado con la **dilución premium**: "desarrollo a medida" debe leerse como **prueba de capacidad de entrega**, no competir con el mensaje principal de Evolith. Un hero que le habla a los cuatro a la vez no le habla a nadie.

## Criterios de éxito

- **Claridad:** un visitante puede explicar "qué es Evolith" en una frase tras ~30 s en la página. *(test cualitativo)*
- **Conversión:** clics a GitHub (★) y NuGet, demos solicitadas, leads de consultoría/assessment. `[SUPUESTO]` metas numéricas por definir.
- **Contenido vivo:** publicación recurrente en Blog + comentarios moderados; consumo de Recursos por producto. `[SUPUESTO]` cadencia/metas por definir.
- **Unificación:** `beyondnet-portal` retirado; un solo canal vivo.
- **Adopción medible:** crecimiento de estrellas/descargas atribuible al portal. `[SUPUESTO]`

## Alcance

**Dentro (v1):**
- Landing pública **bilingüe ES/EN** sobre **Next.js + Payload CMS**.
- Hero con la promesa central + CTA principal.
- Sección de productos reales (Evolith Core, Tracker, UMS, Shell.*) con mensaje por producto y enlace a su repo/docs (catálogo gestionado en Payload).
- Patrón "elige tu camino" para las audiencias (productos · servicios · comunidad).
- **Sección de Servicios**: consultoría (arquitectura/AI-DD) + **desarrollo a medida**, con CTA de contacto/cotización.
- **Portafolio / Casos**: clientes y proyectos entregados (p. ej. bTm Music) como prueba.
- **Sección de Comunidad**: enlace y promoción de NestJS LATAM (se referencia, no se absorbe).
- Sección de consultoría / Assessment de madurez.
- **Blog**: listado y detalle de artículos + **comentarios con moderación**.
- **Auth para comentar** (leer es público): **GitHub + Google + email/contraseña**. Comentario entra como *pendiente* → aprobación.
- **Hub de Recursos**: colección `Resource` (documentación · manual · video · descarga · enlace · canal social), filtrable por producto y tipo; público (sin gating en v1).
- Panel de administración de Payload (contenido, comentarios, usuarios).
- CTAs de conversión (GitHub, NuGet, demo, contacto).
- **Enlaces sociales oficiales** (header/footer + "Síguenos"): **YouTube, GitHub org, LinkedIn empresa**.
- SEO básico + Open Graph (es una pieza de distribución).
- Reemplazo funcional de `beyondnet-portal`.

**Fuera (v1):**
- No es el catálogo técnico profundo de cada producto (enlaza a cada repo/docs); Recursos **agrega y enlaza**, no duplica docs canónicas.
- No es la app Evolith Tracker ni ninguna app de producto (solo enlaza/demo).
- Sin e-commerce ni panel de cliente. La auth de v1 es **solo para comentar**, no portal de cuentas.
- Sin descargas *gated* / captura de leads por recurso (Fase 2).
- Sin auto-importación de videos de YouTube ni feeds de redes (v1 = embeds/enlaces curados).

## Secuencia de entrega — Fase 1 en 3 rebanadas

La Fase 1 es ambiciosa; se entrega por partes para lanzar la puerta de entrada cuanto antes (lo urgente) sin esperar a tenerlo todo. Las tres rebanadas siguen siendo "Fase 1".

| # | Rebanada | Qué incluye | Por qué primero |
|---|---|---|---|
| 🟢 1 | **Vitrina núcleo** | Hero + productos (catálogo en Payload) + Servicios + Portafolio/Casos + Comunidad (enlace NestJS LATAM) + caminos + CTAs + SEO. Retira `beyondnet-portal`. | Ataca de inmediato el problema #1 (distribución) y muestra credibilidad de estudio. Es lo que urge. |
| 🟡 2 | **Hub de Recursos** | Colección `Resource` + hub filtrable por producto/tipo. | Habilita los productos; sin auth → rápido de sumar. |
| 🔵 3 | **Blog + comentarios** | Blog + comentarios con moderación + auth (GitHub · Google · email). | Es lo más complejo (primera autenticación); va al final. |

## Visión

`webportal` evoluciona de "landing" a **hub del ecosistema Evolith**: demos embebidas (sandbox de Tracker), documentación unificada, marketplace de rulesets/blueprints/agentes, registro de certificación "Evolith Certified Architect", y portal de contenido. La puerta de entrada se vuelve el centro de gravedad de la marca Evolith → BeyondNet como referente regional en arquitectura + AI-DD.

Evoluciones específicas del contenido y distribución: **Recursos *gated*** (white-papers, plantillas, blueprints) para captar leads reutilizando el login ya construido; **auto-importación** de videos de YouTube y feeds de redes; **automatización del flywheel** Blog → `linkedin-publisher` → LinkedIn; y, estratégicamente, **dogfooding de UMS** como proveedor de identidad del portal — *"usamos nuestro propio producto para autenticar"*, una narrativa potente para el CTO.

## Preguntas abiertas / a decidir

- ✅ **Stack decidido:** **Next.js + Payload CMS** (un solo stack TS). Se migra lo aprovechable de `beyondnet-portal` (React+Vite) y este se retira. Base de datos: Postgres (consistente con UMS). `[SUPUESTO]` confirmar Postgres vs Mongo para Payload.
- **Idioma por defecto** y estrategia i18n (¿ES primero con switch a EN?). Aplica también a contenido de Blog/Recursos.
- **Hosting:** Payload necesita Node + DB. Validar en Hostinger (VPS) vs. otra plataforma. `[SUPUESTO]`
- **Encuadre a confirmar:** `webportal` = puerta de **BeyondNet** (empresa) con **Evolith como flagship**, y servicios/comunidad como prueba. `[RECOMENDADO — pendiente de tu OK]`
- **Propiedades externas:** NestJS LATAM (WordPress, comunidad) y bTm Music (WordPress, cliente) se **enlazan/showcasean**, no se absorben ni migran a Payload. Confirmar.
- **Equilibrio de mensaje:** cuánto destacar "desarrollo a medida" sin diluir el posicionamiento premium de Evolith. ¿Una sola marca o sub-marca para servicios a medida?
- **Dominio, branding y naming** (¿"BeyondNet" empresa + "Evolith" producto-marca? ¿renombrar `evolith_arch32` → `evolith-core`?).
- **Métricas concretas** de conversión y herramienta de analítica.
- **Handles sociales:** confirmar URLs oficiales de YouTube, GitHub org y LinkedIn empresa para enlazar en v1.
- **`transport-track-trace`**: aparece como producto en el portal actual pero el repo no existe públicamente → publicar o quitar antes de exhibir.

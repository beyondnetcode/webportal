---
title: Addendum técnico — BeyondNet Web Portal (Fase 1)
status: draft
created: 2026-06-30
updated: 2026-06-30
companion: prd.md
language: es
---

# Addendum técnico — webportal (Fase 1)

Detalle del *cómo* que no pertenece al PRD (capacidades) pero alimenta a **Arquitectura**, **UX** y **Épicos e Historias**.

## 1. Stack y plataforma

- **Frontend/SSR:** **Next.js** (App Router) — se conserva este repo (Nx + Next.js); se retira `beyondnet-portal` (React+Vite) migrando lo aprovechable. Razón: SEO/SSR para un canal de marketing.
- **CMS / backend de contenido:** **Payload CMS 3.0**, embebido en la misma app Next.js (un solo stack TypeScript, on-brand). Provee panel de administración, auth y control de acceso por rol.
- **Base de datos:** **PostgreSQL** `[ASSUMPTION]` — consistente con UMS (que ya usa Postgres). Alternativa: MongoDB (soportada por Payload). Confirmar en Arquitectura.
- **Hosting:** **Hostinger VPS** (Node + Postgres) `[ASSUMPTION]` — coherente con despliegues previos del ecosistema. Validar build/runtime de Payload+Next en VPS.
- **i18n:** localización ES/EN a nivel de UI y de contenido (campos localizados en Payload).

## 2. Modelo de datos (colecciones Payload)

- **Product** (Catálogo): name, slug, shortDesc(ES/EN), longDesc(ES/EN), type (oss|saas|enterprise|library), links{github, nuget, docs, demo}, featured, order.
- **Case** (Portafolio): title, client, sector, summary(ES/EN), url, cover, featured.
- **Service**: name(ES/EN), description(ES/EN), kind (consulting|assessment|custom-dev), ctaIntent.
- **Resource**: title(ES/EN), type (documentation|manual|video|download|external|social), product (relación → Product), locale, url|file, thumbnail, featured.
- **Post** (Blog): title(ES/EN), slug, body(ES/EN, rich text), excerpt, author, publishedAt, status (draft|published), coverImage, ogImage.
- **Comment**: post (relación → Post), author (relación → User), body, status (pending|approved|rejected), createdAt.
- **User**: provider (github|google|email), email, name, avatar, role (visitor-auth|editor|admin). Privilegio v1: comentar. Editor/admin: gestión y moderación.
- **Singletons/Globals:** Home (hero, caminos, destacados), Nav, SocialLinks, SiteSettings (idioma por defecto, SEO base).

## 3. Autenticación

- Proveedores: **GitHub OAuth**, **Google OAuth**, **email/contraseña** (con verificación de email `[ASSUMPTION v1]`).
- Alcance v1: solo habilita **comentar** (no panel de cuenta). Roles internos (editor/admin) acceden al panel de Payload.
- Endurecimiento: rate-limiting en login y en creación de comentarios; sanitización del rich text de comentarios y posts.

## 4. Integraciones

- **Enlaces (v1):** GitHub org, NuGet, YouTube, LinkedIn, NestJS LATAM, btm-music.me.
- **Email transaccional** (confirmaciones de lead, verificación): proveedor por definir `[ASSUMPTION]`.
- **Analítica** de conversión + **anti-spam** (captcha/honeypot): herramientas por definir `[ASSUMPTION]`.
- **Flywheel (Fase 2):** pipeline Blog → `linkedin-publisher` → LinkedIn.

## 5. Alternativas consideradas (y por qué se descartaron)

- **WordPress headless (WP backend + Next.js):** da el "aparato tipo WordPress" y hosting barato en Hostinger, pero suma un stack PHP/MySQL aparte — off-brand para un estudio que vende arquitectura limpia. *Descartado a favor de Payload (un solo stack TS).*
- **WordPress tradicional:** rompe el requisito "mantener el diseño estándar" (tema/stack visual aparte) y duplica sitios. *Descartado.*
- **Comentarios vía Giscus (GitHub Discussions):** excelente para audiencia dev y cero backend, pero no ofrece "aparato de gestión" ni soporta email/Google. *Descartado como solución principal; posible complemento.*
- **MDX en repo (sin CMS):** no cumple "gestión sin código" ni moderación de comentarios. *Descartado.*

## 6. Migración / retiro de `beyondnet-portal`

- Inventariar componentes reutilizables (Navbar, Hero, Catalog, Contact, Footer, ProductModal) y el `productsMock.ts` → migrar el catálogo a la colección **Product** de Payload.
- Redirecciones/SEO: preservar URLs valiosas; `beyondnet-portal` se despublica al cortar over.

## 7. Notas estratégicas (futuro)

- **Recursos *gated*** para lead capture reutilizando la auth (Fase 2).
- **Dogfooding de UMS** como IdP del portal — narrativa "usamos nuestro propio producto" (Visión).
- **Auto-import** de YouTube/redes (Fase 2).

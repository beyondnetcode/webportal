/*
 * BeyondNet Code — Landing (puerta de entrada del ecosistema).
 * Diseño aprobado: paleta negro/blanco/dorado/plata/gris (premium), estructura estilo Meisterplan.
 * Contenido editable desde el global `home` de Payload (AD-2). Si no hay DB/datos, usa DEFAULTS.
 * i18n (AD-7) y caché/ISR quedan como historias siguientes; por ahora force-dynamic.
 */
import config from '@payload-config'
import { getPayload } from 'payload'
import { ProductHeroCarousel, type ProductHeroSlide } from './_components/ProductHeroCarousel'
import { Nav } from './_components/Nav'
import { Footer } from './_components/Footer'
import { findDocs } from '@/lib/cms'

export const dynamic = 'force-dynamic'

const DEFAULTS = {
  hero: {
    kicker: 'Open source · AI-driven SDLC',
    title: 'Evolith convierte arquitectura en',
    titleHighlight: 'reglas ejecutables',
    titleTail: '',
    subtitle:
      'Gobierna tu SDLC con ADRs versionados, phase gates, validaciones CI y contexto MCP para agentes de IA. Menos documentos muertos. Más evidencia en producción.',
    ctaPrimaryLabel: 'Ver quickstart',
    ctaSecondaryLabel: 'Star en GitHub',
    note: 'Para CTOs, arquitectos y equipos que construyen software con agentes de IA.',
  },
  techs: ['.NET', 'TypeScript', 'OPA', 'MCP', 'NuGet', 'PostgreSQL'],
  features: [
    { icon: 'ti-shield-check', title: 'Architecture gates', text: 'Convierte estándares y ADRs en validaciones que bloquean desviaciones antes de producción.' },
    { icon: 'ti-robot', title: 'Contexto para agentes IA', text: 'CLI, MCP y Core API para que tus agentes usen las mismas reglas que tu equipo.' },
    { icon: 'ti-git-branch', title: 'Trazabilidad real', text: 'Conecta decisión, evidencia, pull request, pipeline y release en un solo flujo auditable.' },
  ],
  stats: [
    { num: 'CI', label: 'validaciones en pipelines' },
    { num: 'MCP', label: 'contexto para agentes' },
    { num: 'ADR', label: 'decisiones versionadas' },
    { num: 'ES/EN', label: 'contenido bilingüe' },
  ],
  testimonial: {
    quote:
      'No solo escriben sobre arquitectura: publican librerías, entregan productos a clientes y corren una comunidad. Esa prueba es difícil de fingir.',
    authorName: 'Carla T.',
    authorRole: 'CTO · Fintech regional',
    initials: 'CT',
  },
  finalCta: {
    title: 'Haz que tu arquitectura participe en cada release',
    subtitle: 'Empieza explorando Evolith o agenda una conversación técnica para aplicarlo a tu SDLC.',
    primaryLabel: 'Agenda una demo técnica',
    secondaryLabel: 'Ver GitHub',
  },
}

const GITHUB_URL = 'https://github.com/beyondnetcode'

const workflow = [
  {
    step: '01',
    title: 'Escribe decisiones',
    text: 'ADRs, estándares, constraints y phase gates viven junto al delivery, no en documentos aislados.',
  },
  {
    step: '02',
    title: 'Convierte en reglas',
    text: 'Rulesets versionados transforman intención arquitectónica en políticas ejecutables.',
  },
  {
    step: '03',
    title: 'Valida cada cambio',
    text: 'CI, CLI y agentes revisan el mismo contrato técnico antes de llegar a producción.',
  },
  {
    step: '04',
    title: 'Deja evidencia',
    text: 'Cada gate produce trazabilidad para arquitectura, compliance, QA y mejora continua.',
  },
]

const audiences = [
  {
    icon: 'ti-users',
    title: 'CTOs y líderes técnicos',
    text: 'Alinea arquitectura, delivery y governance sin depender de revisiones manuales tardías.',
    action: 'Agenda una demo',
    href: '/contacto?intent=demo',
  },
  {
    icon: 'ti-sitemap',
    title: 'Arquitectos de software',
    text: 'Haz que tus ADRs, estándares y restricciones se apliquen en pull requests y pipelines.',
    action: 'Explora productos',
    href: '/productos',
  },
  {
    icon: 'ti-terminal-2',
    title: 'Developers y AI builders',
    text: 'Consume reglas desde CLI, librerías y herramientas MCP sin salir del flujo de trabajo.',
    action: 'Ver GitHub',
    href: GITHUB_URL,
  },
]

const proofLinks = [
  { icon: 'ti-brand-github', label: 'Open source', href: GITHUB_URL },
  { icon: 'ti-book-2', label: 'Docs y recursos', href: '/blog' },
  { icon: 'ti-package', label: 'Productos', href: '/productos' },
  { icon: 'ti-messages', label: 'Comunidad', href: '#comunidad' },
]

type CmsProduct = {
  name?: string
  slug?: string
  type?: 'oss' | 'saas' | 'enterprise' | 'library'
  shortDesc?: string
  links?: {
    github?: string
    nuget?: string
    docs?: string
    demo?: string
  }
}

const TYPE_LABEL: Record<string, string> = {
  oss: 'Open source',
  saas: 'SaaS',
  enterprise: 'Enterprise',
  library: 'Libreria',
}

const terminal = {
  evolith: [
    { marker: '$', tone: 'muted' as const, text: 'evolith check --phase release' },
    { marker: '✓', tone: 'ok' as const, text: 'ADR-014 dependency policy' },
    { marker: '✓', tone: 'ok' as const, text: 'service boundary rule' },
    { marker: '!', tone: 'warn' as const, text: 'missing threat-model evidence' },
    { marker: '→', tone: 'muted' as const, text: '2 passed · 1 requires review' },
  ],
  ums: [
    { marker: '$', tone: 'muted' as const, text: 'ums provision --tenant fintech' },
    { marker: '✓', tone: 'ok' as const, text: 'roles and claims synchronized' },
    { marker: '✓', tone: 'ok' as const, text: 'audit trail enabled' },
    { marker: '→', tone: 'muted' as const, text: 'identity policies ready for apps' },
  ],
  shell: [
    { marker: '$', tone: 'muted' as const, text: 'btc-shell new service --ddd' },
    { marker: '✓', tone: 'ok' as const, text: 'clean architecture scaffolded' },
    { marker: '✓', tone: 'ok' as const, text: 'tests, docker and CI generated' },
    { marker: '→', tone: 'muted' as const, text: 'ready for first vertical slice' },
  ],
  generic: [
    { marker: '$', tone: 'muted' as const, text: 'btc product inspect --with-docs' },
    { marker: '✓', tone: 'ok' as const, text: 'documentation linked' },
    { marker: '✓', tone: 'ok' as const, text: 'delivery workflow mapped' },
    { marker: '→', tone: 'muted' as const, text: 'ready for technical adoption' },
  ],
}

function productPreview(productName: string, productType?: string) {
  const name = productName.toLowerCase()

  if (name.includes('evolith')) {
    return {
      highlight: 'arquitectura ejecutable',
      note: 'Governance, ADRs y evidencia tecnica en el flujo real de delivery.',
      previewEyebrow: 'GOVERNANCE · SDLC',
      previewTitle: 'Architecture Gate',
      chips: [
        { label: 'ADR-014', tone: 'gold' as const, icon: 'ti-check' },
        { label: 'OPA rules', tone: 'gold' as const, icon: 'ti-check' },
        { label: 'MCP context', tone: 'mute' as const },
        { label: 'CI gate', tone: 'mute' as const },
      ],
      terminal: terminal.evolith,
      tiles: [
        { num: 'CI', label: 'pull request gate', gold: true },
        { num: 'MCP', label: 'agent context' },
        { num: 'ADR', label: 'traceable decision' },
      ],
    }
  }

  if (name.includes('ums') || name.includes('identity') || name.includes('user')) {
    return {
      highlight: 'identidad empresarial',
      note: 'Usuarios, roles, tenants y auditoria listos para productos serios.',
      previewEyebrow: 'IDENTITY · PLATFORM',
      previewTitle: 'Access Control',
      chips: [
        { label: 'RBAC', tone: 'gold' as const, icon: 'ti-lock-check' },
        { label: 'Tenants', tone: 'gold' as const, icon: 'ti-building' },
        { label: 'Audit log', tone: 'mute' as const },
        { label: 'API first', tone: 'mute' as const },
      ],
      terminal: terminal.ums,
      tiles: [
        { num: 'RBAC', label: 'permissions', gold: true },
        { num: 'SSO', label: 'enterprise ready' },
        { num: 'API', label: 'integration layer' },
      ],
    }
  }

  if (name.includes('shell') || name.includes('ddd') || name.includes('template')) {
    return {
      highlight: 'delivery acelerado',
      note: 'Plantillas opinionadas para empezar con arquitectura limpia y CI desde el dia uno.',
      previewEyebrow: 'STARTER · DDD',
      previewTitle: 'Project Blueprint',
      chips: [
        { label: 'DDD', tone: 'gold' as const, icon: 'ti-box' },
        { label: 'CQRS', tone: 'gold' as const, icon: 'ti-arrows-split' },
        { label: 'Docker', tone: 'mute' as const },
        { label: 'CI ready', tone: 'mute' as const },
      ],
      terminal: terminal.shell,
      tiles: [
        { num: 'DDD', label: 'domain model', gold: true },
        { num: 'API', label: 'backend starter' },
        { num: 'TST', label: 'test harness' },
      ],
    }
  }

  return {
    highlight: TYPE_LABEL[productType ?? ''] ?? 'tecnico',
    note: 'Producto del ecosistema BeyondNet Code para equipos que necesitan software claro y mantenible.',
    previewEyebrow: `${TYPE_LABEL[productType ?? ''] ?? 'PRODUCT'} · BEYONDNET`,
    previewTitle: 'Product Console',
    chips: [
      { label: 'Docs', tone: 'gold' as const, icon: 'ti-book-2' },
      { label: 'GitHub', tone: 'gold' as const, icon: 'ti-brand-github' },
      { label: 'API', tone: 'mute' as const },
      { label: 'CI', tone: 'mute' as const },
    ],
    terminal: terminal.generic,
    tiles: [
      { num: 'OSS', label: 'adoption path', gold: true },
      { num: 'DOC', label: 'technical docs' },
      { num: 'USE', label: 'use cases' },
    ],
  }
}

function defaultProductSlides(hero: typeof DEFAULTS.hero): ProductHeroSlide[] {
  return [
    {
      ...productPreview('Evolith'),
      eyebrow: pick(hero.kicker, DEFAULTS.hero.kicker),
      title: pick(hero.title, DEFAULTS.hero.title),
      highlight: pick(hero.titleHighlight, DEFAULTS.hero.titleHighlight),
      titleTail: pick(hero.titleTail, DEFAULTS.hero.titleTail),
      subtitle: pick(hero.subtitle, DEFAULTS.hero.subtitle),
      primaryLabel: pick(hero.ctaPrimaryLabel, DEFAULTS.hero.ctaPrimaryLabel),
      primaryHref: '/productos/evolith',
      secondaryLabel: pick(hero.ctaSecondaryLabel, DEFAULTS.hero.ctaSecondaryLabel),
      secondaryHref: GITHUB_URL,
      secondaryExternal: true,
      textCtaLabel: 'Agenda una demo',
      textCtaHref: '/contacto?intent=demo',
      note: pick(hero.note, DEFAULTS.hero.note),
    },
    {
      ...productPreview('UMS'),
      eyebrow: 'Identity platform · productos SaaS',
      title: 'UMS organiza',
      highlight: 'usuarios, roles y permisos',
      subtitle: 'Unifica identidad, tenants, autorizacion y auditoria para productos que necesitan crecer sin perder control operativo.',
      primaryLabel: 'Ver producto',
      primaryHref: '/productos/ums',
      secondaryLabel: 'Explorar productos',
      secondaryHref: '/productos',
      textCtaLabel: 'Agenda una demo',
      textCtaHref: '/contacto?intent=demo',
      note: 'Pensado para SaaS, plataformas internas y productos enterprise.',
    },
    {
      ...productPreview('Shell DDD'),
      eyebrow: 'Software architecture · starter kits',
      title: 'Shell acelera',
      highlight: 'arquitectura DDD',
      subtitle: 'Arranca nuevos servicios con una base tecnica consistente: capas claras, pruebas, contenedores, CI y convenciones listas para equipos.',
      primaryLabel: 'Ver producto',
      primaryHref: '/productos/shell',
      secondaryLabel: 'Ver GitHub',
      secondaryHref: GITHUB_URL,
      secondaryExternal: true,
      textCtaLabel: 'Agenda una demo',
      textCtaHref: '/contacto?intent=demo',
      note: 'Ideal para estandarizar delivery sin convertir cada proyecto en una reinvencion.',
    },
  ]
}

function productToSlide(product: CmsProduct, index: number): ProductHeroSlide {
  const name = product.name || `Producto ${index + 1}`
  const preview = productPreview(name, product.type)
  const productHref = product.slug ? `/productos/${product.slug}` : '/productos'
  const secondaryHref = product.links?.github || product.links?.docs || product.links?.demo || productHref
  const secondaryExternal = secondaryHref.startsWith('http')

  return {
    eyebrow: `${TYPE_LABEL[product.type ?? ''] ?? 'Producto'} · BeyondNet Code`,
    title: `${name} para`,
    highlight: preview.highlight,
    subtitle: product.shortDesc || 'Producto del ecosistema BeyondNet Code para arquitectura de software, SDLC moderno y desarrollo asistido por IA.',
    primaryLabel: 'Ver producto',
    primaryHref: productHref,
    secondaryLabel: product.links?.github ? 'Ver GitHub' : product.links?.docs ? 'Ver docs' : product.links?.demo ? 'Demo tecnica' : 'Ver detalle',
    secondaryHref,
    secondaryExternal,
    textCtaLabel: 'Agenda una demo',
    textCtaHref: '/contacto?intent=demo',
    note: preview.note,
    previewEyebrow: preview.previewEyebrow,
    previewTitle: preview.previewTitle,
    chips: preview.chips,
    terminal: preview.terminal,
    tiles: preview.tiles,
  }
}

// Lee el global `home` de Payload. Cast a `any` para no acoplar a payload-types
// (regenerar con `payload generate:types`). Si la DB no está disponible, devuelve null.
async function getHome(): Promise<Record<string, unknown> | null> {
  try {
    const payload = (await getPayload({ config })) as unknown as {
      findGlobal: (a: { slug: string }) => Promise<Record<string, unknown>>
    }
    return await payload.findGlobal({ slug: 'home' })
  } catch {
    return null
  }
}

const pick = <T,>(value: T | undefined | null | '', fallback: T): T =>
  value === undefined || value === null || value === '' ? fallback : value

export default async function HomePage() {
  const home = (await getHome()) ?? {}
  const products = (await findDocs('products', { sort: 'order' })) as CmsProduct[]
  const hero = { ...DEFAULTS.hero, ...((home.hero as object) ?? {}) }
  const finalCta = { ...DEFAULTS.finalCta, ...((home.finalCta as object) ?? {}) }
  const techs = (home.techs as { name: string }[] | undefined)?.length
    ? (home.techs as { name: string }[]).map((t) => t.name)
    : DEFAULTS.techs
  const features = (home.features as typeof DEFAULTS.features | undefined)?.length
    ? (home.features as typeof DEFAULTS.features)
    : DEFAULTS.features
  const stats = (home.stats as typeof DEFAULTS.stats | undefined)?.length
    ? (home.stats as typeof DEFAULTS.stats)
    : DEFAULTS.stats
  const productSlides = products.length
    ? products.map((product, index) => productToSlide(product, index))
    : defaultProductSlides(hero)

  return (
    <>
      {/* NAV */}
      <Nav />

      {/* HERO */}
      <ProductHeroCarousel slides={productSlides} />

      {/* PROOF LINKS */}
      <section className="proof-strip">
        <div className="wrap proof-grid">
          {proofLinks.map((item) => (
            <a key={item.label} className="proof-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
              <i className={`ti ${item.icon}`} />
              <span>{item.label}</span>
              <i className="ti ti-arrow-up-right" />
            </a>
          ))}
        </div>
      </section>

      {/* TECH STRIP */}
      <section className="tech">
        <div className="wrap center" style={{ padding: '24px' }}>
          <div className="tech-label">CONSTRUIDO SOBRE ESTÁNDARES ABIERTOS</div>
          <div className="tech-list">{techs.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sec sec--tight">
        <div className="wrap split">
          <div>
            <span className="kicker">El problema</span>
            <h2 className="h2" style={{ marginTop: 8 }}>Tu arquitectura no falla por falta de documentos.</h2>
          </div>
          <div>
            <p className="lead">Falla porque los documentos no participan en el delivery. Cuando los ADRs, estándares y guardrails viven fuera de los pull requests, tus equipos y agentes de IA implementan sin contexto compartido.</p>
            <p className="sub" style={{ marginTop: 14 }}>Evolith mueve la arquitectura desde la intención hacia la ejecución: reglas versionadas, validación continua y evidencia lista para revisión.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sec" id="productos">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 32 }}>
            <span className="kicker">Por qué Evolith</span>
            <div className="h2" style={{ marginTop: 8 }}>Gobernanza que el equipo sí usa</div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {features.map((f) => (
              <div className="card" key={f.title}>
                <div className="ficon"><i className={`ti ${f.icon}`} /></div>
                <h3>{f.title}</h3>
                <p className="sub" style={{ fontSize: 14 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Cómo funciona</span>
            <h2 className="h2" style={{ marginTop: 8 }}>Del ADR al gate de producción</h2>
            <p className="sub">Un flujo simple para que arquitectura, ingeniería y agentes de IA trabajen con las mismas reglas.</p>
          </div>
          <div className="flow-grid">
            {workflow.map((item) => (
              <div className="flow-card" key={item.step}>
                <div className="flow-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-dark">
        <div className="wrap stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="sec" style={{ background: 'var(--paper)' }} id="comunidad">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">Rutas de adopción</span>
            <h2 className="h2" style={{ marginTop: 8 }}>Open source para empezar. Expertise para escalar.</h2>
            <p className="sub">BeyondNet Code combina producto, arquitectura de software y acompañamiento técnico para equipos que quieren gobernar su SDLC sin frenar el delivery.</p>
          </div>
          <div className="grid audience-grid">
            {audiences.map((item) => (
              <a className="card audience-card" key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                <div className="ficon"><i className={`ti ${item.icon}`} /></div>
                <h3>{item.title}</h3>
                <p className="sub" style={{ fontSize: 14 }}>{item.text}</p>
                <div className="link-gold">{item.action} <i className="ti ti-arrow-right" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-dark" id="servicios">
        <div className="wrap center" style={{ padding: '64px 24px' }}>
          <div className="cta-title">{finalCta.title}</div>
          <p className="cta-sub">{finalCta.subtitle}</p>
          <div className="row row--center">
            <a className="btn btn--gold" href="/contacto?intent=demo">{finalCta.primaryLabel}</a>
            <a className="btn btn--ghost-dark" href={GITHUB_URL} target="_blank" rel="noreferrer"><i className="ti ti-brand-github" /> {finalCta.secondaryLabel}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

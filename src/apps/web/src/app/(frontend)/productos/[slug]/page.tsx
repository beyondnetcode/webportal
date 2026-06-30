import { notFound } from 'next/navigation'
import { findOne } from '@/lib/cms'
import { Nav } from '../../_components/Nav'
import { Footer } from '../../_components/Footer'

export const dynamic = 'force-dynamic'

const TYPE_LABEL: Record<string, string> = { oss: 'OSS', saas: 'SaaS', enterprise: 'Enterprise', library: 'Librería' }

export default async function ProductoDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = await findOne('products', { slug: { equals: slug } })
  if (!p) notFound()

  const links: { label: string; href?: string }[] = [
    { label: 'GitHub', href: p.links?.github },
    { label: 'NuGet', href: p.links?.nuget },
    { label: 'Docs', href: p.links?.docs },
    { label: 'Demo', href: p.links?.demo },
  ].filter((l) => !!l.href)

  return (
    <>
      <Nav />
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="breadcrumb"><a href="/productos">← Productos</a> / {p.name}</div>
          <span className={`badge badge--${p.type}`}>{TYPE_LABEL[p.type] ?? p.type}</span>
          <h1 className="h2" style={{ marginTop: 10 }}>{p.name}</h1>
          {p.shortDesc && <p className="sub" style={{ margin: '12px 0 0' }}>{p.shortDesc}</p>}
          {links.length > 0 && (
            <div className="detail-actions">
              {links.map((l) => (
                <a key={l.label} className="btn btn--ghost-light" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
              ))}
            </div>
          )}
          {p.longDesc && <p style={{ marginTop: 24, lineHeight: 1.7, color: 'var(--ink)' }}>{p.longDesc}</p>}
          <div style={{ marginTop: 32 }}>
            <a className="btn btn--gold" href="/contacto?intent=consulting">Agenda una conversación <i className="ti ti-arrow-right" /></a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

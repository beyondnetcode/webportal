import { findDocs } from '@/lib/cms'
import { Nav } from '../_components/Nav'
import { Footer } from '../_components/Footer'

export const dynamic = 'force-dynamic'

const TYPE_LABEL: Record<string, string> = { oss: 'OSS', saas: 'SaaS', enterprise: 'Enterprise', library: 'Librería' }

export default async function ProductosPage() {
  const products = await findDocs('products', { sort: 'order' })
  return (
    <>
      <Nav />
      <section className="sec">
        <div className="wrap">
          <div className="page-head">
            <span className="kicker">Productos</span>
            <div className="h2" style={{ marginTop: 8 }}>Una plataforma, no 12 repos</div>
          </div>
          {products.length === 0 ? (
            <p className="sub">Aún no hay productos publicados. Agrégalos en <code>/admin</code> → Products.</p>
          ) : (
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {products.map((p) => (
                <a className="card" key={p.id} href={`/productos/${p.slug}`}>
                  <span className={`badge badge--${p.type}`}>{TYPE_LABEL[p.type] ?? p.type}</span>
                  <h3>{p.name}</h3>
                  <p className="sub" style={{ fontSize: 14 }}>{p.shortDesc}</p>
                  <div className="link-gold" style={{ marginTop: 12 }}>Ver detalle <i className="ti ti-arrow-right" /></div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

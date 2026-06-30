import { findDocs } from '@/lib/cms'
import { Nav } from '../_components/Nav'
import { Footer } from '../_components/Footer'

export const dynamic = 'force-dynamic'

export default async function PortafolioPage() {
  const cases = await findDocs('cases', { sort: 'order' })
  return (
    <>
      <Nav />
      <section className="sec">
        <div className="wrap">
          <div className="page-head">
            <span className="kicker">Portafolio</span>
            <div className="h2" style={{ marginTop: 8 }}>Productos entregados a clientes reales</div>
          </div>
          {cases.length === 0 ? (
            <p className="sub">Aún no hay casos publicados. Agrégalos en <code>/admin</code> → Cases.</p>
          ) : (
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {cases.map((c) => (
                <div className="card" key={c.id}>
                  <h3 style={{ marginTop: 0 }}>{c.title}</h3>
                  <div className="sub" style={{ fontSize: 13, marginTop: 2 }}>{[c.client, c.sector].filter(Boolean).join(' · ')}</div>
                  <p className="sub" style={{ fontSize: 14, marginTop: 10 }}>{c.summary}</p>
                  {c.url && (
                    <a className="link-gold" style={{ marginTop: 12 }} href={c.url} target="_blank" rel="noreferrer">
                      Visitar <i className="ti ti-external-link" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

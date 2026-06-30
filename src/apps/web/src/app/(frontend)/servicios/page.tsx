import { findDocs } from '@/lib/cms'
import { Nav } from '../_components/Nav'
import { Footer } from '../_components/Footer'

export const dynamic = 'force-dynamic'

const KIND_LABEL: Record<string, string> = { consulting: 'Consultoría', assessment: 'Assessment', 'custom-dev': 'Desarrollo a medida' }

export default async function ServiciosPage() {
  const services = await findDocs('services', { sort: 'order' })
  return (
    <>
      <Nav />
      <section className="sec">
        <div className="wrap">
          <div className="page-head">
            <span className="kicker">Servicios</span>
            <div className="h2" style={{ marginTop: 8 }}>No solo teorizamos arquitectura: la entregamos</div>
          </div>
          {services.length === 0 ? (
            <p className="sub">Aún no hay servicios publicados. Agrégalos en <code>/admin</code> → Services.</p>
          ) : (
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {services.map((s) => (
                <div className="card" key={s.id}>
                  <span className={`badge badge--${s.kind}`}>{KIND_LABEL[s.kind] ?? s.kind}</span>
                  <h3>{s.name}</h3>
                  <p className="sub" style={{ fontSize: 14 }}>{s.description}</p>
                  <div style={{ marginTop: 14 }}>
                    <a className="btn btn--gold" style={{ padding: '9px 18px', fontSize: 14 }} href={`/contacto?intent=${s.ctaIntent ?? 'consulting'}`}>Cuéntanos tu proyecto</a>
                  </div>
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

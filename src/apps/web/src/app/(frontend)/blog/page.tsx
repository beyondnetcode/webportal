import { findDocs } from '@/lib/cms'
import { Nav } from '../_components/Nav'
import { Footer } from '../_components/Footer'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const posts = await findDocs('posts', { where: { status: { equals: 'published' } }, sort: '-createdAt', depth: 1 })
  return (
    <>
      <Nav />
      <section className="sec">
        <div className="wrap">
          <div className="page-head">
            <span className="kicker">Blog</span>
            <div className="h2" style={{ marginTop: 8 }}>Ideas sobre arquitectura y AI-DD</div>
          </div>
          {posts.length === 0 ? (
            <p className="sub">Aún no hay artículos publicados. Crea uno en <code>/admin</code> → Posts (status: Publicado).</p>
          ) : (
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {posts.map((p) => (
                <a className="card" key={p.id} href={`/blog/${p.slug}`}>
                  <h3 style={{ marginTop: 0 }}>{p.title}</h3>
                  <div className="sub" style={{ fontSize: 13, marginTop: 2 }}>
                    {p.createdAt ? new Date(p.createdAt).toLocaleDateString('es-PE') : ''}
                    {typeof p.author === 'object' && p.author?.email ? ` · ${p.author.email}` : ''}
                  </div>
                  <div className="link-gold" style={{ marginTop: 12 }}>Leer <i className="ti ti-arrow-right" /></div>
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

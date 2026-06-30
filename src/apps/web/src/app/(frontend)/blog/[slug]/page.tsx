import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { findOne, findDocs } from '@/lib/cms'
import { Nav } from '../../_components/Nav'
import { Footer } from '../../_components/Footer'

export const dynamic = 'force-dynamic'

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await findOne('posts', { slug: { equals: slug }, status: { equals: 'published' } })
  if (!post) notFound()

  const comments = await findDocs('comments', {
    where: { and: [{ post: { equals: post.id } }, { status: { equals: 'aprobado' } }] },
    sort: 'createdAt',
  })

  return (
    <>
      <Nav />
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="breadcrumb"><a href="/blog">← Blog</a></div>
          <h1 className="h2">{post.title}</h1>
          <div className="sub" style={{ fontSize: 13, marginTop: 6 }}>
            {post.createdAt ? new Date(post.createdAt).toLocaleDateString('es-PE') : ''}
          </div>
          <div style={{ marginTop: 22, lineHeight: 1.75 }}>
            {post.content ? <RichText data={post.content} /> : null}
          </div>

          <hr style={{ margin: '36px 0', border: 0, borderTop: '1px solid var(--gray-line)' }} />

          <h3 style={{ fontSize: 18, fontWeight: 700 }}>Comentarios ({comments.length})</h3>
          {comments.length === 0 ? (
            <p className="sub" style={{ fontSize: 14, marginTop: 8 }}>Aún no hay comentarios aprobados.</p>
          ) : (
            comments.map((c) => (
              <div className="card" key={c.id} style={{ marginTop: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{c.authorName}</div>
                <div className="sub" style={{ fontSize: 11 }}>{c.createdAt ? new Date(c.createdAt).toLocaleDateString('es-PE') : ''}</div>
                <p style={{ marginTop: 8, fontSize: 14 }}>{c.content}</p>
              </div>
            ))
          )}

          <div className="card" style={{ marginTop: 20, background: 'var(--paper)', border: 0 }}>
            <p className="sub" style={{ fontSize: 14, margin: 0 }}>
              💬 El login para comentar (<code>members</code> + Auth.js: GitHub · Google · email) llega en el siguiente paso. Leer es público; comentar exigirá iniciar sesión.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

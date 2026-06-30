import { ContactForm } from '../_components/ContactForm'
import { Nav } from '../_components/Nav'
import { Footer } from '../_components/Footer'

export const dynamic = 'force-dynamic'

export default async function ContactoPage({ searchParams }: { searchParams: Promise<{ intent?: string }> }) {
  const { intent } = await searchParams
  return (
    <>
      <Nav />
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 620 }}>
          <div className="page-head">
            <span className="kicker">Contacto</span>
            <div className="h2" style={{ marginTop: 8 }}>Hablemos de tu proyecto</div>
            <p className="sub" style={{ marginTop: 10 }}>Cuéntanos qué necesitas y te respondemos pronto.</p>
          </div>
          <ContactForm intent={intent} />
        </div>
      </section>
      <Footer />
    </>
  )
}

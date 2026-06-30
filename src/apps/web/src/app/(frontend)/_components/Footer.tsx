const githubUrl = 'https://github.com/beyondnetcode'

const footerColumns = [
  {
    title: 'Producto',
    links: [
      { label: 'Evolith', href: '/productos/evolith' },
      { label: 'UMS', href: '/productos/ums' },
      { label: 'Shell DDD', href: '/productos/shell' },
      { label: 'Todos los productos', href: '/productos' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { label: 'Arquitectura SDLC', href: '/servicios' },
      { label: 'AI-driven development', href: '/servicios' },
      { label: 'Open source adoption', href: '/#comunidad' },
      { label: 'Portafolio', href: '/portafolio' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentacion', href: '/blog' },
      { label: 'Casos de uso', href: '/portafolio' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'GitHub', href: githubUrl, external: true },
      { label: 'Quickstarts', href: '/blog' },
      { label: 'MCP y agentes', href: '/#productos' },
      { label: 'Comunidad', href: '/#comunidad' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'BeyondNet Code', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Demo tecnica', href: '/contacto?intent=demo' },
      { label: 'Lima, Peru', href: '/contacto' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer" id="recursos">
      <div className="footer-trust">
        <div className="wrap footer-trust-inner">
          <span>Arquitectura de software gobernada por evidencia.</span>
          <a href="/servicios">Ver enfoque tecnico</a>
          <span><i className="ti ti-check" /> Open source</span>
          <span><i className="ti ti-check" /> AI-ready SDLC</span>
          <span><i className="ti ti-check" /> .NET y TypeScript</span>
        </div>
      </div>

      <div className="wrap footer-main">
        <div className="footer-brand">
          <a href="/" aria-label="BeyondNet Code">
            <img className="footer-logo" src="/logos/btc-header.png" alt="bTc" />
          </a>
          <div className="footer-social" aria-label="Redes sociales">
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="ti ti-brand-github" /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="ti ti-brand-linkedin" /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="ti ti-brand-youtube" /></a>
          </div>
          <p>Recibe novedades de productos, arquitectura, SDLC y desarrollo asistido por IA.</p>
          <form className="footer-form" action="/contacto" method="get">
            <input name="email" placeholder="Tu email" aria-label="Tu email" />
            <button type="submit">Suscribirme</button>
          </form>
        </div>

        <div className="footer-columns">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a href={link.href} key={link.label} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2026 BeyondNet Code E.I.R.L. · Lima, Peru</span>
        <span>Comunidad: NestJS LATAM</span>
      </div>
    </footer>
  )
}

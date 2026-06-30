export function Nav() {
  const githubUrl = 'https://github.com/beyondnetcode'
  const productItems = [
    { icon: 'ti-shield-check', title: 'Evolith', text: 'Arquitectura ejecutable para ADRs, gates y CI.', href: '/productos/evolith' },
    { icon: 'ti-git-branch', title: 'Evolith Tracker', text: 'Trazabilidad de decisiones, evidencias y releases.', href: '/productos/evolith-tracker' },
    { icon: 'ti-lock-check', title: 'UMS', text: 'Identidad, roles, tenants y auditoria para SaaS.', href: '/productos/ums' },
    { icon: 'ti-box', title: 'Shell DDD', text: 'Starter kits para servicios con arquitectura limpia.', href: '/productos/shell' },
  ]
  const developerItems = [
    { icon: 'ti-brand-github', title: 'GitHub', text: 'Repositorios open source de BeyondNet Code.', href: githubUrl, external: true },
    { icon: 'ti-terminal-2', title: 'Quickstarts', text: 'CLI, paquetes y ejemplos para empezar rapido.', href: '/blog' },
    { icon: 'ti-robot', title: 'AI agents', text: 'MCP, reglas y contexto para desarrollo asistido.', href: '/#productos' },
  ]
  const solutionItems = [
    { icon: 'ti-sitemap', title: 'Arquitectura SDLC', text: 'Gobernanza tecnica integrada al delivery.', href: '/servicios' },
    { icon: 'ti-sparkles', title: 'AI-driven development', text: 'Equipos, agentes y pipelines con reglas comunes.', href: '/servicios' },
    { icon: 'ti-users', title: 'Comunidad', text: 'Recursos y adopcion para equipos tecnicos.', href: '/#comunidad' },
  ]

  return (
    <nav className="nav">
      <a className="brand" href="/">
        <img className="brand-logo" src="/logos/btc-header.png" alt="bTc" />
      </a>

      <div className="navlinks" aria-label="Principal">
        <div className="nav-group">
          <a className="nav-trigger" href="/productos">Productos <i className="ti ti-chevron-down" /></a>
          <div className="nav-menu nav-menu--products">
            <div className="nav-menu-grid">
              {productItems.map((item) => (
                <a className="nav-menu-item" href={item.href} key={item.title}>
                  <span className="nav-menu-icon"><i className={`ti ${item.icon}`} /></span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </a>
              ))}
            </div>
            <a className="nav-menu-footer" href="/productos">Ver todos los productos <i className="ti ti-arrow-right" /></a>
          </div>
        </div>

        <div className="nav-group">
          <a className="nav-trigger" href="/blog">Developers <i className="ti ti-chevron-down" /></a>
          <div className="nav-menu">
            <div className="nav-menu-grid">
              {developerItems.map((item) => (
                <a className="nav-menu-item" href={item.href} key={item.title} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>
                  <span className="nav-menu-icon"><i className={`ti ${item.icon}`} /></span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-group">
          <a className="nav-trigger" href="/servicios">Soluciones <i className="ti ti-chevron-down" /></a>
          <div className="nav-menu">
            <div className="nav-menu-grid">
              {solutionItems.map((item) => (
                <a className="nav-menu-item" href={item.href} key={item.title}>
                  <span className="nav-menu-icon"><i className={`ti ${item.icon}`} /></span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <a href="/servicios">Servicios</a>
        <a href="/blog">Docs</a>
        <a href="/blog">Blog</a>
      </div>

      <div className="nav-actions">
        <a className="nav-github" href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub de BeyondNet Code">
          <i className="ti ti-brand-github" />
          <span>GitHub</span>
        </a>
        <a className="btn nav-btn nav-btn--ghost" href="/contacto">Contacto</a>
        <a className="btn nav-btn nav-btn--primary" href="/contacto?intent=demo">Demo técnica</a>
      </div>
    </nav>
  )
}

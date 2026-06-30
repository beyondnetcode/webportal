'use client'

import { useEffect, useState } from 'react'

type Chip = {
  label: string
  tone?: 'gold' | 'mute'
  icon?: string
}

type TerminalLine = {
  marker: string
  text: string
  tone?: 'muted' | 'ok' | 'warn'
}

type Tile = {
  num: string
  label: string
  gold?: boolean
}

export type ProductHeroSlide = {
  eyebrow: string
  title: string
  highlight: string
  titleTail?: string
  subtitle: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
  secondaryExternal?: boolean
  textCtaLabel?: string
  textCtaHref?: string
  note: string
  previewEyebrow: string
  previewTitle: string
  chips: Chip[]
  terminal: TerminalLine[]
  tiles: Tile[]
}

type Props = {
  slides: ProductHeroSlide[]
}

export function ProductHeroCarousel({ slides }: Props) {
  const [active, setActive] = useState(0)
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)
  const [isHoverPaused, setIsHoverPaused] = useState(false)

  const activeIndex = slides.length ? Math.min(active, slides.length - 1) : 0
  const isPaused = isManuallyPaused || isHoverPaused

  useEffect(() => {
    if (isPaused || slides.length <= 1) return

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 10000)

    return () => window.clearInterval(interval)
  }, [activeIndex, isPaused, slides.length])

  if (!slides.length) return null

  const slide = slides[activeIndex]
  const secondaryIcon = slide.secondaryLabel.toLowerCase().includes('github')
    ? 'ti ti-brand-github'
    : 'ti ti-arrow-up-right'

  const goTo = (next: number) => {
    setActive((next + slides.length) % slides.length)
  }

  return (
    <section
      className="section-dark hero-carousel"
      aria-roledescription="carousel"
      aria-label="Productos destacados"
      onMouseEnter={() => setIsHoverPaused(true)}
      onMouseLeave={() => setIsHoverPaused(false)}
    >
      <div className="hero-grid wrap" aria-live="polite">
        <div className="hero-copy">
          <div className="carousel-slide-copy" key={`copy-${activeIndex}`}>
            <span className="kicker hero-kicker">{slide.eyebrow}</span>
            <h1 className="hero-title">
              {slide.title} <span className="gold-text">{slide.highlight}</span>{slide.titleTail ?? ''}
            </h1>
            <p className="hero-sub">{slide.subtitle}</p>
            <div className="row">
              <a className="btn btn--gold" href={slide.primaryHref}>{slide.primaryLabel}</a>
              <a
                className="btn btn--ghost-dark"
                href={slide.secondaryHref}
                target={slide.secondaryExternal ? '_blank' : undefined}
                rel={slide.secondaryExternal ? 'noreferrer' : undefined}
              >
                <i className={secondaryIcon} /> {slide.secondaryLabel}
              </a>
              {slide.textCtaLabel && slide.textCtaHref ? (
                <a className="btn btn--text-dark" href={slide.textCtaHref}>
                  {slide.textCtaLabel} <i className="ti ti-arrow-right" />
                </a>
              ) : null}
            </div>
            <div className="hero-note">
              <i className="ti ti-check" style={{ color: 'var(--gold)' }} /> {slide.note}
            </div>
          </div>

          <div className="carousel-controls" aria-label="Navegacion de productos">
            <button className="carousel-arrow" type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Producto anterior">
              <i className="ti ti-chevron-left" />
            </button>
            <button
              className={`carousel-arrow carousel-play${isManuallyPaused ? ' carousel-play--paused' : ''}`}
              type="button"
              onClick={() => setIsManuallyPaused((current) => !current)}
              aria-label={isManuallyPaused ? 'Reproducir carrusel' : 'Pausar carrusel'}
              aria-pressed={isManuallyPaused}
            >
              <i className={`ti ${isManuallyPaused ? 'ti-player-play-filled' : 'ti-player-pause-filled'}`} />
            </button>
            <div className="carousel-dots" role="tablist" aria-label="Seleccionar producto">
              {slides.map((item, index) => (
                <button
                  aria-label={`Ver ${item.previewTitle}`}
                  aria-selected={index === activeIndex}
                  className={`carousel-dot${index === activeIndex ? ' carousel-dot--active' : ''}`}
                  key={`${item.previewTitle}-${index}`}
                  onClick={() => goTo(index)}
                  role="tab"
                  type="button"
                />
              ))}
            </div>
            <span className="carousel-count">{activeIndex + 1} / {slides.length}</span>
            <button className="carousel-arrow" type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Producto siguiente">
              <i className="ti ti-chevron-right" />
            </button>
          </div>
        </div>

        <div className="shot product-shot carousel-slide-preview" key={`preview-${activeIndex}`}>
          <div className="shot-bar">
            <span className="shot-dot" /><span className="shot-dot" /><span className="shot-dot shot-dot--gold" />
          </div>
          <div className="shot-body">
            <div className="shot-eyebrow">{slide.previewEyebrow}</div>
            <div className="shot-title">{slide.previewTitle}</div>
            <div className="row shot-chip-row">
              {slide.chips.map((chip) => (
                <span className={`chip chip--${chip.tone ?? 'mute'}`} key={chip.label}>
                  {chip.icon ? <i className={`ti ${chip.icon}`} /> : null}
                  {chip.label}
                </span>
              ))}
            </div>
            <div className="terminal">
              {slide.terminal.map((line, index) => (
                <div key={`${line.marker}-${line.text}-${index}`}>
                  <span className={`term-${line.tone ?? 'muted'}`}>{line.marker}</span> {line.text}
                </div>
              ))}
            </div>
            <div className="row shot-tile-row">
              {slide.tiles.map((tile) => (
                <div className="tile" key={`${tile.num}-${tile.label}`}>
                  <div className={`tile-num${tile.gold ? ' tile-num--gold' : ''}`}>{tile.num}</div>
                  <div className="tile-label">{tile.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

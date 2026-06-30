'use client'

import { useState } from 'react'

const INTENT_LABEL: Record<string, string> = { demo: 'Agendar una demo', consulting: 'Consultoría', quote: 'Cotizar un desarrollo' }

export function ContactForm({ intent = 'demo' }: { intent?: string }) {
  const safeIntent = ['demo', 'consulting', 'quote'].includes(intent) ? intent : 'demo'
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) setStatus('ok')
      else {
        setStatus('error')
        setError(data.error || 'No se pudo enviar. Intenta de nuevo.')
      }
    } catch {
      setStatus('error')
      setError('No se pudo enviar. Revisa tu conexión.')
    }
  }

  if (status === 'ok') {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: 'var(--gold-text)' }}><i className="ti ti-circle-check" /></div>
        <h3 style={{ marginTop: 10 }}>¡Gracias! Te contactaremos pronto.</h3>
        <p className="sub" style={{ fontSize: 14 }}>Tu mensaje quedó registrado.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <label className="label" htmlFor="intent">¿En qué te ayudamos?</label>
      <select id="intent" name="intent" defaultValue={safeIntent} className="select">
        {Object.entries(INTENT_LABEL).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>

      <label className="label" htmlFor="name">Nombre</label>
      <input id="name" name="name" className="input" autoComplete="name" />

      <label className="label" htmlFor="email">Correo *</label>
      <input id="email" name="email" type="email" required className="input" autoComplete="email" />

      <label className="label" htmlFor="company">Empresa</label>
      <input id="company" name="company" className="input" autoComplete="organization" />

      <label className="label" htmlFor="message">Mensaje</label>
      <textarea id="message" name="message" className="textarea" />

      {/* Honeypot anti-spam: invisible para humanos */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

      {status === 'error' && <p style={{ color: 'var(--error, #BA1A1A)', fontSize: 14, marginTop: 12 }}>{error}</p>}

      <button type="submit" className="btn btn--gold" style={{ marginTop: 18, width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  )
}

import config from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

const INTENTS = ['demo', 'consulting', 'quote']

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ ok: false, error: 'Solicitud inválida.' }, { status: 400 })

  const { name, email, company, message, intent, website } = body as Record<string, string>

  // Honeypot: los bots rellenan "website". Respondemos ok sin guardar.
  if (website) return NextResponse.json({ ok: true })

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Ingresa un correo válido.' }, { status: 400 })
  }

  // TODO: validar Cloudflare Turnstile aquí (requiere TURNSTILE_SECRET_KEY).

  try {
    const payload = (await getPayload({ config })) as any
    await payload.create({
      collection: 'leads',
      overrideAccess: true,
      data: {
        name: name?.slice(0, 200),
        email: email.slice(0, 200),
        company: company?.slice(0, 200),
        message: message?.slice(0, 4000),
        intent: INTENTS.includes(intent) ? intent : 'demo',
        source: 'webportal',
      },
    })
    // TODO: notificar por email vía Resend (requiere RESEND_API_KEY).
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'No se pudo registrar. Intenta de nuevo.' }, { status: 500 })
  }
}

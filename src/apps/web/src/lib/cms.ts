import config from '@payload-config'
import { getPayload } from 'payload'

/*
 * Helpers de lectura del CMS para páginas públicas (server-first, AD-6).
 * Tolerantes a fallos: si la DB no está disponible devuelven vacío/null,
 * para que la página renderice su estado vacío en vez de romper.
 * Tipado laxo a propósito (regenerar con `payload generate:types` para tipos fuertes).
 */

async function client(): Promise<any | null> {
  try {
    return (await getPayload({ config })) as any
  } catch {
    return null
  }
}

export async function findDocs(collection: string, opts: Record<string, unknown> = {}): Promise<any[]> {
  try {
    const p = await client()
    if (!p) return []
    const res = await p.find({ collection, limit: 100, ...opts })
    return res?.docs ?? []
  } catch {
    return []
  }
}

export async function findOne(collection: string, where: Record<string, unknown>): Promise<any | null> {
  try {
    const p = await client()
    if (!p) return null
    const res = await p.find({ collection, where, limit: 1 })
    return res?.docs?.[0] ?? null
  } catch {
    return null
  }
}

export async function getGlobalSafe(slug: string): Promise<any | null> {
  try {
    const p = await client()
    if (!p) return null
    return await p.findGlobal({ slug })
  } catch {
    return null
  }
}

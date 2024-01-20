import type { Context } from '@netlify/functions'

export default async (req: Request, context: Context) => {
  return new Response(JSON.stringify({ visitNumber: 1234 }), {
    headers: { 'content-type': 'application/json' }
  })
}

// pages/api/waitlist.ts

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    // Handle preflight CORS
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', '*')
    return res.status(204).end()
  }

  try {
    const backendRes = await fetch('https://backend-landing-production.up.railway.app/waitlist/submit', {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })

    const data = await backendRes.json()

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.status(backendRes.status).json(data)
  } catch (err: any) {
    console.error("Proxy Error:", err)
    res.status(500).json({ error: 'Proxy error', details: err.message || err })
  }
}

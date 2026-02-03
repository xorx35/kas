export async function POST(req) {
  const { nama } = await req.json()

  // === REAL QRIS PAKASIR ===
  const res = await fetch('https://api.pakasir.com/v1/qris', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.PAKASIR_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: 15000,
      description: `Kas - ${nama}`
    })
  })

  const data = await res.json()
  return Response.json(data)
}

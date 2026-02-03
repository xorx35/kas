export async function POST(req) {
  const { nama } = await req.json()

  const res = await fetch('https://api.pakasir.com/v1/qris', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PAKASIR_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: 15000,
      description: `Kas - ${nama}`,
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/callback`
    })
  })

  const data = await res.json()
  return Response.json({ qr_url: data.qr_url })
}

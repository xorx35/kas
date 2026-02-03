import { supabase } from '@/lib/supabase'

export async function POST(req) {
  const { status, description } = await req.json()

  if (status === 'paid') {
    const nama = description.replace('Kas - ', '')

    await supabase.from('kas')
      .update({ status: 'sudah', tanggal_bayar: new Date() })
      .eq('nama', nama)

    await supabase.from('riwayat_pembayaran')
      .insert({ nama, nominal: 15000, tanggal_bayar: new Date() })
  }

  return new Response('OK')
}

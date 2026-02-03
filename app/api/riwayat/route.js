import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data } = await supabase
    .from('riwayat_pembayaran')
    .select('*')
    .order('tanggal_bayar',{ascending:false})

  return Response.json(data)
}

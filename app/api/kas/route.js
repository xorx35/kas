import { supabase } from '../../../lib/supabase'

export async function GET() {
  const { data, error } = await supabase
    .from('kas')
    .select('*')
    .order('nama')

  if (error) {
    console.error('API /kas error:', error)
    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }

  // PASTIKAN selalu array
  return Response.json(Array.isArray(data) ? data : [])
}

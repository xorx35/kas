'use client'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    })
    if (!error) location.href = '/admin'
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <button onClick={login} className="bg-black text-white px-4 py-2 rounded">
        Login Admin
      </button>
    </div>
  )
}
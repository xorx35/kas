'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (!error) location.href = '/admin'
    else alert(error.message)
  }

  return (
    <div style={{ maxWidth:360, margin:'80px auto', background:'#fff', padding:20, borderRadius:6 }}>
      <h3 style={{ textAlign:'center' }}>Admin Login</h3>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} style={{ width:'100%', padding:8, margin:'8px 0' }}/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} style={{ width:'100%', padding:8 }}/>
      <button onClick={login} style={{ width:'100%', marginTop:12 }}>Login</button>
    </div>
  )
}
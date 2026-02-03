'use client'
import { useEffect, useState } from 'react'

export default function Admin() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/kas').then(r => r.json()).then(setData)
  }, [])

  const total = data.filter(d=>d.status==='sudah').reduce((a,b)=>a+b.nominal,0)

  return (
    <div style={{ maxWidth:420, margin:'auto', padding:16 }}>
      <h2>Dashboard Admin</h2>
      <div style={{ background:'#fff', padding:12, borderRadius:6 }}>
        <p>Total Kas</p>
        <h3>Rp{total.toLocaleString()}</h3>
        <a href="/admin/riwayat">Lihat Riwayat</a>
      </div>
    </div>
  )
}
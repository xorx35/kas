'use client'
import { useEffect, useState } from 'react'

export default function Riwayat() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/riwayat').then(r => r.json()).then(setData)
  }, [])

  return (
    <div style={{ maxWidth:420, margin:'auto', padding:16 }}>
      <h2>Riwayat Pembayaran</h2>
      {data.map(r => (
        <div key={r.id} style={{ background:'#fff', padding:10, marginBottom:8 }}>
          <b>{r.nama}</b><br/>
          Rp{r.nominal}<br/>
          <small>{new Date(r.tanggal_bayar).toLocaleString()}</small>
        </div>
      ))}
    </div>
  )
}
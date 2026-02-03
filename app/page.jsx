'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/kas').then(r => r.json()).then(setData)
  }, [])

  const bayar = async (nama) => {
    const res = await fetch('/api/bayar', {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nama })
    })
    const data = await res.json()
    window.open(data.qr_url)
  }

  return (
    <div style={{ maxWidth:420, margin:'auto', padding:16 }}>
      <h2 style={{ textAlign:'center' }}>Kas Kelas</h2>
      {data.map(d => (
        <div key={d.id} style={{
          background:'#fff',
          padding:12,
          marginBottom:10,
          borderRadius:6,
          display:'flex',
          justifyContent:'space-between'
        }}>
          <span>{d.nama}</span>
          {d.status === 'sudah'
            ? <span style={{ color:'green' }}>✔</span>
            : <button onClick={()=>bayar(d.nama)}>Bayar</button>
          }
        </div>
      ))}
    </div>
  )
}
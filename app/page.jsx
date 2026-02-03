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
      body: JSON.stringify({ nama })
    })
    const data = await res.json()
    window.open(data.qr_url)
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Kas Kelas</h1>
      {data.map(d => (
        <div key={d.id} className="bg-white p-3 rounded shadow mb-2 flex justify-between">
          <span>{d.nama}</span>
          {d.status === 'sudah' ? '✅' :
            <button onClick={() => bayar(d.nama)} className="text-blue-600">Bayar</button>
          }
        </div>
      ))}
    </div>
  )
}
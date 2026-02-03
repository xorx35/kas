'use client'
import { useEffect, useState } from 'react'

export default function Riwayat() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/riwayat').then(r => r.json()).then(setData)
  }, [])

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Riwayat Pembayaran</h1>
      {data.map(r => (
        <div key={r.id} className="bg-white p-3 rounded shadow mb-2">
          <p>{r.nama}</p>
          <p>Rp{r.nominal}</p>
          <p className="text-sm text-gray-500">
            {new Date(r.tanggal_bayar).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )
}
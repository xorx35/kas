'use client'
import { useEffect, useState } from 'react'

export default function Admin() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/kas').then(r => r.json()).then(setData)
  }, [])

  const total = data.filter(d => d.status === 'sudah')
    .reduce((a, b) => a + b.nominal, 0)

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Dashboard Admin</h1>
      <p className="my-2 font-semibold">Total Kas: Rp{total.toLocaleString()}</p>
      <a href="/admin/riwayat" className="text-blue-600 underline">
        Lihat Riwayat Pembayaran
      </a>
    </div>
  )
}
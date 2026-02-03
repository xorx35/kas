'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/kas')
      .then(res => {
        if (!res.ok) {
          throw new Error('Gagal mengambil data kas')
        }
        return res.json()
      })
      .then(json => {
        if (Array.isArray(json)) {
          setData(json)
        } else {
          console.error('Response bukan array:', json)
          setData([])
        }
      })
      .catch(err => {
        console.error(err)
        setError('Data kas tidak bisa dimuat')
        setData([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <p>Loading data kas...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: 20, textAlign: 'center', color: 'red' }}>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 480, margin: '20px auto', padding: 16 }}>
      <h2 style={{ textAlign: 'center' }}>Kas Kelas</h2>

      {data.length === 0 && (
        <p style={{ textAlign: 'center' }}>Belum ada data kas</p>
      )}

      {data.map(item => (
        <div
          key={item.id}
          style={{
            background: '#fff',
            padding: 12,
            marginBottom: 10,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{item.nama}</span>
          <span>
            {item.status === 'sudah' ? '✅ Sudah' : '❌ Belum'}
          </span>
        </div>
      ))}
    </div>
  )
}

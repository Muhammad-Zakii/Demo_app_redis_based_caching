'use client'

import { useState } from 'react'

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function ProductList({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("")

  const filtered = products.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-4">
      <input
        className="mb-4 p-2 border rounded w-full"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(p => (
          <div key={p.id} className="border rounded-lg p-4 shadow">
            <img src={p.thumbnail} alt={p.title} className="h-40 w-full object-cover mb-2 rounded" />
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-600">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

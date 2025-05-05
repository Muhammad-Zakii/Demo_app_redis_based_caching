import ProductList from './components/ProductList'
import redis from '../lib/redis'

async function getProducts() {
  try {
    const cached = await redis.get('products')

    if (cached) return cached
  
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    const products = data.products
    
    await redis.set('products', products, { ex: 120 })
    
    return products
  } catch (error) {
    console.error("Redis error:", error);
  }
 
}

export default async function Home() {
  const products = await getProducts()
 

  return (
    <main className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <ProductList products={products} />
    </main>
  )
}

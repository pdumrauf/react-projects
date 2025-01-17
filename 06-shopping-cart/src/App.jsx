import { useEffect } from 'react'
import { Products } from './components/Products.jsx'
import { useProducts } from './hooks/useProducts.js'

function App() {
  const { products, getProducts } = useProducts()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Products products={products} />
  )
}

export default App

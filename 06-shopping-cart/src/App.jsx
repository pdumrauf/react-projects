import { useEffect, useState } from 'react'
import { Products } from './components/Products.jsx'
import { useProducts } from './hooks/useProducts.js'

function App() {
  const { products, getProducts } = useProducts()
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  useEffect(() => {
    getProducts()
  }, [])

  const filterProducts = (products) => products.filter(product => 
    product.price >= filters.minPrice && 
    (
      filters.category === 'all' ||
      product.category === filters.category
    )
  )

  const filteredProducts = filterProducts(products)

  return (
    <Products products={filteredProducts} />
  )
}

export default App

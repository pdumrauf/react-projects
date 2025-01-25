import { useEffect } from 'react'
import { Products } from './components/Products.jsx'
import { useProducts } from './hooks/useProducts.js'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'

function App() {
  const { products, getProducts } = useProducts()
  const { filterProducts } = useFilters()

  useEffect(() => {
    getProducts()
  }, [])

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App

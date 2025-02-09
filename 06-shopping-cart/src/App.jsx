import { useEffect } from 'react'
import { Products } from './components/Products.jsx'
import { useProducts } from './hooks/useProducts.js'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {
  const { products, getProducts } = useProducts()
  const { filterProducts } = useFilters()

  useEffect(() => {
    getProducts()
  }, [])

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App

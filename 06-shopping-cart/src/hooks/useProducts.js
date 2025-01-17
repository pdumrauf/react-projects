import { useState } from "react"
import { searchProduct } from "../services/products.js"

export function useProducts () {
  const [products, setProducts] = useState([])

   const getProducts = async () => {
    try {
      const newProduct = await searchProduct()
      setProducts(newProduct)
    } catch(error) {
      throw new Error(`${error} - no products`)
    }
  } 

  return { products, getProducts }
}
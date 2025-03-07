/* eslint react/prop-types: 0 */

import { createContext } from "react"
import { useCartReducer } from "../reducers/cart"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const { state, addToCart, decreaseItemQty, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      decreaseItemQty,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

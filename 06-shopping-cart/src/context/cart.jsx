/* eslint react/prop-types: 0 */

import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCart = cart.findIndex(item => item.id === product.id)

    if (productInCart >= 0) {
      const newCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      return setCart(newCart);
    } else {
      return setCart(prevState => ([
        ...prevState,
        { ...product, quantity: 1 }
      ]))
    }
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

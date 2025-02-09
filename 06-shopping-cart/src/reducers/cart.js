import { useReducer } from "react"
import { CART_ACTIONS_TYPES } from "../constants/cartActions"

export const cartInitialState = []

const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCart = state.findIndex((item) => item.id === id)

      if (productInCart >= 0) {
        const newState = state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        return newState
      }

      return [...state, { ...actionPayload, quantity: 1 }]
    }
    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter((item) => item.id !== id)
    }
    case CART_ACTIONS_TYPES.CLEAR_CART: {
      return cartInitialState
    }
  }

  return state
}

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) =>
    dispatch({ type: CART_ACTIONS_TYPES.ADD_TO_CART, payload: product })
  const removeFromCart = (product) =>
    dispatch({ type: CART_ACTIONS_TYPES.REMOVE_FROM_CART, payload: product })
  const clearCart = () => dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART })

  return { state, addToCart, removeFromCart, clearCart }
}

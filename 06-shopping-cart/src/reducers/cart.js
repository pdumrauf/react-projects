import { useReducer } from "react"
import { CART_ACTIONS_TYPES } from "../constants/cartActions"

export const cartInitialState = JSON.parse(localStorage.getItem("cart")) || []

// update localStorage with state from cart
const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state))
}

const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  let newState = state

  if (actionType === CART_ACTIONS_TYPES.ADD_TO_CART) {
    const { id } = actionPayload
    const productInCart = state.findIndex((item) => item.id === id)

    newState =
      productInCart >= 0
        ? state.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state, { ...actionPayload, quantity: 1 }]
  } else if (actionType === CART_ACTIONS_TYPES.DECREASE_ITEM_QTY) {
    const { id } = actionPayload
    const productInCart = state.findIndex((item) => item.id === id)

    if (productInCart >= 0) {
      newState = state
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    }
  } else if (actionType === CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART) {
    const { id } = actionPayload
    newState = state.filter((item) => item.id !== id)
  } else if (CART_ACTIONS_TYPES.CLEAR_CART) {
    return (newState = [])
  }
  updateLocalStorage(newState)
  return newState
}

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) =>
    dispatch({ type: CART_ACTIONS_TYPES.ADD_TO_CART, payload: product })
  const decreaseItemQty = (product) =>
    dispatch({ type: CART_ACTIONS_TYPES.DECREASE_ITEM_QTY, payload: product })
  const removeFromCart = (product) =>
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART,
      payload: product,
    })
  const clearCart = () => dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART })

  return { state, addToCart, decreaseItemQty, removeFromCart, clearCart }
}

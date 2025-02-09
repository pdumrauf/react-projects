import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart"
import "./Cart.css"
import { CartItem } from "./CartItem"

export function Cart() {
  const cartId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartId}>
        <CartIcon />
      </label>
      <input id={cartId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {
            cart.map(product => {
              return (
                <CartItem key={product.id} {...product} addToCart={() => addToCart(product)} />
              )
            })
          }
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
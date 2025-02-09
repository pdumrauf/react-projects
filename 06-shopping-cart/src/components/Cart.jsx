import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart"
import "./Cart.css"

export function Cart() {
  const cartId = useId()
  const { clearCart } = useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartId}>
        <CartIcon />
      </label>
      <input id={cartId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>

            <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="makeup" />
            <div>
              <strong>Product</strong> - $100
            </div>

            <footer>
              <small>Quantity: 1</small>
            </footer>
            <button>+</button>
          </li>
        </ul>

        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
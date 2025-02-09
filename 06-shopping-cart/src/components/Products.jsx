/* eslint react/prop-types: 0 */
import { useCart } from "../hooks/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import './Products.css'

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="products">
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)
          console.log(isProductInCart)
          return (
            <li key={product.id}>
              <img
                src={product.image}
                alt={product.description}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
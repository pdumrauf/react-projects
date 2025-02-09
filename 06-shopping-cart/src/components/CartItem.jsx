/* eslint react/prop-types: 0 */
export function CartItem({ title, image, price, quantity, addToCart, decreaseItemQty }) {

  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
      </footer>
      <button onClick={addToCart}>+</button>
      <button onClick={decreaseItemQty}>-</button>
    </li>
  )
}
// Cart.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  console.log("Cart component cart:", cart); // Debugging log

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart && cart.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart && cart.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <span>{product.title} - ${product.price}</span>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
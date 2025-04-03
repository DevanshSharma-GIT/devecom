// Checkout.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);

  console.log("Checkout cartItems:", cartItems); // Debugging log

  const calculateTotal = () => {
    if (!cartItems) return 0; // Check if cartItems is defined
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="checkout">
      <h2 className="checkout-title">Checkout</h2>
      {cartItems && cartItems.length === 0 ? ( // Added cartItems &&
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <ul className="checkout-items">
            {cartItems && cartItems.map((item) => ( // Added cartItems &&
              <li key={item.id} className="checkout-item">
                <div className="item-details">
                  <img src={item.image} alt={item.title} className="item-image" />
                  <div className="item-info">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-quantity">Quantity: {item.quantity}</p>
                    <p className="item-price">Price: ${item.price}</p>
                  </div>
                </div>
                <p className="item-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="checkout-summary">
            <p className="total-amount">Total: ${calculateTotal()}</p>
            <button className="place-order-button" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
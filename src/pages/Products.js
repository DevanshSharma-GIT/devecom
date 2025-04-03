import React, { useContext } from "react";
import { CartContext } from "./CartContext"; // Corrected path
import "./Products.css";

const products = [
  { id: 1, title: "Fancy Sneakers", price: 59.99, image: "https://source.unsplash.com/200x200/?sneakers" },
  { id: 2, title: "Smart Watch", price: 99.99, image: "https://source.unsplash.com/200x200/?watch" },
  { id: 3, title: "Gaming Headset", price: 129.99, image: "https://source.unsplash.com/200x200/?headphones" },
  { id: 4, title: "Wireless Earbuds", price: 79.99, image: "https://source.unsplash.com/200x200/?earbuds" },
];

function Products() {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
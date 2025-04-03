// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { CartProvider } from './pages/CartContext';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
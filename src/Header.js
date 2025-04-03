// src/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './devansh.heic'; // Import your logo image

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Devecom Logo" className="website-logo" />
        <div className="logo-text">Devecom</div>
      </div>
      <nav className="nav-links">
        <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
        <NavLink to="/products" activeClassName="active" className="nav-link">Products</NavLink>
        <NavLink to="/cart" activeClassName="active" className="nav-link">Cart</NavLink>
        <NavLink to="/checkout" activeClassName="active" className="nav-link">Checkout</NavLink>
      </nav>
    </header>
  );
}

export default Header;
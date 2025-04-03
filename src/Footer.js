// src/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Devecom. All rights reserved.</p>
        <div className="social-links">
          <a href="https://devanshsharma-git.github.io/Portfolio-/index.html" className="social-icon">Portfolio</a>
          <a href="https://www.linkedin.com/in/devansh-sharma-9713a8292/" className="social-icon">Linkedin</a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
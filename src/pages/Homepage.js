// Homepage.js
import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="hero">
        <h1 className="hero-title">Devecom: Next-Gen E-Commerce</h1>
        <p className="hero-subtitle">Crafted with cutting-edge technologies for a seamless experience.</p>
      </div>

      <section className="about">
        <h2 className="section-title">Project Deep Dive</h2>
        <p className="section-description">
          This project is a testament to modern web development, built using a powerful stack:
          <span className="tech-highlight"> React 18</span>,
          <span className="tech-highlight"> React Router v6</span>,
          <span className="tech-highlight"> Context API</span> for state management, and styled with
          <span className="tech-highlight"> CSS Modules</span> for maintainability.
          We've embraced the latest standards for a highly performant and responsive application.
        </p>
        <a href="https://devanshsharma-git.github.io/Portfolio-/" className="portfolio-link">Explore My Portfolio</a>
      </section>

      <section className="features">
        <h2 className="section-title">Core Functionalities</h2>
        <ul className="feature-list">
          <li className="feature-item">
            <span className="feature-icon">🚀</span>
            <strong>Blazing Fast Performance:</strong> Optimized for speed and efficiency.
          </li>
          <li className="feature-item">
            <span className="feature-icon">📱</span>
            <strong>Adaptive UI:</strong> Seamless across all devices with responsive design.
          </li>
          <li className="feature-item">
            <span className="feature-icon">🛒</span>
            <strong>Dynamic Cart System:</strong> Real-time updates and effortless management.
          </li>
          <li className="feature-item">
            <span className="feature-icon">🔒</span>
            <strong>End-to-End Secure Checkout:</strong> Robust security for every transaction.
          </li>
          <li className="feature-item">
            <span className="feature-icon">🔍</span>
            <strong>Intelligent Search & Filtering:</strong> Find products instantly.
          </li>
          <li className="feature-item">
            <span className="feature-icon">📝</span>
            <strong>Rich Product Details:</strong> Comprehensive descriptions with immersive visuals.
          </li>
          <li className="feature-item">
            <span className="feature-icon">⚡</span>
            <strong>Code Splitting & Lazy Loading:</strong> Optimized for initial load times.
          </li>
          <li className="feature-item">
            <span className="feature-icon">⚛️</span>
            <strong>React Hooks:</strong> For cleaner, more efficient component logic.
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h2 className="section-title">User Echoes</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p className="testimonial-text">"Devecom's speed is unmatched! It's like shopping in the future."</p>
            <p className="testimonial-author">- Alex R.</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">"The UI is incredibly intuitive. I love the smooth transitions and animations."</p>
            <p className="testimonial-author">- Maya S.</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">"Security is paramount for me, and Devecom delivers. I trust their checkout process."</p>
            <p className="testimonial-author">- Chris L.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2 className="section-title">Stay Connected</h2>
        <p className="section-description">We're here to assist you. Reach out with any inquiries or feedback.</p>
        <div className="contact-info">
          <p className="contact-detail">
            <span className="contact-icon">📧</span> Email: support@devecom.com
          </p>
          <p className="contact-detail">
            <span className="contact-icon">📞</span> Phone: +1 123-456-7890
          </p>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
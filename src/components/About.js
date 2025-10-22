import React from "react";
import "./About.css";
import { FaTruck, FaCertificate, FaExchangeAlt, FaShieldAlt, FaGem, FaUndo } from "react-icons/fa";

function About() {
  return (
    <section className="about-section" id="About">
      <div className="about-content">
        <h2 className="about-title">About LuxeJewels</h2>
        <p className="about-text">
          At <span className="highlight">LuxeJewels</span>, we craft jewellery that embodies elegance, 
          beauty, and timeless charm. Each piece is designed with passion, 
          precision, and perfection — made to shine with you.
        </p>
      </div>

      <div className="about-features">
        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h4>Safe & Secure Delivery</h4>
          <p>We ensure your jewellery arrives safely, handled with utmost care.</p>
        </div>
        <div className="feature-card">
          <FaTruck className="feature-icon" />
          <h4>Free Shipping</h4>
          <p>Enjoy free and fast delivery for all LuxeJewels purchases.</p>
        </div>
        <div className="feature-card">
          <FaCertificate className="feature-icon" />
          <h4>Certified Diamonds</h4>
          <p>Every diamond comes with authenticity and quality certification.</p>
        </div>
        <div className="feature-card">
          <FaExchangeAlt className="feature-icon" />
          <h4>Diamond Exchange</h4>
          <p>Upgrade your diamonds with our transparent exchange policy.</p>
        </div>
        <div className="feature-card">
          <FaGem className="feature-icon" />
          <h4>BIS Hallmarked Gold</h4>
          <p>Every gold piece carries genuine BIS Hallmark certification.</p>
        </div>
        <div className="feature-card">
          <FaUndo className="feature-icon" />
          <h4>7 Days Return Policy</h4>
          <p>We offer an easy 7-day return window for worry-free shopping.</p>
        </div>
      </div>
    </section>
  );
}

export default About;

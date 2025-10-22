import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Left Menu Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="nav-item"><a href="#Home">Home</a></li>
          <li className="nav-item"><a href="#Collections">Collection</a></li>
          <li className="nav-item"><a href="#Categories">Categories</a></li>
          <li className="nav-item"><a href="#About">About</a></li>
          <li className="nav-item"><a href="#Wedding">Wedding</a></li>
          <li className="nav-item"><a href="#Reviews">Reviews</a></li>
        </ul>

        {/* Center Logo */}
        <div className="nav-logo">
          <a href="#home">LuxeJewels</a>
        </div>

        {/* Right Icons */}
        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaUser className="icon" />
          <FaShoppingBag className="icon" />
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

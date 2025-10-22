


// import React from 'react';
// import './Footer.css';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         {/* Logo & About */}
//         <div className="footer-logo-section">
//           <h2 className="footer-logo">✨ LuxeJewels</h2>
//           <p>Crafting timeless elegance and exquisite jewellery for every occasion.</p>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#collections">Collections</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#contact">Contact</a></li>
//             <li><a href="#faq">FAQ</a></li>
//           </ul>
//         </div>

//         {/* Socials */}
//         <div className="footer-socials">
//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="#"><i className="fab fa-instagram"></i></a>
//             <a href="#"><i className="fab fa-facebook-f"></i></a>
//             <a href="#"><i className="fab fa-twitter"></i></a>
//             <a href="#"><i className="fab fa-pinterest-p"></i></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>© 2025 LuxeJewels | All Rights Reserved</p>
//         <p>Designed with ❤️ by LuxeJewels Team</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo & About */}
        <div className="footer-logo-section">
          <h2 className="footer-logo">✨ LuxeJewels</h2>
          <p>Crafting timeless elegance and exquisite jewellery for every occasion.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#Collections">Collections</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#Reviews">Reviews</a></li>
            <li><a href="#Home">Home</a></li>
          </ul>
        </div>

        {/* Blogs/Resources */}
        <div className="footer-blogs">
          <h3>Blogs & Resources</h3>
          <ul>
            <li><a href="#blog1">Jewellery Care Tips</a></li>
            <li><a href="#blog2">Latest Trends 2025</a></li>
            <li><a href="#blog3">How to Choose the Perfect Gift</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-phone-alt"></i> +91 98765 43210</li>
            <li><i className="fas fa-envelope"></i> support@luxejewels.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Luxe Street, Mumbai, India</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 LuxeJewels | All Rights Reserved</p>
        <p>Designed with ❤️ by LuxeJewels Team</p>
      </div>
    </footer>
  );
}

export default Footer;

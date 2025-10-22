

import React from "react";
import "./WeddingJewellery.css";

// Images and category names
const weddingItems = [
  { name: "Haldi", image: "/wedding1.jpg" },
  { name: "Mehendi", image: "/wedding2.webp" },
  { name: "Wedding Guest", image: "/wedding3.webp" },
  { name: "Bridal", image: "/wedding4.webp" },
  { name: "Cocktail", image: "/wedding5.jpg" },
  { name: "Reception", image: "/wedding6.jpg" },
];

function WeddingJewellery() {
  return (
    <section className="wedding-section" id="Wedding">
      <h2 className="section-title">Wedding Jewellery Collection</h2>
      <div className="wedding-grid">
        {weddingItems.map((item, index) => (
          <div className="wedding-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="wedding-card-name">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeddingJewellery;

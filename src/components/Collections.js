import React from "react";
import "./Collections.css";

const collections = [
  { name: "Diamond Rings", image: "/collections/diamond-rings.jpg" },
  { name: "Gold Bangles", image: "/collections/gold-bangles.jpg" },
  { name: "Pendants & Necklaces", image: "/collections/pendants-necklaces.jpg" },
  { name: "Earrings", image: "/collections/earrings.jpg" },
  { name: "Mangalsutras", image: "/collections/mangalsutras.jpg" },
  { name: "Bracelets & Bangles", image: "/collections/bracelets-bangles.jpg" },
  { name: "Men’s Jewellery", image: "/collections/mens-jewellery.jpg" },
  { name: "Engagement Sets", image: "/collections/engagement-sets.jpg" },
  { name: "Wedding Jewellery", image: "/collections/wedding-jewellery.jpg" },
  { name: "Gemstone Jewellery", image: "/collections/gemstone-jewellery.jpg" },
  { name: "Platinum", image: "/collections/platinum.jpg" },
  { name: "Silver Jewellery", image: "/collections/silver-jewellery.jpg" },
  { name: "Daily Wear", image: "/collections/daily-wear.jpg" },
  { name: "Luxury Collection", image: "/collections/luxury-collection.jpg" },
  { name: "Gift Ideas", image: "/collections/gift-ideas.jpg" },
  { name: "Kids & Teen Jewellery", image: "/collections/kids-teen-jewellery.jpg" },
];

function Collections() {
  return (
    <section className="collections-section" id="Collections">
      <h2 className="collections-title">Explore Our Collections</h2>
      <div className="collections-grid">
        {collections.map((col, idx) => (
          <div className="collection-card" key={idx}>
            <img src={col.image} alt={col.name} className="collection-image" />
            <div className="collection-label">{col.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collections;

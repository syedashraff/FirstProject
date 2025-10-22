import React from 'react';
import './TrendingCategories.css';

const categories = [
 { name: "Diamond Earring", image: "/diamond-earring.jpg" },

  { name: "Diamond Ring", image: "/diamond-ring.jpg" },
  { name: "Gold Bangles", image: "/gold-bangles.jpg" },
  { name: "Diamond Pendant", image: "/diamond-pendant.jpg" },
  { name: "Mangalsutra", image: "/mangalsutra.jpg" },
  { name: "Jewellery for Her", image: "/for-her.jpg" },
];

function TrendingCategories() {
  return (
    <section className="trending-categories" id='Categories'>
      <h2 className="tc-title">Trending Categories</h2>
      <div className="tc-grid">
        {categories.map((cat, idx) => (
          <div className="tc-card" key={idx}>
            <img src={cat.image} alt={cat.name} className="tc-image" />
            <div className="tc-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCategories;

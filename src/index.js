
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Collections from "./components/Collections";
import About from "./components/About";
import Footer from "./components/Footer";
import ReactDOM from "react-dom/client";
import WeddingJewellery from "./components/WeddingJewellery";
import CustomerTestimonials from "./components/CustomerTestimonials";
import TrendingCategories from "./components/TrendingCategories";

let root = ReactDOM.createRoot(document.getElementById("root"));

  

root.render(
    <div>
      <Navbar />
      <HeroSection />
      <Collections />
      <TrendingCategories/>
      <About />
      <WeddingJewellery/>
      <CustomerTestimonials/>
      <Footer />
 </div>
);
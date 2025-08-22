import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrival from "../components/Products/NewArrival";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrival />
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Bedt Seller</h2>
      <ProductDetails />
    </div>
  );
};

export default Home;

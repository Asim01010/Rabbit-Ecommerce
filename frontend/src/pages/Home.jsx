import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrival from "../components/Products/NewArrival";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";


const Home = () => {
  const placeholderProducts = [
    {
      _id: 4,
      name: "product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
      _id: 5,
      name: "product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
      _id: 6,
      name: "product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=7" }],
    },
    {
      _id: 7,
      name: "product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=8" }],
    },
    {
      _id: 4,
      name: "product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
      _id: 5,
      name: "product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
      _id: 6,
      name: "product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=7" }],
    },
    {
      _id: 7,
      name: "product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=8" }],
    },
  ];
  return (
    <div className="">
      <Hero />
      <GenderCollectionSection />
      <NewArrival />
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Bedt Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
     
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";
const FeaturedCollection = () => {
  return (
    <section className="py-12 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover high-quality apparel that combines comfort and style. Our
            collection is designed to elevate your everyday wardrobe. Discover
            high-quality apparel that combines comfort and style. Our collection
            is designed to elevate your everyday wardrobe.
          </p>
          <Link
            to="/collection/all"
            className="inline-block bg-black text-white py-2 px-4 rounded-lg"
          >
            Shop Now
          </Link>
          {/* Right content */}
        </div>
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-auto lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

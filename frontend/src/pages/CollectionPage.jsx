import React, { useEffect, useRef, useState } from "react";
import { Filter } from "lucide-react"; // modern icon
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // ✅ Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);
  // data  
  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
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
          _id: 8,
          name: "product 5",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=9" }],
        },
        {
          _id: 9,
          name: "product 6",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
        {
          _id: 10,
          name: "product 7",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=11" }],
        },
        {
          _id: 11,
          name: "product 8",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=12" }],
        },
      ];
      setProducts(fetchProducts); // ✅ update state
    }, 1000);
  }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        {/* Filter Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden border p-2 flex justify-center items-center gap-2"
        >
          <Filter size={18} />
          Filter
        </button>

        {/* 🔥 Black Overlay */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white overflow-y-auto transform transition-transform duration-300
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:static lg:translate-x-0`}
        >
          <FilterSidebar />
        </div>
        <div className="flex-grow p-4 ">
          <h2 className="text-2xl uppercase mb-4">All Collection</h2>
          {/* Sort Option */}
          <SortOptions/>
          {/* Product Grid */}
           <ProductGrid products={products} />
        </div>
      </div>
    </>
  );
};

export default CollectionPage;

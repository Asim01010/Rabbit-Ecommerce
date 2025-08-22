import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.9; // scroll ~90% width
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border bg-white text-black shadow ${
              !canScrollLeft ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border bg-white text-black shadow ${
              !canScrollRight ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Scroll Content */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-auto flex space-x-6 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="min-w-full sm:min-w-[50%] lg:min-w-[30%] rounded-lg overflow-hidden shadow flex-shrink-0"
          >
            {/* Card content stacked */}
            <div className="relative">
              <img
                src={item.images[0]?.url}
                alt={item.images[0]?.altText || item.name}
                className="w-full h-[400px] object-cover"
              />

              {/* Overlay inside same card */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white p-4">
                <Link to={`/product/${item.id}`} className="block">
                  <h1 className="font-medium text-lg">{item.name}</h1>
                  <p className="font-semibold">${item.price}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;

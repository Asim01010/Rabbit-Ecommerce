import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [isDragging,setIsDragging] = useState(false);
  const [startX,setStartX] = useState(0);
  const [scrollLeft,setScrollLeft] = useState(false);
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

  const handleMouseDown = (e)=>{
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetleft);
    setScrollLeft(scrollRef.current.scrollLeft)
  }
  const handleMouseMove = (e)=>{
  if(!isDragging) return;
  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = x - startX;
  scrollRef.current.scrollLeft = scrollLeft - walk;
  }
  const handleMouseUpOrLeave = ()=>{
setIsDragging(false);
  }

  const scroll = (direction) => {
   const scrollAmount = direction === "left" ? -300 : 300;// scroll ~90% width
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const updateScrollButtons = () => {
    const container = scrollRef.current;
   if(container){
    const leftScroll = container.scrollLeft;
    const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);
   }
  };


  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return ()=> container.removeEventListener("scroll",updateScrollButtons);
    }
  
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-35px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border  ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border  ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Scroll Content */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container mx-auto overflow-x-auto flex space-x-6 scroll-smooth ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            {/* Card content stacked */}

            <img
              src={item.images[0]?.url}
              alt={item.images[0]?.altText || item.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />

            {/* Overlay inside same card */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm text-black p-4 rounded-b-lg">
              <Link to={`/product/${item.id}`} className="block">
                <h1 className="font-medium">{item.name}</h1>
                <p className="font-semibold">${item.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;

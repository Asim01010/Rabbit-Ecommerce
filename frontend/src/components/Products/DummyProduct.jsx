import React from "react";

const DummyProduct = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-pink-300/30 blur-3xl animate-pulse"></div>
          <div className="absolute top-24 right-10 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl animate-pulse"></div>
        </div>

        {/* Content Overlay */}
        <div className="min-h-screen bg-black/10 backdrop-blur-[1px] flex flex-col items-center justify-center px-6 text-center">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs uppercase tracking-widest">
            New Collection
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Shine With{" "}
            <span className="underline decoration-white/70 decoration-4">
              Elegance
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-white/90 md:text-lg">
            Explore premium ladies’ clothing and makeup — from bold colors to
            soft pastels. Discover the beauty that defines you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-white text-purple-700 font-semibold px-6 py-3 shadow-md hover:shadow-lg hover:bg-white/90 transition">
              Shop Now
            </button>
            <button className="rounded-2xl bg-white/15 px-6 py-3 font-medium hover:bg-white/25 backdrop-blur-sm transition">
              Explore Makeup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyProduct;

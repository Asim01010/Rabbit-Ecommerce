import React, { useEffect, useState } from "react";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);

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
      ];
      setProducts(fetchProducts); // ✅ update state
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="border rounded-xl shadow-md p-4 text-center"
        >
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CollectionPage;

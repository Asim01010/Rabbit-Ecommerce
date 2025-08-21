import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartproducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      Image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 20,
      Image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <>
      <div>
        {cartproducts.map((product, index) => (
          <div
            key={index}
            className="flex items-start justify-between py-4 border-b"
          >
            <div className="flex items-start">
              <img
                src={product.img}
                alt={product.name}
                className="h-20 w-24 rounded mr-4 object-cover"
              />
              <div className="">
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  size: {product.size} | color: {product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border rounded p-1  text-xl font-medium">
                    +
                  </button>
                  <span> {product.quantity} </span>
                  <button className="border rounded p-1  text-xl font-medium">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>${product.price.toLocaleString()}</p>
              <button>
                <RiDeleteBin3Line className="h-6w-6 mt-2 text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartContents;

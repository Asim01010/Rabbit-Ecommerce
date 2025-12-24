import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const ProductDetails = () => {
  const selectedProduct = {
    name: "Stylish Jacket",  
    originalPrice: 150,
    discountedPrice: 120,
    description: "This is a stylish Jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
      {
        url: "http://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
      {
        url: "http://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2",
      },
    ],
  };
  const similarProducts = [
    {
      _id: 1,
      name: "product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=3" }],
    },
    {
      _id: 1,
      name: "product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
      _id: 1,
      name: "product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
      _id: 1,
      name: "product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=7" }],
    },
  ];
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please Select the Size and Color before Adding to Cart.");
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product Add to Cart!", {
        duration: 1500,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 ">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct?.images?.map((item, index) => (
              <img
                src={item.url}
                key={index}
                alt={item.altText || `Thumbnail ${index}`}
                className={`h-20 w-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === item.url
                    ? "border-2 border-black"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(item.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
            {selectedProduct?.images?.map((item, index) => (
              <img
                src={item.url}
                key={index}
                alt={item.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === item.url
                    ? "border-2 border-black"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(item.url)}
              />
            ))}
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct?.name}
            </h1>

            <p className="text-lg text-gray-500 mb-1 line-through">
              $ {selectedProduct.originalPrice}
            </p>
            <p className="text-2xl text-black font-bold mb-3">
              $ {selectedProduct.discountedPrice}
            </p>

            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Color:</p>
              <div className="flex gap-3 mt-2">
                {selectedProduct?.colors?.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 border-gray-400 transition ${
                      selectedColor === color
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)"
                     }}
                  >
           
                  </button>
                  
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Size:</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {selectedProduct?.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border transition ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`py-3 px-6 rounded w-full mb-4 transition  text-white
              ${isButtonDisabled ? "bg-gray-500 cursor-not-allowed opacity-50" : "bg-black"}`}
            >
              {isButtonDisabled ? "Adding..." : "Add To Cart"}
            </button>
 
            {/* Characteristics */}
            <div className="mt-8 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      <div className="mt-20 ">
        <h2 className="text-center text-2xl font-medium mb-4">
          You May Also Like
        </h2>
        <ProductGrid products={similarProducts} />
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;

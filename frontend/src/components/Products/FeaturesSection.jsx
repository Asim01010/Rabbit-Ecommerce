import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* feature 1 */}
        <div
          className="flex flex-col items-center p-6 rounded-lg transition cursor-pointer 
                        bg-white hover:bg-gradient-to-r"
        >
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-2xl text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold">Free Shipping</h3>
          <p className="text-gray-600">On all orders over $50</p>
        </div>

        {/* feature 2 */}
        <div
          className="flex flex-col items-center p-6 rounded-lg transition cursor-pointer 
                        bg-white hover:bg-gradient-to-r"
        >
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-2xl text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold">45 days return</h3>
          <p className="text-gray-600">Money Back Guarantee</p>
        </div>

        {/* feature 3 */}
        <div
          className="flex flex-col items-center p-6 rounded-lg transition cursor-pointer 
                        bg-white hover:bg-gradient-to-r"
        >
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-3xl text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold">SECURE CHECKOUT</h3>
          <p className="text-gray-600">100% secure checkout process</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

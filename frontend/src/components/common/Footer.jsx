import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">NewsLetter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new Products, exclusive events and online
            offers.
          </p>
          <p className="font-medium text-sm text-gray-600">
            Sign up and get 10% off your first Order.
          </p>
          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="enter you email..."
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
        {/* shop links */}
        <div>
          <h3 className="text-lg mb-4 text-gray-800">Shop</h3>
          <ul className="sapce-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                WoMen's top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                WoMen's bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* shop links */}
        <div>
          <h3 className="text-lg mb-4 text-gray-800">Support</h3>
          <ul className="sapce-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div className=""></div>
        <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
        <div className="flex items-center space-x-4 mb-6">
          <a
            href="https://www.facebook.com"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopner noreferrer"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

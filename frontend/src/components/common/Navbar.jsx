import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto py-4 px-5 flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 text-gray-500">
          <Link
            to={"#"}
            className="hover:text-black text-sm font-medium uppercase"
          >
            {" "}
            Men
          </Link>
          <Link
            to={"#"}
            className="hover:text-black text-sm font-medium uppercase"
          >
            {" "}
            Women
          </Link>
          <Link
            to={"#"}
            className="hover:text-black text-sm font-medium uppercase"
          >
            {" "}
            Topwear
          </Link>
          <Link
            to={"#"}
            className="hover:text-black text-sm font-medium uppercase"
          >
            {" "}
            BottomWear
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link to={"/"} className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-500" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black cursor-pointer"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-500" />
            <span className="absolute -top-2 bg-amber-600 rounded-full px-2">
              0
            </span>
          </button>
          <button className="relative md:hidden hover:text-black cursor-pointer">
            <HiBars3BottomRight className="h-6 w-6 text-gray-500" />
          </button>
          <SearchBar />
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Navbar;

import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
const Topbar = () => {
  return (
    <div className="bg-amber-700 text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 ">
        <div className="hidden md:flex items-center justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        <div className="text-center flex-1">
          <span>We ship our product with fast and reliable shipping</span>
        </div>
        <div className="hidden md:block">
          <p>+92 316-0560676</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b-gray-200 border">
      {/* Topbar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />
      {/* CartDrawer */}
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBar, setSearchBar] = useState("");

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search term", searchBar);
    setIsOpen(false);
    setSearchBar("");
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-200 ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-white  h-18 sm:h-14   z-50"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full px-4  "
        >
          {/* Input + Search Button */}
          <div className="relative md:w-1/2 w-80 sm:w-100   ">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchBar(e.target.value)}
              value={searchBar}
              className="bg-gray-100 py-2 px-4  w-full lg:w-full  outline-0 focus:border-amber-400"
            />
            {/* Submit button inside input box, right side */}
            <button
              type="submit"
              className="absolute right-0 top-1/2 sm:right-0  lg:right-0 md:right-0 -translate-y-1/2 bg-amber-700 h-10 w-10 flex items-center justify-center rounded-sm"
            >
              <HiMagnifyingGlass
                size={20}
                className="text-white hover:text-black"
              />
            </button>
          </div>

          {/* Close Button (top-right corner) */}
          <button
            type="button"
            className="absolute top-1 right-0 md:top-1 md:right-40 cursor-pointer sm:right-20   "
            onClick={handleSearchToggle}
          >
            <HiMiniXMark size={35} className="text-gray-500 hover:text-black" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle} className="cursor-pointer">
          <HiMagnifyingGlass size={25} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

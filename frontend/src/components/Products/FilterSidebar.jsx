import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams,setSearchParams] = useSearchParams();
const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen"];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
  ];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    });

    setPriceRange([0, Number(params.maxPrice) || 100]);
  }, [searchParams]);

const handleFilterChange = (e) => {
  const { name, value, checked, type } = e.target;

  console.log("INPUT CHANGE 👉", { name, value, checked, type });

  let newFilters = { ...filters };

  if (type === "checkbox") {
    if (checked) {
      newFilters[name] = [...newFilters[name], value];
    } else {
      newFilters[name] = newFilters[name].filter((i) => i !== value);
    }
  } else {
    newFilters[name] = value;
  }

  console.log("UPDATED FILTERS ✅", newFilters);

  setFilters(newFilters);
  updateURLParams(newFilters);
};

const updateURLParams = (newFilters) => {
  const params = new URLSearchParams();

  Object.keys(newFilters).forEach((key) => {
    const value = newFilters[key];

    if (Array.isArray(value) && value.length > 0) {
      params.set(key, value.join(","));
    } else if (value !== "" && value !== null && value !== undefined) {
      params.set(key, value);
    }
  });

  setSearchParams(params);
  navigate(`?${params.toString()}`);
};


const handlePriceChange = (e) => {
  const newPrice = Number(e.target.value);

  const newFilters = {
    ...filters,
    minPrice: 0,
    maxPrice: newPrice,
  };

  setPriceRange([0, newPrice]);
  setFilters(newFilters);
  updateURLParams(newFilters);
};


  return (
    <div className="p-4">
      <h3 className="text-xl font-medium mb-4">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category }
              className="mr-2"
            />
            {category}
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2"
            />
            {gender}
          </div>
        ))}
      </div>

      {/* Color */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setFilters((p) => ({ ...p, color }))}
              className={`w-8 h-8 rounded-full border hover:scale-105 ${
                filters.color === color ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2"
            />
            {size}
          </div>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2"
            />
            {material}
          </div>
        ))}
      </div>

      {/* Brand */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2"
            />
            {brand}
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Price Range</label>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

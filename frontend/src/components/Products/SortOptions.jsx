import React from 'react'
import { useSearchParams } from 'react-router-dom'

const  SortOptions = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const handleSortChange = (e) =>{
    const sortby = e.target.value;
    searchParams.set("sortBy",sortby)
    setSearchParams(searchParams);
  }
  return (
    <div className='flex items-center justify-end mb-4'>
      <select onChange={handleSortChange} value={searchParams.get("sortBy") || ""} name="" id="sort" className='border p-2 rounded-md focus:outline-none'>
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchCart from "./SearchCart";
import ProductCard from "./ProductCart";

const SearchInput = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  // console.log(filteredData)

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  



  const searchData = (e) => {
    if (e.target.value.trim() === '') {
      setFilteredData([]); 
    } 
else{
    const filterData = products.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredData(filterData);
  }
  };

  
  const borderedDivStyle = {
    maxHeight: "270px",
    overflowY: "scroll",
    border: "1px solid #red-800",
    display: filteredData.length === 0 ? "none" : "block" ,
   
  };


  return (
    <>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative w-3/4 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          
        </div>
        <div className=" ">
          <input
            type="text"
            name="search"
            placeholder="Axtar..."
            onChange={searchData}
            className='   placeholder:text-base border-2 border-red-600 text-gray-900 text-sm rounded-full  focus:border-red-600  lg:w-[260px] w-full h-10  p-2.5 '
          />
         
                <div style={borderedDivStyle}  className="lg:w-[260px] bg-white border-red-800 border z-[99999] absolute  gap-[50px]">
            {filteredData.map((item) => (
              <SearchCart
                productName={item.name}
                imageUrl={item.imageurl}
                id={item.id}
                price={item.price}
                oldprice={item.oldprice}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
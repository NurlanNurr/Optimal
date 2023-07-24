import React from "react";
import { Link } from "react-router-dom";
const SearchCart = ({ productName, imageUrl, id , price , oldprice}) => {
  return (
    // <div className="bg-[#4fff] w-[800px] h-[500px] flex  mb-[20px] flex-col  z-[9999] absolute ">
    //     <img
    //         className="w-[184px] h-[184px] object-cover border-none"
    //         src={`http://localhost:5000/${imageUrl}`}
    //         alt="noimg"
    //     />
    //     <h3 style={{ color: "#000" }}>{productName}</h3>
    // </div>
    <div className="border-t-[1px] pb-[5px]">
      <div className=" flex items-center p-[10px]">
        <img
          className="w-[50%] cursor-pointer object-cover"
          src={`http://localhost:5000/${imageUrl}`}
          alt="noimg"
        />
        <div className="w-[50%] text-left flex justify-center items-center flex-col">
          <Link to={`/details/${id}`}>
            <p>{productName}</p>
          </Link>
          <div>
            <p className="text-red-600">{price}Azn</p>
          </div>
          <div>
            <p className="line-through">{oldprice}Azn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCart;
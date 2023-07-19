import React from "react";

const SearchCart = ({ productName, imageUrl }) => {
    return (
        // <div className="bg-[#4fff] w-[800px] h-[500px] flex  mb-[20px] flex-col  z-[9999] absolute ">
        //     <img
        //         className="w-[184px] h-[184px] object-cover border-none"
        //         src={`http://localhost:5000/${imageUrl}`}
        //         alt="noimg"
        //     />
        //     <h3 style={{ color: "#000" }}>{productName}</h3>
        // </div>

        <div > 
        <div className="flex flex-col items-center h-[298px] gap-8">
          <div className="w-[184px] h-[184px] flex items-center justify-center relative">
            <img
              className="w-[184px] h-[184px] object-cover"
              src={`http://localhost:5000/${imageUrl}`}
              alt="noimg"
            />
          </div>
          <div className="products_text flex justify-center items-center flex-col">
            <p>{productName}</p>
          </div>
        </div>
      </div>
    );
};

export default SearchCart;
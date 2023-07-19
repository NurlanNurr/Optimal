import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Shoptable = ({
  id,
  productName,
  price,
  description,
  imageUrl,
  onClick,
  quantity,
  oldprice,
  showAddButton = true,
  showDeleteButton = false,
  onAddQty,
  onDeleteQty,
  addQtyBtn = false,
  delQtyBtn = false,
}) => {
  const sumprice = price * quantity

  return (
    <div className="lg:w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] border-t w-full">
      <ul className="flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm">
        <li className="flex items-center gap-2">
          <Link to="/home" className="hover:text-[#f15803]">
            Ana səhifə
          </Link>
          <AiFillCaretRight />
        </li>
        <li>
          <Link to="/" className="text-[#f15803]">
            Shop
          </Link>
        </li>
      </ul>
      <table id="customers" className="border-[1px] w-full lg:block hidden ">
        <tr className="border-[1px]">
          <th className="border-[1px]">
            <img className="w-[200px]" src={`http://localhost:5000/${imageUrl}`} alt="" />
          </th>
          <th className="border-[1px]">
            <p>{productName}</p>
          </th>
          <th className="border-[1px]">
            <p>{productName}</p>
          </th>
          <th className=" border-[1px] justify-center items-center p-[15px]">
            <div className="flex gap-3">

              {delQtyBtn && <button onClick={onDeleteQty}>-</button>}
              <span className="border-[1px]">{quantity}</span>
              {addQtyBtn && <button onClick={onAddQty}>+</button>}

              {showDeleteButton && <button onClick={onClick}>X</button>}
            </div>
          </th>
          <th className="border-[1px] p-[15px]">
            <p>{price}</p>
          </th>
          <th className="p-[15px]">
            <p>{sumprice.toFixed(2)}</p>
          </th>
        </tr>
      </table>

      <table id="customers" className="border-[1px] w-full lg:hidden block ">
        <tr className="border-[1px]">
          <th className="border-[1px]">
            <img className="w-[200px]" src={`http://localhost:5000/${imageUrl}`} alt="" />
          </th>
        </tr>
        <tr>

          <th className="border-[1px]">
            <p>{productName}</p>
          </th>
        </tr>
        <tr>

          <th className="border-[1px]">
            <p>{productName}</p>
          </th>
        </tr>
        <tr>
          <th className=" border-[1px] justify-center items-center p-[15px]">
            <div className="flex gap-3  justify-center">
              {delQtyBtn && <button onClick={onDeleteQty}>-</button>}
              <span className="border-[1px]">{quantity}</span>
              {addQtyBtn && <button onClick={onAddQty}>+</button>}

              {showDeleteButton && <button onClick={onClick}>X</button>}
            </div>
          </th>
        </tr>
        <tr>
          <th className="border-[1px] p-[15px]">
            <p>{price}</p>
          </th>
        </tr>
        <tr>
          <th className="p-[15px]">
            <p>{sumprice.toFixed(2)}</p>
          </th>
        </tr>

      </table>




    </div>

  );
};

export default Shoptable;
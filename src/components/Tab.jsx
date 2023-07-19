import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCart";
import { tabOptions } from "../assets/data/Data.jsx";
import axios from "axios";
import { useEffect } from "react";
import { addToCart, deleteQty, addQty } from "../redux/actions/cart.action.js";
import Pagecontainer from "./Pagecontainer/Pageontainer";


export default function Home() {

  const [activeTab, setActiveTab] = useState(tabOptions[0]);

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const result = products.filter((curdata) => {
    return curdata.exttype === 'discount'
  })
  const result2 = products.filter((curdata) => {
    return curdata.exttype === 'new'
  })
  const result3 = products.filter((curdata) => {
    return curdata.exttype === 'view'
  })
  const result4 = products.filter((curdata) => {
    return curdata.exttype === 'liked'
  })

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center text-gray-400  ">
      <div className="max-w-6xl w-full min-h-screen p-12     ">
        {/* ===== Tabs Header ======  */}
        <div className="flex lg:flex-row  justify-around mt-8 px-20 gap-5 p-1 border border-gray-400  flex-col">
          {tabOptions?.length > 0 &&
            tabOptions.map((tab) => (
              // ===== Tabs Option ======

             
              <div
                className={
                  "py-1 px-4 w-full rounded-full text-center  cursor-pointer hover:bg-red-500 hover:text-white  transition-all duration-300 " +
                  (activeTab === tab && " border border-dashed border-red-600 text-gray-600")
                }
                onClick={() => setActiveTab(tab)}
              >
                <p className="font-medium text-lg">{tab}</p>
              </div>
            
            ))}
        </div>

        {/* ====== Tab Body ====== */}
        <div className="my-4 p-6 flex justify-center">



          {/* ======== discount TAB ======== */}
          {activeTab === "Endirimdə Olanlar" && (
            
            <div className="lg:w-[1170px] flex flex-wrap lg:gap-x-4 lg:gap-y-6 my-0 mx-auto w-full justify-center pr-[15px] pl-[15px]  ">
              {result?.length > 0 &&
                result.map((product) => (
                  

                  <ProductCard
                    id={product.id}
                    productName={product.name}
                    price={product.price}
                    oldprice={product.oldprice}
                    imageUrl={product.imageurl}
                    quantity={product.quantity}
                    key={product.id}
                    onDeleteQty={() => {
                      dispatch(deleteQty(product.id));
                    }}
                    onAddQty={() => {
                      dispatch(addQty(product.id));
                    }}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product.id,
                          productName: product.name,
                          price: product.price,
                          oldprice: product.oldprice,
                          imageUrl: product.imageurl,
                        })
                      );
                    }}
                  />
                ))}
            </div>
          )}



          {/* ======== newwwproduct TAB ======== */}
          {activeTab === "Yeni Məhsullar" && (
            <div className="lg:w-[1170px] flex flex-wrap lg:gap-x-4 lg:gap-y-6 my-0 mx-auto w-full justify-center pr-[15px] pl-[15px]  ">
              {result2?.length > 0 &&
                result2.map((product) => (
                  <ProductCard
                    id={product.id}
                    productName={product.name}
                    price={product.price}
                    oldprice={product.oldprice}
                    imageUrl={product.imageurl}
                    quantity={product.quantity}
                    key={product.id}
                    onDeleteQty={() => {
                      dispatch(deleteQty(product.id));
                    }}
                    onAddQty={() => {
                      dispatch(addQty(product.id));
                    }}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product.id,
                          productName: product.name,
                          price: product.price,
                          oldprice: product.oldprice,
                          imageUrl: product.imageurl,
                        })
                      );
                    }}
                  />
                ))}
            </div>
          )}



          {/* ======== mostviewed TAB ======== */}
          {activeTab === "Ən Çox Baxılanlar" && (
            <div className="lg:w-[1170px] flex flex-wrap lg:gap-x-4 lg:gap-y-6 my-0 mx-auto w-full justify-center pr-[15px] pl-[15px]  ">
              {result3?.length > 0 &&
                result3.map((product) => (
                  <ProductCard
                    id={product.id}
                    productName={product.name}
                    price={product.price}
                    oldprice={product.oldprice}
                    imageUrl={product.imageurl}
                    quantity={product.quantity}
                    key={product.id}
                    onDeleteQty={() => {
                      dispatch(deleteQty(product.id));
                    }}
                    onAddQty={() => {
                      dispatch(addQty(product.id));
                    }}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product.id,
                          productName: product.name,
                          price: product.price,
                          oldprice: product.oldprice,
                          imageUrl: product.imageurl,
                        })
                      );
                    }}
                  />
                ))}
            </div>
          )}




          {/* ======== mostliked TAB ======== */}
          {activeTab === "Ən Çox Bəyənilənlər" && (
            <div className="lg:w-[1170px] flex flex-wrap lg:gap-x-4 lg:gap-y-6 my-0 mx-auto w-full justify-center pr-[15px] pl-[15px]  ">
              {result4?.length > 0 &&
                result4.map((product) => (
                  <ProductCard
                    id={product.id}
                    productName={product.name}
                    price={product.price}
                    oldprice={product.oldprice}
                    imageUrl={product.imageurl}
                    quantity={product.quantity}
                    key={product.id}
                    onDeleteQty={() => {
                      dispatch(deleteQty(product.id));
                    }}
                    onAddQty={() => {
                      dispatch(addQty(product.id));
                    }}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product.id,
                          productName: product.name,
                          price: product.price,
                          oldprice: product.oldprice,
                          imageUrl: product.imageurl,
                        })
                      );
                    }}
                  />
                ))}
            </div>
          )}





        </div>
      </div>
    </div>
  );
}


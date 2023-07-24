import { deleteCart, deleteQty, addQty } from "../redux/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Shoptable from "../components/Shoptable";

const Səbət = ({}) => {
  const shop = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="home">
        {shop.length == 0 ? (
          <div className="lg:w-[1170px]  w-full  my-0 mx-auto  pr-[15px] pl-[15px] flex justify-between items-end ">
            <div>
              <h1>Səbət</h1>

              <h1>Sizin səbətiniz boşdur!</h1>
            </div>
            <div>
              <button className="border-[1px] p-[6px] bg-[#f15803] text-white mt-[-16px] ">
                <Link to="/">Davam et</Link>
              </button>
            </div>
          </div>
        ) : (
          shop.map((item) => {
            return (
              <Shoptable
                key={item.id}
                id={item.id}
                productName={item.productName}
                price={item.price}
                brend={item.brend}
                oldprice={item.oldprice}
                description={item.description}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
                onClick={() => {
                  dispatch(deleteCart(item.id));
                }}
                onDeleteQty={() => {
                  dispatch(deleteQty(item.id));
                }}
                onAddQty={() => {
                  dispatch(addQty(item.id));
                }}
                showAddButton={false}
                showDeleteButton={true}
                addQtyBtn={true}
                delQtyBtn={true}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Səbət;
import React from "react";
import { useDispatch, useSelector} from "react-redux";
import ProductCard from "../components/ProductCart" ;
import { deleteCart } from "../redux/actions/cart.action.js"

const Cart = () => {
  const sebet = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch()
  return (
    <div className="home">
      {sebet.length == 0 ? (
        <h1>Your have no products</h1>
      ) : (
        sebet.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.productName}
              price={item.price}
              description={item.description}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
              onClick = {() => {
                dispatch(deleteCart(item.id))
              }}
              showAddButton={false}
              showDeleteButton={true}
            />
          );
        })
      )}
    </div>
  );
};

export default Cart;
import React from 'react'
import { deleteCart, deleteQty, addQty } from "../redux/actions/cart.action";
import { useDispatch, useSelector} from "react-redux";
import Shoptable from '../components/Shoptable';

const Səbət = () => {
  const səbət = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch()
  
  return (
    <>
    <div className="home">
      {səbət.length == 0 ? (
        <h1>Your have no products</h1>
      ) : (
        səbət.map((item) => {
          return (
            <Shoptable
              key={item.id}
              id={item.id}
              productName={item.productName}
              price={item.price}
              oldprice={item.oldprice}
              description={item.description}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
              onClick = {() => {
                dispatch(deleteCart(item.id))
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
  )
}

export default Səbət
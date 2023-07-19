import React from 'react'
import Pagecontainer from '../components/Pagecontainer/Pageontainer';
import { useState } from 'react'
import { alldata } from '../assets/data/Data'
import ProductCard from "../components/ProductCart";
import { addToCart } from "../redux/actions/cart.action.js"
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useEffect } from "react";

const Iron = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  // const [paltdata, setpaltdata] = useState(alldata);
  // const filtproduct = (filtrss) =>{
  const result = products.filter((curdata) => {
    return curdata.type === 'ütü'
  })

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  // setpaltdata(result)
  // }


  return (
    <>
      <Pagecontainer>
        <div className='flex flex-wrap gap-[30px] justify-center'>
        {
          result.map((item) => (
            // <Sliderforr/>
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.name}
              price={item.price}
              oldprice={item.oldprice}
              quantity={item.quantity}
              imageUrl={item.imageurl}
              onClick={() => {
                dispatch(
                  addToCart({
                    id: item.id,
                    productName: item.name,
                    price: item.price,
                    oldprice: item.oldprice,
                    imageUrl: item.imageurl,
                  })
                );
              }}
            />
          ))

        }
        </div>
      </Pagecontainer>
    </>
  )
}

export default Iron
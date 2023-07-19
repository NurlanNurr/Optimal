import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCart";
import { addToCart } from '../redux/actions/cart.action.js';
import { useDispatch } from "react-redux";
import axios from "axios";
import Pagecontainer from "../components/Pagecontainer/Pageontainer";

const Sobalar = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [price, setPrice] = useState(999);
  const [colorFilter, setColorFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredData(res.data.filter((curData) => curData.type === "soba"));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let filteredResult = products.filter(
      (product) => product.price >= 199 && product.price <= price
    );

    if (colorFilter) {
      filteredResult = filteredResult.filter(
        (product) => product.color === colorFilter
      );
    }

    if (brandFilter) {
      filteredResult = filteredResult.filter(
        (product) =>
          product.brend &&
          product.brend.toLowerCase() === brandFilter.toLowerCase()
      );
    }

    setFilteredData(filteredResult.filter((curData) => curData.type === "soba"));
  }, [price, products, colorFilter, brandFilter]);

  const handlePriceInput = (e) => {
    setPrice(e.target.value);
  };

  const filterByColor = (color) => {
    setColorFilter(color);
  };

  const filterByBrand = (brend) => {
    setBrandFilter(brend);
  };

  const showAllProducts = () => {
    setColorFilter(null);
    setBrandFilter(null);
  };

  return (
    <>
      <Pagecontainer>


        <div className="w-full flex">
          <div className="sort_parameters w-1/4 flex flex-col gap-[20px] ">

          <aside>
  <div>
    <ul>
      <li class="text-[#222222] text-lg">QİYMƏT</li>
    </ul>
    <div class="filter w-3/4 price flex flex-col">
      <input
        type="range"
        min="199"
        max="999"
        value={price}
        onInput={handlePriceInput}
      
      />
      <div class="flex justify-between">
        <h1>199</h1>
        <h1> {price}</h1>
      </div>
    </div>
  </div>
</aside>

            <div className=" flex flex-col items-start">
              <p className="text-[#222222] text-lg">RƏNG</p>
              <button className="text-[#4f4f4f] text-base" onClick={() => filterByColor("ağ")}>-Ağ</button>
              <button className="text-[#4f4f4f] text-base" onClick={() => filterByColor("qara")}>-Qara</button>
              <button className="text-[#4f4f4f] text-base" onClick={() => filterByColor("rəngli")}>-Rəngli</button>
              <button className="text-[#4f4f4f] text-base" onClick={showAllProducts}>-Bütün məhsullar</button>
            </div>
            <div className="flex flex-col items-start ">
              <p className="text-[#222222] text-lg">BREND</p>
              <button className="text-[#4f4f4f] text-base" onClick={() => filterByBrand("BOSCH")}>-Bosch</button>
              <button className="text-[#4f4f4f] text-base" onClick={() => filterByBrand("TAUBLE")}>-Tauble</button>
              <button className="text-[#4f4f4f] text-base" onClick={() => filterByBrand("LG")}>-LG</button>
              <button className="text-[#4f4f4f] text-base" onClick={() => filterByBrand("GASTRO")}>-Gastro</button>
              <button className="text-[#4f4f4f] text-base" onClick={showAllProducts}>-Bütün məhsullar</button>
            </div>
          </div>
          <div className="w-3/4 flex flex-wrap gap-[50px]">
            {filteredData.map((item) => (
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
            ))}
          </div>
        </div>
      </Pagecontainer>
    </>
  );
};

export default Sobalar;





import React from 'react'
import Swal from 'sweetalert2'
import "../assets/styles/components/productcar.scss"
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const ProductCard = ({
  id,
  productName,
  price,
  imageUrl,
  onClick,
  quantity,
  oldprice,
  showAddButton = true,
  showDeleteButton = false, }) => {

    const [isButtonClicked, setButtonClicked] = useState(false);

    const Alert = () => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Səbətə əlavə olundu",
        showConfirmButton: false,
        timer: 1500,
      });
    };
  
    const handleButtonClick = () => {
      setButtonClicked(true);
      onClick();
      Alert();
    };

  return (


    <div className='sliderproduct_main'>

      <div className='sliderproduct_main2 flex flex-col items-center w-[204px] h-[298px] gap-8 ' >

        <div className=" sliderproduct_img w-[184px] h-[184px] flex items-center justify-center relative">
          <img className="w-[184px] h-[184px] object-cover" src={`http://localhost:5000/${imageUrl}`} alt="noimg" />


          <div className="overlay_for_img w-[184px] h-[184px]  absolute hidden ">
            {/* <div className='overlay_top_bottom h-[100%]  '> */}
            <div className=' overlay_top h-1/2 bg-gray-600/[0.5] '></div>
            <div className='overlay_bottom h-1/2 bg-black flex items-center justify-center flex-col  '>
              <Link to={`/details/${id}`}>

                <p className='text-white'>{productName}</p>
              </Link>
              {quantity && <p>Quantity {quantity}</p>}
              {/* <span className='text-white'>{quantity}</span> */}
              <div className="flex gap-1 items-center">
                <span className="text-lime-500 text-xs">{price}₼</span>
                <span className="line-through text-xs text-white">{oldprice}₼</span>
              </div>
            </div>
            {/* </div> */}
          </div>


        </div>

        <div className=' products_text flex justify-center items-center flex-col'>
          <p>{productName}</p>
          <span>{quantity}</span>
          <div className="flex gap-3 items-center">
            <span className="text-red-600 text-lg">{price}₼</span>
            <span className="line-through text-black">{oldprice}₼</span>
          </div>
        </div>

        <div className="overlay_button hidden ">
          <button onClick={handleButtonClick} className='px-4 py-1 bg-lime-500 rounded-full text-white'>Səbətə əlavə et</button>
        </div>

      </div>
    </div>

  )
}

export default ProductCard
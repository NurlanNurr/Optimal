import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from "react-icons/ai";
const Əlaqə = () => {
  return (
    <>
      <div className="lg:w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] border-t w-full">
        <ul className="flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm">
          <li className="flex items-center gap-2">
            <Link to="/home" className="hover:text-[#f15803]">
              Ana səhifə
            </Link>
            <AiFillCaretRight />
          </li>
          <li>
            <Link to="/" className="text-red-600">
              Əlaqə
            </Link>
          </li>
        </ul>
      
        <h3 className="text-sm text-[#6b6a81] uppercase mt-[20px]">ƏLAQƏ MƏLUMATLARI</h3>
        <div className="border-[#ddd] mb-[20px] border-[1px] rounder mt-[20px] ">
          <div className="p-[15px] text-sm lg:flex lg:justify-around items-center flex flex-wrap ">
            <div className="lg:w-[25%] w-[100%] justify-center flex ">
            </div>
            <div>
              <strong>mgstore.az</strong>
              <br />
              <address >
              Xətai rayonu,Afiyəddin Cəlilov 27A, Park Azure 2-ci</address>
            </div>
            <div>
              <strong>Telefon</strong>
              <br />
              *4848
            </div>
            <div>
              <strong>İş vaxtı</strong>
              <br />
              09:00 - 18:00
            </div>
          </div>
        </div>
        <div>
          <Form />
        </div>
        <div className="border-[1px] mt-[50px] mb-[40px]">
          {/* <Swiperss /> */}
        </div>

      </div></>
  )
}

export default Əlaqə
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import "../assets/styles/components/productcar.scss"

const Footer = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0) {
      setEmail("")
      setNotification(false);
    } else if (email.length == 0) {
      setNotification(true)
    }
  };



  return (
    <>
      <div className="py-6 px-0  bg-[#272727] text-gray-500 mt-8 font-nunito">
        <div className="lg:w-[1170px] w-full my-0 mx-auto  pr-[15px] pl-[15px]">


          <div className="lg:flex lg:justify-evenly flex flex-wrap  ">
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] ">
              <div className="mt-5 min-h-10 h-[41px]">
                <h3 className="uppercase text-sm inline text-gray-400 relative font-bold">
                  Şəxsi Kabinet
                </h3>
              </div>
              <div className="footer-content">
                <ul className="gap-y-1">
                  <li className="leading-3 text-xs  flex items-center h-[30px] w-[105px]  hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803] "
                    >
                      Sifarişlərim
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      Sifariş tarixçəsi
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      İstək siyahısı
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    "ELIT EO" MMC
                  </h3>
                </div>
                <div className="footer-content">
                  <ul>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"

                      >
                        Servis Mərkəzləri
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        İstifadə şərtləri
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    Müştəri üçün
                  </h3>
                </div>
                <div className="footer-content">
                  <ul>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803] w-[85px] "
                      >
                        Sifarişlərim
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Korporativ satış
                      </Link>
                    </li>

                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Məxfilik siyasəti
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    Məlumat
                  </h3>
                </div>
                <div className="footer-content ">
                  <ul>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/kampaniyalar"
                        className="text-[#969696] text-xs hover:text-[#f15803]">
                        Kampaniyalar
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Brendlər
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/filiallar"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Filiallar
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[80px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Vakansiyalar
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[100%]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    Əlaqə
                  </h3>
                </div>
                <div className="footer-content">
                  <ul>
                    <li className="leading-3 text-xs w-[390px] h-[30px]">
                      <span className="mr-[30px] text-[#969696]">Ünvan:</span>
                      <Link to="/" className="text-[#969696] text-xs">
                        Xətai rayonu,Afiyəddin Cəlilov 27A, Park Azure 2-ci <br /> mərtəbə
                      </Link>
                    </li>

                    <li className="leading-3 text-xs  h-[30px]">
                      <span className="mr-[30px] text-[#969696]">Email</span>
                      <Link to="/" className="text-[#969696] text-xs">
                        info@elitoptimal.az
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="input">
                  <h3 className="uppercase text-sm inline text-[#c5c5c5] relative font-bold">
                    BİZİ İZLƏYİN
                  </h3>
                  <div className="input mt-[6px]">
                    <form onSubmit={handleSubmit} className="flex flex-col  ">
                      <div className="flex">
                        <input
                          type="email"
                          value={email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="h-[35px] border-[1px] rounded-l-full focus:outline-none  p-[10px]"
                        />
                        <button type="submit"
                          className="bg-red-600 ] whitespace-nowrap pr-[10px] rounded-r-full  pl-[10px] text-[#fff] text-sm h-[35px]" >
                          Abunə olun
                        </button >
                      </div>
                      <div className="mt-4 ml-2">
                        {notification && email.length == 0 ?
                          <label className="text-red-600 text-md">Email adresi daxil et!</label> : ""}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="w-full flex justify-center">
            <div className=" gap-[10px] flex flex-col items-center pt-8">
              <p className="text-[#969696] ">Vergi ödəyicisinin adı: “ELIT EO” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏT</p>

              <p className="text-[#969696]">Dövlət qeydiyyatı № (VÖEN): 1406293461</p>
              <p className="text-[#969696]">Vergi ödəyicisinin ünvanı: Az1078, Bakı şəh., Nəsimi ray., akad. Həsən Əliyev, ev 4/189</p>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-[#272727]  lg:block flex ">
        <div className="w-[1170px] my-0 mx-auto pt-[20px] pr-[15px] pb-[20px] pl-[15px] border-t-[1px]  border-[#cccccc] border-b-[1px]">
          <div className=" iconss lg:flex lg:justify-between flex justify-evenly  ">
            <div className="icon">
              <div className="lg:flex-row flex lg:items-center flex-col gap-[8px] ">
                <h3 className="text-[#bbbb] text-lg lg:block hidden">Biz Sosial Şəbəkələrdə</h3>
                <ul className="flex justify-center items-center ml-[15px] gap-4  text-4xl">
                  <li className="">
                    <a href=""><FaFacebookSquare className="bg-white  text-blue-900  rounded-full" /></a>
                  </li>
                  <li>
                    <a href=""><FaInstagramSquare className="bg-white text-[#C13584] rounded-full" /></a>
                  </li>
                  <li>
                    <a href=""><FaYoutube className="bg-white text-[red] rounded-full" /></a>
                  </li>
                  <li>
                    <a href=""><FaWhatsappSquare className="bg-white text-[green] rounded-full" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="icon ">
              <div className="flex items-center gap-6 cursor-pointer">

                <img src={require('../assets/images/image/birkarts.png')} className="lg:max-w-[64px] max-w-[50px] rounded-md" alt="" />
                <img src={require('../assets/images/image/JCB.png')} className="lg:max-w-[64px] max-w-[50px] rounded-md" alt="" />
                <img src={require('../assets/images/image/mastercard_logo_5 (1).gif')} className="lg:max-w-[64px] max-w-[50px] rounded-md" alt="" />
                <img src={require('../assets/images/image/tamkart1.png')} className="lg:max-w-[64px] max-w-[50px] rounded-md" alt="" />
                <img src={require('../assets/images/image/visa_classic_chip.gif')} className="lg:max-w-[64px] max-w-[50px] rounded-md" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
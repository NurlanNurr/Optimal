import React from 'react'
import { Link } from "react-router-dom"
import Pagecontainer from './Pagecontainer/Pageontainer'
import "../assets/styles/components/BurgerMenu.css"
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import SearchInput from './SearchInput';
import BurgerMenu from './BurgerMenu';
import { useTranslation } from "react-i18next";


const Header = () => {
  const cart = useSelector(state => state.cartData.cart)

  const sumAllProducts = cart.map((item) => {
    return item.quantity * item.price;
  });
  const sumPrice = sumAllProducts.reduce((prev, current) => prev + current, 0);
  const allQuantity = cart.map((item) => {
    return item.quantity;
  });
  const sumQuantity = allQuantity.reduce((prev, current) => prev + current, 0);




  const { t, i18n } = useTranslation();
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };


  return (
    <>

      <nav className='block'>
        <div className="nav_top items-center  lg:bg-red-600 hidden lg:block">
          <Pagecontainer>
            <div className=" flex items-center h-12 justify-between ">
              <div className='nav_top_left  '>
                <ul className='flex gap-x-7 text-white'>
                  <li><Link to="/kampaniyalar" className='hover:text-[#dadada] text-[16px]'>{t("Campaigns")}</Link></li>
                  <li><Link to="/brendlər" className='hover:text-[#dadada] text-[16px]'>{t("Brands")}</Link></li>
                  <li><Link to="/filiallar" className='hover:text-[#dadada] text-[16px]'>{t("Branches")}</Link></li>
                  <li><Link to="/əlaqə" className='hover:text-[#dadada] text-[16px]'>{t("Connection")}</Link></li>
                </ul>
              </div>
              <div className="nav_top_right flex gap-x-7 text-white">
                <div class="dropdown">
                  <button class="dropbtn" className="py-0 px-3.5 h-5 text-sm  hover:text-[#dadada] text-[16px]">
                    {t("Language")}
                    <i className="fa fa-angle-down"></i>
                  </button>
                  <ul class="dropdown-content">
                    <li>
                      <button
                        onClick={() => clickHandle("aze")}
                        className="h-[30px]"
                      >
                        Azərbaycan
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => clickHandle("en")}
                        className="h-[30px]"
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </div>
                <Link to="/qeydiyyat" className='hover:text-[#dadada] text-[16px]' >{t("Registration")}</Link>
                <Link to="/Hesabim" className='hover:text-[#dadada] text-[16px]' >{t("My account")}</Link>

              </div>
            </div>

          </Pagecontainer>
        </div>

        <div className='nav_bottom'>
          <Pagecontainer >
            <div className='lg:flex lg:justify-between items-center flex juystify-evenly w-full'>
              <div className="nav_bottom_left flex items-center gap-x-14">
                <Link to="/">
                  <div className="logo lg:w-64 h-28 flex items-center ">
                    <img src={require('../assets/images/image/elit-optimal-logo-big.jpg')} alt="" />
                  </div>
                </Link>
                <div className=" relative input  lg:block hidden">
                  <SearchInput />
                  <div className='absolute top-1/2  transform -translate-y-1/2 right-4' ><AiOutlineSearch size="20px" color='rgb(220 38 38)' /></div>
                </div>
                <div className="hidden lg:block">
                  <div className="ml-[50px]">
                    <a href="tel:0121313" className="text-sm cursor-pointer">
                      <div className="flex justify-center gap-[16px] items-center">
                        <h3 className="font-black text-left text-[14px] text-red-600 font-['Rubik'] ">Çağrı <br /> mərkəzi</h3>
                        <h1 className="font-black text-left text-[26px] text-red-600 font-['Rubik'] ">
                          *4343
                        </h1>
                      </div>
                    </a>
                    <p className="text-[12px] ml-[1em] w-[180px]  items-start justify-center flex flex-col">
                       <span className='text-[#636363] text-[12px] ml-[20px]'>Həftəiçi 09:00 - 20:00</span>         
                      <span className='text-[#636363] text-[12px] ml-[20px]'>Həftəsonu 10:00 - 18:00</span>
                    </p>
                  </div>
                </div>

              </div>
              <div className="nav_bottom_right flex gap-x-3  items-center">
                <div className='relative w-10 h-10  '>
                  <div className="  like rounded-full w-10 h-10 bg-red-600 flex items-center justify-center "><AiOutlineHeart size="20px" color='white' /></div>
                  <div className="like_num rounded-full w-5 h-5 bg-red-600 flex items-center justify-center border-2 border-white absolute bottom-6 left-6 text-white">1</div>
                </div>

                <div className=' card_num flex gap-x-3 items-center'>
                  <Link to="/səbət">
                    <div className=" rounded-full w-10 h-10 bg-red-600 flex items-center justify-center "><BsFillCartCheckFill size="20px" color='white' /></div>
                  </Link>
                  <span className='lg:block hidden'>{sumQuantity} {t("Piece")} - {sumPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div className=" relative input lg:hidden w-full justify-end flex pr-8 ">

              <SearchInput />
              <div className='absolute top-1/2  transform -translate-y-1/2 right-4 lg:block hidden' ><AiOutlineSearch size="20px" color='rgb(220 38 38)' /></div>
            </div>


          </Pagecontainer>
        </div>



        <div className="categories h-12 flex items-center hidden lg:block">
          <Pagecontainer>
            <ul className='flex justify-between font-medium cursor-pointer '>
              <li className='list_meis hover:text-red-600 ease-in-out duration-200 relative '>
                {t("Household appliances")}
                <div className=' list_meis_child w-96 h-96 hidden absolute rounded  z-10 pl-[10px] pt-[10px]'>
                  <div className='w-full flex flex-col items-center justify-center'>
                    <div><img src={require('../assets/images/icon/paltlogo.png')} alt="" /></div>
                    <p className="text-[#4f4f4f] text-base underline-offset-1 underline" >Böyük məişət texnikası</p>
                  </div>
                  <div className='flex flex-col gap-[8px]'>
                    <p className="text-[#4f4f4f] ml-4 mt-3 text-sm font-normal hover:text-red-600 ease-in-out duration-200"><Link to="/paltaryuyanlarr">Paltaryuyanlar</Link></p>
                    <p className="text-[#4f4f4f] ml-4  text-sm font-normal hover:text-red-600 ease-in-out duration-200"><Link to="/sobalar">Sobalar</Link></p>
                    <p className="text-[#4f4f4f] ml-4  text-sm font-normal hover:text-red-600 ease-in-out duration-200"><Link to="/utuler">Ütülər</Link></p>
                    <p className="text-[#4f4f4f] ml-4  text-sm font-normal hover:text-red-600 ease-in-out duration-200"><Link>Qabyuyanlar</Link></p>
                    <p className="text-[#4f4f4f] ml-4  text-sm font-normal hover:text-red-600 ease-in-out duration-200"><Link>Soyuducular</Link></p>
                  </div>

                </div>
              </li>
              <li className='hover:text-red-600 ease-in-out duration-200'>
                <Link>{t("Phones and tablets")}</Link></li>
              <li className='hover:text-red-600 ease-in-out duration-200'>{t("Computer technique")}</li>
              <li className='hover:text-red-600 ease-in-out duration-200'>{t("Tv , Audio , Photo-video")} </li>
            </ul>
          </Pagecontainer>
        </div>



      </nav>

    </>
  )
}

export default Header
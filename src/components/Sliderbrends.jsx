import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Pagecontainer from './Pagecontainer/Pageontainer';
import { Autoplay } from 'swiper';



const Sliderbrends = () => {
    
  return (

    <Pagecontainer  >
    <div className=' border border-black px-8 mt-12'>
      
          <Swiper
       autoplay={true}
       modules={[Autoplay]}
         breakpoints={{
           640: {
             slidesPerView: 4,
           },
           1024: {
             slidesPerView: 6,
           },
         }}
         className="mySwiper lg:w-full "
    >
      <SwiperSlide><div className=' pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center '  ><img   src={require('../assets/images/icon/1-bosch-slideeee-178x105.png')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center'  ><img  src={require('../assets/images/icon/Carrier-logo-178x105.png')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className=' pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center' ><img  className='object cover'  src={require('../assets/images/icon/LG-3-178x105.jpg')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className=' pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center' ><img  src={require('../assets/images/icon/Philips_logo-178x105.png')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div  className=' pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center'><img   src={require('../assets/images/icon/Samsung_Orig_Wordmark_BLACK_RGB-178x105.png')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className=' pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center' ><img  src={require('../assets/images/icon/Sharp-logo-178x105.png')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className=' pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center' ><img   src={require('../assets/images/icon/Simfer-178x105.png')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className=' pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center' ><img  src={require('../assets/images/icon/huawei logo-178x105.jpg')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center' ><img   src={require('../assets/images/icon/Babyliss128045-178x105.png')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center' ><img  src={require('../assets/images/icon/Delonghi-178x105.png')} alt="" /></div></SwiperSlide>
    </Swiper>
    
    </div>
    </Pagecontainer>
  )
}

export default Sliderbrends
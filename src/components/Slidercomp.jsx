import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slidercomp = () => {
    
  return (
    <div>
          <Swiper
       modules={[Navigation, Pagination,  A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       className='w-full'
    >
      <SwiperSlide><div className='border-t  border-black'><img className='lg:h-[500px] object-cover w-full'  src={require('../assets/images/image/Screenshot 2023-06-05 122408.png')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='border-t  border-black'><img className='lg:h-[500px] object-cover' src={require('../assets/images/image/Screenshot 2023-06-05 124346.png')} alt="" /></div></SwiperSlide>
    
    </Swiper>
    </div>
  )
}

export default Slidercomp

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel({ContentData}) {
    return (
      <div className="carousel">
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
            {ContentData.map((i, index) => (
              <SwiperSlide key={index}>
                <img src={i.img} alt="" />
                <h4 className="title">{i.title}</h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
  )
}

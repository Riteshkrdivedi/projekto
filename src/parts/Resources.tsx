"use client";

import React, { createContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Resources = () => {
  return (
    <div className="w-screen text-white h-screen border bg-slate-50">
      {" "}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="w-screen h-screen bg-slate-500 text-center flex justify-center">
            screen 1
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Resources;

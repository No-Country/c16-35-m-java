import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/foto-gratis/ilustradora-adulta-que-trabaja-dispositivo-tableta_23-2149863244.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1707868800&semt=ais" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://tutordoctor.ec/wp-content/uploads/2019/03/Por-qu%C3%A9-son-tan-efectivas-las-clases-particulares.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation , Autoplay } from "swiper";

const SliderLeft = () => {
  return (
    <>
      <div className="slider_left">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Navigation , Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={require("../../assets/images/rightSliderimg1.jpg")}
              alt="imgOne"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/images/rightSliderimg2.jpg")}
              alt="imgOne"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default SliderLeft;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation ,Autoplay} from "swiper";

const SliderRight = () => {
  return (
    <>
      <div className="slider_right">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Navigation , Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={require("../../assets/images/leftSliderOne.jpg")}
              alt="imgOne"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/images/leftSliderTwo.jpg")}
              alt="imgTwo"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default SliderRight;

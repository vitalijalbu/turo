import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";


const ItemSwiper = ({ props }) => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="list-item_swiper"
      >
        <SwiperSlide>
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img src="https://via.placeholder.com/1200x800"/>
            </figure>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img src="https://via.placeholder.com/200x800"/>
            </figure>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img src="https://via.placeholder.com/500x800"/>
            </figure>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img src="https://via.placeholder.com/1200x800"/>
            </figure>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ItemSwiper;

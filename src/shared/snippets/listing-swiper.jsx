import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

const ListingSwiper = ({ media }) => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {media.map((photo, i) => (
        <SwiperSlide className="img-responsive-wrapper" key={i}>
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img src={photo.url} />
            </figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ListingSwiper;

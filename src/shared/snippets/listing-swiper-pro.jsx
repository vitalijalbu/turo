import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper";

const ListingSwiper = ({ media }) => {
  return (
    <div className="it-grid-list-wrapper it-quilted-grid">
    <div className="grid-row grid">
      <div className="col-8 col-md-8">
        <div className="it-grid-item-wrapper it-grid-item-overlay">
        <Swiper
      navigation={true}
      pagination={{
        bullets: true,
      }}
      modules={[Navigation, Pagination]} className="mySwiper">
      {Array.isArray(media) && media.length > 0 ? (
        <>
      {media.map((photo, i) => (
        <SwiperSlide className="img-responsive-wrapper" key={i}>
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img src={photo.url} />
            </figure>
          </div>
        </SwiperSlide>
      ))
      }</>) : (
        <SwiperSlide className="img-responsive-wrapper" key={1}>
        <div className="img-responsive">
        <figure className="img-wrapper">
          <img src="/img/placeholder.svg" />
        </figure>
      </div>
      </SwiperSlide>
      )}
    </Swiper>
        </div>
      </div>
      <div className="col-4 col-md-4">
        <div className="grid-row grid">
          <div className="col-12">
            <div className="it-grid-item-wrapper it-grid-item-overlay">
                <div className="img-responsive-wrapper">
                  <div className="img-responsive">
                    <div className="img-wrapper">
                      <img
                        src={media ? media[1].url : '/img/placeholder.svg'}
                        alt="descrizione immagine"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-12">
            <div className="it-grid-item-wrapper it-grid-item-overlay">
                <div className="img-responsive-wrapper">
                  <div className="img-responsive">
                    <div className="img-wrapper">
                      <img
                        src={media ? media[2].url : '/img/placeholder.svg'}
                        alt="descrizione immagine"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};
export default ListingSwiper;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper";



const TabPhotos = ({ data }) => {
  

  return (
    <div className="it-grid-list-wrapper">
    <div className="grid-row">
    {data.map((photo, i) => (
      <div className="col-6 col-lg-4" key={i}>
        <div className="it-grid-item-wrapper">
          <a href="#">
            <div className="img-responsive-wrapper">
              <div className="img-responsive">
                <div className="img-wrapper">
                  <img
                    src={photo.url}
                    alt="descrizione immagine"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
       ))}
    </div>
  </div>
  
  );
};

export default TabPhotos;

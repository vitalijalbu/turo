import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";



const TabTour = () => {
  
  return (
    <div id="block-virtualtour">
    <iframe
      src="https://my.matterport.com/show/?m=kEorcMvZfd2"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      allow="xr-spatial-tracking"
      title="Tour 360°"
    ></iframe>
    </div>
  );
};

export default TabTour;

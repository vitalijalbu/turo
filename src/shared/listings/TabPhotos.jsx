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



const TabPhotos = () => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="photo-gallery"
      >
        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>
      </Swiper>
      <div className="toolbar toolbar-bottom tabbar toolbar-thumbs">
      <div className="toolbar-inner">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="photo-gallery_thumbs"
      >
               <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>        <SwiperSlide>
        <figure className="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura."/>
</figure>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </div>
  );
};

export default TabPhotos;

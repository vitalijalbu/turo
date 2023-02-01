import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Button } from "framework7-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Services = () => {
  return (
    <section className="section-content homepage-services">
      <div className="container">
      <div className="page-title">
      <h1 className="page-title">
      
        Servi offerti</h1>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              portrait
              title="demodemo"
              primaryAction={{
                content: "Learn about getting started",
                onAction: () => {},
              }}
              description="Discover how Shopify can power up your entrepreneurial journey.">
              <img
                  alt=""
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="https://via.placeholder.com/360x270"
                />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card
              portrait
              title="demodemo"
              primaryAction={{
                content: "Learn about getting started",
                onAction: () => {},
              }}
              description="Discover how Shopify can power up your entrepreneurial journey.">
              <img
                  alt=""
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="https://via.placeholder.com/360x270"
                />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card
              portrait
              title="demodemo"
              primaryAction={{
                content: "Learn about getting started",
                onAction: () => {},
              }}
              description="Discover how Shopify can power up your entrepreneurial journey.">
              <img
                  alt=""
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="https://via.placeholder.com/360x270"
                />
            </Card>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Services;
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Entries from "@/data/entries.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Block, Button, Icon } from "framework7-react";

const SpotListings = () => {

  return (
    <section id="related-listings" className="padding-vertical">
          <div className="container">
    <div className="display-flex justify-content-space-between align-items-center">
    <div className="">
        <h1 className="page-title">In evidenza</h1>
      </div>
      <div className="">
      <Button round href="/search" force={true}>Vedi tutti <Icon f7="arrow_right"/></Button>
      </div>
    </div>
  </div>
      <div className="container">
    <Block>
      {Array.isArray(Entries.data.entries) ? (
        <Swiper navigation speed={500} slidesPerView={4} spaceBetween={20}>
          {Entries.data.entries.map((item, i) => (
            <SwiperSlide className="listing-slide">
             <ItemCard data={item}/>
             </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
    </Block>
    </div>
    </section>
  );
      
};

export default SpotListings;

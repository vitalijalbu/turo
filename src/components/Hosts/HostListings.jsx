import React, { useState, useEffect } from "react";
import { Block, BlockTitle, Preloader, Row, Col } from "framework7-react";
import ItemCard from "../Search/ItemCard";
import Entries from "@/data/entries.json";

const HostListings = () => {

  return (
    <section id="host-listings">
    <div className="container">
      {Array.isArray(Entries.data.entries) ? (
        <div className="grid">
          {Entries.data.entries.map((item, i) => (
            <Col width={50} large="50">
             <ItemCard data={item}/>
             </Col>
          ))}
        </div>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
    </div>
    </section>
  );
      
};

export default HostListings;

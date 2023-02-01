import React, { useState, useEffect } from "react";
import { Block, BlockTitle } from "framework7-react";
import ItemCard from "./ItemCard";
import Entries from "@/data/entries.json";

const RelatedListings = () => {

  return (
    <section id="related-listings">
      <div className="container">
      <BlockTitle large>Annunci simili</BlockTitle>
      {Array.isArray(Entries.data.entries) ? (
        <div className="grid">
          {Entries.data.entries.map((item, i) => (
            <div className="col col-md-4 col-lg-3">
             <ItemCard data={item}/>
             </div>
          ))}
        </div>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
    </div>
    </section>
  );
      
};

export default RelatedListings;

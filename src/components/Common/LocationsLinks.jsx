import React, { useState, useEffect } from "react";
import { Block, Button, Icon, BlockTitle, Preloader, Row, Col } from "framework7-react";
import Cities from "@/data/cities.json";



const LocationsLinks = () => {

  return (
    <section id="related-listings" className="padding-vertical">
          <div className="container">
    <div className="display-flex justify-content-space-between align-items-center">
    <div className="">
        <h1 className="page-title">Città in primo piano</h1>
      </div>
    </div>
  </div>
      <div className="container">
    
      {Array.isArray(Cities.data) ? (
        <Block>
        <Row>
           {Cities.data.map((item, i) => (
            <Col width={25}>
              <Button color="blue" href={"/search?location="+ item.slug}>{item.title}</Button>
            </Col>
            ))}
            </Row>
            </Block>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
    </div>
    </section>
  );
      
};

export default LocationsLinks;

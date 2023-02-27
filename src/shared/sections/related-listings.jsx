import React, { useState, useEffect } from "react";
import {  Row, Col, Button } from "reactstrap";
import ItemCard from "@/shared/snippets/listing-card";


const RelatedListings = ({entries}) => {

  return (
    <section id="related-listings" className="padding-vertical">
          <div className="container">
          <div className="section-title">
        <h1>Annunci simili</h1>
        <p>In base alle tue ricerche, pensiamo possano interessarti anche questi annunci</p>
    </div>
    
      {Array.isArray(entries) ? (
         <Row> 
          {entries.map((item) => (
            <Col md={6} lg={3} xs={6} key={item.id}>
             <ItemCard data={item}/>
             </Col>
          ))}
        </Row>
      ) : (
        <p>Nessun dato</p>
      )}
    </div>
    </section>
  );
      
};

export default RelatedListings;

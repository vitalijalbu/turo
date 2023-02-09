import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ItemCard from "@/shared/snippets/listing-card";
import Entries from "@/data/entries.json";

const RelatedListings = () => {

  return (
    <section id="related-listings" className="padding-vertical">
          <Container>
          <div className="section-title">
        <h1>Annunci simili</h1>
        <p>In base alle tue ricerche, pensiamo possano interessarti anche questi annunci</p>
    </div>
    <Row>
      {Array.isArray(Entries.data.entries) ? (
         <> 
          {Entries.data.entries.map((item) => (
            <Col md={6} lg={3} xs={6} key={item.id}>
             <ItemCard data={item}/>
             </Col>
          ))}
        </>
      ) : (
        <p>Nessun dato</p>
      )}
    </Row>
    </Container>
    </section>
  );
      
};

export default RelatedListings;

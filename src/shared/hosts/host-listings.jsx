import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import ItemCard from "../snippets/listing-card";


const HostListings = ({data}) => {

  if(!data && (<Text>Nessun annuncio ancora pubblicato</Text>));
  return (
    <section id="host-data">
      {Array.isArray(data) ? (
        <Row>
          {data.map((item, i) => (
            <Col md={6} key={i}>
             <ItemCard data={item}/>
             </Col>
          ))}
        </Row>
      ) : (
        <Row>Nessun dato</Row>
      )}
    </section>
  );
      
};

export default HostListings;

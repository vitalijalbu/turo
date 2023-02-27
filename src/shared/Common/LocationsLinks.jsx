import React, { useState, useEffect } from "react";
import { Row, Container, Group, Button, Title } from 'reactstrap';
import Cities from "@/data/cities.json";
import Link from 'next/link';


const LocationsLinks = () => {

  return (
    <section id="related-listings" className="section-content">
        <div className="container">
        <div className="section-title">
        <h1>Città in primo piano</h1>
    </div>    
      {Array.isArray(Cities.data) ? (
        <Row>
        <Col md={12}>
          <Group position="apart">
           {Cities.data.map((item, i) => (
            
                    <Link href={'/search?location='+item.slug} passHref>
                    <Button variant="subtle" radius="xl" size="md" className="mt-1" component="a" target="_blank" rel="noopener noreferrer">{item.title}</Button>
    </Link>
            
            ))}
            </Group>
            </Col>
            </Row>

      ) : (
        <Row strong>Nessun dato</Row>
      )}
    </div>
    </section>
  );
      
};

export default LocationsLinks;

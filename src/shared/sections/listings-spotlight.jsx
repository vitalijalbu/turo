import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getSpotlightListings } from "@/lib/graphql/queries/listings";
import { Container, Row, Col, Button } from "reactstrap";
import ItemCard from "@/shared/snippets/listing-card";
import { IconArrowRight } from '@tabler/icons-react';


const SpotlightListings = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    getSpotlightListings()
    .then((data) => {
      setEntries(data?.entries);
      console.log('🐝 API response SPOTLIGHT', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  if (!entries) return <p>Nessun dato</p>;

  return (
    <section id="spotlight-listings" className="padding-vertical">
      <Container>
      <Row>
      <Col>
        <div className="section-head d-flex justify-content-between">
            <h1 className="section-title">Annunci in evidenza</h1>
            <Link href={'/search'}><Button radius={"xl"} rightIcon={<IconArrowRight/>} variant="outline" color="dark">Vedi di più</Button></Link>
          </div>
          </Col>
          </Row>
        <Row>
          {entries.map((item) => (
            <Col md={6} lg={3} xs={6} key={item.id}>
              <ItemCard entries={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SpotlightListings;

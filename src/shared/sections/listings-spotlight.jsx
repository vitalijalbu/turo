import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getSpotlightListings } from "@/lib/graphql/queries/listings";
import { Row, Col, Button } from "reactstrap";
import ItemCard from "@/shared/snippets/listing-card";
import { IconArrowRight } from '@tabler/icons-react';
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

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
      <div className="container">
      <Row>
      <Col>
        <div className="section-head d-flex justify-content-between">
            <Heading className="section-title">Annunci in evidenza</Heading>
            <Link href={'/search'}><Button radius={"xl"} outline color="dark">Vedi di più <IconArrowRight/></Button></Link>
          </div>
          </Col>
          </Row>
        <Row>
          {entries.map((item) => (
            <Col md={6} lg={3} xs={6} key={item.id}>
              <ItemCard data={item}/>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default SpotlightListings;

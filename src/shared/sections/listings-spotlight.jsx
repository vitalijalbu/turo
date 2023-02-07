import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";
import ItemCard from "@/shared/snippets/listing-card";
import graphQLClient from "@/lib/graphql/client";
import { FIND_SPOTLIGHT } from "@/lib/graphql/queries/listings";
import { IconArrowRight } from '@tabler/icons-react';


const SpotlightListings = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);

  /*
 async function getData() {
    try {
      const response = await graphQLClient.request(FIND_SPOTLIGHT);
      console.log('RESPONSE FROM GRAPHQL-REQUEST API CALL', response);
      if (response) {
        setData(response.entries);
      }
    }
    catch (err) {
      console.log('ERROR FROM GRAPHQL-REQUEST API CALL', err);
    }
    finally {
      setLoading(false);
    }
  };
*/
async function getData() {
  try {
    const response = await graphQLClient.request(FIND_SPOTLIGHT);
    if (response) {
      setData(response);
    }
  } catch (err) {
    console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <div strong>Nessun dato</div>;

  return (
    <section id="spotlight-listings" className="padding-vertical">
      <Container size="xl">
      <Row>
        <div className="section-head d-flex">
            <h1 className="section-title">Annunci in evidenza</h1>
            <Link href={'/search'}><Button radius={"xl"} rightIcon={<IconArrowRight/>} variant="outline" color="dark">Vedi di più</Button></Link>
          </div>
          </Row>
        <Row>
          {data.entries.map((item, i) => (
            <Col md={6} lg={3} xs={6}>
              <ItemCard data={item} key={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SpotlightListings;

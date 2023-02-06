import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Group,
  Avatar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Head from "@/shared/account/head";
import { getUserListings } from "@/lib/graphql/queries/user";
import Link from "next/link";
import ListingCard from "@/shared/account/listing-card";

const Listings = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  /* Toggle Item Popup */
  const toggleContactPopup = () => {
    setContactPopup(true);
  };

  useEffect(() => {
    getUserListings().then((res) => {
      setData(res?.entries);
      console.log('entries', res)
    });
  }, []);

  return (
    <div className="page">
      <Head
        title={"I miei annunci"}
        primaryAction={{
          url: "/hosting/create",
          content: "Crea un nuovo annuncio",
        }}
      />
      <Container>
        <Row>
          <Col span={12}>
            <Nav pills>
              <NavItem>
                <NavLink href="#" active>Annunci attivi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Annunci archiviati</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <section id="host-data">
          {Array.isArray(data) ? (
            <Row>
              {data.map((item, i) => (
                <Col md={12} key={i}>
                  <ListingCard data={item} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row>Nessun dato</Row>
          )}
        </section>
      </Container>
    </div>
  );
};

export default Listings;

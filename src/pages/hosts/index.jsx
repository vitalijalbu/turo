import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import graphQLClient from "@/lib/graphql/client";
import { GET_ALL_HOSTS } from "@/lib/graphql/queries/hosts";
import HostCard from "@/shared/sections/host-card";

export async function getStaticProps(context) {
  const data = await graphQLClient.request(GET_ALL_HOSTS);

  return {
    props: { data },
  };
}

const Index = ({ data }) => {
  const [loading, setLoading] = useState(false);

  if (!data) return <Text strong>Nessun dato</Text>;

  return (
    <div className="page">
      <Container size="xl">
        <div className="section-head">
          <h1 className="section-title">Agenzie</h1>
        </div>
        <Row>
          {data.users.map((host, i) => (
            <Col md={6} lg={2} xs={6}>
              <HostCard data={host} key={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Index;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import HostCard from "@/shared/snippets/host-card";
import { getAllHosts } from "@/lib/graphql/queries/hosts";


const Index = () => {
  const [loading, setLoading] = useState(false);
  const [data, setEntries] = useState([]);

  useEffect(() => {
    getAllHosts().then((data) => {
      setEntries(data?.users || []);
      console.log('🐝 API response', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="page">
      <div className="page-content">
      <Container>
        <div className="section-head">
          <h1 className="section-title">Agenzie</h1>
        </div>
        <Row>
          {data.map((host, i) => (
            <Col md={6} lg={2} xs={6}>
              <HostCard data={host} key={i} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Index;

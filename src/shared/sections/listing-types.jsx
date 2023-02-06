import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Link from "next/link";
import graphQLClient from "@/lib/graphql/client";
import { GET_LISTING_TYPES } from "@/lib/graphql/queries/categories";

const ListingTypes = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log("✅ received-categories", data);

  async function getData() {
    try {
      const response = await graphQLClient.request(GET_LISTING_TYPES);
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

    if (!data) return <Text strong>Nessun dato</Text>;
    
  return (
    <section className="section-content">
      <Container size="xl">
        <div className="section-head">
          <h1 className="section-title">Sfoglia annunci</h1>
        </div>

        <Row>
          {data?.categories?.map((type, i) => (
            <Col md={6} lg={4} xs={6} key={i}>
                <div className="card border rounded-3 overflow-hidden">
                  <div className="row g-0 align-items-center">
                    <div className="col-sm-6">
                      <img
                        src={type?.media_url[0]?.url ?? '/img/placeholder.png'}
                        className="card-img rounded-0"
                        alt=""
                      />
                    </div>
                    <div className="col-sm-6">
                      <div className="card-body px-3">
                        <h6 className="card-title">
                          <Link href={`/search/?type=${type.slug}`} className="stretched-link">
                          {type.title}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ListingTypes;

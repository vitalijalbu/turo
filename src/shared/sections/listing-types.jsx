import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Link from "next/link";
import { getAllCategories } from "@/lib/graphql/queries/categories";

const ListingTypes = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

    useEffect(() => {
      getAllCategories()
      .then((data) => {
        setCategories(data?.categories);
        console.log('🐝 API response CATEGORIES', data)
      }).catch((error) => {
        console.log(error);
      });
    }, []);

    if (!categories) return <p>Nessun dato</p>;
    
  return (
    <section className="section-content">
      <Container>
        <div className="section-head">
          <h1 className="section-title">Sfoglia annunci</h1>
        </div>

        <Row>
          {categories?.map((category) => (
            <Col md={6} lg={4} xs={6} key={category.id}>
                <div className="card border rounded-3 overflow-hidden">
                  <div className="row g-0 align-items-center">
                    <div className="col-sm-6">
                      <img
                        src={category?.media_url[0]?.url ?? '/img/placeholder.png'}
                        className="card-img rounded-0"
                        alt=""
                      />
                    </div>
                    <div className="col-sm-6">
                      <div className="card-body px-3">
                        <h6 className="card-title">
                          <Link href={`/search/?category=${category.slug}`} className="stretched-link">
                          {category.title}
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

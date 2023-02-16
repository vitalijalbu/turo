import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Row, Col } from "reactstrap";

const PageActions = (props) => {
  const router = useRouter();
  const { id } = router.query;
  return (
<section className="page-actions">
  <Container>
  
     <Row>
     <Col md={12}>
      <hr/>
            <div className="d-flex justify-content-between">
              <div>
                {props.prevUrl && (
                  <Link href={`/hosting/${id}${props.prevUrl}`}>
                    <Button color="light">
                      Indietro
                  </Button>
                  </Link>
                )}  
                 </div>              
                 <div>              
                {props.nextUrl && (
                  <Link href={`/hosting/${id}${props.nextUrl}`}>
                    <Button color="primary">
                      Continua
                  </Button>
                  </Link>
                )}
              </div>
              </div>

        </Col>
    </Row>
    </Container>
</section>

  );
};

export default PageActions;

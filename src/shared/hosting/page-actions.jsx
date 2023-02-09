import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Container, Row, Col } from "reactstrap";

const PageActions = (props) => {
  //console.log("props", props);
  return (
<section className="page-actions">
  <Container>
  
     <Row>
     <Col md={12}>
      <hr/>
            <div className="d-flex justify-content-between">
              <div>
                {props.backUrl && (
                  <Link href={props.backUrl}>
                    <Button color="light">
                      Indietro
                  </Button>
                  </Link>
                )}  
                 </div>              
                 <div>              
                {props.nextUrl && (
                  <Link href={props.nextUrl}>
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

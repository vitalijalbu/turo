import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Container, Row, Col } from "reactstrap";
import { IconArrowLeft, IconPlus } from '@tabler/icons-react';;

const PageHead = (props) => {
  //console.log("props", props);
  return (
<section className="page-heading">
  <Container>
  
     <Row>
     <Col md={12}>
            <div className="d-flex">
                <div className="flex-grow-1">
                <h1 className="page-title">{props.title}</h1>
                {props.subtitle && (
                  <p>
                    {props.subtitle}
                  </p>
                )}
              </div>
              <div>
                {props.primaryAction && (
                  <Link href={props.primaryAction.url}>
                    <Button color="primary">
                    <IconPlus/> {props.primaryAction.content}
                  </Button>
                  </Link>
                )}
                {props.secondaryAction && (
                  <Button color="default">
                    {props.secondaryAction.content}
                  </Button>
                )}
              </div>
              </div>

        </Col>
    </Row>
    </Container>
</section>

  );
};

export default PageHead;
